/**
 * WordPress dependencies
 */
import { TextControl, ToggleControl, SelectControl, RadioControl, __experimentalUnitControl as UnitControl, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ColorPickerControl from './color-picker-control';
import IconPicker from './icon-picker';

/**
 * Color Picker Wrapper Component with State Management
 * This component wraps ColorPickerControl to manage its open/close state
 */
function ColorPickerWrapper( { fieldKey, label, value, defaultValue, onChange, fieldProps } ) {
	const [ isOpen, setIsOpen ] = useState( false );
	return (
		<ColorPickerControl
			label={ label }
			color={ value }
			defaultColor={ defaultValue || '#000000' }
			onChange={ onChange }
			isOpen={ isOpen }
			onToggle={ () => setIsOpen( ! isOpen ) }
			{ ...fieldProps }
		/>
	);
}

/**
 * Render a field based on its type
 *
 * @param {string} fieldKey - The field key/name
 * @param {Object} field - Field configuration
 * @param {Object} attributes - Block attributes
 * @param {Function} setAttributes - Function to set block attributes
 * @returns {JSX.Element|null} Rendered field component
 */
export default function renderField( fieldKey, field, attributes, setAttributes ) {
	const {
		type,
		label,
		help,
		options,
		placeholder,
		defaultValue,
		attrKey, // Custom attribute key (if different from fieldKey)
		...fieldProps
	} = field;

	const attributeKey = attrKey || fieldKey;
	const value = attributes[ attributeKey ] !== undefined
		? attributes[ attributeKey ]
		: defaultValue;

	const onChange = ( newValue ) => {
		setAttributes( { [ attributeKey ]: newValue } );
	};

	switch ( type ) {
		case 'text':
			return (
				<TextControl
					key={ fieldKey }
					label={ label }
					help={ help }
					value={ value || '' }
					onChange={ onChange }
					placeholder={ placeholder }
					{ ...fieldProps }
				/>
			);

		case 'toggle':
		case 'switch':
			return (
				<ToggleControl
					key={ fieldKey }
					label={ label }
					help={ help }
					checked={ value || false }
					onChange={ onChange }
					{ ...fieldProps }
				/>
			);

		case 'select':
			// Support dynamic options via function
			const selectOptions = typeof options === 'function' ? options( attributes ) : ( options || [] );
			return (
				<SelectControl
					key={ fieldKey }
					label={ label }
					help={ help }
					value={ value || '' }
					onChange={ onChange }
					options={ selectOptions }
					{ ...fieldProps }
				/>
			);

		case 'radio':
		case 'radioControl':
			return (
				<RadioControl
					key={ fieldKey }
					label={ label }
					help={ help }
					selected={ value || '' }
					onChange={ onChange }
					options={ options || [] }
					{ ...fieldProps }
				/>
			);

		case 'toggleGroup':
		case 'toggleGroupControl':
			return (
				<ToggleGroupControl
					key={ fieldKey }
					label={ label }
					value={ value || '' }
					onChange={ onChange }
					isBlock={ field.isBlock !== false }
					size={ field.size || '__unstable-large' }
					__nextHasNoMarginBottom={ field.__nextHasNoMarginBottom !== false }
					{ ...fieldProps }
				>
					{ ( options || [] ).map( ( option ) => (
						<ToggleGroupControlOption
							key={ option.value }
							label={ option.label }
							value={ option.value }
						/>
					) ) }
				</ToggleGroupControl>
			);

		case 'color':
		case 'colorPicker':
			return (
				<ColorPickerWrapper
					key={ fieldKey }
					fieldKey={ fieldKey }
					label={ label }
					value={ value }
					defaultValue={ field.defaultColor || defaultValue || '#000000' }
					onChange={ onChange }
					fieldProps={ fieldProps }
				/>
			);

		case 'icon':
		case 'iconPicker':
			return (
				<IconPicker
					key={ fieldKey }
					attr_key={ attributeKey }
					attributes={ attributes }
					setAttributes={ setAttributes }
					label={ label }
					{ ...fieldProps }
				/>
			);

		case 'number':
			return (
				<TextControl
					key={ fieldKey }
					label={ label }
					help={ help }
					value={ value || '' }
					onChange={ onChange }
					type="number"
					{ ...fieldProps }
				/>
			);

		case 'unit':
		case 'unitControl':
			return (
				<UnitControl
					key={ fieldKey }
					label={ label }
					help={ help }
					value={ value || field.defaultValue || '' }
					onChange={ onChange }
					units={ field.units || [
						{ value: 'px', label: 'px' },
						{ value: 'em', label: 'em' },
						{ value: 'rem', label: 'rem' },
						{ value: 'vh', label: 'vh' },
						{ value: 'vw', label: 'vw' },
					] }
					{ ...fieldProps }
				/>
			);

		default:
			// If type is not recognized, try to render as custom component
			if ( typeof field.component === 'function' ) {
				const CustomComponent = field.component;
				return (
					<CustomComponent
						key={ fieldKey }
						fieldKey={ fieldKey }
						field={ field }
						attributes={ attributes }
						setAttributes={ setAttributes }
						value={ value }
						onChange={ onChange }
						{ ...fieldProps }
					/>
				);
			}

			console.warn(
				`Directorist: Unknown field type "${ type }" for field "${ fieldKey }"`
			);
			return null;
	}
}

