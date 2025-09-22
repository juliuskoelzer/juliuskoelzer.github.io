document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".greedy-nav .hidden-links-toggle");
  const nav = document.querySelector(".greedy-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
