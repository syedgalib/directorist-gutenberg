<?php

namespace DirectoristGutenberg\App\Http\Controllers;

defined( "ABSPATH" ) || exit;

use DirectoristGutenberg\App\DTO\AIChatMessageCreateDTO;
use DirectoristGutenberg\App\DTO\AIChatMessageReadDTO;
use DirectoristGutenberg\App\Repositories\AIChatMessageRepository;
use DirectoristGutenberg\WpMVC\Exceptions\Exception;
use DirectoristGutenberg\WpMVC\RequestValidator\Validator;
use DirectoristGutenberg\WpMVC\Routing\Response;
use WP_REST_Request;

class AIChatMessageController extends Controller {

    public AIChatMessageRepository $repository;

    public function __construct( AIChatMessageRepository $repository ) {
        $this->repository = $repository;
    }

    public function store( Validator $validator, WP_REST_Request $request ): array {
        $validator->validate(
            [
                'template_id' => 'required|numeric',
                'role'        => 'required|string',
                'message'     => 'required|string',
                'template'    => 'string',
            ]
        );

        $template = get_post( $request->get_param( 'template_id' ) );
        
        if ( ! $template ) {
            throw new Exception( esc_html__( 'Template not found.', 'directorist-gutenberg' ), 404 );
        }

        if ( $template->post_type !== directorist_gutenberg_post_type() ) {
            throw new Exception( esc_html__( 'Invalid template.', 'directorist-gutenberg' ), 400 );
        }

        $role = $request->get_param( 'role' );
        
        if ( ! in_array( $role, [ 'assistant', 'user' ] ) ) {
            throw new Exception( esc_html__( 'Invalid role. Accepted values are: assistant, user.', 'directorist-gutenberg' ), 400 );
        }

        $create_dto = ( new AIChatMessageCreateDTO() )
            ->set_template_id( $request->get_param( 'template_id' ) )
            ->set_role( $role )
            ->set_message( $request->get_param( 'message' ) )
            ->set_template( $request->get_param( 'template' ) );

        $id = $this->repository->create( $create_dto );

        return Response::send(
            [
                'id'      => $id,
                'message' => __( 'Chat message stored successfully.', 'directorist-gutenberg' ),
            ]
        );
    }

    public function index( Validator $validator, WP_REST_Request $request ): array {
        $validator->validate(
            [
                'template_id' => 'required|numeric',
                'page'        => 'numeric',
                'per_page'    => 'numeric',
            ]
        );

        $template = get_post( $request->get_param( 'template_id' ) );
        
        if ( ! $template ) {
            throw new Exception( esc_html__( 'Template not found.', 'directorist-gutenberg' ), 404 );
        }

        if ( $template->post_type !== directorist_gutenberg_post_type() ) {
            throw new Exception( esc_html__( 'Invalid template.', 'directorist-gutenberg' ), 400 );
        }

        $read_dto = ( new AIChatMessageReadDTO() )
            ->set_template_id( $request->get_param( 'template_id' ) )
            ->set_page( $request->get_param( 'page' ) ?? 1 )
            ->set_per_page( $request->get_param( 'per_page' ) ?? 10 );

        return Response::send(
            $this->repository->get( $read_dto )
        );
    }

    public function delete( Validator $validator, WP_REST_Request $request ): array {
        $validator->validate(
            [
                'template_id' => 'required|numeric',
                'chat_id'     => 'required|numeric',
            ]
        );

        $template = get_post( $request->get_param( 'template_id' ) );
        
        if ( ! $template ) {
            throw new Exception( esc_html__( 'Template not found.', 'directorist-gutenberg' ), 404 );
        }

        if ( $template->post_type !== directorist_gutenberg_post_type() ) {
            throw new Exception( esc_html__( 'Invalid template.', 'directorist-gutenberg' ), 400 );
        }

        $this->repository->delete(
            $request->get_param( 'template_id' ),
            $request->get_param( 'chat_id' )
        );

        return Response::send(
            [
                'message' => __( 'Chat message deleted successfully.', 'directorist-gutenberg' ),
            ]
        );
    }
}

