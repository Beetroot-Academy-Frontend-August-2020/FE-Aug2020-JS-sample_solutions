// Write a function that accepts 2 numbers and returns -1
// if the first one is smaller than the second, 1 if it is vice versa,
// and 0 if they are equal.

function numberCompare(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else if (num1 == num2) {
        return 0;
    }
}

console.log(numberCompare(1,2));
console.log(numberCompare(3,2));
console.log(numberCompare(1,1));