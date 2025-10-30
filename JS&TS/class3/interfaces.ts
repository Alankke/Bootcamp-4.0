//INTERFACES

// Una interfaz define la estructura de un objeto.
// Son como contratos que establecen las expectativas
// sobre como se debe usar un objeto

interface Persona {
    nombre: string;
    edad: number;
    tieneTrabajo: boolean;
}

// Podemos extenderlas
interface Empleado extends Persona {
    salario: number;
}

// Podemos adaptarlas a medida que necesitamos

interface Gato {
    nombre: string;
}

interface Gato {
    edad: number;
}

//TYPES
// Describe el tipo de datos que puede contener una variable.

type Perro = {
    nombre: string;
    patas: number;
    muerde: boolean;
}

// No le podemos extender ni aumentar capacidades.
// Podemos añadir tipos personalizados.

type Mascota = {
    name: string;
}

type Amistosa = {
    esAmistosa: boolean;
}

type MascotaAmistosa = Mascota & Amistosa;

const firulais: MascotaAmistosa = {
    name: "Firulais",
    esAmistosa: true
}

// También puede aceptar varios tipos de datos

type ID = string | number;