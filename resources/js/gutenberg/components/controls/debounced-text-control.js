/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { useRef, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import debounce from '@directorist-gutenberg/utils/debounce';

/**
 * Debounced Text Control Component
 * Handles TextControl with debouncing for performance
 *
 * @param {Object} props - Component props
 * @param {string} props.fieldKey - Field key
 * @param {string} props.label - Field label
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.setAttributes - Function to set block attributes
 * @param {string} props.attrKey - Attribute key
 * @param {number} props.debounceMs - Debounce delay in milliseconds
 */
export default function DebouncedTextControl( {
	fieldKey,
	label,
	attributes,
	setAttributes,
	attrKey,
	debounceMs = 500,
} ) {
	// Local state for immediate UI updates
	const [ localValue, setLocalValue ] = useState( attributes[ attrKey ] || '' );

	// Sync local state with attributes when they change externally
	useEffect( () => {
		setLocalValue( attributes[ attrKey ] );
	}, [ attributes[ attrKey ], attrKey ] );

	// Create debounced setAttributes function
	const debouncedSetAttributesRef = useRef(
		debounce( ( value ) => {
			setAttributes( { [ attrKey ]: value } );
		}, debounceMs )
	);

	// Update debounced function when setAttributes or attrKey changes
	useEffect( () => {
		debouncedSetAttributesRef.current = debounce( ( value ) => {
			setAttributes( { [ attrKey ]: value } );
		}, debounceMs );
	}, [ setAttributes, attrKey, debounceMs ] );

	const handleChange = ( value ) => {
		setLocalValue( value );
		debouncedSetAttributesRef.current( value );
	};

	return (
		<TextControl
			key={ fieldKey }
			label={ label }
			value={ localValue }
			onChange={ handleChange }
		/>
	);
}

