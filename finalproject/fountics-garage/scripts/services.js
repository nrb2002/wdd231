// import data
const servicesUrl = './data/services.json'; 

const servicesContainer = document.getElementById('services-container');
const modal = document.getElementById('booking-modal');
const modalCloseBtn = document.getElementById('modal-close');
const bookingForm = document.getElementById('booking-form');
const selectedServiceNameSpan = document.getElementById('selected-service-name');
const bookingConfirmation = document.getElementById('booking-confirmation');

let servicesData = [];
let selectedService = null;

async function fetchServices() {
  try {
    const response = await fetch(servicesUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    servicesData = await response.json();
    renderServices(servicesData);
  } catch (error) {
    servicesContainer.innerHTML = `<p style="color:red;">Failed to load services: ${error.message}</p>`;
    console.error('Fetch error:', error);
  }
}

function renderServices(services) {
  // Create cards dynamically
  servicesContainer.innerHTML = services
    .map(
      (service) => `
    <article class="card" tabindex="0" aria-label="Service: ${service.name}">
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <ul>
        <li><strong>Price:</strong> ${service.price}</li>
        <li><strong>Duration:</strong> ${service.duration}</li>
      </ul>
      <button class="btn booking" data-id="${service.id}">Book Now</button>
    </article>`
    )
    .join('');

  // Add event listeners for all "Book Now" buttons
  const bookButtons = servicesContainer.querySelectorAll('button.booking');
  bookButtons.forEach((btn) => btn.addEventListener('click', openBookingModal));
}

function openBookingModal(e) {
  const serviceId = e.currentTarget.getAttribute('data-id');
  selectedService = servicesData.find((s) => s.id === serviceId);
  if (!selectedService) return;

  selectedServiceNameSpan.textContent = selectedService.name;
  bookingForm.reset();
  bookingConfirmation.hidden = true;

  modal.hidden = false;
  modal.focus();
}

function closeModal() {
  modal.hidden = true;
  selectedService = null;
}

function saveBookingToLocalStorage(booking) {
  // Save latest booking in localStorage
  localStorage.setItem('latestBooking', JSON.stringify(booking));
}

function loadBookingFromLocalStorage() {
  const booking = localStorage.getItem('latestBooking');
  if (!booking) return null;
  try {
    return JSON.parse(booking);
  } catch {
    return null;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  // Validate inputs (HTML5 form validation helps)
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }

  const booking = {
    serviceId: selectedService.id,
    serviceName: selectedService.name,
    customerName: bookingForm.customerName.value.trim(),
    customerEmail: bookingForm.customerEmail.value.trim(),
    preferredDate: bookingForm.preferredDate.value,
    bookedAt: new Date().toISOString(),
  };

  saveBookingToLocalStorage(booking);

  bookingConfirmation.textContent = `Thank you, ${booking.customerName}! Your booking for "${booking.serviceName}" on ${booking.preferredDate} has been received. We will contact you at ${booking.customerEmail}.`;
  bookingConfirmation.hidden = false;

  bookingForm.reset();

  // Optionally close modal after delay:
  setTimeout(closeModal, 7000);
}

function setupModalAccessibility() {
  // Close modal on clicking close button or outside modal content
  modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
}

function init() {
  fetchServices();
  bookingForm.addEventListener('submit', handleFormSubmit);
  setupModalAccessibility();

  // Optionally, preload last booking data from localStorage to pre-fill form or show info
  const lastBooking = loadBookingFromLocalStorage();
  if (lastBooking) {
    console.log('Loaded previous booking from localStorage:', lastBooking);
  }
}

document.addEventListener('DOMContentLoaded', init);
