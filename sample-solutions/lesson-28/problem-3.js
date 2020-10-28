// Write a function that accepts three separate digits and makes 
// them a number. For example, 1, 4, and 9 will become 149.

function stringFromNumbers(num1, num2, num3) {
    return num1.concat(num2, num3);
}

let number1 = prompt('Please input the first number.');
let number2 = prompt('Please input the second number.');
let number3 = prompt('Please input the third number.');

console.log(stringFromNumbers(number1, number2, number3));