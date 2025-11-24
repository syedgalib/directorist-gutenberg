/**
 * Internal dependencies
 */
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import userAvatarIcon from '@block-icon/user-avatar.svg';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';

const exampleAttributes = {
};

// Define fields for this block
const fields = {
	avatarSettings: {
		title: 'Listings User Avatar Settings',
		initialOpen: true,
		fields: {
			avatar_overlap: {
				type: 'toggle',
				label: 'Overlap Avatar on Image',
				attrKey: 'avatar_overlap',
			},
			alignment: {
				type: 'toggleGroup',
				label: 'Alignment',
				attrKey: 'alignment',
				isBlock: true,
				size: '__unstable-large',
				__nextHasNoMarginBottom: true,
				options: [
					{ label: 'Left', value: 'left' },
					{ label: 'Center', value: 'center' },
					{ label: 'Right', value: 'right' },
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
	icon: <ReactSVG src={ userAvatarIcon } />,
	templateTypes: [
		'listings-archive-grid-view',
		'listings-archive-list-view',
	],
	showWidthControls: false,
} );
