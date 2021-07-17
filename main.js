const ham = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

ham.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    ham.classList.remove("active");
    navMenu.classList.remove("active");
}