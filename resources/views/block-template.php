<?php

if ( ! defined( 'ABSPATH' ) ) exit;

use Directorist\Helper;

$template = get_post( $template_id );

$is_featured = Helper::is_featured( get_the_ID() );
$class       = 'directorist-gutenberg-blocks-wrap';

if ( strval( $is_featured ) === '1' ) {
	$class .= ' directorist-gutenberg-listing-is-featured';
}

wp_enqueue_script_module( 'directorist-gutenberg/blocks-frontend' );
?>

<div class="<?php echo esc_attr( $class ); ?>">
	<?php echo do_blocks( $template->post_content ); ?>
</div>