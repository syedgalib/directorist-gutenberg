/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import archiveIcon from '@block-icon/archive.svg';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

// Define fields for this block
const fields = {
	useArchiveBlockCommonTask: true, // Enable the hook
	archiveSettings: {
		title: __( 'Listings Archive Settings', 'directorist-gutenberg' ),
		initialOpen: true,
		fields: {
			default_view: {
				type: 'defaultViewSelect',
				label: __( 'Default View', 'directorist-gutenberg' ),
				attrKey: 'default_view',
				options: [
					{ label: __( 'Grid', 'directorist-gutenberg' ), value: 'grid' },
					{ label: __( 'List', 'directorist-gutenberg' ), value: 'list' },
					{ label: __( 'Map', 'directorist-gutenberg' ), value: 'map' },
				],
			},
			listings_columns: {
				type: 'select',
				label: __( 'Listings Columns', 'directorist-gutenberg' ),
				attrKey: 'listings_columns',
				options: [
					{ label: '1', value: 1 },
					{ label: '2', value: 2 },
					{ label: '3', value: 3 },
					{ label: '4', value: 4 },
					{ label: '6', value: 6 },
				],
				parseAsInt: true,
			},
			listings_per_page: {
				type: 'number',
				label: __( 'Listings Per Page', 'directorist-gutenberg' ),
				attrKey: 'listings_per_page',
				min: 1,
				max: 100,
				step: 1,
				parseAsInt: true,
			},
			pagination_type: {
				type: 'select',
				label: __( 'Pagination Type', 'directorist-gutenberg' ),
				attrKey: 'pagination_type',
				options: [
					{ label: __( 'Numbered', 'directorist-gutenberg' ), value: 'numbered' },
					{ label: __( 'Infinite Scroll', 'directorist-gutenberg' ), value: 'infinite_scroll' },
				],
			},
		},
	},
};

registerBlock( {
	metadata,
	Edit,
	fields,
	icon: <ReactSVG src={archiveIcon} />,
	templateTypes: [ 'listings-archive' ],
	showWidthControls: false,
} );
