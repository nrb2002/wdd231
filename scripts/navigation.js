// HEADER AND NAVIGATION SCRIPTS
const navLinks = document.querySelector('#nava-bar');
const navButton = document.querySelector('#ham-btn');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show'); 
});