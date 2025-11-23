<?php

namespace DirectoristGutenberg\App\DTO;

defined( "ABSPATH" ) || exit;

use DirectoristGutenberg\WpMVC\DTO\DTO;

class AIChatMessageCreateDTO extends DTO {
    private int $template_id;
    private string $role;
    private string $message;
    private ?string $template = null;

    public function get_template_id(): int {
        return $this->template_id;
    }

    public function set_template_id( int $template_id ): self {
        $this->template_id = $template_id;
        return $this;
    }

    public function get_role(): string {
        return $this->role;
    }

    public function set_role( string $role ): self {
        $this->role = $role;
        return $this;
    }

    public function get_message(): string {
        return $this->message;
    }

    public function set_message( string $message ): self {
        $this->message = $message;
        return $this;
    }

    public function get_template(): ?string {
        return $this->template;
    }

    public function set_template( ?string $template ): self {
        $this->template = $template;
        return $this;
    }
}
