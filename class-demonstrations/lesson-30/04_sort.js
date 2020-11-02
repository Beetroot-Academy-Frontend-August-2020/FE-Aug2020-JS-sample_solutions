
let arr = [
  {
    subject: 'HTML',
    rating: 4,
  },
  {
    subject: 'CSS',
    rating: 2,
  },
  {
    subject: 'JS',
    rating: 5,
  },
];

// default sorting
arr.sort();

// sorting function
// desk check = 0,2,3,7,9,18,28
// desk check = test
let array = [7,9,3,0,2,18,28];

let newArray = array.sort((a,b) => {
  return a - b;
});

/*
If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

