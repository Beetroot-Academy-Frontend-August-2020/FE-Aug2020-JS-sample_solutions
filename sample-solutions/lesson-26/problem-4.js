// Write a program that accepts the values of π and the radius of a circle. The program should compute the area of the circle using the formula: area = πr2.

let radius = prompt('Please input a radius of a circle');
radius = parseInt(radius);

let area = parseFloat(Math.PI * radius * radius).toFixed(2);

console.log(`The area of the circle is ${area} when radius is ${radius}.`);