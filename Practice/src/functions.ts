// Funciones

//Agregandole un valor por defecto, cuando llamo la función
//sin ningún valor
function greet (name: string = 'User') {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greet('Dominicode');
greet(); //Automáticamente setea User por defecto

/* Indicando que es void
function greet (name: string):void {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}
*/



//El TypeScrip en este caso infiere el tipo que retorna
function getNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());

// Si queremos indicarlo apropósito

function getNumero():number {
    return Math.floor(Math.random() * 100);
}

console.log(getNumero());

//Podemos pasar objetos a una function

// COn el signo de pregunta podemos dejar una propiedad como opcional
// Además podemos poner que no estamos seguro que dato será y ponemos dos opciones
// si observamos long primero es opcional y segundo tiene dos opciones o es number o es string

function printPosition(position: {lat: number, long?: number | string}):void {
    console.log(`Latitude & Longitude are: LAT ${position.lat} LONG: ${position.long}`);
}

printPosition({lat:3, long:"xd"});

// Cuando es opcional
//printPosition({lat:3});

// Sin el parametro de pregunta
//printPosition({lat: 3, long: 55});
