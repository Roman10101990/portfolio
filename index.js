window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function menuBg() {
  let menuToggle = document.querySelector(".toggle");
  menuToggle.classList.toggle("active");

  let menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
