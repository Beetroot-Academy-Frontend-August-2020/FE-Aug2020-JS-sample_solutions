// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.
let positiveCounter, negativeCounter, zeroCounter, oddCounter, evenCounter, inputStrings;

positiveCounter = negativeCounter = zeroCounter = oddCounter = evenCounter = i = 0;

inputStrings = '';

confirm('You will be asked for 10 numbers. Do you want to continue?');

do {
    let input = prompt('Please enter a number.');
    inputStrings = inputStrings + ' ' + input;

    input = parseInt(input);
    i++;


    // Let's write a bunch of ternary operators to check for positive, negative, zero, odd, and even.

    // Math.sign() returns 1 if positive, -1 if negative, 0 if 0 was inputted.
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#:~:text=sign()%20function%20returns%20either,(%2B)%20will%20not%20be%20returned.
    const positiveNumber    = Math.sign(input) == 1 ? true : false;
    const negativeNumber    = Math.sign(input) == -1 ? true : false;
    const zero              = Math.sign(input) == 0 ? true : false;
    const evenNumber        = input % 2 == 0 ? true : false;
    const oddNumber         = !(input % 2 == 0) ? true : false;

    if (positiveNumber) {
        positiveCounter++;
    } else if (negativeNumber) {
        negativeCounter++;
    } else if (zero) {
        zeroCounter++;
    }

    if (oddNumber) {
        oddCounter++;
    } else if (evenNumber) {
        evenCounter++;
    }
    debugger;
} while (i < 10);

console.log(`Numbers inputted were ${inputStrings}. Statistics follow:`);
console.log(`Number of positive numbers: ${positiveCounter}`);
console.log(`Number of negative numbers: ${negativeCounter}`);
console.log(`Number of numbers that were 0: ${zeroCounter}`);
console.log(`Number of odd numbers: ${oddCounter}`);
console.log(`Number of even numbers: ${evenCounter}`);