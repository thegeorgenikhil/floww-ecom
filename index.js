const navToggleBtn = document.getElementById("nav-toggle");
const navSecondary = document.getElementById("nav-secondary");

navToggleBtn.addEventListener("click",() => {
  navSecondary.classList.toggle("hidden")
  navToggleBtn.classList.toggle("fa")
  navToggleBtn.classList.toggle("fa-close")
})


// fa fa-close