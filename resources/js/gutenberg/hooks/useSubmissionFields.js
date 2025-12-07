/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	getLocalizedBlockData,
	getSubmissionFormFields,
} from '@directorist-gutenberg/utils/localized-data';

export const useSubmissionFields = () => {
	const { directory_type_id } = getLocalizedBlockData();
	const fields = getSubmissionFormFields();

	function getFieldsOptions( type, name ) {
		const options = [
			{
				value: '',
				label: __( 'Select...', 'directorist-gutenberg' ),
			},
		];

		for ( const field of Object.values( fields ) ) {
			if ( field.widget_group === type && field.widget_name === name ) {
				options.push( {
					value: field.field_key,
					label: field.label,
				} );
			}
		}

		return options;
	}

	function doesPresetFieldExist( name ) {
		const field = getField( 'preset', name );

		return field !== null;
	}

	function doesCustomFieldExist( name, fieldKey ) {
		const field = getField( 'custom', name, fieldKey );

		return field !== null;
	}

	function getCustomFields() {
		const customFields = [];

		for ( const field of Object.values( fields ) ) {
			if ( field.widget_group === 'custom' ) {
				customFields.push( field );
			}
		}

		return customFields;
	}

	function getField( type, name, fieldKey ) {
		for ( const field of Object.values( fields ) ) {
			if (
				field.widget_group === type &&
				field.widget_name === name &&
				( fieldKey === undefined || field.field_key === fieldKey )
			) {
				return field;
			}
		}

		return null;
	}

	return {
		directoryTypeId: directory_type_id
			? parseInt( directory_type_id )
			: null,
		fields,
		getField,
		getCustomFields,
		doesPresetFieldExist,
		doesCustomFieldExist,
		getFieldsOptions,
	};
};
