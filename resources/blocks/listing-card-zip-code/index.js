/**
 * Internal dependencies
 */
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import zipIcon from '@block-icon/zip.svg';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

const exampleAttributes = {
};

// Define fields for this block
const fields = {
	zipCodeSettings: {
		title: 'Listings Zip/Post Code Settings',
		initialOpen: true,
		fields: {
			show_label: {
				type: 'toggle',
				label: 'Show Label',
				attrKey: 'show_label',
			},
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
	icon: <ReactSVG src={ zipIcon } />,
	templateTypes: [
		'listings-archive-grid-view',
		'listings-archive-list-view',
	],
} );
