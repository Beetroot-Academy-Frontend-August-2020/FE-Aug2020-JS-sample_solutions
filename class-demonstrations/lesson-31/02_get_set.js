class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(fullName) {
    [this.name, this.lastname] = fullName.split(' ');
  }
}

const user = new User('Jane', 'Doe');

console.log(user.fullName);

user.fullName = 'Alice Wood';

console.log(user);
