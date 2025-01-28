function ejercicio12() {
    var numeros = [120, 50, 200, 80, 150];
    var suma = numeros.reduce(function (a, b) { return a + b; }, 0);
    var mayoresDe100 = numeros.filter(function (num) { return num > 100; }).length;
    console.log("Suma de los n\u00FAmeros: ".concat(suma));
    console.log("Cantidad de n\u00FAmeros mayores de 100: ".concat(mayoresDe100));
}
function calcularIva2(precio) {
    var iva = 0.21;
    var precioConIva = precio + precio * iva;
    return precioConIva.toFixed(2);
}
function ejercicio22() {
    var precioArticulo = 100;
    var precioFinal = calcularIva2(precioArticulo);
    console.log("Precio final con IVA: ".concat(precioFinal));
}
function ejercicio32() {
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var boton = document.createElement("button");
    var resultado = document.createElement("div");
    input1.type = "number";
    input2.type = "number";
    boton.textContent = "Sumar";
    boton.addEventListener("click", function () {
        var num1 = parseFloat(input1.value);
        var num2 = parseFloat(input2.value);
        resultado.textContent = "Resultado: ".concat(num1 + num2);
    });
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(boton);
    document.body.appendChild(resultado);
}



var Alumno2 = /** @class */ (function () {
    function Alumno2(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno2.prototype.mostrarDatos = function () {
        return "Mi nombre es ".concat(this.nombre, "\nTengo ").concat(this.edad, " a\u00F1os\nEstoy en ").concat(this.curso);
    };
    return Alumno2;
}());


var Curso2 = /** @class */ (function () {
    function Curso2(descripcion) {
        this.descripcion = descripcion;
    }
    Curso2.prototype.combinarConAlumno = function (alumno) {
        var mensaje = "".concat(alumno.mostrarDatos(), " ").concat(this.descripcion);
        alert(mensaje);
    };
    return Curso2;
}());
function ejercicio4y52() {
    var alumno = new Alumno2("Adrian Stan", 21, "2CFSJ");
    var curso = new Curso2(" curso de grado superior de DAW");
    curso.combinarConAlumno(alumno);
}
ejercicio4y52();
/*
ejercicio12();
ejercicio22();
ejercicio32();
*/