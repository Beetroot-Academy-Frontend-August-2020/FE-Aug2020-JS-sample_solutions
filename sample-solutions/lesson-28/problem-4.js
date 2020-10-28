// Write a function that accepts the width and length of a 
// rectangle and calculates its area. If there is only one parameter given, it counts as a square.

function calculateArea(width, length = '') {
    if (length) {
        return width * length;
    } else {
        return width * width;
    }
}

console.log(calculateArea(4,5));
console.log(calculateArea(4));