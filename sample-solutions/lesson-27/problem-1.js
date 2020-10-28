// Write a program that requests a number from a user and finds the sum of every number from 1 to num.
// For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

const integer = prompt('Please input an integer.  ');

let sum = 0;

for(let i = 1; i <= integer; i++) {
  sum += i;
}

console.log(`The sum of every number from 1 to the number you provided ${integer} is ${sum}.`);


