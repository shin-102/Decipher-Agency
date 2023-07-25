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


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('ani'); //ani is the "show" class
    } else {
      entry.target.classList.remove('ani');
    }
  });
});

const hiddenElements = document.querySelectorAll('.unani'); //unani is the "hidden" class
hiddenElements.forEach((el) => observer.observe(el));

