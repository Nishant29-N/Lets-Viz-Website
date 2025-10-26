// Sticky Navbar Shadow Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Select elements
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const dropdowns = document.querySelectorAll(".dropdown");

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Dropdown Toggle (Mobile)
dropdowns.forEach((drop) => {
  const link = drop.querySelector("a");
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      drop.classList.toggle("open");
    }
  });
});

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

const animatedElements = document.querySelectorAll(
  ".fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the "animate" class when element is visible
        entry.target.classList.add("animate");
      } else {
        // Remove it when element goes out of view
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

animatedElements.forEach((el) => observer.observe(el));
