//PROGRAMACION ORIENTADA A OBJETOS

// Es un paradigma de programación que organiza el codigo en torno a objetos
// que son bloques de codigo autocontendiso que encapsulan datos y comportamientos
// propiedades y metodos. Campos y funciones. Atributos y acciones. Se utilizan muchas convenciones
// Pero basicamete son funciones y objetos.

// Clases.
// Objetos.
// Herencia.
// Polimorfismo.
// Encapsulamiento.

//CLASES
// Plantillas para instanciar objeto.
// Palabra reservada class.
// Constructor que se ejecuta cuando se instancia la clase.

class Car {
    // Propiedades, atributos, campos
    model: string;
    year: number;

    // Constructor
    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    // Métodos, funciones, acciones
    start(): void {}

    accelerate(): void {}

    honk(): void {}
}

// OBJETOS
// Es una instancia de clase

const car = new Car("Toyota Corolla", 2020);
// Acceder a sus propiedades:

const carModel = car.model;
const carYear = car.year;

console.log(carModel);
console.log(carYear);

// Acceder a sus métodos:
car.start();
car.accelerate
car.honk();