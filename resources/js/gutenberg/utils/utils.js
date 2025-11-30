/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Hide or show the radius search field depending on whether the location field is empty.
 * Vanilla JS implementation using modern JS conventions.
 * Works with both old structure (.directorist-contents-wrap) and new Gutenberg blocks.
 */
export const handleRadiusVisibility = () => {
	// Add class to mark the radius search field
	document
		.querySelectorAll( '.directorist-range-slider-wrap' )
		.forEach( ( wrap ) => {
			const searchField = wrap.closest( '.directorist-search-field' );
			searchField?.classList.add(
				'directorist-search-field-radius_search'
			);
		} );

	const basedOnElem = document.querySelector(
		'.directorist-radius_search_based_on'
	);
	const basedOn = basedOnElem?.value;
	const selector =
		basedOn === 'zip'
			? '.directorist-zipcode-search .zip-radius-search'
			: '.directorist-location-js';

	document.querySelectorAll( selector ).forEach( ( locationDOM ) => {
		const isEmpty = locationDOM.value === '';

		// Try to find container in old structure first
		let contentsWrap = locationDOM.closest( '.directorist-contents-wrap' );

		// If not found, try new Gutenberg block structure
		if ( ! contentsWrap ) {
			// Look for radius search fields in the same form or nearby blocks
			const form = locationDOM.closest( 'form' );
			if ( form ) {
				contentsWrap = form.closest( '[data-atts]' ) || form;
			} else {
				// Fallback: search in document
				contentsWrap = document.body;
			}
		}

		if ( ! contentsWrap ) return;

		// Find radius search fields within the container
		const radiusFields = contentsWrap.querySelectorAll
			? contentsWrap.querySelectorAll(
					'.directorist-search-field-radius_search, .directorist-radius-search'
			  )
			: document.querySelectorAll(
					'.directorist-search-field-radius_search, .directorist-radius-search'
			  );

		radiusFields.forEach( ( container ) => {
			container.style.display = isEmpty ? 'none' : 'block';
		} );
	} );
};

/**
 * Sanitizes blocks by removing unnecessary properties
 *
 * @param {Array} blocks Array of block objects
 * @returns {Array} Sanitized blocks
 */
export function sanitizeBlocks( blocks ) {
	return blocks.map( block => ( {
		name: block.name,
		attributes: block.attributes || {},
		innerBlocks: sanitizeBlocks( block.innerBlocks || [] )
	} ) );
}

/**
 * Recursively converts block structure to WordPress block objects
 *
 * @param {Array} blockList Array of block data
 * @returns {Array} WordPress block objects
 */
export function createBlocksFromList( blockList ) {
	if ( ! blockList || ! Array.isArray( blockList ) ) {
		return [];
	}

	return blockList.map( blockData => {
		const { name, attributes = {}, innerBlocks = [] } = blockData;
		const parsedInnerBlocks = createBlocksFromList( innerBlocks );
		return createBlock( name, attributes, parsedInnerBlocks );
	} );
}