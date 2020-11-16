console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

mina = {
    key1: '',
    key2: ''
}
// flattening data structures = serializing

// "{"key1":"","key2":""}"
// flatten - 
// 'mina'
// 12
// 14.34
// true,false

// JSON.stringify = flattens/serializes data structures
// JSON.parse = convert back to data structures