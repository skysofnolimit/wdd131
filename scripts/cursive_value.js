constconst hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainContainer = document.querySelector(".main_container");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mainContainer.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mainContainer.classList.remove("active");
}))
