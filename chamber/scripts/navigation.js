// navigation.js
const hamButton = document.querySelector('#ham-btn');
const nav = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamButton.classList.toggle('show');

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Accessibility
  const expanded = hamBtn.getAttribute("aria-expanded") === "true";
  hamBtn.setAttribute("aria-expanded", !expanded);

});
