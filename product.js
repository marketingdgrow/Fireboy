const products = [
  { id: 1, category: "extinguisher", name: "ABC Dry Powder Extinguisher 4KG", desc: "Multi-purpose ISI marked powder extinguisher. Suitable for Class A, B & C fires.", price: "1,250", badge: "Best Seller", cert: true, specs: ["4 KG", "Class ABC", "ISI Marked", "5-Year Warranty"], color: "#ffece0" },
  { id: 2, category: "extinguisher", name: "CO₂ Fire Extinguisher 4.5KG", desc: "Carbon dioxide extinguisher — ideal for electrical panels, server rooms & labs.", price: "3,800", badge: "Premium", cert: true, specs: ["4.5 KG", "Class B/E", "ISI Marked", "BIS Certified"], color: "#f0f4ff" },
  { id: 3, category: "extinguisher", name: "Clean Agent (HFC-236fa) 4KG", desc: "Zero residue clean agent extinguisher. Perfect for data centers and sensitive equipment.", price: "6,500", badge: "New", cert: true, specs: ["4 KG", "Class A/B/C/E", "No Residue", "Safe for Electronics"], color: "#f0f8ff" },
  { id: 4, category: "hydrant", name: "Fire Hydrant Valve (Gun Metal) 63mm", desc: "Heavy-duty gunmetal landing valve for fire hydrant systems. IS:5290 compliant.", price: "2,100", badge: null, cert: true, specs: ["63mm", "Gun Metal", "IS:5290", "High Pressure"], color: "#fff8f0" },
  { id: 5, category: "hydrant", name: "Fire Hose Reel — 30M × 25mm", desc: "Wall-mounted hose reel with 30m hose. Swivel arm for full 180° coverage.", price: "4,200", badge: "Popular", cert: false, specs: ["30M Hose", "25mm Bore", "180° Swivel", "IS:884"], color: "#f5fff0" },
  { id: 6, category: "detection", name: "Photoelectric Smoke Detector", desc: "Advanced optical smoke detector with 360° coverage. Low false-alarm technology.", price: "850", badge: null, cert: true, specs: ["360° Coverage", "9–35V DC", "Low Power", "IS:11360"], color: "#f0f5ff" },
  { id: 7, category: "detection", name: "Conventional Fire Alarm Panel 4-Zone", desc: "4-zone conventional fire alarm control panel. LCD display with event logging.", price: "8,500", badge: "New", cert: true, specs: ["4 Zones", "LCD Display", "Event Log", "240V AC"], color: "#f5f5f5" },
  { id: 8, category: "suppression", name: "Automatic Water Sprinkler Head (68°C)", desc: "Pendant type fusible-link sprinkler. Activates at 68°C for reliable coverage.", price: "180", badge: null, cert: true, specs: ["Pendant Type", "68°C Rating", "K=80", "IS:903"], color: "#f0fff5" },
  { id: 9, category: "ppe", name: "Firefighter Proximity Suit", desc: "Aluminized firefighter proximity suit for radiant heat protection up to 1000°C.", price: "18,500", badge: "Premium", cert: true, specs: ["Aluminized", "1000°C Rated", "Full Coverage", "EN 1486"], color: "#fff5f0" },
  { id: 10, category: "ppe", name: "SCBA Self Contained Breathing Apparatus", desc: "Full-face SCBA with 6L carbon cylinder and 30-min air supply. CE certified.", price: "42,000", badge: "Premium", cert: true, specs: ["6L Cylinder", "30-Min Air", "Full Face", "CE Certified"], color: "#f0f5ff" },
  { id: 11, category: "signage", name: "Glow-in-Dark Fire Exit Sign (Pack of 10)", desc: "Photoluminescent fire exit signage visible for 8+ hours after power failure.", price: "650", badge: "Value Pack", cert: false, specs: ["Pack of 10", "Photoluminescent", "8hr Glow", "IS:12349"], color: "#f0fff0" },
  { id: 12, category: "extinguisher", name: "Water Mist Extinguisher 9L", desc: "Eco-friendly water mist. Safe on electrical fires up to 1000V. Class A, B, F.", price: "4,900", badge: "Eco Choice", cert: true, specs: ["9L Capacity", "Class A/B/F", "1000V Safe", "No Chemicals"], color: "#f0f8ff" },
];

