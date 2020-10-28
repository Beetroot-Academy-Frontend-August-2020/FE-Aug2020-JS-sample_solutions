// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

const CURRENT_YEAR = 2020;

let yearOfBirth = prompt('What is your year of birth?');

let age = CURRENT_YEAR - parseInt(yearOfBirth);

alert(`You are ${age} years old.`);