"use strict";
// Class
class Person {
    constructor() {
        this.zone = 'Caribean';
        this.city = 'Santo Domingo';
        this.country = 'R.D';
    }
    greet() {
        this.city;
        console.log('Hello!!!');
    }
}
class Employee extends Person {
    // Atributos
    // Métodos
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    // Métodos
    showInfo() {
        console.log(`${this.name} ${this.zone} ${this.city}`);
    }
}
const emp = new Employee(1, 'Juan', 'It');
