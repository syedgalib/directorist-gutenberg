import domReady from '@wordpress/dom-ready';

import { getLocalizedBlockDataByKey } from '@directorist-gutenberg/utils/localized-data';

domReady( () => {
    const allTemplatesUrl = getLocalizedBlockDataByKey( 'all_templates_url' );

	const updateLink = () => {
		const button = document.querySelector( '.edit-post-fullscreen-mode-close' );
		
        if ( button && button.getAttribute( 'href' ) !== allTemplatesUrl ) {
			button.setAttribute( 'href', allTemplatesUrl );
		}
	};

	// Initial check
	updateLink();

	// Watch for changes in the header (where the button lives)
	// The button is usually in .edit-post-header or .interface-interface-skeleton__header
	const observer = new MutationObserver( ( ) => {
		updateLink();
	} );

	const headerContainer = document.querySelector( '.interface-interface-skeleton' ) || document.body;

	if ( headerContainer ) {
		observer.observe( headerContainer, {
			childList: true,
			subtree: true,
		} );
	}
} );

