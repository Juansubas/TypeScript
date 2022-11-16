// Class

class Person {
    
    public zone = 'Caribean';
    protected city = 'Santo Domingo';
    private country = 'R.D';
    constructor(){}
    greet(): void{
        this.city;
        console.log('Hello!!!');
    }
}

class Employee extends Person {
    // Atributos

    // Métodos
    constructor(private id: number, private name: string, private dept: string){
        super();
        this.showInfo();
    }

    // Métodos
    private showInfo(): void {
        console.log(`${this.name} ${this.zone} ${this.city}`);
    }
}

const emp = new Employee(1, 'Juan', 'It');