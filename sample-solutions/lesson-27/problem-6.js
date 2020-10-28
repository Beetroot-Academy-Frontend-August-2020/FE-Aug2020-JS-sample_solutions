// Ask a user 3 questions, each with 3 answer options.
// The user gets 2 points for each correct answer.
// Show the earned points after the test.

let score = 0;

let question1 = prompt('What is the capital of Sweden? a Stockholm b Stockport c Scranton');
if (question1 == 'a') {
    score += 2;
}

let question2 = prompt('What is the opposite of light? a dope b heavy c dark');
if (question1 == 'a') {
    score += 2;
}

let question3 = prompt('Where does the sun set? a east b west c Finland');
if (question1 == 'b') {
    score += 2;
}

console.log('Your total score is ' + score);