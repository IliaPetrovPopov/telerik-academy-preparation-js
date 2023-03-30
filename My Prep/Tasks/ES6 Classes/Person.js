// Create a class called Person with properties firstName
// and lastName. Add a method called getFullName that
// returns the full name of the person.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
}

let person = new Person("Peter", "Popov");

console.log(person.getFullName());