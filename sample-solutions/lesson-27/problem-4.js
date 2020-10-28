// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.

let number = 2;

for (i=2;i < 10; i++) {
    console.log(`${number} * 1 = ${number * 1}`);
    console.log(`${number} * 2 = ${number * 2}`);
    console.log(`${number} * 3 = ${number * 3}`);
    console.log(`${number} * 4 = ${number * 4}`);
    console.log(`${number} * 5 = ${number * 5}`);
    console.log(`${number} * 6 = ${number * 6}`);
    console.log(`${number} * 7 = ${number * 7}`);
    console.log(`${number} * 8 = ${number * 8}`);
    console.log(`${number} * 9 = ${number * 9}`);
    console.log(`${number} * 10 = ${number * 10}`);
    number++;
}