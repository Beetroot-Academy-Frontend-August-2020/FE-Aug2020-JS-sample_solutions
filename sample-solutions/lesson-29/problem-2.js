/*
Create an object that contains separately the numerator and the denominator of a fraction
and the following functions for working with this object:

A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object.
*/

const fraction1 = {
    numerator: 2,
    denominator: 4
}

const fraction2 = {
    numerator: 2,
    denominator: 4
}

const fraction3 = {
    numerator: 1,
    denominator: 6
}

const fraction4 = {
    numerator: 2,
    denominator: 8
}

function greatestCommonDenominator(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function leastCommonMultiple (a,b) {
    // find the greatest common denominator first 
    let commonDenominator = greatestCommonDenominator(a, b);
    // then calculate the least common multiple
    return (a * b) / commonDenominator;
}

function fractionAdd(f1, f2) {
    let multiple, denominator;
    if (!f1.denominator == f2.denominator) {
        multiple = leastCommonMultiple(f1.denominator, f2.denominator);
        denominator = multiple;
    } else {
        denominator = f1.denominator;
    }
    return {
        numerator: f1.numerator + f2.numerator,
        denominator
    };
}

function fractionSubtract(f1, f2) {
    let multiple, denominator;
    if (!f1.denominator == f2.denominator) {
        multiple = leastCommonMultiple(f1.denominator, f2.denominator);
        denominator = multiple;
    } else {
        denominator = f1.denominator;
    }
    const numerator = f1.numerator - f2.numerator;
    if (numerator == 0) {
        return 0;
    } else {
        return {
            numerator,
            denominator
        };
    }
}

function fractionMultiply(f1, f2) {
    return {
        numerator: f1.numerator * f2.numerator,
        denominator: f1.denominator * f2.denominator
    };
}

function fractionDivide(f1, f2) {
    return {
        numerator: f1.numerator * f2.denominator,
        denominator: f1.denominator * f2.numerator
    };
}

function simplifyFraction(fraction) {
    if (fraction != 0) {
        let gcd = greatestCommonDenominator(fraction.numerator, fraction.denominator);
        if (gcd > 0) {
            if ((fraction.numerator / gcd == 1) && (fraction.denominator / gcd == 1)) {
                return 1;
            } else {
                return {
                    numerator: fraction.numerator / gcd,
                    denominator: fraction.denominator / gcd
                }
            }
        } else {
            return {
                numerator: fraction.numerator,
                denominator: fraction.denominator
            }     
        }
    } else {
        return fraction;
    }
}

function formatFraction(fraction) {
    return `${fraction.numerator}/${fraction.denominator}`;
}

console.log(`adding ${formatFraction(fraction1)} and ${formatFraction(fraction2)}`);
console.log(simplifyFraction(fractionAdd(fraction1, fraction2)));
console.log(`adding ${formatFraction(fraction3)} and ${formatFraction(fraction4)}`);
console.log(simplifyFraction(fractionAdd(fraction3, fraction4)));

console.log(`subtracting ${formatFraction(fraction1)} from ${formatFraction(fraction2)}`);
console.log(simplifyFraction(fractionSubtract(fraction1, fraction2)));
console.log(`subtracting ${formatFraction(fraction3)} from ${formatFraction(fraction4)}`);
console.log(simplifyFraction(fractionSubtract(fraction3, fraction4)));

console.log(`multiplying ${formatFraction(fraction1)} with ${formatFraction(fraction2)}`);
console.log(simplifyFraction(fractionMultiply(fraction1, fraction2)));
console.log(`multiplying ${formatFraction(fraction3)} with ${formatFraction(fraction4)}`);
console.log(simplifyFraction(fractionMultiply(fraction3, fraction4)));

console.log(`dividing ${formatFraction(fraction1)} with ${formatFraction(fraction2)}`);
console.log(simplifyFraction(fractionDivide(fraction1, fraction2)));
console.log(`dividing ${formatFraction(fraction3)} with ${formatFraction(fraction4)}`);
console.log(simplifyFraction(fractionDivide(fraction3, fraction4)));