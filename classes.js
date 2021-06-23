// Create a class "Car"
// with two properties "name" and "year"
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    // Add a method "age"
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
// What about the constructor method:
// it has to have the exact name "constructor"
// it is executed automatically when a new object is created
// it is used to initialize object properties 

// Create objects:
let myCar1 = new Car("Ford", 2014);
console.log(myCar1.age())
let myCar2 = new Car("Audi", 2019);
console.log(myCar2.age())

// Notes about new learnings:
let day = new Date();
let year = day.getFullYear();
let myAge = year - 1993;
console.log(day);
console.log(year);
console.log(myAge);