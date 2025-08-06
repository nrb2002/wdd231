const gallery = document.querySelector(".attraction-gallery");
const welcome = document.querySelector(".welcome-message");

function loadAttractions() {
  fetch("data/attractions.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const card = document.createElement("article");
        card.classList.add("attraction-card");
        card.innerHTML = `
          <h3>${item.title}</h3>
          <figure>
            <img src="${item.image}" alt="${item.title}" width="300" height="200" loading="lazy" />
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;
        gallery.appendChild(card);
      });
    });
}

function displayVisitMessage() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1) {
      message = "Back so soon! Awesome!";
    } else {
      message = `You last visited ${daysPassed} day${daysPassed === 1 ? "" : "s"} ago.`;
    }
  }

  welcome.textContent = message;
  localStorage.setItem("lastVisit", now);
}

loadAttractions();
displayVisitMessage();
