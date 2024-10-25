const menuToggle = document.querySelector(".icon-menu input");
const nav = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
