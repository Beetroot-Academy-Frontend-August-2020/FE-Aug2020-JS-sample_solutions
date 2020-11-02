const arrayPrimitiveDatatypes = ['a', 'b', 'c'];

arrayPrimitiveDatatypes.forEach(element => console.log(element));

const arrayOfObjects = [
    { a: 'a' },
    { a: 'b' },
    { a: 'c' }
];

arrayOfObjects.forEach(element => {
    console.log(element.a);
});