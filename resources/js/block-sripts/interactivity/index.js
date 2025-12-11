/**
 * WordPress dependencies
 */
import { store, getContext, getElement, navigate } from '@wordpress/interactivity';

store( 'directorist-gutenberg/query', {
	state: {
		get isLoading() {
			const context = getContext();
			return context.isLoading || false;
		}
	},
	actions: {
		*paginate(event) {
			event.preventDefault();
			
			const context = getContext();
			const { ref } = getElement();
			const url     = ref.getAttribute('href');
			
			if ( ! url || context.isLoading ) {
				return;
			}
			
			// Set loading state
			context.isLoading = true;
			
			try {
				// Use the Interactivity API's built-in navigate function
				// This properly handles client-side navigation and re-hydration
                const { actions } = yield import( '@wordpress/interactivity-router' );

                yield actions.navigate( url );
			} catch (error) {
				console.error('Error during navigation:', error);
				// Fallback to normal navigation if Interactivity API navigate fails
				window.location.href = url;
			} finally {
				// Reset loading state
				context.isLoading = false;
			}
		}
	}
});
