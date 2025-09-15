
// get the two things
const mobileMenu = document.getElementById("mobile-menu");
const hamburger = document.getElementById("hamburger");
const triangle = document.getElementById("triangle");


hamburger.addEventListener("click", (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle("hidden");
    triangle.classList.toggle("hidden");
});