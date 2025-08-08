import { showMembershipModal } from './modal.js';

//When a link is clicked on a card, pull the card type and open a dialog with relevant details
document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const cat = link.getAttribute('href').replace('#modal-', ''); //Remove the prefix to match the card cat
    showMembershipModal(cat);
  });
});

