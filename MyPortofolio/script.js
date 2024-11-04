const menuToggle = document.querySelector(".icon-menu input");
const nav = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Referensi https://youtu.be/a6-v_0kjYyY?si=hm5V2JWcndEX-zhc
