<?php

defined( 'ABSPATH' ) || exit;

// Get context from parent query block
$query_id = isset( $block->context['directorist-gutenberg/queryId'] ) ? $block->context['directorist-gutenberg/queryId'] : null;

// Return early if no context
if ( ! $query_id ) {
	return '';
}

// Get the query from global storage
global $directorist_query_loop_queries;
$query = isset( $directorist_query_loop_queries[ $query_id ] ) ? $directorist_query_loop_queries[ $query_id ] : null;

if ( ! $query || ! $query->have_posts() ) {
	return '';
}

// Get attributes
$show_label = isset( $attributes['showLabel'] ) ? $attributes['showLabel'] : true;
$show_arrows = isset( $attributes['showArrows'] ) ? $attributes['showArrows'] : true;

// Get pagination data
$current_page = max( 1, get_query_var( 'paged', 1 ) );
$max_pages = $query->max_num_pages;

// Don't show pagination if only one page
if ( $max_pages <= 1 ) {
	return '';
}

// Build wrapper attributes with Interactivity API data
$wrapper_attributes = get_block_wrapper_attributes([
	'class'               => 'directorist-query-pagination',
	'data-wp-interactive' => 'directorist-gutenberg/query',
	'data-wp-context'     => wp_json_encode([
		'queryId'     => $query_id,
		'currentPage' => $current_page,
		'maxPages'    => $max_pages,
		'isLoading'   => false
	])
]);

// Generate pagination links
?>
<nav <?php echo $wrapper_attributes; ?> aria-label="<?php esc_attr_e( 'Pagination', 'directorist-gutenberg' ); ?>">
	<div class="pagination-wrapper">
		<?php if ( $show_arrows && $current_page > 1 ) : ?>
			<a 
				href="<?php echo esc_url( get_pagenum_link( $current_page - 1 ) ); ?>"
				class="pagination-btn pagination-prev"
				data-wp-on--click="actions.navigate"
				data-wp-class--loading="context.isLoading"
				aria-label="<?php esc_attr_e( 'Previous page', 'directorist-gutenberg' ); ?>"
			>
				<span aria-hidden="true">←</span>
				<span class="screen-reader-text"><?php esc_html_e( 'Previous', 'directorist-gutenberg' ); ?></span>
			</a>
		<?php endif; ?>

		<?php if ( $show_label ) : ?>
			<div class="pagination-numbers">
				<?php
				// Calculate page range to show
				$range = 2; // Number of pages to show before and after current
				$start = max( 1, $current_page - $range );
				$end = min( $max_pages, $current_page + $range );

				// Show first page if not in range
				if ( $start > 1 ) {
					?>
					<a 
						href="<?php echo esc_url( get_pagenum_link( 1 ) ); ?>"
						class="pagination-btn pagination-number"
						data-wp-on--click="actions.navigate"
						data-wp-class--loading="context.isLoading"
					>1</a>
					<?php
					if ( $start > 2 ) {
						echo '<span class="pagination-dots">...</span>';
					}
				}

				// Show page numbers in range
				for ( $i = $start; $i <= $end; $i++ ) {
					if ( $i === $current_page ) {
						?>
						<span class="pagination-btn pagination-number current" aria-current="page"><?php echo esc_html( $i ); ?></span>
						<?php
					} else {
						?>
						<a 
							href="<?php echo esc_url( get_pagenum_link( $i ) ); ?>"
							class="pagination-btn pagination-number"
							data-wp-on--click="actions.navigate"
							data-wp-class--loading="context.isLoading"
						><?php echo esc_html( $i ); ?></a>
						<?php
					}
				}

				// Show last page if not in range
				if ( $end < $max_pages ) {
					if ( $end < $max_pages - 1 ) {
						echo '<span class="pagination-dots">...</span>';
					}
					?>
					<a 
						href="<?php echo esc_url( get_pagenum_link( $max_pages ) ); ?>"
						class="pagination-btn pagination-number"
						data-wp-on--click="actions.navigate"
						data-wp-class--loading="context.isLoading"
					><?php echo esc_html( $max_pages ); ?></a>
					<?php
				}
				?>
			</div>
		<?php endif; ?>

		<?php if ( $show_arrows && $current_page < $max_pages ) : ?>
			<a 
				href="<?php echo esc_url( get_pagenum_link( $current_page + 1 ) ); ?>"
				class="pagination-btn pagination-next"
				data-wp-on--click="actions.navigate"
				data-wp-class--loading="context.isLoading"
				aria-label="<?php esc_attr_e( 'Next page', 'directorist-gutenberg' ); ?>"
			>
				<span aria-hidden="true">→</span>
				<span class="screen-reader-text"><?php esc_html_e( 'Next', 'directorist-gutenberg' ); ?></span>
			</a>
		<?php endif; ?>
	</div>

	<div class="pagination-loading" data-wp-class--active="context.isLoading">
		<span class="spinner"></span>
	</div>
</nav>
<?php
