/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

const TEMPLATE = [
	['core/post-title'],
	['core/post-excerpt']
];

export default function Edit({ attributes, context }) {
	const { 'directorist-gutenberg/queryId': queryId } = context;

	const blockProps = useBlockProps({
		className: 'directorist-query-loop-template'
	});

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
		templateLock: false
	});

	// Show placeholder if not inside query block
	if (!queryId) {
		return (
			<div {...blockProps}>
				<Placeholder
					icon="admin-post"
					label={__('Query Loop Template', 'directorist-gutenberg')}
					instructions={__(
						'This block must be inside a Query block. Add blocks here to create your listing template.',
						'directorist-gutenberg'
					)}
				/>
			</div>
		);
	}

	return (
		<div {...innerBlocksProps}>
			{innerBlocksProps.children}
		</div>
	);
}
