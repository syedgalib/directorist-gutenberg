/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

/**
 * Internal dependencies
 */
import aiStarIcon from '@icon/ai-star-alt.svg';
import aiCreditIcon from '@icon/ai-credit.svg';
import { StyledChatPanel, StyledChatToggle } from './style';
import { useSubmissionFields } from '@directorist-gutenberg/gutenberg/hooks/useSubmissionFields';
import { getLocalizedBlockData } from '@directorist-gutenberg/utils/localized-data';
import { useDragPosition } from '@directorist-gutenberg/gutenberg/hooks/useDragPosition';
import { useChatMessages } from '@directorist-gutenberg/gutenberg/hooks/useChatMessages';
import { usePanelPosition } from '@directorist-gutenberg/gutenberg/hooks/usePanelPosition';
import { sanitizeBlocks, createBlocksFromList } from '@directorist-gutenberg/gutenberg/utils/blockUtils';
import { formatChatHistory, getApiUrl, prepareApiData } from '@directorist-gutenberg/gutenberg/utils/aiApi';
import {
	supportedTemplateTypes,
	customFieldsBlocks,
	allSuggestedActions,
} from './AiAssistantChatPanel/constants';
import ChatHeader from './AiAssistantChatPanel/ChatHeader';
import ChatContent from './AiAssistantChatPanel/ChatContent';
import ChatInput from './AiAssistantChatPanel/ChatInput';