const productImages = {
  1: "./img/DCP-SBC-PBC.webp",
  2: "./img/CO2-TM-XX.webp",
  3: "./img/STP-CA-XX.webp",
  4: "./img/Double-Headed-Hydrant-Valve_pro.webp",
  5: "./img/Short-Branch-Pipe-With-Nozzle_pro.webp",
  6: "./img/Panel-Protection-Systems_pro.webp",
  7: "./img/FB-1X2.webp",
  8: "./img/Fire-Hydrants-and-Sprinkler-Systems.webp",
  9: "./img/DSPA-5-Fire-Suppression-Aerosol-Device_pro_pro.webp",
  10: "./img/Battery-Energy-Storage-Systems-BESS_pro_pro.webp",
  11: "./img/Clean-Agent-Fire-Suppression-Systems_pro.webp",
  12: "./img/SHP-CO2-XX.webp",
};

// ─── Product Detail Page Map ──────────────────────────────────────────────────
// All 12 products now have dedicated detail sections.
const productPages = {
  1:  "./product-detail.html#product-1",
  2:  "./product-detail.html#product-2",
  3:  "./product-detail.html#product-3",
  4:  "./product-detail.html#product-4",
  5:  "./product-detail.html#product-5",
  6:  "./product-detail.html#product-6",
  7:  "./product-detail.html#product-7",
  8:  "./product-detail.html#product-8",
  9:  "./product-detail.html#product-9",
  10: "./product-detail.html#product-10",
  11: "./product-detail.html#product-11",
  12: "./product-detail.html#product-12",
};

// ─── Render ───────────────────────────────────────────────────────────────────

function renderProducts(list) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML =
    list.length === 0
      ? `<div style="grid-column:1/-1; text-align:center; padding:80px; color:#999;">
           <div style="font-family:var(--font-display); font-size:48px; opacity:0.3; color:#111;">NO RESULTS</div>
           <p style="margin-top:12px;">Try a different search or category.</p>
         </div>`
      : list
          .map(
            (p) => `
          <div class="product-card" data-cat="${p.category}" data-id="${p.id}">
            <div class="product-img-wrap" style="background: linear-gradient(135deg, ${p.color}, #f5f5f3);">
              ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
              ${p.cert ? `<div class="product-badge cert">ISI ✓</div>` : ""}
              <img class="product-img" src="${productImages[p.id]}" alt="${p.name}" />
              <div class="product-overlay">
                <div class="overlay-actions">
                  <button class="overlay-btn" onclick="viewProduct(${p.id})">View Details</button>
                </div>
              </div>
            </div>
            <div class="product-body">
              <div class="product-cat">${p.category.toUpperCase()}</div>
              <div class="product-name">${p.name}</div>
              <div class="product-desc">${p.desc}</div>
              <div class="product-specs">
                ${p.specs
                  .map(
                    (s) => `
                  <div class="spec">
                    <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                    ${s}
                  </div>`
                  )
                  .join("")}
              </div>
              <div class="product-footer">
                <div class="product-price">₹${p.price} <span class="price-unit">/ unit</span></div>
                <button class="product-enquire" onclick="viewProduct(${p.id})">
                  <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                </button>
              </div>
            </div>
          </div>`
          )
          .join("");

  // Staggered fade-in animation
  grid.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.4s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 60);
  });
}

// ─── Filter & Search ──────────────────────────────────────────────────────────

let currentFilter = "all";
let currentSearch = "";

function filterProducts(cat, btn) {
  if (!document.getElementById("productsGrid")) {
    window.location.href = `products.html?category=${encodeURIComponent(cat)}#products`;
    return;
  }

  currentFilter = cat;

  if (btn) {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }

  applyFilters();

  if (cat !== "all") {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }
}

function searchProducts() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;
  currentSearch = searchInput.value.toLowerCase();
  applyFilters();
}

function applyFilters() {
  let list = products;
  if (currentFilter !== "all") list = list.filter((p) => p.category === currentFilter);
  if (currentSearch)
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(currentSearch) ||
        p.desc.toLowerCase().includes(currentSearch)
    );
  renderProducts(list);
}

// ─── Product Details — navigate to dedicated page ─────────────────────────────

function viewProduct(id) {
  if (productPages[id]) {
    window.location.href = productPages[id];
  } else {
    const p = products.find((x) => x.id === id);
    alert(
      `Product: ${p.name}\nPrice: ₹${p.price}/unit\n\nFull product page coming soon!\nFor details, contact our sales team:\n📞 +91 98765 43210\n✉ info@ignis.in`
    );
  }
}

// ─── Navbar Scroll ────────────────────────────────────────────────────────────

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 80);
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

// ─── Init ─────────────────────────────────────────────────────────────────────

const initialCategory = new URLSearchParams(window.location.search).get("category");
if (initialCategory && initialCategory !== "all") {
  const activeButton = document.querySelector(`.filter-btn[data-filter="${initialCategory}"]`);
  filterProducts(initialCategory, activeButton);
} else {
  renderProducts(products);
}

// "/" shortcut to focus search bar
document.addEventListener("keydown", (e) => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput && e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});