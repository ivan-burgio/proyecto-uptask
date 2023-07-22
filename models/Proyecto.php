<?php

namespace Model;

class Proyecto extends ActiveRecord {
    protected static $tabla = 'proyecto';
    protected static $columnasDB = ['id', 'proyecto', 'url', 'propietarioId'];

    public function __construct($args = []) {
        $this->id = $args['id'] ?? null;
        $this->proyecto = $args['proyecto'] ?? '';
        $this->url = $args['url'] ?? '';
        $this->propietarioId = $args['propietarioId'] ?? '';
    }

    public function validarProyecto() {
        if(!$this->proyecto) {
            self::$alertas['error'][] = 'Ingrese un nombre para el proyecto';
        }

        return self::$alertas;
    }
}