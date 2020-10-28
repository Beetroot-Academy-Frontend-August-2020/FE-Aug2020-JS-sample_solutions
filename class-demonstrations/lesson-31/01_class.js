class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  logIn() {
    console.log(`${this.name} has logged in`);
  }

  logOut() {
    console.log(`${this.name} has logged`);
  }
}

const userOne = new User('Jane', 'example@example.com');
const userTwo = new User('Alice', 'something@something.com');

userOne.logIn();
userTwo.logOut();
