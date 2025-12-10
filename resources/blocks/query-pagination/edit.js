/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes, context }) {
	const { showLabel, showArrows } = attributes;
	const { 'directorist-gutenberg/queryId': queryId } = context;

	const blockProps = useBlockProps({
		className: 'directorist-query-pagination'
	});

	// Show placeholder if not inside query block
	if (!queryId) {
		return (
			<div {...blockProps}>
				<Placeholder
					icon="admin-page"
					label={__('Query Pagination', 'directorist-gutenberg')}
					instructions={__(
						'This block must be inside a Query block.',
						'directorist-gutenberg'
					)}
				/>
			</div>
		);
	}

	return (
		<div {...blockProps}>
			<div className="pagination-preview">
				{showArrows && <button className="prev-btn">←</button>}
				{showLabel && (
					<>
						<button className="page-btn active">1</button>
						<button className="page-btn">2</button>
						<button className="page-btn">3</button>
					</>
				)}
				{showArrows && <button className="next-btn">→</button>}
			</div>
		</div>
	);
}
