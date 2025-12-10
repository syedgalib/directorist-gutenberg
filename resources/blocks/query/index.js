/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';

// Define fields for this block
const fields = {
	useArchiveBlockCommonTask: true, // Enable the hook
	filtersSettings: {
		title: __( 'Listings Archive Settings', 'directorist-gutenberg' ),
		initialOpen: true,
		fields: {
			directory_type_id: {
				type: 'number',
				label: __( 'Directory Type ID', 'directorist-gutenberg' ),
				attrKey: 'directory_type_id',
				help: __( 'Set to 0 to show listings from all directory types', 'directorist-gutenberg' ),
			},
			per_page: {
				type: 'number',
				label: __( 'Items Per Page', 'directorist-gutenberg' ),
				attrKey: 'per_page',
			},
		},
	},
};

registerBlock( {
	metadata,
	Edit,
	fields,
	props: {
		save,
	},
	templateTypes: [ 'listings-archive' ],
	showWidthControls: false,
} );