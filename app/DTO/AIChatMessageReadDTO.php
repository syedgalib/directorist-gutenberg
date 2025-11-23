<?php

namespace DirectoristGutenberg\App\DTO;

defined( "ABSPATH" ) || exit;

use DirectoristGutenberg\WpMVC\DTO\DTO;

class AIChatMessageReadDTO extends DTO {
    private int $template_id;
    private int $page = 1;
    private int $per_page = 10;

    public function get_template_id(): int {
        return $this->template_id;
    }

    public function set_template_id( int $template_id ): self {
        $this->template_id = $template_id;
        return $this;
    }

    public function get_page(): int {
        return $this->page;
    }

    public function set_page( int $page ): self {
        $this->page = $page;
        return $this;
    }

    public function get_per_page(): int {
        return $this->per_page;
    }

    public function set_per_page( int $per_page ): self {
        $this->per_page = $per_page;
        return $this;
    }
}

