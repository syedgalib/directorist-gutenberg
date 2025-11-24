/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Template ID Handler Component
 * Handles setting template_id from current post ID
 *
 * @param {Object} props - Component props
 * @param {Function} props.setAttributes - Function to set block attributes
 */
export default function TemplateIdHandler( { setAttributes } ) {
	const templateID = useSelect( ( select ) => {
		return select( 'core/editor' ).getCurrentPostId();
	}, [] );

	useEffect( () => {
		if ( templateID ) {
			setAttributes( { template_id: templateID } );
		}
	}, [ templateID, setAttributes ] );

	return null; // This component doesn't render anything
}

