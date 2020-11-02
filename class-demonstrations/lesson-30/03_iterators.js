const tones = {
  key: 'a',
  tone: 'b'
};

// in = objects
// of = arrays

for (let key in tones) {

}

// Iterate over items
for (let color of colors) {
  console.log(color);
}

// so i'm an array
// i contain 3 elements (values) of data type string
// index is similar to an internal counter
// index starts at 0, not at 1
// first value is red at index 0
// second value is green at index 1
// third value is blue at index 2

const colors = ['red', 'green', 'blue'];

// Iterate over indexes
// 1. set a counter
// 2. counter starts at the same number as the index of an array (0)
// 3. array has 3 elements, or its length is 3
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]); // colors[0] colors[1] colors[2] colors[3]
}
