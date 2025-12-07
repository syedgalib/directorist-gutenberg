/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import {
	useInnerBlocksProps,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { getBlockTypes } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import BlockPreview from '@directorist-gutenberg/gutenberg/components/block-preview';
import previewImg from '@image/blocks-preview/thumbnail.webp';
import sampleImage from '@image/sample-image.webp';
import DimensionControls from './dimension-controls';
import OverlayControls from './overlay-controls';
import Overlay from './overlay';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	// Show block preview image
	if ( attributes.is_preview ) {
		return <BlockPreview image={ previewImg } />;
	}

	const { aspectRatio, width, height, scale } = attributes;
	const has_aspect_ratio = !! aspectRatio;
	const is_original_aspect = has_aspect_ratio && aspectRatio === 'auto';

	// Default thumbnail height logic
	let defaultHeight;
	if ( has_aspect_ratio && ! is_original_aspect ) {
		// If aspect ratio is set (and not 'auto'), ignore height fully
		defaultHeight = 'auto';
	} else if ( is_original_aspect ) {
		// If aspect ratio is 'auto' (Original), use height if set, otherwise default to 300px
		defaultHeight = height ? height : '300px';
	} else {
		// If aspect ratio is not set, use height if set, otherwise default to 300px
		defaultHeight = height ? height : '300px';
	}

	const blockProps = useBlockProps( {
		className: 'directorist-gutenberg-listing-card-thumbnail',
		style: {
			width,
			// Only set height if aspect ratio is not set, or if it's set to 'auto' (Original)
			...( ( ! has_aspect_ratio || is_original_aspect ) && height
				? { height }
				: ! has_aspect_ratio
				? { height: '100%' }
				: {} ),
			// Only add aspect-ratio CSS if it's set and not 'auto' (Original)
			...( has_aspect_ratio && ! is_original_aspect
				? { aspectRatio }
				: is_original_aspect
				? { aspectRatio: 'unset' }
				: {} ),
			'--directorist-thumbnail-height': defaultHeight,
		},
	} );

	// Get all block types and filter out the thumbnail block to prevent nesting
	const notAllowedBlocks = [
		'directorist-gutenberg/listing-card-thumbnail',
		'core/post-featured-image',
	];
	const allowedBlocks = getBlockTypes()
		.filter( ( block ) => ! notAllowedBlocks.includes( block.name ) )
		.map( ( block ) => block.name );

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'directorist-gutenberg-listing-card-thumbnail-front',
		},
		{
			allowedBlocks,
		}
	);

	// Get inner blocks and remove any nested thumbnail blocks recursively
	const { getBlocks, getBlockCount } =
		useSelect( ( select ) => {
			const blockEditor = select( 'core/block-editor' );
			return {
				getBlocks: blockEditor?.getBlocks,
				getBlockCount: blockEditor?.getBlockCount,
			};
		}, [] ) || {};
	const { removeBlocks } = useDispatch( 'core/block-editor' ) || {};

	// Recursively find all nested thumbnail blocks and post-featured-image blocks
	const findNestedThumbnails = ( parentClientId ) => {
		if ( ! getBlocks ) return [];
		const blocks = getBlocks( parentClientId );
		if ( ! blocks || blocks.length === 0 ) return [];

		const thumbnailIds = [];

		blocks.forEach( ( block ) => {
			// Remove both thumbnail blocks and post-featured-image blocks
			if (
				block.name === 'directorist-gutenberg/listing-card-thumbnail' ||
				block.name === 'core/post-featured-image'
			) {
				thumbnailIds.push( block.clientId );
			}
			// Recursively check inner blocks
			const nested = findNestedThumbnails( block.clientId );
			thumbnailIds.push( ...nested );
		} );

		return thumbnailIds;
	};

	// Remove nested thumbnail blocks and post-featured-image blocks whenever blocks change
	useEffect( () => {
		if ( ! getBlocks || ! removeBlocks ) return;

		// Use a small delay to ensure blocks are fully updated
		const timeoutId = setTimeout( () => {
			const nestedThumbnailBlocks = findNestedThumbnails( clientId );

			if ( nestedThumbnailBlocks.length > 0 ) {
				// Remove nested thumbnail blocks and post-featured-image blocks immediately
				removeBlocks( nestedThumbnailBlocks, false );
			}
		}, 50 );

		return () => clearTimeout( timeoutId );
	}, [ clientId, getBlockCount, getBlocks, removeBlocks ] );

	const imageStyles = {
		// Only set width:100%;height:100% if aspect ratio is set and not 'auto' (Original)
		...( has_aspect_ratio && ! is_original_aspect
			? { width: '100%', height: '100%' }
			: {} ),
		// Set height when aspect ratio is 'auto' (Original) or not set
		...( ( is_original_aspect || ! has_aspect_ratio ) && height
			? { height }
			: {} ),
		// Set width if provided and aspect ratio is not forcing 100%
		...( width && ! ( has_aspect_ratio && ! is_original_aspect )
			? { width }
			: {} ),
		// Set object-fit if scale is provided
		...( ( height || aspectRatio ) && scale ? { objectFit: scale } : {} ),
	};

	return (
		<>
			<InspectorControls group="color">
				<OverlayControls
					attributes={ attributes }
					setAttributes={ setAttributes }
					clientId={ clientId }
				/>
			</InspectorControls>
			<InspectorControls group="dimensions">
				<DimensionControls
					clientId={ clientId }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="directorist-gutenberg-listing-card-thumbnail-back">
					<img
						className="directorist-gutenberg-listing-card-thumbnail-preview-img"
						src={ sampleImage }
						alt="Listing Thumbnail"
						style={ imageStyles }
					/>
				</div>
				<div { ...innerBlocksProps } />
				<Overlay
					attributes={ attributes }
					setAttributes={ setAttributes }
					clientId={ clientId }
				/>
			</div>
		</>
	);
}
