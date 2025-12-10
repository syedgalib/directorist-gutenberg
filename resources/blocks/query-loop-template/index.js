/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import registerBlock from '@directorist-gutenberg/gutenberg/register-block';

/**
 * Register block type
 */
registerBlock( {
	metadata,
	Edit,
	props: {
		save,
	},
	templateTypes: [ 'listings-archive' ],
	showWidthControls: false,
} );
