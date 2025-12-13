/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * External dependencies
 */
import ReactSVG from 'react-inlinesvg';
import angleRightIcon from '@block-icon/angle-right.svg';
import angleLeftIcon from '@block-icon/angle-left.svg';

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
	if ( ! queryId ) {
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
			<nav className="directorist-query-pagination" aria-label="Listings Pagination">
				<a className="prev page-numbers" href="#">
					<span className="directorist-query-pagination--icon"><ReactSVG src={angleLeftIcon} /></span>
				</a>

				<a className="page-numbers" href="#">1</a>
				<span aria-current="page" className="page-numbers current">2</span>
				<a className="page-numbers" href="#">3</a>
				
				<a className="next page-numbers" href="#">
					<span className="directorist-query-pagination--icon"><ReactSVG src={angleRightIcon} /></span>
				</a>
			</nav>
		</div>
	);
}
