class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  logIn() {
    console.log(`${this.name} has logged in`);
  }

  logOut() {
    console.log(`${this.name} has logged out`);
  }
}

const userOne = new User('Jane', 'example@example.com');
const userTwo = new User('Alice', 'something@something.com');

userOne.logIn();
userTwo.logOut();

class Employee extends User {
  constructor(name, email, employeeId, department) {
    super(name, email);
    this.employeeId = employeeId;
    this.department = department;
  }

  printEmployeeCard() {
    console.log(`Employee name: ${this.name} - email address: ${this.email} - employee ID: ${this.employeeId} - department: ${this.department}`);
  }

  get Manager() {
    console.log(this.manager);
  }

  set Manager(manager) {
    this.manager = manager;
  }
}

const janet = new Employee('Janet Jackson', 'janet.jackson@inc.com', 'JJ0001', 'Accounting');
const bob = new Employee('Bob Hope', 'bob.hope@inc.com', 'BH0001', 'Risk Analysis');

janet.logIn();
janet.printEmployeeCard();
janet.Manager = {employeeId: 'NP0001', name: 'Namby Pamby'};
janet.Manager;
janet.logOut();

bob.logIn();
bob.printEmployeeCard();
bob.Manager = {employeeId: 'AG0001', name: 'Art Garfunkel'};
bob.Manager;
bob.logOut();