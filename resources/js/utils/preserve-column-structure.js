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

		// If no grid column found, check if we're in grid view and set default
		const isGridView = archiveContainer.classList.contains('directorist-archive-grid-view') ||
			archiveContainer.querySelector('.directorist-archive-grid-view');

		if (isGridView) {
			// Default to col-4 for grid view (3 columns per row)
			originalColumnClasses.set(containerId, 'directorist-col-4');
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

		// If in grid view and columns are col-12, restore grid columns
		if (isGridView && columns.length > 1) {
			const allCol12 = columns.every(col => col.classList.contains('directorist-col-12'));

			if (allCol12) {
				const containerId = archiveContainer.id || archiveContainer.className || 'default';
				// Use stored original class or default to col-4
				const targetClass = originalColumnClasses.get(containerId) || 'directorist-col-4';

				columns.forEach((col) => {
					// Remove all column classes
					col.classList.remove('directorist-col-2', 'directorist-col-3', 'directorist-col-4', 'directorist-col-6', 'directorist-col-12');
					// Add the correct grid column class
					col.classList.add(targetClass);
				});
			}
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
			// Store original column class if not already stored
			storeOriginalColumnClass(container);
			// Preserve column structure
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

