const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function toggleMenu() {
  nav.classList.toggle("nav-mobile");
  button.classList.toggle("menu-button-open");

  if (button.classList.contains("menu-button-open")) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "menu";
  }
}

button.addEventListener("click", toggleMenu);