const burger = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const closeMenu = document.getElementById("close-menu");

burger.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
})
  
closeMenu.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})