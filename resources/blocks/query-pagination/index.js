/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import './style.scss';

// Define fields for this block
const fields = {
	filtersSettings: {
		title: __( 'Listings Archive Settings', 'directorist-gutenberg' ),
		initialOpen: true,
		fields: {
			showLabel: {
				type: 'boolean',
				label: __( 'Show Page Numbers', 'directorist-gutenberg' ),
				attrKey: 'showLabel',
			},
			showArrows: {
				type: 'number',
				label: __( 'Show Arrows', 'directorist-gutenberg' ),
				attrKey: 'showArrows',
			},
		},
	},
};

/**
 * Register block type
 */
registerBlock( {
	metadata,
	Edit,
	fields,
	templateTypes: [ 'listings-archive' ],
	showWidthControls: false,
} );
