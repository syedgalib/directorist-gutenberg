/**
 * WordPress dependencies
 */
import { Button, TextareaControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

/**
 * Internal dependencies
 */
import arrowRightIcon from '@icon/arrow-right.svg';

/**
 * Chat input component
 *
 * @param {Object} props Component props
 * @param {string} props.inputValue Current input value
 * @param {Function} props.setInputValue Set input value callback
 * @param {Function} props.onSend Send message callback
 * @param {boolean} props.isSending Whether message is being sent
 * @param {boolean} props.isGenerating Whether AI is generating response
 * @returns {JSX.Element} Chat input component
 */
export default function ChatInput( {
	inputValue,
	setInputValue,
	onSend,
	isSending,
	isGenerating,
} ) {
	const handleKeyDown = ( event ) => {
		if ( event.key === 'Enter' && ! event.shiftKey ) {
			event.preventDefault();
			onSend();
		}
	};

	return (
		<div className="directorist-gutenberg-ai-assistant-chat-input-wrapper">
			<TextareaControl
				className="directorist-gutenberg-ai-assistant-chat-input"
				value={ inputValue }
				onChange={ setInputValue }
				placeholder={ __( 'Ask for changes', 'directorist-gutenberg' ) }
				rows={ 3 }
				onKeyDown={ handleKeyDown }
			/>
			<div className="directorist-gutenberg-ai-assistant-chat-input-actions">
				<Button
					className="directorist-gutenberg-ai-assistant-chat-send"
					aria-label={ __( 'Send', 'directorist-gutenberg' ) }
					onClick={ onSend }
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
	);
}

