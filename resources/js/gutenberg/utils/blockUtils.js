/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

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