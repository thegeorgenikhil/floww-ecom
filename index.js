const navOpen = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navSecondary = document.getElementById("nav-secondary");

navOpen.addEventListener("click", () => {
  navSecondary.classList.toggle("hidden");
});

navClose.addEventListener("click", () => {
  navSecondary.classList.toggle("hidden");
});
