/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

/**
 * Internal dependencies
 */
import closeIcon from '@icon/times.svg';
import minusIcon from '@icon/minus.svg';

/**
 * Chat header component
 *
 * @param {Object} props Component props
 * @param {Function} props.onClose Close panel callback
 * @param {Function} props.onMouseDown Mouse down handler for dragging
 * @param {boolean} props.isDragging Whether panel is being dragged
 * @returns {JSX.Element} Chat header component
 */
export default function ChatHeader( { onClose, onMouseDown, isDragging } ) {
	return (
		<div
			className="directorist-gutenberg-ai-assistant-chat-header"
			onMouseDown={ onMouseDown }
			style={ { cursor: isDragging ? 'grabbing' : 'move' } }
		>
			<div className="directorist-gutenberg-ai-assistant-chat-header-left">
				<Button
					className="directorist-gutenberg-ai-assistant-chat-close"
					onClick={ onClose }
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
				onClick={ onClose }
				aria-label={ __( 'Minimize', 'directorist-gutenberg' ) }
			>
				<ReactSVG width={ 16 } height={ 16 } src={ minusIcon } />
			</Button>
		</div>
	);
}

