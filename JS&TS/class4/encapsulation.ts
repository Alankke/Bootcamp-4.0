// ENCAPSULAMIENTO
// Permite encapsular ciertos metodos y propiedades para uso interno de la clase
// Para evitar que se pueda accceder a ese metodo o propiedad desde fuera.

class CarWithEncapsulation {
    model: string;
    year: number;
    private _speed: number;
    private _fuel: number;
    
    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
        this._speed = 0;
        this._fuel = 100;
    }

    accelerate(): void {
        console.log("Accelerating...");
        this._speed += 10;
    }

    get speed(): number {
        return this._speed;
    }

    set fuel(amount: number) {
        this._fuel = amount;
    }

    get fuel(): number {
        return this._fuel;
    }
}

// GETTERS Y SETTERS
// Solo podemos acceder a las propiedades privadas utilizando un getter
// o un setter
// Esto va a dar un error:

const fiat = new CarWithEncapsulation("Fiat 500", 2019);

//fiat._speed = 50; // Error: Property '_speed' is private and only accessible within class 'CarWithEncapsulation'.
//fiat._fuel = 80; // Error: Property '_fuel' is private and only accessible within class 'CarWithEncapsulation'.

// En su lugar, usamos el getter:
fiat.accelerate();
console.log(fiat.speed); // 10