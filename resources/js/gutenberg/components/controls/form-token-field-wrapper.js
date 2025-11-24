/**
 * WordPress dependencies
 */
import { FormTokenField } from '@wordpress/components';

/**
 * Form Token Field Wrapper Component
 * Handles FormTokenField with value/label mapping
 *
 * @param {Object} props - Component props
 * @param {string} props.fieldKey - Field key
 * @param {string} props.label - Field label
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.setAttributes - Function to set block attributes
 * @param {string} props.attrKey - Attribute key
 * @param {Object} props.valueToLabelMap - Map from value to label
 * @param {Array} props.validValues - Array of valid values
 * @param {Array} props.suggestions - Array of suggestion labels
 */
export default function FormTokenFieldWrapper( {
	fieldKey,
	label,
	attributes,
	setAttributes,
	attrKey,
	valueToLabelMap,
	validValues,
	suggestions,
} ) {
	const value = attributes[ attrKey ] || [];

	// Convert values to labels
	const valuesToLabels = ( values, valueToLabelMap ) => {
		return ( values || [] ).map(
			( value ) => valueToLabelMap[ value ] || value
		);
	};

	// Convert tokens to values
	const tokensToValues = ( tokens, labelToValueMap, validValues ) => {
		return tokens
			.map( ( token ) => {
				// Handle label (translated)
				if ( labelToValueMap[ token ] ) {
					return labelToValueMap[ token ];
				}
				// Handle value (already a valid value)
				if ( validValues.includes( token ) ) {
					return token;
				}
				return null;
			} )
			.filter( ( value ) => value !== null );
	};

	// Create reverse map for onChange handler (label to value)
	const labelToValueMap = Object.fromEntries(
		Object.entries( valueToLabelMap ).map( ( [ key, value ] ) => [ value, key ] )
	);

	const tokenValue = valuesToLabels( value, valueToLabelMap );

	const handleChange = ( tokens ) => {
		const values = tokensToValues( tokens, labelToValueMap, validValues );
		setAttributes( { [ attrKey ]: values } );
	};

	return (
		<FormTokenField
			key={ fieldKey }
			label={ label }
			value={ tokenValue }
			suggestions={ suggestions }
			onChange={ handleChange }
			__experimentalExpandOnFocus
		/>
	);
}

