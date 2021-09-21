let btnNav = document.querySelector("#menu-btn");
let menuNav = document.querySelector("#main-menu");

btnNav.addEventListener("click", () => {
  menuNav.classList.toggle("show");
});
