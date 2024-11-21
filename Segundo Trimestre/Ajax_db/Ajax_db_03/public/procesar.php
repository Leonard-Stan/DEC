<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST["nombre"] ?? "No definido");
    $edad = htmlspecialchars($_POST["edad"] ?? "No definido");

    echo "Parámetros recibidos: Nombre = $nombre, Edad = $edad";
} else {
    echo "No se recibieron datos válidos.";
}
?>
