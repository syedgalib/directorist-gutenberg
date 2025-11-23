<?php

namespace DirectoristGutenberg\App\Models;

defined( 'ABSPATH' ) || exit;

use DirectoristGutenberg\WpMVC\App;
use DirectoristGutenberg\WpMVC\Database\Eloquent\Model;
use DirectoristGutenberg\WpMVC\Database\Resolver;

class AIChatMessage extends Model {
    public static function get_table_name(): string {
        return 'directorist_gutenberg_ai_chat_messages';
    }

    public function resolver(): Resolver {
        return App::$container->get( Resolver::class );
    }
}

