// Sticky Navbar Shadow Effect
      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
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