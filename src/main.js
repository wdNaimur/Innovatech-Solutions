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
}

// ✅ Manually load each section
loadSection("navbar");
loadSection("hero");
loadSection("keyFeatures");
loadSection("successStory");