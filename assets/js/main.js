/**
 * Header State
 */
const /** {NodeElement} */ header = document.querySelector("[data-header]");

const backToTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", e => {
    if (this.scrollY >= 50) {
        header.classList.add("active");
        backToTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backToTopBtn.classList.remove("active");
    }
});

/**
* add event listener for multiple elements
*/

addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener(eventType, callback);
    }
}


/**
 * Mobile navbar toggle
 */

const /** {NodeList} */ navToggleBtns = document.querySelectorAll("[data-nav-toggler]");
const /** {NodeElement} */ navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ overlay = document.querySelector("[data-overlay]");
const /** {NodeElement} */ body = document.querySelector("body");


const navToggle = function () {
    navbar.classList.toggle("nav-menu-open");
    overlay.classList.toggle("active");
    body.classList.toggle("nav-is-open");
}

addEventOnElement(navToggleBtns, 'click', navToggle);