/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import renderField from './render-field';
import CustomFieldSelect from './custom-field-select';

/**
 * Controls component that renders fields from a definition object
 * Similar to formgent's approach but simpler and tailored for directorist-gutenberg
 *
 * @param {Object} props - Component props
 * @param {Object} props.fields - Fields definition object
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.setAttributes - Function to set block attributes
 */
export default function Controls( { fields, attributes, setAttributes } ) {
	if ( ! fields || isEmpty( fields ) ) {
		return null;
	}

	// If fields is already a React component (backward compatibility)
	if ( typeof fields === 'function' ) {
		return <fields attributes={ attributes } setAttributes={ setAttributes } />;
	}

	// Render fields from definition object
	const panels = Object.keys( fields ).map( ( panelKey ) => {
		const panel = fields[ panelKey ];

		// Support both panel structure and direct fields
		const panelFields = panel.fields || panel;
		const panelTitle = panel.title || panel.label || __( 'Settings', 'directorist-gutenberg' );
		const initialOpen = panel.initialOpen !== undefined ? panel.initialOpen : true;

		return (
			<PanelBody
				key={ panelKey }
				title={ panelTitle }
				initialOpen={ initialOpen }
			>
				{ Object.keys( panelFields ).map( ( fieldKey ) => {
					const field = panelFields[ fieldKey ];

					// Skip field if condition is false
					if ( field.condition && ! field.condition( attributes ) ) {
						return null;
					}

					// Handle custom field select with hooks
					if ( field.type === 'customFieldSelect' && field.fieldType ) {
						return (
							<div key={ fieldKey }>
								<CustomFieldSelect
									fieldKey={ fieldKey }
									field={ field }
									attributes={ attributes }
									setAttributes={ setAttributes }
								/>
							</div>
						);
					}

					return (
						<div key={ fieldKey }>
							{ renderField( fieldKey, field, attributes, setAttributes ) }
						</div>
					);
				} ) }
			</PanelBody>
		);
	} );

	return <InspectorControls>{ panels }</InspectorControls>;
}

