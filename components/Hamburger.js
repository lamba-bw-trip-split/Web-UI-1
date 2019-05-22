let hamburger = document.querySelector(".hamburger");
let navItems = document.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  navItems.forEach(navItem => navItem.classList.toggle("is-active"));
  console.log("I toggled!");
});