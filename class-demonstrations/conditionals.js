// Execute a calculator. A user puts in 2 numbers and a symbol (+ - * /).
// The program solves it depending on the symbol and shows the result.

var number1 = parseInt(prompt('Please provide a number'));
var number2 = parseInt(prompt('Please provide another number'));
var symbol = prompt('Please provide a symbol (+ - * /');

switch (symbol) {
    case '+':
        var sum = number1 + number2;
        console.log(`${number1} + ${number2} = ${sum}`);
    break;
    case '-':
        var result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
    break;
    case '*':
        var sum = number1 * number2;
        console.log(`${number1} * ${number2} = ${sum}`);
    break;
    case '/':
        var result = number1 / number2;
        console.log(`${number1} * ${number2} = ${result}`);
    break;
}

// Request a number of a month from a user. 
// Print the name of the month.
var month = prompt('Please enter a month number.');

switch(month) {
    case '1':
        console.log('This is the month of January.');
    break;
    case '2':
        console.log('This is the month of February.');
    break;
    case '3':
        console.log('This is the month of March.');
    break;
    case '4':
        console.log('This is the month of April.');
    break;
    case '5':
        console.log('This is the month of May.');
    break;
}

if (month == 1) {

} else if (month == 2) {

} else if (month == 3) {

}

// Request a user’s age and define whether 
var age = prompt('What is your age?');
if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} if (age > 0 && age <= 2) {
    alert('You are an infant.');
} else if (age <= 11) {
    alert('A child. you are a child.');
} else if (age <= 18) {
    alert('You are a teen.');
} else if (age <= 60) {
    alert('You are an adult. Congratulations.');
} else if (age > 60) {
    alert('You are a senior citizen. Congratulations');
} else {
    alert('You have entered the following age:' + age);
}
    
// Request a purchase sum from a user and show the sum to
// pay with a discount: from 200 tо 300 it would be 3%, 
// from 300 to 500 – 5%, from 500 and above – 7%.
var sum = prompt('What is the purchase sum?');

    if (sum >= 200 && sum <= 300) {
        alert("Your discount is 3%.");
    } else if (sum >= 301 && sum <= 500) {
        alert("Your discount is 5%.");
    } else if (sum >= 501) {
        alert("Your discount is 7%. Woohoo.");
    }
