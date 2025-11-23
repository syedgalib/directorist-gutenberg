<?php

namespace DirectoristGutenberg\Database;

defined( 'ABSPATH' ) || exit;

use DirectoristGutenberg\WpMVC\Database\Schema\Schema;

class Setup {
    public function execute() {
        // Schema::create(
        //     'wpmvc_test', function( $table ) {
        //         $table->big_increments( 'id' );
        //         $table->string( 'title' )->nullable();
        //         $table->timestamps();
        //     }
        // );

        Schema::create(
            'directorist_gutenberg_ai_chat_messages', function( $table ) {
                $table->big_increments( 'id' );
                $table->unsigned_big_integer( 'template_id' );
                $table->string( 'role' );
                $table->text( 'message' );
                $table->text( 'template' )->nullable();
                $table->timestamps();
                $table->index( 'template_id' );
            }
        );
    }
}