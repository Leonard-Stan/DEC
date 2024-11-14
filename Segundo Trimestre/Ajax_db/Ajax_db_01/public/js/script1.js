// script1.js
document.addEventListener("DOMContentLoaded", function () {

    // Definir la función showCustomer
    function showCustomer(str) {
        if (str === "") {
            document.getElementById("txtHint").innerHTML = "";
            return;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "personas.php?q=" + str, true);
        xhttp.send();
    }

    // Hacer que la función esté disponible globalmente
    window.showCustomer = showCustomer; // Esto hace que la función esté accesible globalmente
});
