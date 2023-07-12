//*NAVIGATION HEADER SECTION
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button[aria-controls='mobile-menu']");
  const menu = document.getElementById("mobile-menu");

  button.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true" || false;

  this.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("hidden");
  });
});
