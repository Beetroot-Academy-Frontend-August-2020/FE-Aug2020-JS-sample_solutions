// Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

let day = 1;
let action = true;

do {
    for (i=0;i < 8; i++) {
        day++;
    }
    action = confirm(`This is day ${day} of the week. Would you like to see the next one?`);
} while (action == true);