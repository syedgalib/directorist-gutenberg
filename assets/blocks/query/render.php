<?php

defined( 'ABSPATH' ) || exit;

// Generate unique query ID if not set
$query_id = isset( $attributes['queryId'] ) ? $attributes['queryId'] : uniqid( 'query-' );

// Build wrapper attributes with router region for AJAX pagination
$wrapper_attributes = get_block_wrapper_attributes( [
	'class'                 => 'directorist-query-block',
	'data-wp-interactive'   => 'directorist-gutenberg/query',
	'data-wp-router-region' => 'query-' . $query_id,
	'data-wp-context'       => wp_json_encode([
		'queryId'         => $query_id,
		'directoryTypeId' => $attributes['directory_type_id'],
		'perPage'         => $attributes['per_page']
	])
] );

?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
