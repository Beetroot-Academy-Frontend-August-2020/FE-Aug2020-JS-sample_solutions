const array = [1, 2, 3, 4, 5];
// so i'm an array
// i contain 5 elements (values) of data type number
// index is similar to an internal counter
// index starts at 0, not at 1
// first value is 1 at index 0
// second value is 2 at index 1
// third value is 3 at index 2
// fourth value is 4 at index 3
// fifth value is 5 at index 4 

array.length
// array_name[index_number]
console.log(array[0]);

let array2 = [{name: 'mina', age: 39},{name: 'bob', age: 49},{name: 'maslow', age: 109}]
const colors = ['red', 'green', 'blue'];
console.log(colors);

// Get an item by index
console.log(colors[0]);

let array2 = [
    {name: 'mina', age: 39},
    {name: 'bob', age: 49},
    {name: 'maslow', age: 109}
]

array2[1].name = 'dole';

array2[2].hairColor = 'brown';

// Replace an element
colors[0] = 15;
console.log(colors);

// index = length_of_array - 1
const array = [1, 2, 3, 4, 5];

// Add an element
colors[3] = 'white';
console.log(colors);
