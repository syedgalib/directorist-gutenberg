/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

const ALLOWED_BLOCKS = [
	'directorist-gutenberg/query-loop-template',
	'directorist-gutenberg/query-pagination'
];

const TEMPLATE = [
	['directorist-gutenberg/query-loop-template', {}],
	['directorist-gutenberg/query-pagination', {}]
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const { directory_type_id, per_page, queryId } = attributes;

	// Generate unique queryId on mount if not exists
	useEffect(() => {
		if (!queryId) {
			setAttributes({ queryId: Date.now() });
		}
	}, []);

	const blockProps = useBlockProps({
		className: 'directorist-query-block'
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
		templateLock: false
	});

	return (
		<div {...innerBlocksProps} />
	);
}
