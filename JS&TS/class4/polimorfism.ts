//POLIMORFISMO
// Permite que objetos de diferentes clases respondan al mismo mensaje de distintas maneras
// Se implementa mediante la sobreescritura de métodos.
// La clase hija puede redefinir un método de la clase padre pero con un comportamiento distinto.

class CarWithPolimorfism {
    model: string;
    year: number;
    speed: number;
    private _fuel: number;

    constructor(model: string, year: number, speed: number, fuel: number) {
        this.model = model;
        this.year = year;
        this.speed = speed;
        this._fuel = fuel;
    }

    accelerate(): void {
        console.log("Accelerating");
        this.speed += 10;
    }

    get fuel(): number {
        return this._fuel;
    }


    set fuel(value : number) {
        this._fuel = value;
    }
}

class Truck extends CarWithPolimorfism {
    cargo: number;

    constructor(model: string, year: number, speed: number, fuel: number, cargo: number) {
        super(model, year, speed, fuel);
        this.cargo = cargo;
    }

    accelerate(): void {
        super.accelerate();
        console.log("Truck accelerating slowly");
        if (this.cargo < 1000) {
            this.speed += 100;
        } else {
            this.speed += 70;
        }
    }
}

const truck = new Truck("Volvo", 2020, 0, 100, 800);

truck.accelerate();
console.log(truck.speed);