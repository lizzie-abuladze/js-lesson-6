let burgerBar = document.getElementById("bar");
let menu = document.getElementById("nav");
let burger = document.getElementById("bar");

function toggleMenu() {
    menu.classList.toggle("activeMenu");
    burgerBar.classList.toggle("active");
}

burgerBar.addEventListener("click", toggleMenu);
