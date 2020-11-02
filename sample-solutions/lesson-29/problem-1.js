/*
    Create an object that describes a car
    (manufacturer, model, year of release, average speed) 
    and the following methods for working with this object:
        - a method that displays the car info 
        - a method for counting a time frame necessary to cover a given distance with the average speed.
        Note that every 4 hours the driver has to take a 1-hour break.
*/

const car = {
    manufacturer: 'BMW',
    model: '118i',
    yearOfRelease: '2012',
    averageSpeed: 120,
    displayCarInfo() {
        return `
            This is a ${this.yearOfRelease} ${this.manufacturer} ${this.model} with an average speed of ${this.averageSpeed} km/h.
        `;
    },
    calculateTimeFrame(distance) {
        let time = Math.ceil(distance / this.averageSpeed);
        // Count the number of breaks needed and then add a 1-hour to the final timeframe.
        if (time >= 4) {
            let numberOfBreaks = Math.ceil(time / 4);
            let totalTime = (numberOfBreaks + 1) * numberOfBreaks;
            return totalTime;
        } else {
            return time;
        }
    }
}

console.log(car.displayCarInfo());
console.log(car.calculateTimeFrame(100));
console.log(car.calculateTimeFrame(120));
console.log(car.calculateTimeFrame(200));
console.log(car.calculateTimeFrame(300));
console.log(car.calculateTimeFrame(400));
console.log(car.calculateTimeFrame(700));
console.log(car.calculateTimeFrame(1900));