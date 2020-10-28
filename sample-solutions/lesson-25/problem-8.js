// A user types in an amount of money in a wallet and the price of one chocolate bar.
// The program counts how many chocolate bars the user can buy, and how much change will he/she have left.

let moneyInWallet = prompt('How much money do you have in your wallet?');
const CHOCOLATE_BAR = prompt('How much does a chocolate bar cost?');

let canAfford = parseFloat(moneyInWallet / CHOCOLATE_BAR);
let canAffordFormatted = Math.floor(canAfford);

let totalCost = CHOCOLATE_BAR * canAffordFormatted;
let moneyRemaining = parseFloat(moneyInWallet - totalCost);

alert(`You can buy ${canAffordFormatted} with the money you have and you'll have ${moneyRemaining} left.`);