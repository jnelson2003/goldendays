// Golden Days site interactions

const header = document.querySelector(".site-header");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function updateHeader() {
  if (window.scrollY > 90) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealItems.forEach(item => revealObserver.observe(item));

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Demo-only form behavior.
// Replace the form action with your Constant Contact / signup URL.
const signupForm = document.querySelector(".signup-form");
signupForm.addEventListener("submit", event => {
  if (signupForm.getAttribute("action") === "#") {
    event.preventDefault();
    const button = signupForm.querySelector("button");
    button.textContent = "CONNECTED LATER ✓";
  }
});
