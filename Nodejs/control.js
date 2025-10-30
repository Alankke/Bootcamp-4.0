//ESTRUCTURAS DE CONTROL

// Sentencias if y else permiten evaluar una condición
// y ejecutar un bloque de codigo si es verdadero o falso.

if (condition) {
    // Bloque de código a ejecutar si la condición es verdadera
} else {
    // Bloque de código a ejecutar si la condición es falsa
}

// EJEMPLO PRÁCTICO
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Sentencia else if permite agregar mas de una condición

calificacion = 85;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 80) {
    console.log("Muy bien");
} else if (calificacion >= 70) {
    console.log("Bien");
} else {
    console.log("Regular");
}

// Sentencia switch: Evalua una expresion y compara su valor
// con diferentes casos, ejecutando el bloque de código correspondiente.
let dia = "miercoles";
switch (dia) {
    case "lunes":
        console.log("Comenzamos la semana");
        break;
    case "martes":
        console.log("Seguimos con el martes");
        break;
    case "miercoles":
        console.log("Mitad de semana");
        break;
    case "jueves":
        console.log("Juernes!");
        break;
    case "viernes":
        console.log("Llegó el fin de semana!");
        break;
    case "sábado":
        console.log("Sábado!!!");
        break;
    case "domingo":
        console.log("Domingo de descanso");
        break;
    default:
        console.log("No es un día válido");
        break;
}