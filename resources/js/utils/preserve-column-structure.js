/**
 * Utility function to preserve column structure after AJAX reloads
 * Fixes issue where column layout changes after grid/list/filter AJAX requests
 *
 * @module preserveColumnStructure
 */

(function() {
	'use strict';

	// Store original column classes before AJAX (per container)
	const originalColumnClasses = new Map();

	/**
	 * Get column class from listings_columns attribute
	 * @param {number} listingsColumns - Number of columns (1-6)
	 * @returns {string} Column class name
	 */
	function getColumnClassFromColumns(listingsColumns) {
		if (!listingsColumns || listingsColumns < 1) {
			return 'directorist-col-4'; // Default to 3 columns (col-4)
		}

		// Calculate column class: 12 / listings_columns
		// listings_columns: 1 → col-12, 2 → col-6, 3 → col-4, 4 → col-3, 6 → col-2
		const columnValue = Math.round(12 / parseInt(listingsColumns, 10));

		// Map to valid column classes
		const columnMap = {
			12: 'directorist-col-12',
			6: 'directorist-col-6',
			4: 'directorist-col-4',
			3: 'directorist-col-3',
			2: 'directorist-col-2'
		};

		return columnMap[columnValue] || 'directorist-col-4';
	}

	/**
	 * Get listings_columns from block data-atts
	 * @param {HTMLElement} archiveContainer - The archive container element
	 * @returns {number|null} Number of columns or null if not found
	 */
	function getListingsColumnsFromBlock(archiveContainer) {
		if (!archiveContainer) {
			return null;
		}

		// Find the block element with data-atts
		let blockElement = archiveContainer.closest('[data-atts]');

		// If not found, try finding parent block
		if (!blockElement) {
			blockElement = archiveContainer.parentElement?.closest('[data-atts]');
		}

		if (!blockElement) {
			return null;
		}

		try {
			// Get data-atts attribute (jQuery handles JSON parsing, but we'll do it manually for vanilla JS)
			const dataAtts = blockElement.getAttribute('data-atts');
			if (!dataAtts) {
				return null;
			}

			const atts = JSON.parse(dataAtts);
			if (atts && typeof atts.listings_columns !== 'undefined') {
				const columns = parseInt(atts.listings_columns, 10);
				// Debug: log to verify it's working (can be removed later)
				if (window.directorist && window.directorist.debug) {
					console.log('Directorist: Found listings_columns in data-atts:', columns);
				}
				return columns;
			}
		} catch (e) {
			console.warn('Directorist: Failed to parse data-atts', e);
		}

		return null;
	}

	/**
	 * Store the original column class for a specific container
	 * @param {HTMLElement} archiveContainer - The archive container element
	 */
	function storeOriginalColumnClass(archiveContainer) {
		if (!archiveContainer) {
			return;
		}

		const containerId = archiveContainer.id || archiveContainer.className || 'default';

		// Skip if already stored
		if (originalColumnClasses.has(containerId)) {
			return;
		}

		// First, try to get listings_columns from block data-atts
		const listingsColumns = getListingsColumnsFromBlock(archiveContainer);
		if (listingsColumns) {
			const columnClass = getColumnClassFromColumns(listingsColumns);
			originalColumnClasses.set(containerId, columnClass);
			return;
		}

		// Fallback: detect from existing DOM
		const rowContainer = archiveContainer.querySelector(
			'.directorist-container-fluid .directorist-row'
		);

		if (!rowContainer) {
			return;
		}

		// Find the first column to get the original class
		const firstColumn = rowContainer.querySelector(
			'.directorist-col-2, .directorist-col-3, .directorist-col-4, .directorist-col-6'
		);

		if (firstColumn) {
			// Store the original column class (excluding col-12 which is full width)
			const colClasses = ['directorist-col-2', 'directorist-col-3', 'directorist-col-4', 'directorist-col-6'];
			for (const colClass of colClasses) {
				if (firstColumn.classList.contains(colClass)) {
					originalColumnClasses.set(containerId, colClass);
					return;
				}
			}
		}

		// If no grid column found, check if we're in grid view and get from block attributes
		const isGridView = archiveContainer.classList.contains('directorist-archive-grid-view') ||
			archiveContainer.querySelector('.directorist-archive-grid-view');

		if (isGridView) {
			// Try to get listings_columns from block data-atts
			const listingsColumns = getListingsColumnsFromBlock(archiveContainer);
			if (listingsColumns) {
				const columnClass = getColumnClassFromColumns(listingsColumns);
				originalColumnClasses.set(containerId, columnClass);
			} else {
				// Fallback: Default to col-4 for grid view (3 columns per row) only if listings_columns not found
				originalColumnClasses.set(containerId, 'directorist-col-4');
			}
		}
	}

	/**
	 * Preserve column structure after AJAX reload for a specific container
	 * @param {HTMLElement} archiveContainer - The archive container element
	 */
	function preserveColumnStructure(archiveContainer) {
		if (!archiveContainer) {
			return;
		}

		const rowContainer = archiveContainer.querySelector(
			'.directorist-container-fluid .directorist-row'
		);

		if (!rowContainer) {
			return;
		}

		// Get all column elements
		const columns = Array.from(rowContainer.querySelectorAll(
			'.directorist-col-2, .directorist-col-3, .directorist-col-4, .directorist-col-6, .directorist-col-12'
		));

		if (columns.length === 0) {
			return;
		}

		// Check if we're in grid view
		const isGridView = archiveContainer.classList.contains('directorist-archive-grid-view') ||
			archiveContainer.querySelector('.directorist-archive-grid-view');

		// Check if we're in list view
		const isListView = archiveContainer.classList.contains('directorist-archive-list-view') ||
			archiveContainer.querySelector('.directorist-archive-list-view');

		// If in grid view, always enforce the correct column class based on listings_columns
		if (isGridView && columns.length > 0) {
			const containerId = archiveContainer.id || archiveContainer.className || 'default';

			// Always try to get listings_columns from block first (most reliable)
			const listingsColumns = getListingsColumnsFromBlock(archiveContainer);
			let targetClass;

			if (listingsColumns) {
				targetClass = getColumnClassFromColumns(listingsColumns);
			} else {
				// Fallback to stored class or default
				targetClass = originalColumnClasses.get(containerId) || 'directorist-col-4';
			}

			// Always fix all columns to match the target class in grid view
			// This ensures consistency when switching views or after AJAX updates
			columns.forEach((col) => {
				// Check if this column already has the correct class
				if (!col.classList.contains(targetClass)) {
					// Remove all column classes
					col.classList.remove('directorist-col-2', 'directorist-col-3', 'directorist-col-4', 'directorist-col-6', 'directorist-col-12');
					// Add the correct grid column class based on listings_columns
					col.classList.add(targetClass);
				}
			});
		}

		// If in list view, ensure columns are col-12 (full width)
		if (isListView) {
			columns.forEach((col) => {
				if (!col.classList.contains('directorist-col-12')) {
					col.classList.remove('directorist-col-2', 'directorist-col-3', 'directorist-col-4', 'directorist-col-6');
					col.classList.add('directorist-col-12');
				}
			});
		}
	}

	/**
	 * Find and process all archive containers on the page
	 */
	function processAllContainers() {
		const containers = document.querySelectorAll(
			'.directorist-archive-items, .directorist-gutenberg-listings-archive-contents'
		);

		containers.forEach((container) => {
			// Always re-read listings_columns from block to ensure we have the latest value
			// This is important when views change or after AJAX updates
			const listingsColumns = getListingsColumnsFromBlock(container);
			if (listingsColumns) {
				const containerId = container.id || container.className || 'default';
				const columnClass = getColumnClassFromColumns(listingsColumns);
				// Update stored column class with latest value from block
				originalColumnClasses.set(containerId, columnClass);
			} else {
				// Fallback: store original column class if not already stored
				storeOriginalColumnClass(container);
			}
			// Preserve column structure (will use the updated stored value)
			preserveColumnStructure(container);
		});
	}

	/**
	 * Initialize column preservation system
	 */
	function init() {
		// Process containers on page load
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', processAllContainers);
		} else {
			processAllContainers();
		}

		// Observe the document for new archive containers added via AJAX
		const observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				// Check for added nodes (new archive content after AJAX)
				if (mutation.addedNodes.length > 0) {
					mutation.addedNodes.forEach(function(node) {
						if (node.nodeType === 1) { // Element node
							// Check if this is the archive container or contains it
							if (node.classList && (
								node.classList.contains('directorist-archive-items') ||
								node.classList.contains('directorist-gutenberg-listings-archive-contents') ||
								node.querySelector('.directorist-archive-items') ||
								node.querySelector('.directorist-gutenberg-listings-archive-contents')
							)) {
								// Small delay to ensure DOM is fully updated
								setTimeout(function() {
									processAllContainers();
								}, 50);
							}
						}
					});
				}
			});
		});

		// Observe the document body for changes
		if (document.body) {
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
		}

		// Run after AJAX reloads
		window.addEventListener('directorist-instant-search-reloaded', function() {
			// Use setTimeout to ensure DOM is updated
			setTimeout(function() {
				processAllContainers();
			}, 150);
		});

		// Also listen for the reload map event
		window.addEventListener('directorist-reload-listings-map-archive', function() {
			setTimeout(function() {
				processAllContainers();
			}, 150);
		});
	}

	// Export functions for use in other modules
	window.directoristPreserveColumnStructure = {
		init: init,
		preserve: preserveColumnStructure,
		store: storeOriginalColumnClass,
		processAll: processAllContainers
	};

	// Auto-initialize
	init();
})();

