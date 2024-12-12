<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : 'Invitado';
    $apellido = isset($_POST['apellido']) ? $_POST['apellido'] : 'Desconocido';

    echo "Hola, $nombre $apellido. Los parámetros se han recibido correctamente.";
} else {
    echo "Error: La solicitud no es válida.";
}
?>
