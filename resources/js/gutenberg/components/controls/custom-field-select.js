/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useSubmissionFields } from '@directorist-gutenberg/gutenberg/hooks/useSubmissionFields';

/**
 * Custom Field Select Component
 * Handles SelectControl for custom fields that require hooks
 *
 * @param {Object} props - Component props
 * @param {string} props.fieldKey - Field key
 * @param {Object} props.field - Field configuration
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.setAttributes - Function to set block attributes
 */
export default function CustomFieldSelect( {
	fieldKey,
	field,
	attributes,
	setAttributes,
} ) {
	const { getFieldsOptions, directoryTypeId } = useSubmissionFields();
	const { label, attrKey, fieldType, useDirectoryType } = field;

	const attributeKey = attrKey || fieldKey;
	const value = attributes[ attributeKey ] || '';

	// Get options based on field type
	const options = getFieldsOptions( 'custom', fieldType );

	// Handle directory_type_id update if needed
	useEffect( () => {
		if ( useDirectoryType && directoryTypeId ) {
			setAttributes( { directory_type_id: directoryTypeId } );
		}
	}, [ directoryTypeId, useDirectoryType, setAttributes ] );

	const onChange = ( newValue ) => {
		setAttributes( { [ attributeKey ]: newValue } );
	};

	return (
		<>
			{ field.spacer !== false && <div style={ { height: '16px' } }></div> }
			<SelectControl
				label={ label || __( 'Select Field', 'directorist-gutenberg' ) }
				value={ value }
				onChange={ onChange }
				options={ options }
			/>
		</>
	);
}

