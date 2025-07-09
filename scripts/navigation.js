// HEADER SCRIPTS
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

if (navButton && navBar) {
  navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
  });
}
