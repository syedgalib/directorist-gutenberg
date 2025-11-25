/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Default View Select Component
 * Handles SelectControl for default_view with post meta sync
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Field label
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.setAttributes - Function to set block attributes
 * @param {Array} props.options - Select options
 */
export default function DefaultViewSelect( {
	label,
	attributes,
	setAttributes,
	options,
} ) {
	// Get default_view from block attributes (preferred) or post meta (fallback)
	const { defaultView } = useSelect(
		( select ) => {
			// First try to get from block attributes
			if ( attributes?.default_view ) {
				return {
					defaultView: attributes.default_view,
				};
			}
			// Fallback to post meta
			const meta =
				select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
			return {
				defaultView: meta.default_view || 'grid',
			};
		},
		[ attributes?.default_view ]
	);

	const { editPost } = useDispatch( 'core/editor' );

	const handleChange = ( value ) => {
		// Set as block attribute (preferred method)
		setAttributes( { default_view: value } );

		// Also save to post meta for backward compatibility
		editPost( {
			meta: {
				default_view: value,
			},
		} );
	};

	return (
		<SelectControl
			label={ label }
			value={ defaultView }
			options={ options }
			onChange={ handleChange }
		/>
	);
}

