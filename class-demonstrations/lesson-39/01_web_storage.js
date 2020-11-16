// localStorage = in-browser database system
// database = localStorage
window.localStorage.setItem('breakfast', 'croissant');
window.localStorage.setItem('lunch', 'eggs');

// setter and getter
const breakfast = localStorage.getItem('breakfast');
const lunch = localStorage.getItem('lunch');

window.localStorage.removeItem('lunch');

localStorage.clear();

// CRUD system
// Create, Read, Update, Delete
// setItem = update and create
// getItem = read
// removeItem = delete (one item) and clear (all items in localStorage)