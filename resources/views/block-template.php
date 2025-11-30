<?php

if ( ! defined( 'ABSPATH' ) ) exit;

use Directorist\Helper;

$template = get_post( $template_id );

$listing_id  = get_the_ID();
$is_featured = Helper::is_featured( $listing_id );
$is_new      = Helper::is_new( $listing_id );
$is_popular  = Helper::is_popular( $listing_id );

$favourites  = directorist_get_user_favorites( get_current_user_id() );
$is_favorite = in_array( $listing_id, $favourites );

$class       = 'directorist-gutenberg-blocks-wrap';

if ( strval( $is_featured ) === '1' ) {
	$class .= ' directorist-gutenberg-listing-is-featured';
}

if ( $is_new ) {
	$class .= ' directorist-gutenberg-listing-is-new';
}

if ( $is_popular ) {
	$class .= ' directorist-gutenberg-listing-is-popular';
}

if ( $is_favorite ) {
	$class .= ' directorist-gutenberg-listing-is-favorite';
}

wp_enqueue_script_module( 'directorist-gutenberg/blocks-frontend' );
?>

<div class="<?php echo esc_attr( $class ); ?>">
	<?php echo do_blocks( $template->post_content ); ?>
</div>