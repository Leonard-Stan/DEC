<?php

if ($_SERVER["CONTENT_TYPE"] === "application/xml") {

    $xmlData = file_get_contents("php://input");

 
    $xml = simplexml_load_string($xmlData);

    if ($xml) {
      
        $respuesta = "Datos recibidos desde XML:<br>";
        foreach ($xml->children() as $clave => $valor) {
            $respuesta .= htmlspecialchars("$clave: $valor") . "<br>";
        }
        echo $respuesta;
    } else {
        echo "Error al procesar el XML recibido.";
    }
} else {
    echo "El contenido enviado no es XML.";
}
?>
