/**
 * Internal dependencies
 */
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import postedDateIcon from '@block-icon/posted-date.svg';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

const exampleAttributes = {
};

// Define fields for this block
const fields = {
	postedDateSettings: {
		title: 'Listings Posted Date Settings',
		initialOpen: true,
		fields: {
			icon: {
				type: 'iconPicker',
				label: 'Icon',
				attrKey: 'icon',
			},
			icon_color: {
				type: 'colorPicker',
				label: 'Icon Color',
				attrKey: 'icon_color',
				defaultColor: '#808080',
				condition: ( attributes ) => !! attributes.icon,
			},
			icon_size: {
				type: 'unitControl',
				label: 'Icon Size',
				attrKey: 'icon_size',
				defaultValue: '16px',
				condition: ( attributes ) => !! attributes.icon,
			},
			date_type: {
				type: 'radio',
				label: 'Date Type',
				attrKey: 'date_type',
				options: [
					{ label: 'Posted Date', value: 'posted_date' },
					{ label: 'Days Ago', value: 'days_ago' },
				],
			},
		},
	},
};

registerBlock( {
	metadata,
	Edit,
	fields,
	exampleAttributes,
	icon: <ReactSVG src={ postedDateIcon } />,
	templateTypes: [
		'listings-archive-grid-view',
		'listings-archive-list-view',
	],
} );
