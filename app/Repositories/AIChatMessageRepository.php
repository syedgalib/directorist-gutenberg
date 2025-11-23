<?php

namespace DirectoristGutenberg\App\Repositories;

defined( "ABSPATH" ) || exit;

use DirectoristGutenberg\App\DTO\AIChatMessageCreateDTO;
use DirectoristGutenberg\App\DTO\AIChatMessageReadDTO;
use DirectoristGutenberg\App\Models\AIChatMessage;
use DirectoristGutenberg\WpMVC\Exceptions\Exception;

class AIChatMessageRepository {

    public function create( AIChatMessageCreateDTO $dto ) {
        $id = AIChatMessage::query()->insert_get_id( [
            'template_id' => $dto->get_template_id(),
            'role'        => $dto->get_role(),
            'message'     => $dto->get_message(),
            'template'    => $dto->get_template(),
            'created_at'  => current_time( 'mysql' ),
            'updated_at'  => current_time( 'mysql' ),
        ] );

        if ( ! $id ) {
            throw new Exception( esc_html__( 'Failed to create chat message.', 'directorist-gutenberg' ), 500 );
        }

        return $id;
    }

    public function get( AIChatMessageReadDTO $dto ): array {
        $query = AIChatMessage::query()
            ->where( 'template_id', $dto->get_template_id() )
            ->order_by( 'created_at', 'desc' );

        $count_query = clone $query;
        $count       = $count_query->count();

        return [
            'items' => $query->pagination( $dto->get_page(), $dto->get_per_page(), 1, 100 ),
            'total' => $count,
        ];
    }

    public function delete( int $template_id, int $chat_id ) {
        $deleted = AIChatMessage::query()
            ->where( 'id', $chat_id )
            ->where( 'template_id', $template_id )
            ->delete();

        if ( ! $deleted ) {
            throw new Exception( esc_html__( 'Chat message not found or could not be deleted.', 'directorist-gutenberg' ), 404 );
        }

        return $deleted;
    }
}

