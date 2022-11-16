"use strict";
// Generics
class People {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const personCollection = new People();
const newData = {
    id: 1,
    name: 'Dominicode'
};
const newData2 = {
    id: 2,
    name: 'Bezael'
};
personCollection.addItem(newData2);
personCollection.getItems();
