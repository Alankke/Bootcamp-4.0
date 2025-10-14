// Javascript no es un lenguaje fuertemente tipado, por eso es que las variables
// se pueden declarar sin un tipo de dato especifico.

// Variables

//Alcance de bloque, palabra reservada let
let nombre; 
let edad;

nombre = "Alan";
edad = 21;

nombre = 31; // No hay error, porque no es fuertemente tipado, pero no es buena práctica

// Alcance global, palabra reservada var
var pais = "Argentina";

//Tipos primitivos
// Number
let numero = 10; // Enteros o racionales. Mismas operaciones que matemática.

// String 
let cadena = "Hola mundo"; // Cadenas de caracteres

// Boolean
let verdadero = true; // Valores lógicos

// Undefinded
let sinValor; // Valor por defecto es undefined. Indica que no tiene valor

// Null
let nulo = null; // Representa la ausencia intencional de cualquier valor

// Arrays
let paises =  [pais, "Brasil", "Chile", "Uruguay"];

let arreglo = [numero, pais, cadena, verdadero]; // Arreglo heterogéneo, ya que JS es un lenguaje no tipado