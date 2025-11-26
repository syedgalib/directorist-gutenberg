/**
 * WordPress dependencies
 */
import { Button, TextareaControl, Spinner } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { parse } from '@wordpress/blocks';
import apiFetch from '@wordpress/api-fetch';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

/**
 * Internal dependencies
 */
import aiStarIcon from '@icon/ai-star-alt.svg';
import assistantIcon from '@icon/ai-feel.svg';
import closeIcon from '@icon/times.svg';
import arrowRightIcon from '@icon/arrow-right.svg';
import { StyledChatPanel } from './style';
import cube from '@icon/cube.svg';
import gridIcon from '@icon/grid-bar.svg';
import documentIcon from '@icon/document-text.svg';
import star from '@icon/star.svg';
import minusIcon from '@icon/minus.svg';
import aiCreditIcon from '@icon/ai-credit.svg';
import { useSubmissionFields } from '@directorist-gutenberg/gutenberg/hooks/useSubmissionFields';
import { getLocalizedBlockData, getLocalizedBlockDataByKey } from '@directorist-gutenberg/gutenberg/localized-data';

export default function AiAssistantChatPanel() {
    const localizedData            = getLocalizedBlockData();
    const directoryTypeID          = parseInt( localizedData?.directory_type_id ) || 0;
    const templateType             = localizedData?.template_type ?? '';
    const waxIntelligentApiBaseUrl = localizedData?.wax_intelligent?.api_base_url ?? '';

    const { getCustomFields } = useSubmissionFields();
    const customFields = getCustomFields();

    const customFieldsBlocks = {
        'checkbox': 'listing-card-custom-text',
        'date': 'listing-card-custom-date',
        'number': 'listing-card-custom-number',
        'radio': 'listing-card-custom-radio',
        'select': 'listing-card-custom-select',
        'text': 'listing-card-custom-text',
        'textarea': 'listing-card-custom-textarea',
        'time': 'listing-card-custom-time',
        'url': 'listing-card-custom-url',
    };

    const availableCustomFields = customFields
        .filter( field => customFieldsBlocks.hasOwnProperty( field.type ) )
        .map( field => {
            return {
                block: customFieldsBlocks[field.type],
                meta_key: field.field_key,
                label: field.label,
            };
    } );

    const supportedTemplateTypes = [
        'listings-archive',
        'listings-archive-grid-view',
        'listings-archive-list-view',
    ];

    if ( ! supportedTemplateTypes.includes( templateType ) ) {
        return null;
    }

	const [ isOpen, setIsOpen ] = useState( false );
	const [ inputValue, setInputValue ] = useState( '' );
    const [ messages, setMessages ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ isSending, setIsSending ] = useState( false );
    const [ isGenerating, setIsGenerating ] = useState( false );
    const [ retryAction, setRetryAction ] = useState( null );

    // Pagination state
    const [ page, setPage ] = useState( 1 );
    const [ hasMore, setHasMore ] = useState( true );
    const [ isFetchingMore, setIsFetchingMore ] = useState( false );

    const messagesEndRef = useRef( null );
    const chatContentRef = useRef( null );
    const prevScrollHeightRef = useRef( 0 );

    const { editPost } = useDispatch( 'core/editor' );
    const { resetBlocks } = useDispatch( 'core/block-editor' );
    const currentContent = useSelect( ( select ) => select( 'core/editor' ).getEditedPostContent(), [] );
    const currentPostId = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostId(), [] );

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll to bottom on new message (if user was near bottom)
    useEffect( () => {
        if ( isOpen && ! isFetchingMore && page === 1 ) {
            scrollToBottom();
        }
    }, [ messages, isOpen ] );

    useEffect( () => {
        if ( isOpen && currentPostId ) {
            // Reset pagination on open
            setMessages( [] );
            setPage( 1 );
            setHasMore( true );
            fetchMessages( 1 );
        }
    }, [ isOpen, currentPostId ] );

    const fetchMessages = async ( pageNum = 1 ) => {
        const isFirstPage = pageNum === 1;
        if ( isFirstPage ) {
            setIsLoading( true );
        } else {
            setIsFetchingMore( true );
        }

        try {
            const response = await apiFetch( {
                path: `/directorist-gutenberg/admin/templates/${ currentPostId }/ai-chats?page=${ pageNum }&per_page=10`,
                method: 'GET',
            } );

            if ( response && response.items ) {
                const newMessages = response.items.reverse(); // Oldest first

                setMessages( prev => isFirstPage ? newMessages : [ ...newMessages, ...prev ] );
                setHasMore( pageNum * 10 < response.total ); // Check if we have more pages
            }
        } catch ( error ) {
            console.error( 'Error fetching messages:', error );
        } finally {
            if ( isFirstPage ) {
                setIsLoading( false );
                // Scroll to bottom after initial load
                setTimeout( scrollToBottom, 100 );
            } else {
                setIsFetchingMore( false );
                // Restore scroll position
                if ( chatContentRef.current ) {
                    const newScrollHeight = chatContentRef.current.scrollHeight;
                    const scrollDiff = newScrollHeight - prevScrollHeightRef.current;
                    chatContentRef.current.scrollTop = scrollDiff;
                }
            }
        }
    };

    const handleScroll = ( e ) => {
        const scrollElement = chatContentRef.current || e.target;
        if ( scrollElement && scrollElement.scrollTop <= 5 && hasMore && ! isFetchingMore && ! isLoading ) {
            prevScrollHeightRef.current = scrollElement.scrollHeight;
            const nextPage = page + 1;
            setPage( nextPage );
            fetchMessages( nextPage );
        }
    };

	const togglePanel = () => {
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


    const suggestedActionsArchiveListItem = [
        {
			id: 'hover-shadow',
			label: __( 'Add subtle hover shadow', 'directorist-gutenberg' ),
			icon: 'cube',
		},
		{
			id: 'cards-per-row',
			label: __( 'Make cards 3 per row with rounded corners', 'directorist-gutenberg' ),
			icon: 'grid',
		},
		{
			id: 'title-on-hover',
			label: __( 'Show listing titles on hover', 'directorist-gutenberg' ),
			icon: 'document',
		},
		{
			id: 'price-above-rating',
			label: __( 'Move price above rating', 'directorist-gutenberg' ),
			icon: 'star',
		},
    ];

    const allSuggestedActions = {
        'listings-archive': [
            {
                id: 'add-search-form',
                label: __( 'Add search form', 'directorist-gutenberg' ),
                icon: 'star',
            },
            {
                id: 'add-listing-filters',
                label: __( 'Add listing filters', 'directorist-gutenberg' ),
                icon: 'star',
            },
            {
                id: 'make-3-columns-per-row',
                label: __( 'Make 3 columns per row', 'directorist-gutenberg' ),
                icon: 'star',
            },
        ],
        'listings-archive-grid-view': suggestedActionsArchiveListItem,
        'listings-archive-list-view': suggestedActionsArchiveListItem,
    };

    const suggestedActions = allSuggestedActions[ templateType ];

    const storeMessage = async ( role, message, template = null ) => {
        const data = {
            role,
            message,
        };

        if ( template ) {
            data.template = template;
        }

        return await apiFetch( {
            path: `/directorist-gutenberg/admin/templates/${ currentPostId }/ai-chats`,
            method: 'POST',
            data: data
        } );
    };

    const handleSendMessage = async () => {
        if ( ! inputValue.trim() ) return;

        const userMessage = inputValue;
        setInputValue( '' );
        setIsSending( true );
        setRetryAction( null );

        // Optimistically add user message
        const tempId = Date.now();
        const optimisticMessage = { id: tempId, role: 'user', message: userMessage };
        setMessages( prev => [ ...prev, optimisticMessage ] );

        try {
            // 1. Store user message
            await storeMessage( 'user', userMessage, currentContent );

            // 2. Call Intelligent API
            await generateResponse( userMessage );

            setRetryAction( null );
        } catch ( error ) {
            console.error( 'Error sending message:', error );
            setMessages( prev => prev.filter( m => m.id !== tempId ) ); // Remove optimistic message on failure
            setInputValue( userMessage ); // Restore input
            setRetryAction( () => handleSendMessage );
        } finally {
            setIsSending( false );
        }
    };

    const generateResponse = async ( instruction ) => {
        setIsGenerating( true );
        try {
            const baseAPIURL = `${waxIntelligentApiBaseUrl}/directorist/template/gutenberg/generate`;
            const listingsArchiveItemAPIURL = `${baseAPIURL}/listings-archive-item`;

            const apiURLs = {
                'listings-archive': `${baseAPIURL}/listings-archive`,
                'listings-archive-grid-view': listingsArchiveItemAPIURL,
                'listings-archive-list-view': listingsArchiveItemAPIURL,
            };

            const apiURL = apiURLs[templateType];

            const apiData = {
                template_type: templateType,
                instruction: instruction,
                current_template: currentContent,
            };

            const listingsArchiveItemViews = [ 'listings-archive-grid-view', 'listings-archive-list-view' ];

            if ( listingsArchiveItemViews.includes( templateType ) ) {
                apiData.directory_type_id = directoryTypeID;
                apiData.available_custom_fields = availableCustomFields;
                apiData.view_type = templateType === 'listings-archive-grid-view' ? 'grid_view' : 'list_view';
            }

            // Format history for API
            const history = messages.map( msg => ( {
                role: msg.role,
                message: msg.message,
            } ) );

            apiData.history = history;

            const response = await fetch( apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( apiData ),
            } );

            if ( ! response.ok ) {
                throw new Error( 'API generation failed' );
            }

            const data = await response.json();
            let templateContent = data?.template;
            let assistantMessage = data?.message || __( 'Here is your updated design.', 'directorist-gutenberg' );

            if ( ! templateContent ) {
                console.warn( 'No template content returned from the AI Assistant API.' );
                 // Fallback if only message returned
                 if( assistantMessage ) {
                     await storeMessage('assistant', assistantMessage);
                     setMessages( prev => [ ...prev, { id: Date.now(), role: 'assistant', message: assistantMessage } ] );
                 }
                return;
            }

            // 3. Store assistant response
            await storeMessage( 'assistant', assistantMessage, templateContent );
            setMessages( prev => [ ...prev, { id: Date.now(), role: 'assistant', message: assistantMessage, template: templateContent } ] );

            // 4. Apply template
            applyTemplate( templateContent );

        } catch ( error ) {
            console.error( 'Error generating response:', error );
             setRetryAction( () => () => generateResponse( instruction ) );
        } finally {
            setIsGenerating( false );
        }
    };

    const applyTemplate = ( templateContent ) => {
        try {
            // Clean up template content
            const cleanContent = templateContent
                .replace( /\\"/g, '"' )
                .replace( /\\n/g, '\n' )
                .replace( /\\\\/g, '\\' );

            const parsedBlocks = parse( cleanContent ) || [];

            if ( parsedBlocks.length > 0 ) {
                resetBlocks( parsedBlocks );
            }
        } catch ( parseError ) {
            console.error( 'Unable to replace blocks with AI template', parseError );
            alert( __( 'Unable to replace blocks with AI template', 'directorist-gutenberg' ) );
        }
    };

	return (
		<StyledChatPanel className="directorist-gutenberg-ai-assistant-chat-panel">
			{ ! isOpen && (
				<Button
					className="directorist-gutenberg-ai-assistant-chat-toggle"
					onClick={ togglePanel }
					aria-label={ __( 'Open AI Assistant', 'directorist-gutenberg' ) }
				>
					<ReactSVG width={ 24 } height={ 24 } src={ aiStarIcon } />
				</Button>
			) }

			{ isOpen && (
				<div className="directorist-gutenberg-ai-assistant-chat-panel-content">
                    {/* Header */}
                    <div className="directorist-gutenberg-ai-assistant-chat-header">
                        <div className="directorist-gutenberg-ai-assistant-chat-header-left">
                            <Button
                                className="directorist-gutenberg-ai-assistant-chat-close"
                                onClick={ togglePanel }
                                aria-label={ __( 'Close', 'directorist-gutenberg' ) }
                            >
                                <ReactSVG width={ 16 } height={ 16 } src={ closeIcon } />
                            </Button>
                            <h3 className="directorist-gutenberg-ai-assistant-chat-title">
                                { __( 'AI Assistant', 'directorist-gutenberg' ) }
                            </h3>
                        </div>
                        <Button
                            className="directorist-gutenberg-ai-assistant-chat-minimize"
                            onClick={ togglePanel }
                            aria-label={ __( 'Minimize', 'directorist-gutenberg' ) }
                        >
                            <ReactSVG width={ 16 } height={ 16 } src={ minusIcon } />
                        </Button>
                    </div>
					<div
                        className="directorist-gutenberg-ai-assistant-chat-content"
                        onScroll={ handleScroll }
                        ref={ chatContentRef }
                    >

                        { isLoading ? (
                            <div className="directorist-gutenberg-ai-assistant-chat-loader">
                                <Spinner />
                            </div>
                        ) : (
                            <>
                                { messages.length === 0 ? (
                                    <>
                                        {/* Greeting Section */}
                                        <div className="directorist-gutenberg-ai-assistant-chat-greeting">
                                            <div className="directorist-gutenberg-ai-assistant-chat-greeting-icon">
                                                <ReactSVG width={ 48 } height={ 48 } src={ assistantIcon } />
                                            </div>
                                            <div className="directorist-gutenberg-ai-assistant-chat-greeting-text">
                                                <h4 className="directorist-gutenberg-ai-assistant-chat-greeting-title">
                                                    { __( "Hi, I'm your AI Design Assistant", 'directorist-gutenberg' ) }
                                                </h4>
                                                <p className="directorist-gutenberg-ai-assistant-chat-greeting-description">
                                                    { __( 'Tell me what you want your All Listings to look. You can attach a screenshot for vives.', 'directorist-gutenberg' ) }
                                                </p>
                                            </div>
                                        </div>

                                        {/* Suggested Actions */}
                                        <div className="directorist-gutenberg-ai-assistant-chat-suggestions">
                                            { suggestedActions.map( ( action ) => (
                                                <span
                                                    key={ action.id }
                                                    className="directorist-gutenberg-ai-assistant-chat-suggestion-button"
                                                    onClick={ () => {
                                                        setInputValue( action.label );
                                                    } }
                                                >
                                                    <span className="directorist-gutenberg-ai-assistant-chat-suggestion-icon">
                                                        { action.icon === 'cube' && (
                                                            <ReactSVG width={ 20 } height={ 20 } src={ cube } />
                                                        ) }
                                                        { action.icon === 'grid' && (
                                                            <ReactSVG width={ 20 } height={ 20 } src={ gridIcon } />
                                                        ) }
                                                        { action.icon === 'document' && (
                                                            <ReactSVG width={ 20 } height={ 20 } src={ documentIcon } />
                                                        ) }
                                                        { action.icon === 'star' && (
                                                            <ReactSVG width={ 20 } height={ 20 } src={ star } />
                                                        ) }
                                                    </span>
                                                    <span className="directorist-gutenberg-ai-assistant-chat-suggestion-label">
                                                        { action.label }
                                                    </span>
                                                </span>
                                            ) ) }
                                        </div>
                                    </>
                                ) : (
                                    /* Conversation Area */
                                    <div
                                        className="directorist-gutenberg-ai-assistant-chat-conversation-area"
                                    >
                                        { isFetchingMore && (
                                            <div className="directorist-gutenberg-ai-assistant-chat-loader-more">
                                                <Spinner />
                                            </div>
                                        ) }

                                        { messages.map( ( msg ) => (
                                            <div key={ msg.id } className={`directorist-gutenberg-ai-assistant-chat-conversation-area-item directorist-gutenberg-ai-assistant-chat-${msg.role}-message`}>
                                                    { msg.role === 'assistant' ? (
                                                    <div className="directorist-gutenberg-ai-assistant-chat-icon">
                                                        <ReactSVG width={ 20 } height={ 20 } src={ assistantIcon } />
                                                    </div>
                                                    ) : (
                                                        ''
                                                    ) }
                                                <div className="directorist-gutenberg-ai-assistant-chat-text">
                                                    <span className="directorist-gutenberg-ai-assistant-chat-text-role">
                                                        { msg.role === 'assistant' ? 'Ai Assistant' : '' }
                                                    </span>
                                                    <span className="directorist-gutenberg-ai-assistant-chat-text-content">
                                                        { msg.message }
                                                    </span>
                                                </div>
                                            </div>
                                        ) ) }

                                        { ( isSending || isGenerating ) && (
                                            <div className="directorist-gutenberg-ai-assistant-chat-conversation-area-item">
                                                 <div className="directorist-gutenberg-ai-assistant-chat-icon">
                                                    <ReactSVG width={ 20 } height={ 20 } src={ assistantIcon } />
                                                </div>
                                                 <div className="directorist-gutenberg-ai-assistant-chat-text">
                                                     <span className="directorist-gutenberg-ai-assistant-chat-text-role">Ai Assistant</span>
                                                    <div className="directorist-gutenberg-ai-assistant-typing-indicator">
                                                        <span></span><span></span><span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) }

                                        { retryAction && (
                                            <div className="directorist-gutenberg-ai-assistant-chat-retry">
                                                <p>{ __( 'Something went wrong.', 'directorist-gutenberg' ) }</p>
                                                <Button variant='secondary' onClick={ retryAction }>
                                                    { __( 'Retry', 'directorist-gutenberg' ) }
                                                </Button>
                                            </div>
                                        ) }
                                        <div ref={ messagesEndRef } />
                                    </div>
                                ) }
                            </>
                        ) }
                    </div>

					{/* Input Field */}
					<div className="directorist-gutenberg-ai-assistant-chat-input-wrapper">
						<TextareaControl
							className="directorist-gutenberg-ai-assistant-chat-input"
							value={ inputValue }
							onChange={ setInputValue }
							placeholder={ __( 'Ask for changes', 'directorist-gutenberg' ) }
							rows={ 3 }
                            onKeyDown={ ( event ) => {
                                if ( event.key === 'Enter' && ! event.shiftKey ) {
                                    event.preventDefault();
                                    handleSendMessage();
                                }
                            } }
						/>
						<div className="directorist-gutenberg-ai-assistant-chat-input-actions">
							<Button
								className="directorist-gutenberg-ai-assistant-chat-send"
								aria-label={ __( 'Send', 'directorist-gutenberg' ) }
								onClick={ handleSendMessage }
								disabled={ ! inputValue.trim() || isSending || isGenerating }
							>
                                { ( isSending || isGenerating ) ? (
                                    <Spinner />
                                ) : (
								    <ReactSVG width={ 20 } height={ 20 } src={ arrowRightIcon } />
                                ) }
							</Button>
						</div>
					</div>

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
			) }
		</StyledChatPanel>
	);
}
