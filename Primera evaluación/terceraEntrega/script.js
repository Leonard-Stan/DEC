
var valorInicialEj3 =0;


    function ejercicio1()
    {
        alert("estás encima de un hipervínculo");
    }

    function redireccion()
    {
        window.open("ejercicio2.html");
    }


document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  
    
  
    ejercicio2();
});

function ejercicio2() {
  
    const dni = document.getElementById('dni').value;
    if(dni=="")
    {
        alert("No se ha introducido el dni");
    }
    else
    {
        document.getElementById('resultado').innerText = 'El DNI ingresado es: ' + dni;
    }
   
}


var sumatotal = 0;
var texto = document.getElementById("numero");
texto.value ="0";

    function ejercicio3()
    {
        sumatotal+=10;
        texto=sumatotal;
    }

    function inicializar()
    {
        texto ="0";
    }


