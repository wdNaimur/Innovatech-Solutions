import './style.css'; // global styles

// Utility: load one section manually
async function loadSection(targetId) {
  const section = document.getElementById(targetId);

  // Load HTML
  const res = await fetch(`/src/sections/${targetId}.html`);
  section.innerHTML = await res.text();

  // Load CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `/src/sections/${targetId}.css`;
  document.head.appendChild(link);

  // toggle navbar 
  if (targetId === "navbar") {
    initNavbarToggle();
  }
}

function initNavbarToggle() {
  const hamburger = document.querySelector(".hamburger-icon");
  const mobileNav = document.querySelector(".nav-links-mobile");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");


      if (mobileNav.classList.contains("active")) {
        hamburger.src = "/close.png";
      } else {
        hamburger.src = "/hamburger-icon.svg";
      }
    });
  }
}


// ✅ Manually load each section
loadSection("navbar");
loadSection("hero");
loadSection("keyFeatures");
loadSection("successStory");
loadSection("pricingPlans");
loadSection("footer");