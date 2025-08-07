const modal = document.getElementById('myModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});

/**
 * In this example, the showModal() method is used to display the modal dialog, and the close() method is used to hide the modal dialog when the close button is clicked. 
 * The addEventListener() method is used to add a click event listener to the buttons.
*/