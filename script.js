const burgerMenu = document.querySelector(".burger-icon");
const quit = document.querySelector(".quit");

burgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".disabled").classList.add("active");
});
quit.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".disabled").classList.remove("active");
});
