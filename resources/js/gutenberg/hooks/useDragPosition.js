/**
 * WordPress dependencies
 */
import { useState, useEffect, useRef } from '@wordpress/element';

/**
 * Custom hook for handling draggable element positioning
 *
 * @param {Object} options Configuration options
 * @param {number} options.defaultX Default X position
 * @param {number} options.defaultY Default Y position
 * @param {number} options.elementWidth Width of the draggable element
 * @param {number} options.elementHeight Height of the draggable element
 * @param {number} options.spacing Minimum spacing from edges
 * @returns {Object} Drag state and handlers
 */
export function useDragPosition( { defaultX, defaultY, elementWidth, elementHeight, spacing = 24 } ) {
	const [ position, setPosition ] = useState( { x: null, y: null } );
	const [ isDragging, setIsDragging ] = useState( false );
	const [ dragStart, setDragStart ] = useState( { x: 0, y: 0 } );
	const elementRef = useRef( null );

	// Initialize default position
	useEffect( () => {
		if ( position.x === null && position.y === null && defaultX !== null && defaultY !== null ) {
			setPosition( { x: defaultX, y: defaultY } );
		}
	}, [ defaultX, defaultY ] );

	const handleMouseDown = ( e ) => {
		if ( e.button !== 0 ) return; // Only handle left mouse button
		setIsDragging( true );
		const rect = elementRef.current?.getBoundingClientRect();
		if ( rect ) {
			setDragStart( {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			} );
		}
		e.preventDefault();
	};

	useEffect( () => {
		if ( ! isDragging ) return;

		const handleMouseMove = ( e ) => {
			const newX = e.clientX - dragStart.x;
			const newY = e.clientY - dragStart.y;

			// Get viewport dimensions
			const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

			// Account for WordPress admin bar if present
			const adminBarHeight = document.getElementById( 'wpadminbar' )?.offsetHeight || 0;
			const topSpacing = Math.max( spacing, adminBarHeight + spacing );

			// Constrain to viewport bounds
			const maxX = viewportWidth - elementWidth - spacing;
			const maxY = viewportHeight - elementHeight - spacing;

			const constrainedX = Math.max( spacing, Math.min( newX, maxX ) );
			const constrainedY = Math.max( topSpacing, Math.min( newY, maxY ) );

			setPosition( { x: constrainedX, y: constrainedY } );
		};

		const handleMouseUp = () => {
			setIsDragging( false );
		};

		document.addEventListener( 'mousemove', handleMouseMove );
		document.addEventListener( 'mouseup', handleMouseUp );

		return () => {
			document.removeEventListener( 'mousemove', handleMouseMove );
			document.removeEventListener( 'mouseup', handleMouseUp );
		};
	}, [ isDragging, dragStart, elementWidth, elementHeight, spacing ] );

	const resetPosition = () => {
		setPosition( { x: null, y: null } );
	};

	return {
		position,
		setPosition,
		isDragging,
		elementRef,
		handleMouseDown,
		resetPosition,
	};
}

