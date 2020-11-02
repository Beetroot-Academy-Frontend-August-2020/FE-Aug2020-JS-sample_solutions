/*
Create a “groceries list” array. Each element of the array is an 
object that contains the name of a product, an amount needed and whether it is bought or not.
*/

let groceryList = [
    {
        itemName: 'milk',
        quantity: 1,
        bought: true
    },
    {
        itemName: 'bread',
        quantity: 1,
        bought: false
    },
    {
        itemName: 'bananas',
        quantity: 6,
        bought: true
    }
];

let sortedList = [];

// Display the entire list, so that the not yet purchased items go before the bought ones. 
function sortList(list) {
    return list.sort((a,b) => {
        return a.bought - b.bought;    
    })
}

function printGroceryList(list) {
    function isBought(state) {
        return state ? 'bought' : 'not bought';
    }

    sortedList = sortList(list);

    console.log(`
    Grocery list
    ------------
    `);
    sortedList.forEach(item => {
        console.log(`${item.itemName} of quantity ${item.quantity}, ${isBought(item.bought)}`);
    })
    console.log('------------');
}

// Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 

function addToList(newItem) {
    if (!typeof item == 'object') {
        console.log('Input not an object, please try again. Expected input {itemName: name of product, quantity: number of items bought, bought: true or false}')
    } else {
        let found = false;
        sortedList.forEach(item => {
            if (item.itemName == newItem.itemName) {
                found = true;
            }
        });
        if (!found) {
            sortedList.push(newItem);
        } else {
            sortedList.forEach(item => {
                if (item.itemName == newItem.itemName) {
                    item.quantity++;
                }
            });
        }
        return sortedList;
    }
}

// purchasing a product. The function accepts the name of a product and marks it as bought.
function purchaseItem(searchItem) {
    let found = false;
    sortedList.forEach(item => {
        if (item.itemName === searchItem.itemName) {
            item.bought = true;
            found = true;
        }
    });

    if (!found) { 
        return `${searchItem.itemName} was not found on grocery list.`;
    } else {
        return `${searchItem.itemName} was purchased`;
    }
}

console.log(printGroceryList(groceryList));
console.log(addToList({ itemName: 'milk' }));
console.log(addToList({ itemName: 'apples', quantity: 3, bought: false }));

console.log(purchaseItem({ itemName: 'rabbit' }));
console.log(purchaseItem({ itemName: 'bread' }));

console.log(printGroceryList(groceryList));