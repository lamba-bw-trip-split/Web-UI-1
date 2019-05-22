// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let navItems = document.querySelectorAll("a");
// On click
hamburger.addEventListener("click", () => {
  navItems[0].classList.toggle("is-active");
  navItems[1].classList.toggle("is-active");
});