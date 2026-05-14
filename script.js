// ─── Navbar Scroll ────────────────────────────────────────────────────────────

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 80);

  const scrollTop = document.getElementById("scrollTop");
  if (scrollTop) scrollTop.classList.toggle("visible", window.scrollY > 400);
});

// ─── Custom Cursor ────────────────────────────────────────────────────────────

const cursor = document.getElementById("cursor");
const trail = document.getElementById("cursorTrail");

let tx = 0, ty = 0, cx = 0, cy = 0;

document.addEventListener("mousemove", (e) => {
  tx = e.clientX;
  ty = e.clientY;
  cursor.style.left = tx - 6 + "px";
  cursor.style.top  = ty - 6 + "px";
});

setInterval(() => {
  cx += (tx - cx) * 0.15;
  cy += (ty - cy) * 0.15;
  trail.style.left = cx - 18 + "px";
  trail.style.top  = cy - 18 + "px";
}, 16);

document.addEventListener("mousedown", () => (cursor.style.transform = "scale(2)"));
document.addEventListener("mouseup",   () => (cursor.style.transform = "scale(1)"));

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function openMobileMenu() {
  document.getElementById("mobileMenu").classList.add("open");
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// ─── Page Loader ──────────────────────────────────────────────────────────────

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) setTimeout(() => loader.classList.add("hidden"), 800);
});