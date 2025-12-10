<?php

defined( 'ABSPATH' ) || exit;

// Get context from parent query block
$query_id = isset( $block->context['directorist-gutenberg/queryId'] ) ? $block->context['directorist-gutenberg/queryId'] : null;
$directory_type_id = isset( $block->context['directorist-gutenberg/directoryTypeId'] ) ? $block->context['directorist-gutenberg/directoryTypeId'] : 0;
$per_page = isset( $block->context['directorist-gutenberg/perPage'] ) ? $block->context['directorist-gutenberg/perPage'] : 10;

// Return early if no context
if ( ! $query_id ) {
	return '';
}

// Get current page
$paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

// Build query args
$query_args = [
	'post_type'      => 'at_biz_dir',
	'posts_per_page' => $per_page,
	'paged'          => $paged,
	'post_status'    => 'publish',
];

// Add directory type filter if specified
if ( $directory_type_id > 0 ) {
	$query_args['meta_query'] = [
		[
			'key'     => '_directory_type',
			'value'   => $directory_type_id,
			'compare' => '=',
		],
	];
}

// Execute query
$query = new WP_Query( $query_args );

// Store query in global for pagination
global $directorist_query_loop_queries;
if ( ! isset( $directorist_query_loop_queries ) ) {
	$directorist_query_loop_queries = [];
}
$directorist_query_loop_queries[ $query_id ] = $query;

// Build wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'directorist-query-loop-template'
]);

// Render loop
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php
	if ( false || $query->have_posts() ) :
		while ( $query->have_posts() ) :
			$query->the_post();
			
			// Create a new block instance for each post with context
			$block_instance = clone $block;
			$block_instance->context['postId'] = get_the_ID();
			$block_instance->context['postType'] = get_post_type();
			
			?>
			<div class="directorist-query-loop-item" data-post-id="<?php echo esc_attr( get_the_ID() ); ?>">
				<?php
				// Render inner blocks for this post
				foreach ( $block->parsed_block['innerBlocks'] as $inner_block ) {
					echo render_block( $inner_block );
				}
				?>
			</div>
			<?php
		endwhile;
		wp_reset_postdata();
	else :
		?>
		<div class="directorist-query-no-results">
			<p><?php esc_html_e( 'No listings found.', 'directorist-gutenberg' ); ?></p>
		</div>
		<?php
	endif;
	?>
</div>
<?php
