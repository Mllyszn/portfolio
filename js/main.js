/*
  main.js
  ─────────────────────────────────────────────
  All JavaScript for the portfolio.
  Currently handles scroll-triggered reveal
  animations using the IntersectionObserver API.

  To add new behaviour (e.g. a mobile menu toggle,
  form submission, typewriter effect) add it here.
*/

/* ── Scroll reveal ────────────────────────────
   Any element with class="reveal" fades in
   when it scrolls into view.
   The .visible class triggers the CSS transition
   defined in base.css.
────────────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
