<?php

if (isset($_GET['nombre'])) {
   
    $nombre = htmlspecialchars($_GET['nombre']); 
    echo "Hola, " . $nombre . ", saludado";
} else {
    echo "ningún nombre";
}
?>
