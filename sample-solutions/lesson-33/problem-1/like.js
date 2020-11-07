// Implement a HTML page with a ‘Like’ button and a counter. 
// Clicking on the Like button should increase the number in the counter.

document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    let span = document.querySelector('span');
    span.innerText = counter;
    document.querySelector('img').onclick = () => {
        counter++;
        span.innerText = counter;
    }
});