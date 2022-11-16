import { PI, Person, gerenateRandomNumber } from './myModules';

// Para importar renombrando
// Para renombrar -->>> import { PI as myPI } from './myModules';

// Otra forma de importar absolutamente todo
// import * as myCode from './myModules.ts';
// Para importar de esta manera tendrtemos que usar myCode.PI o 
// myCode.generateRandomNumber(), etc debido a que todo queda ahí.

const user: Person = {
    id: 1,
    name: 'DominiCode'
}

console.log(PI);

console.log(user);

console.log(gerenateRandomNumber());