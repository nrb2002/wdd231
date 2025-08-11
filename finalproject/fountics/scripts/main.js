// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.getElementById("contactForm");

//   contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = contactForm.querySelector("input[type='text']").value.trim();
//     const email = contactForm.querySelector("input[type='email']").value.trim();
//     const message = contactForm.querySelector("textarea").value.trim();

//     if (!name || !email || !message) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     alert("Thank you, " + name + "! Your message has been sent.");
//     contactForm.reset();
//   });

// const hamburger = document.getElementById('hamburger');
// const overlay = document.getElementById('overlay');
// const sidemenu = document.getElementById('sidemenu');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('open');
//   sidemenu.classList.toggle('open');
//   overlay.classList.toggle('show');
// });

// overlay.addEventListener('click', () => {
//   hamburger.classList.remove('open');
//   sidemenu.classList.remove('open');
//   overlay.classList.remove('show');
// });

// });


/* fountex-garage.js
   – contact‑form validation
   – hamburger / overlay toggle
   – smooth scroll for in‑page anchors
   – infinite auto‑carousel
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {

  /* ── Contact Form ─────────────────────────────── */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name    = contactForm.querySelector("input[type='text']").value.trim();
      const email   = contactForm.querySelector("input[type='email']").value.trim();
      const message = contactForm.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }

  /* ── Mobile Menu ──────────────────────────────── */
  const hamburger = document.getElementById("hamburger");
  const overlay   = document.getElementById("overlay");
  const sidemenu  = document.getElementById("sidemenu");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      sidemenu .classList.toggle("open");
      overlay  .classList.toggle("show");
    });
  }
  if (overlay) {
    overlay.addEventListener("click", () => {
      hamburger.classList.remove("open");
      sidemenu .classList.remove("open");
      overlay  .classList.remove("show");
    });
  }

  /* ── Smooth‑scroll ONLY for “#” anchors ───────── */
  document.querySelectorAll('.menu-links a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ── Infinite Auto Carousel ───────────────────── */
  const carousel = document.getElementById("carousel");   // <div id="carousel">
  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);

    /* clone each slide once for seamless loop */
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    let offset = 0;
    const speed = 1;          // pixels per frame
    function animate() {
      offset += speed;
      track.style.transform = `translateX(-${offset}px)`;

      // reset when original set scrolled away
      if (offset >= track.scrollWidth / 2) offset = 0;

      requestAnimationFrame(animate);
    }
    animate();
  }
});
