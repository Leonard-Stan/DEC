<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $usuario = isset($_GET['usuario']) ? $_GET['usuario'] : '';
    $clave = isset($_GET['clave']) ? $_GET['clave'] : '';

    if ($usuario === 'pepe' && $clave === '123456') {
        echo "Usuario correcto";
    } else {
        echo "Usuario incorrecto";
    }
} else {
    echo "Método no permitido.";
}
?>
