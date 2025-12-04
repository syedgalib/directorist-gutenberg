/**
 * WordPress dependencies
 */
import { Button, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

/**
 * Internal dependencies
 */
import assistantIcon from '@icon/ai-feel.svg';
import cube from '@icon/cube.svg';
import gridIcon from '@icon/grid-bar.svg';
import documentIcon from '@icon/document-text.svg';
import star from '@icon/star.svg';

/**
 * Renders the icon for a suggested action
 *
 * @param {string} icon Icon name
 * @returns {JSX.Element} Icon component
 */
function SuggestionIcon( { icon } ) {
	const iconMap = {
		cube: cube,
		grid: gridIcon,
		document: documentIcon,
		star: star,
	};

	const IconSrc = iconMap[ icon ] || star;

	return (
		<span className="directorist-gutenberg-ai-assistant-chat-suggestion-icon">
			<ReactSVG width={ 20 } height={ 20 } src={ IconSrc } />
		</span>
	);
}

/**
 * Renders greeting section when no messages
 *
 * @param {Array} suggestedActions Suggested actions to display
 * @param {Function} onSuggestionClick Callback when suggestion is clicked
 * @returns {JSX.Element} Greeting section
 */
function GreetingSection( { suggestedActions, onSuggestionClick } ) {
	return (
		<>
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

			<div className="directorist-gutenberg-ai-assistant-chat-suggestions">
				{ suggestedActions.map( ( action ) => (
					<span
						key={ action.id }
						className="directorist-gutenberg-ai-assistant-chat-suggestion-button"
						onClick={ () => onSuggestionClick( action.label ) }
					>
						<SuggestionIcon icon={ action.icon } />
						<span className="directorist-gutenberg-ai-assistant-chat-suggestion-label">
							{ action.label }
						</span>
					</span>
				) ) }
			</div>
		</>
	);
}

/**
 * Renders conversation messages
 *
 * @param {Array} messages Array of message objects
 * @param {boolean} isSending Whether a message is being sent
 * @param {boolean} isGenerating Whether AI is generating response
 * @returns {JSX.Element} Conversation area
 */
function ConversationArea( { messages, isSending, isGenerating } ) {
	return (
		<div className="directorist-gutenberg-ai-assistant-chat-conversation-area">
			{ messages.map( ( msg ) => (
				<div
					key={ msg.id }
					className={ `directorist-gutenberg-ai-assistant-chat-conversation-area-item directorist-gutenberg-ai-assistant-chat-${ msg.role }-message ${ msg.isError ? 'directorist-gutenberg-ai-assistant-chat-error-message' : '' }` }
				>
					{ msg.role === 'assistant' && (
						<div className="directorist-gutenberg-ai-assistant-chat-icon">
							<ReactSVG width={ 20 } height={ 20 } src={ assistantIcon } />
						</div>
					) }
					<div className="directorist-gutenberg-ai-assistant-chat-text">
						<span className="directorist-gutenberg-ai-assistant-chat-text-role">
							{ msg.role === 'assistant' ? 'Ai Assistant' : '' }
						</span>
						<span className="directorist-gutenberg-ai-assistant-chat-text-content">
							{ msg.isError ? __( 'I could not process your request, please try again.', 'directorist-gutenberg' ) : msg.message }
						</span>
						{ msg.isError && msg.retryAction && (
							<div className="directorist-gutenberg-ai-assistant-chat-error-actions">
								<Button variant="secondary" onClick={ msg.retryAction } size="small">
									{ __( 'Try Again', 'directorist-gutenberg' ) }
								</Button>
							</div>
						) }
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
		</div>
	);
}

/**
 * Chat content component
 *
 * @param {Object} props Component props
 * @returns {JSX.Element} Chat content
 */
export default function ChatContent( {
	isLoading,
	messages,
	isSending,
	isGenerating,
	suggestedActions,
	onSuggestionClick,
	chatContentRef,
	onScroll,
	isFetchingMore,
} ) {
	if ( isLoading ) {
		return (
			<div className="directorist-gutenberg-ai-assistant-chat-loader">
				<Spinner />
			</div>
		);
	}

	return (
		<div
			className="directorist-gutenberg-ai-assistant-chat-content"
			onScroll={ onScroll }
			ref={ chatContentRef }
		>
			{ isFetchingMore && (
				<div className="directorist-gutenberg-ai-assistant-chat-loader-more">
					<Spinner />
				</div>
			) }

			{ messages.length === 0 ? (
				<GreetingSection
					suggestedActions={ suggestedActions }
					onSuggestionClick={ onSuggestionClick }
				/>
			) : (
				<ConversationArea
					messages={ messages }
					isSending={ isSending }
					isGenerating={ isGenerating }
				/>
			) }
		</div>
	);
}

