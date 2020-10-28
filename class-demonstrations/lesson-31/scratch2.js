const groceryStoreStock = [
    {
        name: 'thing',
        amount: 5,
        bought: true
    },
    {
        name: 'thingie',
        amount: 2,
        bought: false
    },
    {
        name: 'thingz',
        amount: 5,
        bought: true
    }
];

const sortedAmount = groceryStoreStock.sort(function (a, b) {
    return a.bought - b.bought;
});

console.log(sortedAmount);