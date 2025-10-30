// HERENCIA
// Es como extends en las interfaces de TypeScript
// Clase hija (subclase) puede tener sus propias propiedades y métodos.
class ElectricCar extends Car {
    // Propiedad propia
    battery: number;

    constructor(model: string, year: number, battery: number) {
        super(model, year);
        this.battery = battery;
    }

    charge(): void {
        console.log(`Charging ${this.model}...`);
        this.battery += 10;
    }
}

const electricCar = new ElectricCar("Tesla Model 3", 2021, 50);
// Método heredado:
electricCar.start();

// Método propio:
electricCar.charge();

// Propiedad heredada:
console.log(electricCar.model);

// Propiedad propia:
console.log(electricCar.battery);