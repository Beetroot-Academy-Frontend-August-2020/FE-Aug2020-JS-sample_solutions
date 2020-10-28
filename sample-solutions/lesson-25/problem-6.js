// Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.

let usd = prompt('Please input the amount of USD to be converted into EUR.');

const USD_to_EUR = 0.85;

let eur = parseFloat(usd * USD_to_EUR).toFixed(2);

alert(`${usd} USD is ${eur} EUR as of today.`);