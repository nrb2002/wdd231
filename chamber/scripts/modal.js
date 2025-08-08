// modal.js
const membershipBenefits = {
  np: {
    title: "NP Membership Benefits",
    benefits: [
      "Event participation",
      "Basic listing in the directory",
      "Networking events"
    ]
  },
  bronze: {
    title: "Bronze Membership Benefits",
    benefits: [
      "All NP benefits",
      "Featured business listing",
      "1 spotlight feature"
    ]
  },
  silver: {
    title: "Silver Membership Benefits",
    benefits: [
      "All Bronze benefits",
      "Training programs",
      "3 spotlight features"
    ]
  },
  gold: {
    title: "Gold Membership Benefits",
    benefits: [
      "All Silver benefits",
      "Unlimited advertising",
      "Priority event invitations"
    ]
  }
};

export function showMembershipModal(type) {
  const data = membershipBenefits[type];
  if (!data) return;

  const existing = document.querySelector('dialog.membership-modal');
  if (existing) existing.remove();

  const modal = document.createElement('dialog');
  modal.classList.add('membership-modal');

  const title = document.createElement('h3');
  title.textContent = data.title;
  modal.appendChild(title);

  const list = document.createElement('ul');
  data.benefits.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    list.appendChild(li);
  });
  modal.appendChild(list);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.setAttribute('aria-label', 'Close membership details modal');
  closeBtn.classList.add('close-modal'); // style as needed
  modal.appendChild(closeBtn);

  //Close modal by clicking on the close button
  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  //Close modal by clicking on the backgrop
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.close();
  });

  document.body.appendChild(modal);
  modal.showModal();
}
