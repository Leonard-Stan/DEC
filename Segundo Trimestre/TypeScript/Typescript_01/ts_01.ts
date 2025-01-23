
function ejercicio12() {
    const numeros: number[] = [120, 50, 200, 80, 150];
    const suma = numeros.reduce((a, b) => a + b, 0);
    const mayoresDe100 = numeros.filter(num => num > 100).length;

    console.log(`Suma de los números: ${suma}`);
    console.log(`Cantidad de números mayores de 100: ${mayoresDe100}`);
}


function calcularIva2(precio: number): string {
    const iva = 0.21; 
    const precioConIva = precio + precio * iva;
    return precioConIva.toFixed(2); 
}

function ejercicio22() {
    const precioArticulo = 100; 
    const precioFinal = calcularIva(precioArticulo);
    console.log(`Precio final con IVA: ${precioFinal}`);
}


function ejercicio32() {
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const boton = document.createElement("button");
    const resultado = document.createElement("div");

    input1.type = "number";
    input2.type = "number";
    boton.textContent = "Sumar";

    boton.addEventListener("click", () => {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        resultado.textContent = `Resultado: ${num1 + num2}`;
    });

    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(boton);
    document.body.appendChild(resultado);
}

class Alumno2 {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarDatos(): string {
        return `Mi nombre es ${this.nombre}\nTengo ${this.edad} años\nEstoy en ${this.curso}`;
    }
}

class Curso2 {
    descripcion: string;

    constructor(descripcion: string) {
        this.descripcion = descripcion;
    }

    combinarConAlumno(alumno: Alumno2): void {
        const mensaje = `${alumno.mostrarDatos()} ${this.descripcion}`;
        alert(mensaje);
    }
}

function ejercicio4y52() {
    const alumno = new Alumno("Adrian Stan", 21, "2CFSJ");
    const curso = new Curso(" curso de grado superior de DAW");
    curso.combinarConAlumno(alumno);
}


ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4y5();
