class User {
  firstName;
  lastName;
  // Run when we create an object with initial values
  constructor(name, lastname) {
    this.firstName = name;
    this.lastName = lastname;
  }

  // methods run only after we've created the object
  // Name is a 'special' or 'magical' property
  get Firstname() {
    return this.firstName;
  }

  set Firstname(firstname) {
    this.firstName = firstname;
  }

  get Lastname() {
    return this.lastName;
  }

  set Lastname(lastname) {
    this.lastName = lastname;
  }

  get Fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  set Fullname(fullName) {
    // fullName = Mary Smith
    // delimiter = ' '
    // const books = ['1','2'];
    // [this.firstName, this.lastName] = fullName.split(' ');
    const nameArray = fullName.split(' ');
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
    // fullName = 'Mary Smith'
    // const array = fullName.split(' ') = ['Mary','Smith']
    // array[0], array[1]
    // 1. breaks it into 'Mary' and 'Smith'
    // 2. creates an array of 2 elements
    // 3. unboxes array into class properties
  }
}

// console.log(user.fullName);

// user.fullName = 'Alice Wood';

const jane = new User('Jane', 'Doe');
const mina = new User('Mina', 'Demian');
const fuad = new User('Fuad', 'Aman');

console.log(jane.Fullname);

// this means I'm using the set method
jane.Fullname = 'Mary Smith';

// this means I'm using the get method
console.log(jane.Fullname);