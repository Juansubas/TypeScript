// variable
export const PI = 3.14;

// Interface
export interface Person {
    id: number;
    name: string;
}

// function

export function gerenateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
}

// Para exportar de una sola forma todo
//export {PI, Person, gerenateRandomNumber};