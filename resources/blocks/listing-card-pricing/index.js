/**
 * Internal dependencies
 */
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import pricingIcon from '@block-icon/pricing.svg';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

const exampleAttributes = {
};

// Define fields for this block
const fields = {
	pricingSettings: {
		title: 'Listings Pricing Settings',
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
		},
	},
};

registerBlock( {
	metadata,
	Edit,
	fields,
	exampleAttributes,
	icon: <ReactSVG src={ pricingIcon } />,
	templateTypes: [
		'listings-archive-grid-view',
		'listings-archive-list-view',
	],
} );
