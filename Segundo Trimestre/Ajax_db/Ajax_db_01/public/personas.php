<?php
// Habilitar errores para depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Datos de conexión
$servername = "localhost";   
$username = "root";         
$password = "sa";              
$dbname = "ajax"; 



// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);



// Comprobar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}



// Verificar si se ha pasado el parámetro q
if (isset($_GET['q'])) {$id = intval($_GET['q']); // Convertir a entero para evitar inyección SQL

    // Preparar la consulta SQL
    $sql = "SELECT * FROM personas WHERE id = ?";
    $stmt = $conn->prepare($sql); // Usar $conn en lugar de $mysqli

    // Verificar si la preparación fue exitosa
    if ($stmt === false) {
        die('Error en la preparación de la consulta: ' . $conn->error);
    }

    // Vincular los parámetros y ejecutar la consulta
    $stmt->bind_param("i", $id); // El tipo 'i' es para un entero
    $stmt->execute();
    // Vincular las variables para obtener los resultados
    $stmt->bind_result($id, $name, $surename, $email);
    $stmt->fetch();

    // Verificar si se encontraron resultados
    if ($id) {
        echo "<table>";
        echo "<tr><th>CustomerID</th><td>" . $id . "</td></tr>";
        echo "<tr><th>Name</th><td>" . $name . "</td></tr>";
        echo "<tr><th>Surname</th><td>" . $surename . "</td></tr>";
        echo "<tr><th>Email</th><td>" . $email . "</td></tr>";
        echo "</table>";
    } else {
        echo "No se encontraron resultados.";
    }

    // Cerrar la declaración y la conexión
    $stmt->close();
} else {
    echo "Falta el parámetro 'q'.";
}

// Cerrar la conexión
$conn->close();
?>