export default function AiAssistantChatPanel() {
	const localizedData = getLocalizedBlockData();
	const directoryTypeID = parseInt( localizedData?.directory_type_id ) || 0;
	const templateType = localizedData?.template_type ?? '';
	const waxIntelligentApiBaseUrl = localizedData?.wax_intelligent?.api_base_url ?? '';

	const { getCustomFields } = useSubmissionFields();
	const customFields = getCustomFields();

	const { resetBlocks } = useDispatch( 'core/block-editor' );
	const { getBlocks } = useSelect( ( select ) => select( 'core/block-editor' ) );
	const currentPostId = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostId(), [] );

	// Early return if template type not supported
	if ( ! supportedTemplateTypes.includes( templateType ) ) {
		return null;
	}

	// Prepare available custom fields
	const availableCustomFields = customFields
		.filter( field => customFieldsBlocks.hasOwnProperty( field.type ) )
		.map( field => ( {
			block_name: customFieldsBlocks[ field.type ],
			meta_key: field.field_key,
			label: field.label,
		} ) );

	// Panel state
	const [ isOpen, setIsOpen ] = useState( false );
	const [ inputValue, setInputValue ] = useState( '' );
	const [ isSending, setIsSending ] = useState( false );
	const [ isGenerating, setIsGenerating ] = useState( false );

	// Button drag hook
	const defaultButtonX = typeof window !== 'undefined' ? window.innerWidth - 48 - 24 : 0;
	const defaultButtonY = typeof window !== 'undefined' ? window.innerHeight - 48 - 24 : 0;
	const {
		position: buttonPosition,
		isDragging: isDraggingButton,
		elementRef: buttonRef,
		handleMouseDown: handleButtonMouseDown,
	} = useDragPosition( {
		defaultX: defaultButtonX,
		defaultY: defaultButtonY,
		elementWidth: 48,
		elementHeight: 48,
	} );

	// Track if button was dragged to prevent toggle after drag
	const buttonDragStartPosition = useRef( null );
	const hasButtonDragged = useRef( false );

	// Panel drag hook
	const {
		position: panelPosition,
		setPosition: setPanelPosition,
		isDragging: isDraggingPanel,
		elementRef: panelRef,
		handleMouseDown: handlePanelMouseDownBase,
		resetPosition: resetPanelPosition,
	} = useDragPosition( {
		defaultX: null,
		defaultY: null,
		elementWidth: 420,
		elementHeight: 500,
	} );

	// Chat messages hook
	const {
		messages,
		addMessage,
		removeMessage,
		isLoading,
		isFetchingMore,
		hasMore,
		chatContentRef,
		handleScroll,
		storeMessage,
		scrollToBottom,
	} = useChatMessages( currentPostId, isOpen );

	// Panel position style
	const panelStyle = usePanelPosition( isOpen, panelPosition );

	// Panel drag handler with header check
	const handlePanelMouseDown = ( e ) => {
		const target = e.target;
		const header = e.currentTarget;

		// Don't drag if clicking on buttons or other interactive elements
		if ( target.closest( 'button' ) || target.closest( 'textarea' ) || target.closest( 'input' ) || target.closest( 'a' ) ) {
			return;
		}

		// Only allow dragging from the header element itself
		if ( target !== header && ! header.contains( target ) ) {
			return;
		}

		handlePanelMouseDownBase( e );
	};

	// Track button drag start
	const handleButtonMouseDownWithTracking = ( e ) => {
		buttonDragStartPosition.current = { ...buttonPosition };
		hasButtonDragged.current = false;
		handleButtonMouseDown( e );
	};

	// Track button drag end and movement
	useEffect( () => {
		if ( ! isDraggingButton && buttonDragStartPosition.current !== null ) {
			// Check if position changed during drag
			if (
				buttonPosition.x !== buttonDragStartPosition.current.x ||
				buttonPosition.y !== buttonDragStartPosition.current.y
			) {
				hasButtonDragged.current = true;
			}
			// Reset after a short delay to allow onClick to check
			const timeoutId = setTimeout( () => {
				buttonDragStartPosition.current = null;
				hasButtonDragged.current = false;
			}, 100 );
			return () => clearTimeout( timeoutId );
		}
	}, [ isDraggingButton, buttonPosition ] );

	// Toggle panel
	const togglePanel = ( e ) => {
		if ( isDraggingButton || isDraggingPanel || hasButtonDragged.current ) {
			return;
		}

		if ( isOpen ) {
			resetPanelPosition();
		}

		setIsOpen( ! isOpen );
	};

	// Listen for toggle events from AiAssistantToggle button
	useEffect( () => {
		const handleToggleEvent = () => {
			setIsOpen( ( prev ) => ! prev );
		};

		window.addEventListener( 'directorist-ai-assistant-toggle', handleToggleEvent );

		return () => {
			window.removeEventListener( 'directorist-ai-assistant-toggle', handleToggleEvent );
		};
	}, [] );

	// Scroll to bottom when AI starts generating
	useEffect( () => {
		if ( isOpen && isGenerating ) {
			setTimeout( () => scrollToBottom(), 100 );
		}
	}, [ isGenerating, isOpen ] );

	// Generate AI response
	const generateResponse = async ( instruction ) => {
		setIsGenerating( true );

		try {
			const apiURL = getApiUrl( templateType, waxIntelligentApiBaseUrl );
			const currentBlocks = sanitizeBlocks( getBlocks() );
			const history = formatChatHistory( messages ).slice( 0, 10 );

			const apiData = prepareApiData( {
				templateType,
				instruction,
				currentTemplate: JSON.stringify( currentBlocks ),
				directoryTypeId: directoryTypeID,
				templateId: currentPostId,
				history,
				availableCustomFields,
			} );

			const response = await fetch( apiURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify( apiData ),
			} );

			if ( ! response.ok ) {
				const errorText = await response.text();
				throw new Error( errorText || __( 'API generation failed', 'directorist-gutenberg' ) );
			}

			const data = await response.json();
			const blockList = data?.template;
			let assistantMessage = data?.message || __( 'Here is your updated design.', 'directorist-gutenberg' );

			if ( ! blockList ) {
				console.warn( 'No template content returned from the AI Assistant API.' );
				if ( assistantMessage ) {
					await storeMessage( 'assistant', assistantMessage );
					addMessage( { id: Date.now(), role: 'assistant', message: assistantMessage } );
					setTimeout( () => scrollToBottom(), 100 );
				}
				return;
			}

			// Store assistant response
			await storeMessage( 'assistant', assistantMessage );
			addMessage( { id: Date.now(), role: 'assistant', message: assistantMessage } );
			setTimeout( () => scrollToBottom(), 100 );

			// Apply template
			applyTemplate( blockList );
		} catch ( error ) {
			console.error( 'Error generating response:', error );

			// Add error message to chat
			const errorMessage = error.message || __( 'Something went wrong. Please try again.', 'directorist-gutenberg' );
			const errorId = Date.now();
			addMessage( {
				id: errorId,
				role: 'assistant',
				message: errorMessage,
				isError: true,
				retryAction: () => {
					removeMessage( errorId );
					generateResponse( instruction );
				},
			} );
			setTimeout( () => scrollToBottom(), 100 );
		} finally {
			setIsGenerating( false );
		}
	};

	// Apply template to editor
	const applyTemplate = ( blockList ) => {
		try {
			resetBlocks( createBlocksFromList( blockList ) );
		} catch ( parseError ) {
			console.error( 'Unable to replace blocks with AI template', parseError );
		}
	};

	// Handle send message
	const handleSendMessage = async () => {
		if ( ! inputValue.trim() ) return;

		const userMessage = inputValue;
		setInputValue( '' );
		setIsSending( true );
		// setRetryAction( null );

		// Optimistically add user message
		const tempId = Date.now();
		const optimisticMessage = { id: tempId, role: 'user', message: userMessage };
		addMessage( optimisticMessage );

		setTimeout( () => scrollToBottom(), 50 );

		try {
			await storeMessage( 'user', userMessage );
			await generateResponse( userMessage );
		} catch ( error ) {
			console.error( 'Error sending message:', error );

			// Remove optimistic message
			removeMessage( tempId );

			// Add error message to chat
			const errorMessage = error.message || __( 'Failed to send message. Please try again.', 'directorist-gutenberg' );
			const errorId = Date.now();
			addMessage( {
				id: errorId,
				role: 'assistant',
				message: errorMessage,
				isError: true,
				retryAction: () => {
					removeMessage( errorId );
					setInputValue( userMessage );
					handleSendMessage();
				},
			} );
			setTimeout( () => scrollToBottom(), 100 );

			// Restore input value
			setInputValue( userMessage );
		} finally {
			setIsSending( false );
		}
	};

	// Handle suggestion click
	const handleSuggestionClick = ( label ) => {
		setInputValue( label );
	};

	// Get suggested actions for current template type
	const suggestedActions = allSuggestedActions[ templateType ] || [];

	// Calculate button style
	const buttonStyle = buttonPosition.x !== null && buttonPosition.y !== null
		? { left: `${ buttonPosition.x }px`, top: `${ buttonPosition.y }px`, right: 'auto', bottom: 'auto' }
		: {};

	return (
		<>
			{/* Chat toggle button */}
			{ ! isOpen && (
				<StyledChatToggle ref={ buttonRef } style={ buttonStyle }>
					<Button
						className="directorist-gutenberg-ai-assistant-chat-toggle"
						onClick={ togglePanel }
						onMouseDown={ handleButtonMouseDownWithTracking }
						aria-label={ __( 'Open AI Assistant', 'directorist-gutenberg' ) }
					>
						<ReactSVG width={ 24 } height={ 24 } src={ aiStarIcon } />
					</Button>
				</StyledChatToggle>
			) }

			{/* Chat panel */}
			{ isOpen && (
				<StyledChatPanel
					ref={ panelRef }
					className="directorist-gutenberg-ai-assistant-chat-panel"
					style={ panelStyle }
				>
					<div className="directorist-gutenberg-ai-assistant-chat-panel-content">
						<ChatHeader
							onClose={ togglePanel }
							onMouseDown={ handlePanelMouseDown }
							isDragging={ isDraggingPanel }
						/>

						<ChatContent
							isLoading={ isLoading }
							messages={ messages }
							isSending={ isSending }
							isGenerating={ isGenerating }
							suggestedActions={ suggestedActions }
							onSuggestionClick={ handleSuggestionClick }
							chatContentRef={ chatContentRef }
							onScroll={ handleScroll }
							isFetchingMore={ isFetchingMore }
						/>

						<ChatInput
							inputValue={ inputValue }
							setInputValue={ setInputValue }
							onSend={ handleSendMessage }
							isSending={ isSending }
							isGenerating={ isGenerating }
						/>

						{/* Footer */}
						<div className="directorist-gutenberg-ai-assistant-chat-footer">
							<span className="directorist-gutenberg-ai-assistant-chat-footer-text">
								{ __( 'Generation:', 'directorist-gutenberg' ) }
							</span>
							<span className="directorist-gutenberg-ai-assistant-chat-footer-credits">
								<ReactSVG width={ 16 } height={ 16 } src={ aiCreditIcon } />
								<span>0 { __( 'credits', 'directorist-gutenberg' ) }</span>
							</span>
						</div>
					</div>
				</StyledChatPanel>
			) }
		</>
	);
}
