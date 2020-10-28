// Request a user’s age and check whether it is realistic (0-120 y.o.).
// If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’.

let age = prompt('What is your age?');
age = parseInt(age);

if (age <= 120) {
    alert('Hi! You are ' + age + ' years old.');
} else {
    alert("This doesn't seem realistic. Is that even possible?");
}