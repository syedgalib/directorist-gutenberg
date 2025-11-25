/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import Edit from './edit';
import metadata from './block.json';
import badgeFeaturedIcon from '@block-icon/badge-featured.svg';
import './style.scss';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

const exampleAttributes = {
};

// Define fields for this block (similar to formgent approach)
const fields = {
	badgeSettings: {
		title: 'Badge Settings',
		initialOpen: true,
		fields: {
			text: {
				type: 'text',
				label: 'Badge Text',
				attrKey: 'text',
			},
			text_color: {
				type: 'colorPicker',
				label: 'Text Color',
				attrKey: 'text_color',
				defaultColor: '#000',
				// Note: For color picker with state management, you can still use Controls component
				// or enhance render-field.js to handle state internally
			},
			background_color: {
				type: 'colorPicker',
				label: 'Background Color',
				attrKey: 'background_color',
				defaultColor: '#000',
			},
		},
	},
};

registerBlock( {
	metadata,
	Edit,
	fields,
	exampleAttributes,
	icon: <ReactSVG src={ badgeFeaturedIcon } />,
	templateTypes: [
		'listings-archive-grid-view',
		'listings-archive-list-view',
	],
	props: {
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [
						'directorist-gutenberg/listing-card-badge-new',
						'directorist-gutenberg/listing-card-badge-popular',
					],
					transform: ( attributes ) => {
						return createBlock(
							'directorist-gutenberg/listing-card-badge-featured',
							attributes
						);
					},
				},
			],
			to: [
				{
					type: 'block',
					blocks: [ 'directorist-gutenberg/listing-card-badge-new' ],
					transform: ( attributes ) => {
						return createBlock(
							'directorist-gutenberg/listing-card-badge-new',
							attributes
						);
					},
				},
				{
					type: 'block',
					blocks: [
						'directorist-gutenberg/listing-card-badge-popular',
					],
					transform: ( attributes ) => {
						return createBlock(
							'directorist-gutenberg/listing-card-badge-popular',
							attributes
						);
					},
				},
			],
		},
	},
} );
