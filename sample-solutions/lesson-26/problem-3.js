// Write a program that accepts the values of π and the radius of a circle. The program should compute the area of the circle using the formula: area = πr2.

let radius = prompt('Please input a radius of a circle');
radius = parseInt(radius);

let area = Math.PI * radius * radius;

console.log(`The area of the circle is ${area} when radius is ${radius}.`);