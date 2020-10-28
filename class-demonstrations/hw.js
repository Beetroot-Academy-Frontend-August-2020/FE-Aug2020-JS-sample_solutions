// Write a program that accepts the values of π and the radius of a circle. 
// The program should compute the area of the circle using the formula: area = πr2.
// Rewrite the previous program above so the area of the circle is displayed with only 
// two digits after the decimal place. (Hint: Math.round())

var radius = parseInt(prompt('please enter a radius.'));
const PI = Math.PI;

var area = PI * radius * radius;
console.log(Number.parseFloat(area).toFixed(2));

var radius = parseInt(prompt('please enter a radius.'));
var area = PI * radius * radius;
var result = area + 54.23;
result = result.toFixed(2);
foo = parseFloat(result);
console.log(foo, typeof foo);