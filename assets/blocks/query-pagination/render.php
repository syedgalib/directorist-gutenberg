<?php

defined('ABSPATH') || exit;

// Get context from parent query block
$query_id = isset($block->context['directorist-gutenberg/queryId']) ? $block->context['directorist-gutenberg/queryId'] : null;

// Return early if no context
if ( ! $query_id ) {
	return '';
}

// Get the query from global storage
global $directorist_query_loop_queries;

$query = isset($directorist_query_loop_queries[$query_id]) ? $directorist_query_loop_queries[$query_id] : null;

if ( ! $query || ! $query->have_posts() ) {
	return '';
}

// Get attributes
$show_label  = isset($attributes['showLabel']) ? $attributes['showLabel'] : true;
$show_arrows = isset($attributes['showArrows']) ? $attributes['showArrows'] : true;

$query_args = wp_parse_args( $_SERVER['QUERY_STRING'] );
$paged      = isset( $query_args["query-{$query_id}-page"] ) ? $query_args["query-{$query_id}-page"] : 1;

// Get pagination data
$current_page = max( 1, $paged );
$max_pages    = $query->max_num_pages;

// Don't show pagination if only one page
if ( $max_pages <= 1 ) {
	return '';
}

$range = 2; // Number of pages to show before and after current
$start = max( 1, $current_page - $range );
$end   = min( $max_pages, $current_page + $range );

// Build wrapper attributes with Interactivity API data
$wrapper_attributes = get_block_wrapper_attributes( [
	'class'               => 'directorist-query-pagination',
	'aria-label'          => 'Listings Pagination',
	'data-wp-interactive' => 'directorist-gutenberg/query',
	'data-wp-context'     => wp_json_encode( [
		'queryId'   => $query_id,
		'isLoading' => false,
	] )
] );


if ( ! function_exists( 'get_pagination_link' ) ) {
	function get_pagination_link( $query_id, $page ) {
		return add_query_arg( [ "query-{$query_id}-page" => $page ], get_permalink() );
	}
}
?>
<nav <?php echo $wrapper_attributes; ?>>
	<?php if ( $current_page > 1 ): ?>
	<a href="<?php echo esc_url( get_pagination_link( $query_id, $current_page - 1 ) ); ?>" class="prev page-numbers" data-wp-on--click="actions.paginate">
		<span class="directorist-query-pagination--icon">
			<?php echo directorist_gutenberg_get_icon( 'icons/icon-library/font-awesome/angle-left.svg' ); ?>
		</span>
	</a>
	<?php endif; ?>

	<?php if ( $start > 1 ): ?>
		<a href="<?php echo esc_url( get_pagination_link( $query_id, $i ) ); ?>" class="page-numbers" data-wp-on--click="actions.paginate">1</a>

		<?php if ( $start > $range ): ?>
			<span class="pagination-dots">...</span>
		<?php endif; ?>
	<?php endif; ?>

	<?php for ( $i = $start; $i <= $end; $i++ ):
		?>
		<?php if ( absint( $i ) === absint( $current_page ) ): ?>
		<span aria-current="page" class="page-numbers current"><?php echo esc_html( $i ); ?></span>
		<?php else: ?>
		<a class="page-numbers" href="<?php echo esc_url( get_pagination_link( $query_id, $i ) ); ?>" data-wp-on--click="actions.paginate">
			<?php echo esc_html( $i ); ?>
		</a>
		<?php endif; ?>
	<?php endfor; ?>

	<?php if ( $current_page < $max_pages ) : ?>
	<a class="next page-numbers" href="<?php echo esc_url( get_pagination_link( $query_id, $current_page + 1 ) ); ?>" data-wp-on--click="actions.paginate">
		<span class="directorist-query-pagination--icon">
			<?php echo directorist_gutenberg_get_icon( 'icons/icon-library/font-awesome/angle-right.svg' ); ?>
		</span>
	</a>
	<?php endif; ?>
</nav>
