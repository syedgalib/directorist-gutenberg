/**
 * Formats chat history for API
 *
 * @param {Array} messages Array of message objects
 * @returns {Array} Formatted history
 */
export function formatChatHistory( messages ) {
	return messages.map( msg => ( {
		role: msg.role,
		message: msg.message,
	} ) );
}

/**
 * Gets the API URL based on template type
 *
 * @param {string} templateType Template type
 * @param {string} baseApiUrl Base API URL
 * @returns {string} API URL
 */
export function getApiUrl( templateType, baseApiUrl ) {
	const baseAPIURL = `${ baseApiUrl }/directorist/template/gutenberg/generate`;
	const listingsArchiveItemAPIURL = `${ baseAPIURL }/listings-archive-item`;

	const apiURLs = {
		'listings-archive': `${ baseAPIURL }/listings-archive`,
		'listings-archive-grid-view': listingsArchiveItemAPIURL,
		'listings-archive-list-view': listingsArchiveItemAPIURL,
	};

	return apiURLs[ templateType ] || baseAPIURL;
}

/**
 * Prepares API data for request
 *
 * @param {Object} params Parameters
 * @param {string} params.templateType Template type
 * @param {string} params.instruction User instruction
 * @param {string} params.currentTemplate Current template JSON
 * @param {number} params.directoryTypeId Directory type ID
 * @param {number} params.templateId Template ID
 * @param {Array} params.history Chat history
 * @param {Array} params.availableCustomFields Available custom fields
 * @returns {Object} API data object
 */
export function prepareApiData( {
	templateType,
	instruction,
	currentTemplate,
	directoryTypeId,
	templateId,
	history,
	availableCustomFields = []
} ) {
	const apiData = {
		template_type: templateType,
		instruction: instruction,
		current_template: currentTemplate,
		dynamic_identifiers: {
			directory_type_id: directoryTypeId,
			template_id: templateId,
		},
		history: history,
	};

	const listingsArchiveItemViews = [ 'listings-archive-grid-view', 'listings-archive-list-view' ];

	if ( listingsArchiveItemViews.includes( templateType ) ) {
		apiData.directory_type_id = directoryTypeId;
		apiData.available_custom_fields = availableCustomFields;
		apiData.view_type = templateType === 'listings-archive-grid-view' ? 'grid_view' : 'list_view';
	}

	return apiData;
}

