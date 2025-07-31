document.addEventListener('DOMContentLoaded', () => {
  const events = [
    {
      title: "Annual Business Mixer",
      date: "August 15, 2025",
      image: "images/events/business-mixer.jpg",
      link: "events/business-mixer.html"
    },
    {
      title: "Women's Business Conference",
      date: "September 2, 2025",
      image: "images/events/women-business-conf.jpg",
      link: "events/women-business.html"
    },
    {
      title: "Tech Expo Kinshasa",
      date: "October 10, 2025",
      image: "images/events/tech-expo.jpg",
      link: "events/tech-expo.html"
    }
  ];

  const container = document.getElementById('events-container');
  const dotsContainer = document.getElementById('event-dots');
  let currentIndex = 0;
  let intervalId;

  // Add cards and dots
  events.forEach((event, index) => {
    const card = document.createElement('a');
    card.href = event.link;
    card.classList.add('event-card');
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="card-content">
        <h3>${event.title}</h3>
        <p>${event.date}</p>
      </div>
    `;
    container.appendChild(card);

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    currentIndex = index;
    const scrollAmount = container.children[0].offsetWidth + 16;
    container.scrollTo({
      left: scrollAmount * index,
      behavior: "smooth"
    });
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function startSlider() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % events.length;
      goToSlide(currentIndex);
    }, 5000);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopSlider();
      goToSlide(parseInt(dot.dataset.index));
      startSlider(); // Resume
    });
  });

  container.addEventListener('mouseenter', stopSlider);
  container.addEventListener('mouseleave', startSlider);

  // Init
  goToSlide(0);
  startSlider();
});
