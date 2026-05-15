// ─── Navbar Scroll ────────────────────────────────────────────────────────────

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 80);

  const scrollTop = document.getElementById("scrollTop");
  if (scrollTop) scrollTop.classList.toggle("visible", window.scrollY > 400);

  // scroll reveal
  revealOnScroll();
});

// ─── Custom Cursor ────────────────────────────────────────────────────────────

const cursor    = document.getElementById("cursor");
const trail     = document.getElementById("cursorTrail");

let tx = 0, ty = 0, cx = 0, cy = 0;

document.addEventListener("mousemove", (e) => {
  tx = e.clientX;
  ty = e.clientY;
  cursor.style.left = tx - 5 + "px";
  cursor.style.top  = ty - 5 + "px";
});

setInterval(() => {
  cx += (tx - cx) * 0.15;
  cy += (ty - cy) * 0.15;
  trail.style.left = cx - 17 + "px";
  trail.style.top  = cy - 17 + "px";
}, 16);

document.addEventListener("mousedown", () => {
  cursor.style.transform = "scale(2.2)";
  cursor.style.mixBlendMode = "normal";
  cursor.style.background = "var(--fire-light)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "scale(1)";
  cursor.style.mixBlendMode = "multiply";
  cursor.style.background = "var(--fire)";
});

// Cursor grow on interactive elements
document.querySelectorAll("a, button, .cat-card, .product-card, .why-feat, .testi-card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.8)";
    trail.style.borderColor = "rgba(255,106,0,0.7)";
    trail.style.width = "44px";
    trail.style.height = "44px";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    trail.style.borderColor = "rgba(255,106,0,0.45)";
    trail.style.width = "34px";
    trail.style.height = "34px";
  });
});

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function openMobileMenu() {
  document.getElementById("mobileMenu").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
  document.body.style.overflow = "";
}

// ─── Page Loader ──────────────────────────────────────────────────────────────

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // inject progress bar into loader
    const bar = document.createElement("div");
    bar.className = "loader-bar";
    loader.appendChild(bar);
    setTimeout(() => loader.classList.add("hidden"), 900);
  }
});

// ─── Scroll Reveal ────────────────────────────────────────────────────────────

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  const windowBottom = window.innerHeight * 0.92;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowBottom) {
      el.classList.add("visible");
    }
  });
}

// Auto-add reveal class to key sections
function initReveal() {
  const selectors = [
    ".cat-card",
    ".project-card",
    ".why-feat",
    ".testi-card",
    ".section-title",
    ".section-tag",
    ".section-sub",
    ".categories-header",
    ".home-products-header",
    ".feat",
    ".featured-title",
    ".featured-desc",
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add("reveal");
      if (i % 4 === 1) el.classList.add("reveal-delay-1");
      if (i % 4 === 2) el.classList.add("reveal-delay-2");
      if (i % 4 === 3) el.classList.add("reveal-delay-3");
    });
  });

  // run once immediately for elements already in view
  revealOnScroll();
}

// ─── Stat Counter Animation ───────────────────────────────────────────────────
   

function animateCounters() {
  const nums = document.querySelectorAll(".fire-num");
  nums.forEach(el => {
    const target = parseInt(el.textContent, 10);
    if (isNaN(target)) return;
    let start = 0;
    const duration = 1600;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  });
}

// Trigger counter once hero stats come into view
let countersRun = false;
function checkCounters() {
  if (countersRun) return;
  const stats = document.querySelector(".hero-stats");
  if (!stats) return;
  const top = stats.getBoundingClientRect().top;
  if (top < window.innerHeight) {
    countersRun = true;
    animateCounters();
  }
}

window.addEventListener("scroll", checkCounters);

// ─── Ticker Pause on Hover ────────────────────────────────────────────────────

const tickerInner = document.querySelector(".ticker-inner");
if (tickerInner) {
  tickerInner.addEventListener("mouseenter", () => {
    tickerInner.style.animationPlayState = "paused";
  });
  tickerInner.addEventListener("mouseleave", () => {
    tickerInner.style.animationPlayState = "running";
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  checkCounters();
});