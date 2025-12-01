/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Suggested actions for archive list item templates
 */
export const suggestedActionsArchiveListItem = [
	{
		id: 'hover-shadow',
		label: __( 'Add subtle hover shadow', 'directorist-gutenberg' ),
		icon: 'cube',
	},
	{
		id: 'cards-per-row',
		label: __( 'Make cards 3 per row with rounded corners', 'directorist-gutenberg' ),
		icon: 'grid',
	},
	{
		id: 'title-on-hover',
		label: __( 'Show listing titles on hover', 'directorist-gutenberg' ),
		icon: 'document',
	},
	{
		id: 'price-above-rating',
		label: __( 'Move price above rating', 'directorist-gutenberg' ),
		icon: 'star',
	},
];

/**
 * All suggested actions by template type
 */
export const allSuggestedActions = {
	'listings-archive': [
		{
			id: 'add-search-form',
			label: __( 'Add search form', 'directorist-gutenberg' ),
			icon: 'star',
		},
		{
			id: 'add-listing-filters',
			label: __( 'Add listing filters', 'directorist-gutenberg' ),
			icon: 'star',
		},
		{
			id: 'make-3-columns-per-row',
			label: __( 'Make 3 columns per row', 'directorist-gutenberg' ),
			icon: 'star',
		},
	],
	'listings-archive-grid-view': suggestedActionsArchiveListItem,
	'listings-archive-list-view': suggestedActionsArchiveListItem,
};

/**
 * Custom fields block mapping
 */
export const customFieldsBlocks = {
	'checkbox': 'listing-card-custom-text',
	'date': 'listing-card-custom-date',
	'number': 'listing-card-custom-number',
	'radio': 'listing-card-custom-radio',
	'select': 'listing-card-custom-select',
	'text': 'listing-card-custom-text',
	'textarea': 'listing-card-custom-textarea',
	'time': 'listing-card-custom-time',
	'url': 'listing-card-custom-url',
};

/**
 * Supported template types
 */
export const supportedTemplateTypes = [
	'listings-archive',
	'listings-archive-grid-view',
	'listings-archive-list-view',
];

