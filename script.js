/* ==============================
   script.js — Jackson Lumumba Portfolio
============================== */

// ── 1. SCROLL FADE-IN ANIMATION ──────────────────────────────────────────────
const fadeEls = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el) => fadeObserver.observe(el));


// ── 2. NAV: DARKEN ON SCROLL ──────────────────────────────────────────────────
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(10,10,15,0.99)";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.background = "rgba(10,10,15,0.92)";
    navbar.style.boxShadow = "none";
  }
});


// ── 3. NAV: HIGHLIGHT ACTIVE SECTION ─────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#nav-menu a:not(.nav-cta)");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
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


// ── 4. MOBILE HAMBURGER MENU ──────────────────────────────────────────────────
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });
}


// ── 5. FAQ ACCORDION ─────────────────────────────────────────────────────────
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-q");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    // Close all
    faqItems.forEach((i) => i.classList.remove("open"));
    // Toggle clicked
    if (!isOpen) item.classList.add("open");
  });
});


// ── 6. CONTACT FORM ───────────────────────────────────────────────────────────
const sendBtn = document.getElementById("send-btn");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const name    = document.getElementById("fname").value.trim();
    const email   = document.getElementById("femail").value.trim();
    const subject = document.getElementById("fsubject").value.trim();
    const message = document.getElementById("fmessage").value.trim();

    if (!name || !message) {
      alert("Please fill in at least your Name and Message before sending.");
      return;
    }

    const body =
      `Hi Jackson,\n\nMy name is ${name}${email ? " (" + email + ")" : ""}.\n\n${message}\n\nLooking forward to hearing from you!`;

    window.location.href =
      `mailto:jacksonlumumba275@gmail.com` +
      `?subject=${encodeURIComponent(subject || "New Project Inquiry from " + name)}` +
      `&body=${encodeURIComponent(body)}`;
  });
}


// ── 7. SMOOTH SCROLL ─────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
                     
