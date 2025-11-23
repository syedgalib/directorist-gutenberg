<?php

defined( 'ABSPATH' ) || exit;

use DirectoristGutenberg\App\Http\Controllers\TemplateController;
use DirectoristGutenberg\App\Http\Controllers\AIChatMessageController;
use DirectoristGutenberg\WpMVC\Routing\Route;

Route::group( 'admin', function() {
    Route::group( 'templates', function() {
        Route::get( '/', [ TemplateController::class, 'index' ] );
        Route::get( '/directories', [ TemplateController::class, 'directories' ] );
        Route::post( '/create-single', [ TemplateController::class, 'create_single_template' ] );
        Route::post( '/create-all', [ TemplateController::class, 'create_all_templates' ] );
        Route::delete( '/bulk-delete', [ TemplateController::class, 'bulk_delete' ] );
        Route::delete( '/delete-by', [ TemplateController::class, 'delete_by' ] );

        Route::group( '/{template_id}/ai-chats', function() {
            Route::get( '/', [ AIChatMessageController::class, 'index' ] );
            Route::post( '/', [ AIChatMessageController::class, 'store' ] );
            Route::delete( '/{chat_id}', [ AIChatMessageController::class, 'delete' ] );
        } );

        Route::delete( '/{id}', [ TemplateController::class, 'delete' ] );
    } );
}, [ 'admin' ] );





