<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST["nombre"] ?? "No definido");
    $edad = htmlspecialchars($_POST["edad"] ?? "No definido");


    echo "Hola, $nombre. Tienes $edad años.";
} else {
    echo "No se recibieron datos válidos.";
}
?>
