//CICLOS

//Permiten ejecutar un bloque de código repetidamente hasta que
// se cumpla una condición específica

//For
let index;

for (index = 0; index < 10; index++) {
    console.log(index);
}

//While
index = 10;
while (index > 0) {
    console.log(index);
    index--;
}

// Do-while
do {
    console.log("Esto se ejecuta al menos una vez.");
    console.log(index);
    index--;
} while (index > 0);