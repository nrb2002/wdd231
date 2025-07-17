// scripts/members.js

const url = 'data/members.json';
const cardsContainer = document.querySelector("#member-cards");
let allMembers = [];

// Filter members by membership level
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const level = btn.getAttribute('data-filter');

    // Toggle active class
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (level === "all") {
      displayMembers(allMembers);
    } else {
      const filtered = allMembers.filter(m => m.membership == level);
      displayMembers(filtered);
    }
  });
});

//Load members
async function getMembers() {
  //Loading message
  const loadingMessage = document.getElementById("loading-message");
  loadingMessage.style.display = "block";

  //Display members if data found
  try {
    const response = await fetch(url);
    const data = await response.json();
    allMembers = data;
    displayMembers(allMembers);
  } catch (error) {
    //If no data was found, display error message
    cardsContainer.innerHTML = "<p>Failed to load member data.</p>";
    console.error("Fetch error:", error);
  } finally {
    loadingMessage.style.display = "none";
  }
}

//Function that displays members
function displayMembers(members) {
  cardsContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("directory-card");

    card.innerHTML = `
      <img src="images/members/${member.image}" alt="${member.name} logo" loading="lazy">
      <h2>${member.name}</h2>
      <p><strong>Membership:</strong> ${membershipLevel(member.membership)}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p class="description">${member.description}</p>
    `;
    
    //Sort members by membership level
    members.sort((a, b) => b.membership - a.membership); // Gold > Silver > Member
    cardsContainer.appendChild(card);
  });

}

function membershipLevel(level) {
  switch (level) {
    case 3: return "Gold";
    case 2: return "Silver";
    default: return "Member";
  }
}

// Toggle View Buttons
const toggleBtn = document.getElementById("toggle-view-btn");

// Set initial view state
let isGrid = true;
toggleBtn.classList.add("grid"); // initial icon

toggleBtn.addEventListener("click", () => {
  isGrid = !isGrid;

  if (isGrid) {
    cardsContainer.classList.add("grid");
    cardsContainer.classList.remove("list");
    toggleBtn.classList.add("grid");
    toggleBtn.classList.remove("list");
  } else {
    cardsContainer.classList.add("list");
    cardsContainer.classList.remove("grid");
    toggleBtn.classList.add("list");
    toggleBtn.classList.remove("grid");
  }
});

function toggleButton(activeId, inactiveId) {
  document.getElementById(activeId).classList.add("active");
  document.getElementById(inactiveId).classList.remove("active");
}

getMembers();





