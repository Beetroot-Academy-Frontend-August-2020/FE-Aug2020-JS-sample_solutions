// Request a radius of a circle and display the area of such a circle. 

let radius = prompt('Please provide a radius of a circle.');
radius = parseInt(radius);

let area = parseFloat(Math.PI * radius * radius);

/*
    floor() rounds down to the nearest number
    See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/
let areaRoundedDown = Math.floor(area);
/*
    toFixed() takes an argument of how many decimal points you want to round to
    See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/
let areaFewerDecimals = area.toFixed(2);

alert(`The area of the circle is ${areaRoundedDown} when rounded down and ${areaFewerDecimals} to decimal points.`);
