// ARRAYS

// Metodos de array avanzados como map, filter, find y mas.

// MAP:
// Nos permite transformar cada elemento de un array en otro nuevo
// aplica una funcion de transformacion a cada elemento

// Es ideal para realizar operaciones como cambiar el formato de datos
// aplicar calculos o crear nuevos arrays a partir del original

const numeros = [1, 2, 3, 4, 5];

const numerosAlCuadrado = numeros.map((numero) => {
    return numero * numero;
});

console.log("Números al cuadrado:", numerosAlCuadrado);

// FILTER:
// Crea un nuevo array con los que cumplen una condición
// Ideal para filtrar datos, eliminar elementos no deseados.

const numbers = [10, 15, 20, 25, 30];

const numerosPares = numbers.filter((numero) => {
    return numero % 2 === 0;    
});
console.log("Números pares:", numerosPares);

// FIND:
// Devuelve el primer elemento que cumple con una condición.

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Agos", edad: 21 },
    { nombre: "Pedro", edad: 30 }
];

const personaMayorDe25 = personas.find((persona) => {
    return persona.edad > 25;
});

console.log("Primera persona mayor de 25:", personaMayorDe25);

// REDUCE:
// Itera sobre un array y combina sus elementos en un solo valor
// Ideal para calcular suma, promedio, concatenar strings.

const valores = [1, 2, 3, 4, 5];

const sumaTotal = valores.reduce((acumulador, valorActual) => {
    console.log("Acumulador:", acumulador, "Valor Actual:", valorActual);
    return acumulador + valorActual;
}, 0);

// SOME Y EVERY:
// Some: Verifica si al menos un elemento cumple una condición
// Every: Verifica si todos los elementos cumplen una condición
// Retornan true o false

const paises = [
    { nombre: "Argentina", idioma: "Español" },
    { nombre: "Brasil", idioma: "Portugués" },
    { nombre: "Chile", idioma: "Español" }
];

const seHablaPortugues = paises.some(pais => pais.idioma === "Portugués");
console.log("¿Se habla portugués en algún país?", seHablaPortugues);

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Smartphone", precio: 1100 },
    { nombre: "Tablet", precio: 890 }
];

const todosSonCaros = productos.every((producto) => producto.precio >= 1000);
console.log("¿Todos los productos son caros?", todosSonCaros);