// print out 10 paragraph tags.
i++
i = i + 1

for (i = 0; i <= 10; i++) {
    // the first time the loop runs, i = 0
    // actual codee block
    document.write('<p>first paragraph</p>');
}

balance = 0;

while (balance < 100.00) {
    // actual code
    balance += 10.00;
    console.log(`balance is ${balance}`);
}

// Store 1000 as a variable. 
// Divide this variable by 2 while it is greater than 50. Display this number and how many divisions it took.

var number = 1000;
var i = 0;

do {
    number = number / 2;
    console.log('number is now ' + number);
    i++;
} while (number > 50)

console.log(`This operation took ${i} division(s).`);

// Deskcheck
// 500
// 250
// 125
// 62.5
// 31.