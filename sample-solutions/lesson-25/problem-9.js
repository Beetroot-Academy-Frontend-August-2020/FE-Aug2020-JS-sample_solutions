// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.

let principle = prompt('What is the total amount of deposits you have made over the past 2 months?');

const YEARLY_INTEREST_RATE = 0.05;

/*
    total accrued amount = P(1 + rt)
    where P = principle or total amount of deposits
    r = interest rate
    t = time period in months or years
*/
let accruedAmount = parseFloat(parseInt(principle) * (1 + YEARLY_INTEREST_RATE * 2)).toFixed(2);

alert(`The total accrued amount is ${accruedAmount} SEK.`);