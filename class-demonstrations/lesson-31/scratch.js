let dog = {
    name: 'Fido',
    bark() {
        console.log('Woof');
    }
};

let array = [
    {
        name: 'Mina Demian',
        age: 39,
        location: 'Stockholm'
    },
    {
        name: 'Mina Demian',
        age: 39,
        location: 'Stockholm'
    },
    {
        name: 'Mina Demian',
        age: 39,
        location: 'Stockholm'
    }
];

console.log(array);

array[3] = {
    name: 'Minaz Demian',
    age: 79,
    location: 'Stockholmz'
};

console.log(array);

// array.append({
//     name: 'Minaz Demian',
//     age: 99,
//     location: 'Stockholmz'
// })

