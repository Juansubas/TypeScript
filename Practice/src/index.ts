// Basic Types

let myTypeString: string = 'Hello World!';
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

// ARRAY

//Formas para hacer array
let arrNumber : number[] = [1, 2 , 3];
//Forma larga let arrNumber2 : Array<number> = [1, 2, 3];
let arrString : string[] = ["Uno", "Dos", "Tres"];

//Esto puede ser de cualquier tipo, esto le resta autoridad a typescript.
// Para casos especifícos se usará, lo recomendable es no usarlo o lo menos posible.
let arrAny: any[] = ['Hola', 33, false];

// Tuple -> Especie de array pero todo esta definido es como algo constante

let tuplePlayers: [string, number, boolean] = ['Doncic', 2, true];

// Tuple Array

let players: [number, string][]; 
//Con el primer[]indicamos el formato para el array y con el [], 
//indicamos que será un array de ese array.

players = [
    [1, 'Lebron'],
    [2, 'Durant'],
    [3, 'Carry']
];

// Inferencia de tipo

let myVariable; // Acá se esperará hasta asignarse

myVariable = 33;

let myVariableUno:number = 12; // Acá fue manual

let myVariableDos = 33; // Acá se asume que es number

// Unions

let variable: string | number | null ;





