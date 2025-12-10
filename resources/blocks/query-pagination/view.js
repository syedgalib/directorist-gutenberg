/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

store('directorist-gutenberg/query', {
	actions: {
		*navigate(event) {
			event.preventDefault();
			
			const context = getContext();
			const { ref } = getElement();
			const url = ref.getAttribute('href');
			
			if (!url || context.isLoading) {
				return;
			}
			
			// Set loading state
			context.isLoading = true;
			
			try {
				// Fetch new content
				const response = yield fetch(url, {
					headers: {
						'X-Requested-With': 'XMLHttpRequest'
					}
				});
				
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				
				const html = yield response.text();
				
				// Parse the HTML response
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');
				
				// Find the query region to update
				const regionSelector = `[data-wp-router-region="query-${context.queryId}"]`;
				const newRegion = doc.querySelector(regionSelector);
				const currentRegion = document.querySelector(regionSelector);
				
				if (newRegion && currentRegion) {
					// Get the new context from the updated pagination
					const newPagination = newRegion.querySelector('.directorist-query-pagination');
					if (newPagination) {
						const newContextData = newPagination.getAttribute('data-wp-context');
						if (newContextData) {
							try {
								const newContext = JSON.parse(newContextData);
								context.currentPage = newContext.currentPage;
								context.maxPages = newContext.maxPages;
							} catch (e) {
								console.error('Error parsing new context:', e);
							}
						}
					}
					
					// Replace the entire region content
					currentRegion.innerHTML = newRegion.innerHTML;
					
					// Scroll to top of the query block
					currentRegion.scrollIntoView({ 
						behavior: 'smooth', 
						block: 'start' 
					});
					
					// Update URL without reload
					window.history.pushState({}, '', url);
					
					// Dispatch custom event for other scripts
					window.dispatchEvent(new CustomEvent('directorist-query-pagination-updated', {
						detail: {
							queryId: context.queryId,
							page: context.currentPage,
							url: url
						}
					}));
				} else {
					console.error('Could not find query region in response');
				}
			} catch (error) {
				console.error('Error fetching page:', error);
				// Fallback to normal navigation
				window.location.href = url;
			} finally {
				// Reset loading state
				context.isLoading = false;
			}
		}
	}
});
