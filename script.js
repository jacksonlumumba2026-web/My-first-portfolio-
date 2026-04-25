// ===== SCROLL FADE-IN ANIMATION =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));


// ===== SMOOTH NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#00e5a0";
    }
  });
});


// ===== NAV BACKGROUND ON SCROLL =====
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(10,10,15,0.98)";
  } else {
    nav.style.background = "rgba(10,10,15,0.9)";
  }
});


// ===== CONTACT FORM - Send via mailto =====
const sendBtn = document.querySelector(".send-btn");

if (sendBtn) {
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const subject = document.querySelector('input[placeholder^="Subject"]').value;
    const message = document.querySelector("textarea").value;

    if (!name || !message) {
      alert("Please fill in at least your name and message.");
      return;
    }

    const mailtoLink = `mailto:jacksonlumumba275@gmail.com?subject=${encodeURIComponent(subject || "New Project Inquiry")}&body=${encodeURIComponent("Hi Jackson,\n\nMy name is " + name + ".\n\n" + message)}`;
    window.location.href = mailtoLink;
  });
}


// ===== MOBILE NAV TOGGLE (optional hamburger) =====
// You can add a hamburger menu button in your HTML with id="menu-toggle"
// and a nav ul with id="nav-menu" to enable this:
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
        }
