class Car {
    numberOfWheels;
    numberOfDoors;
    color;
    brand;
    startEngine() {

    }
    accelerate() {

    }
    // 1. instantiate an object (creating an instance or object)
    // 2. construct an object
    constructor(wheels, doors, color, brand) {
        this.numberOfWheels = wheels;
        this.numberOfDoors = doors;
        this.color = color;
        this.brand = brand;
    }
}

// object creation with object literal notation
const obj1 = {
    name: '',
    location: '',
    age: 0
};

// 1. use new reserved keyword
// 2. use the class name
// 3. use two parentheses
// 4. pass in arguments as specified in constructor
const bmw = new Car(4,4,'red','BMW');
const merc = new Car(4,2,'white','Mercedes');
console.log(bmw);