/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';

/**
 * Custom hook for calculating panel position styles
 *
 * @param {boolean} isOpen Whether panel is open
 * @param {Object} panelPosition Panel position state
 * @returns {Object} Panel style object
 */
export function usePanelPosition( isOpen, panelPosition ) {
	return useMemo( () => {
		if ( ! isOpen ) {
			return {};
		}

		// If panel position is not set yet, use CSS bottom/right for default position
		if ( panelPosition.x === null || panelPosition.y === null ) {
			return {
				right: '20px',
				bottom: '20px',
				left: 'auto',
				top: 'auto',
			};
		}

		// When panel has been positioned (either dragged or calculated), use left/top
		return {
			left: `${ panelPosition.x }px`,
			top: `${ panelPosition.y }px`,
			right: 'auto',
			bottom: 'auto',
		};
	}, [ isOpen, panelPosition ] );
}

