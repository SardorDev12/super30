const burgerMenu = document.querySelector(".burger-icon");
const quit = document.querySelector(".quit");

burgerMenu.addEventListener("click", () => {
  document.querySelector(".disabled").classList.add("active");
});
quit.addEventListener("click", () => {
  document.querySelector(".disabled").classList.remove("active");
});
