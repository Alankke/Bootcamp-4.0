// Javascript no es un lenguaje fuertemente tipado, por eso es que las variables
// se pueden declarar sin un tipo de dato especifico.

// VARIABLES

//Alcance de bloque, palabra reservada let
let nombre; 
let edad;

nombre = "Alan";
edad = 21;

nombre = 31; // No hay error, porque no es fuertemente tipado, pero no es buena práctica

// Alcance global, palabra reservada var
var pais = "Argentina";

// TIPOS PRIMITIVOS
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

// ARRAYS
let paises =  [pais, "Brasil", "Chile", "Uruguay"];

let arreglo = [numero, pais, cadena, verdadero]; // Arreglo heterogéneo, ya que JS es un lenguaje no tipado

//MÉTODOS DE ARRAYS
arreglo.push("Argentina"); // Agrega un elemento al final del array
arreglo.pop(); // Elimina el último elemento del array
arreglo.shift(); // Elimina el primer elemento del array
arreglo.unshift("Nuevo elemento"); // Agrega un elemento al inicio del array

arreglo.indexOf("Brasil"); // Devuelve el índice del elemento, si no lo encuentra devuelve -1
arreglo.slice(0, 2); // Devuelve una copia de una parte del array dentro de un nuevo array
arreglo.splice(1, 1); // Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

arreglo.length; // Devuelve la longitud del array
arreglo.join(", "); // Une todos los elementos de un array en una cadena y los separa por el separador especificado

arreglo.split(", "); // Divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en subcadenas
arreglo.concat(["Otro elemento", "Otro más"]); // Se utiliza para unir dos o más arrays

arreglo.sort(); // Ordena los elementos de un array in situ y devuelve el array