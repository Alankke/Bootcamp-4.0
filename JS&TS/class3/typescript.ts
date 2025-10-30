//TYPESCRIPT
// Un superconjunto de JavaScript que añade tipado estático al lenguaje.

// Variables, funciones y objetos deben tener un tipo de dato asignado.
// Permite al compilador detectar errores de tipografía y logica
// durante la fase de compilación, antes de que el codigo se ejecute.

// TypeScript se compila a JavaScript puro.

// Este proceso se realiza mediante un compilador.
// Compilador oficial de TypeScript de Microsoft o el compilador de WebPack.

// Sintaxis básica:
let nombre: string;

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let object: {
    nombre: string,
    edad: number,
    tieneTrabajo: boolean
};