const spotlightContainer = document.getElementById("spotlight-container");

fetch("data/members.json")
  .then((res) => res.json())
  .then((members) => {
    // Filter for gold (3) or silver (2) members
    const spotlightEligible = members.filter(m => m.membership >= 2);

    // Shuffle
    for (let i = spotlightEligible.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [spotlightEligible[i], spotlightEligible[j]] = [spotlightEligible[j], spotlightEligible[i]];
    }

    // Pick 2 or 3 randomly
    const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const chosen = spotlightEligible.slice(0, count);

    chosen.forEach(member => {
      const card = document.createElement("div");
      card.className = "spotlight-card";

      const levelText = member.membership === 3 ? "Gold" : "Silver";

      card.innerHTML = `
        <img src="images/members/${member.image}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p><strong>📍 Address:</strong> ${member.address}</p>
        <p><strong>📞 Phone:</strong> ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">🌐 Visit Website</a></p>
        <p><strong>⭐ Membership:</strong> ${levelText}</p>
      `;

      spotlightContainer.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Spotlight loading error:", err);
    spotlightContainer.innerHTML = "<p>Unable to load spotlights.</p>";
  });
