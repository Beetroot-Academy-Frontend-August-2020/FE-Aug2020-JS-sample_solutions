const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// Hint: active class ONLY added in JavaScript
/* Toggle mobile menu */
function toggleMenu() {
    // has the toggle button been clicked?
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);