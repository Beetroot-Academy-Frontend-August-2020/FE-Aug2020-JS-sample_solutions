// Request a distance in km between the two cities from a user, and the time they want to cover it within. 
// Count the speed needed to be on time.

let distance = prompt('What is the distance to covered? (in km)');
let time = prompt('What is the time the journey needs to covered within? (in hours)');

// Distance = speed x time
// Speed = distance / time
let speed = Math.floor(distance / time);

alert(`The speed needs to be at ca. ${speed} km/h in order to cover ${distance} within ${time} hours.`);