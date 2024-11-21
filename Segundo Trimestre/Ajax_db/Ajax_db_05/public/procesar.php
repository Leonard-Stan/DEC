<?php

if ($_SERVER["CONTENT_TYPE"] === "application/json") {

    $jsonData = file_get_contents("php://input");

    $data = json_decode($jsonData, true);

    if ($data) {
    
        $respuesta = "Datos recibidos desde JSON:<br>";
        foreach ($data as $clave => $valor) {
            if (is_array($valor)) {
                $respuesta .= htmlspecialchars("$clave: ") . implode(", ", $valor) . "<br>";
            } else {
                $respuesta .= htmlspecialchars("$clave: $valor") . "<br>";
            }
        }
        echo $respuesta;
    } else {
        echo "Error al procesar el JSON recibido.";
    }
} else {
    echo "El contenido enviado no es JSON.";
}
?>
