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
 {
    id: 13,
    category: "head",
    name: "Fire Rescue Helmet",
    desc: "Advanced fire rescue helmet with transparent visor and impact protection for firefighters and emergency response teams.",
    price: "8500",
    badge: "Premium Safety",
    cert: true,
    specs: ["Heat Resistant", "Full Face Visor", "Impact Protection", "Adjustable Strap"],
    color: "#f7e600"
  },

  {
    id: 14,
    category: "head",
    name: "Industrial Safety Helmet",
    desc: "Heavy-duty industrial safety helmet designed for construction and factory environments.",
    price: "450",
    badge: "Best Seller",
    cert: true,
    specs: ["ABS Plastic", "Adjustable Lock", "Light Weight", "Industrial Grade"],
    color: "#0066ff"
  },

  {
    id: 15,
    category: "head",
    name: "Auto Darkening Welding Helmet",
    desc: "Professional welding helmet with auto-darkening lens for arc and MIG/TIG welding applications.",
    price: "3200",
    badge: "Professional",
    cert: true,
    specs: ["Auto Darkening", "UV Protection", "Heat Resistant", "Wide Lens"],
    color: "#1a1a1a"
  },

  {
    id: 16,
    category: "head",
    name: "Full Cover Face Shield Hood",
    desc: "Complete face and neck protection hood for chemical and hazardous industrial operations.",
    price: "5400",
    badge: "Full Protection",
    cert: true,
    specs: ["Full Face Cover", "Chemical Resistant", "Anti Fog Shield", "Comfort Fit"],
    color: "#00aa66"
  },

  {
    id: 17,
    category: "head",
    name: "Safety Helmet with Face Shield",
    desc: "Industrial safety helmet with transparent face visor for grinding and cutting operations.",
    price: "1200",
    badge: "Industrial Use",
    cert: true,
    specs: ["Clear Face Shield", "Impact Resistant", "Helmet Mounted", "Reusable"],
    color: "#ffd400"
  },

  {
    id: 18,
    category: "head",
    name: "Ventilated Safety Helmet",
    desc: "Ventilated lightweight helmet suitable for long working hours in industrial environments.",
    price: "650",
    badge: "Comfort Fit",
    cert: true,
    specs: ["Ventilation Slots", "ABS Material", "Adjustable Fit", "Sweat Resistant"],
    color: "#39d353"
  },

  {
    id: 19,
    category: "head",
    name: "Construction Safety Helmet",
    desc: "Durable construction helmet for civil, industrial, and site safety applications.",
    price: "500",
    badge: "Construction Grade",
    cert: true,
    specs: ["Impact Resistant", "Heavy Duty", "Light Weight", "Site Safety"],
    color: "#ff6a00"
  },

  {
    id: 20,
    category: "head",
    name: "Bump Cap Helmet",
    desc: "Soft shell bump cap designed for low-risk head protection in maintenance and warehouse areas.",
    price: "700",
    badge: "Light Duty",
    cert: true,
    specs: ["Soft Padding", "Breathable", "Light Weight", "Comfort Wear"],
    color: "#5da9ff"
  },

  {
    id: 21,
    category: "head",
    name: "Ventilated Safety Helmet - Purple",
    desc: "Color-coded ventilated industrial helmet with enhanced airflow and lightweight structure.",
    price: "650",
    badge: "Color Series",
    cert: true,
    specs: ["Ventilation Design", "ABS Plastic", "Comfort Lock", "Industrial Grade"],
    color: "#7b2cff"
  },

  {
    id: 22,
    category: "head",
    name: "Flip Front Welding Shield",
    desc: "Flip-front welding face shield with protective viewing window for fabrication works.",
    price: "1800",
    badge: "Welding Safety",
    cert: true,
    specs: ["Flip Front Glass", "Heat Resistant", "Face Protection", "Durable Build"],
    color: "#222222"
  },

  {
    id: 23,
    category: "head",
    name: "Yellow Industrial Helmet",
    desc: "Classic industrial safety helmet with chin strap for maximum workplace safety.",
    price: "550",
    badge: "Industrial Standard",
    cert: true,
    specs: ["High Impact ABS", "Adjustable Strap", "Safety Certified", "Light Weight"],
    color: "#ffdd00"
  },

   {
    id: 24,
    category: "eye",
    name: "Transparent Safety Glass",
    desc: "Lightweight transparent safety glasses for industrial and workshop eye protection.",
    price: "180",
    badge: "Best Seller",
    cert: true,
    specs: ["Anti Scratch", "Clear Vision", "Light Weight", "Industrial Use"],
    color: "#f5f5f5"
  },

  {
    id: 25,
    category: "eye",
    name: "Black Frame Safety Glass",
    desc: "Stylish black frame protective eyewear for factory and engineering environments.",
    price: "250",
    badge: "Premium",
    cert: true,
    specs: ["UV Protection", "Impact Resistant", "Comfort Fit", "Wide Lens"],
    color: "#111111"
  },

  {
    id: 26,
    category: "eye",
    name: "Crystal Clear Safety Spectacles",
    desc: "Crystal-clear industrial eye protector designed for all-day comfortable usage.",
    price: "220",
    badge: "Comfort Fit",
    cert: true,
    specs: ["Anti Fog", "Flexible Arms", "Light Weight", "Scratch Resistant"],
    color: "#ffffff"
  },

  {
    id: 27,
    category: "eye",
    name: "Pink Protective Glass",
    desc: "Fashion-style pink protective eyewear with impact-resistant transparent lens.",
    price: "280",
    badge: "Stylish",
    cert: true,
    specs: ["UV Safe", "Impact Resistant", "Soft Grip", "Modern Design"],
    color: "#ffb6d9"
  },

  {
    id: 28,
    category: "eye",
    name: "Side Shield Safety Glass",
    desc: "Industrial safety spectacles with side shield protection against dust and particles.",
    price: "240",
    badge: "Industrial Grade",
    cert: true,
    specs: ["Side Protection", "Clear Lens", "Dust Resistant", "Durable Frame"],
    color: "#eef7ff"
  },

  {
    id: 29,
    category: "eye",
    name: "Welding Protection Goggles",
    desc: "Professional welding goggles designed to protect eyes from sparks and harmful light.",
    price: "850",
    badge: "Welding Safety",
    cert: true,
    specs: ["Dark Lens", "Heat Resistant", "Elastic Strap", "Welding Grade"],
    color: "#1d3b6d"
  },

  {
    id: 30,
    category: "eye",
    name: "Black UV Protection Glass",
    desc: "Dark lens protective eyewear for outdoor industrial and high-light environments.",
    price: "350",
    badge: "UV Shield",
    cert: true,
    specs: ["UV Protection", "Dark Lens", "Sport Design", "Impact Resistant"],
    color: "#000000"
  },

  {
    id: 31,
    category: "eye",
    name: "Transparent Safety Goggles",
    desc: "Full-cover transparent safety goggles for chemical and laboratory protection.",
    price: "320",
    badge: "Lab Safety",
    cert: true,
    specs: ["Chemical Resistant", "Elastic Band", "Anti Fog", "Full Eye Cover"],
    color: "#dfefff"
  },

  {
    id: 32,
    category: "eye",
    name: "Ventilated Safety Goggles",
    desc: "Ventilated industrial safety goggles designed for long-duration comfortable wear.",
    price: "360",
    badge: "Ventilated",
    cert: true,
    specs: ["Ventilation Holes", "Dust Protection", "Flexible Fit", "Comfort Wear"],
    color: "#d8c8ff"
  },

  {
    id: 33,
    category: "face",
    name: "Forestry Safety Helmet",
    desc: "Professional forestry safety helmet with mesh face shield and ear protection for industrial cutting operations.",
    price: "1850",
    badge: "Forestry",
    cert: true,
    specs: ["Mesh Face Shield", "Ear Protection", "Impact Resistant", "Industrial Grade"],
    color: "#ff7a00"
},

{
    id: 34,
    category: "face",
    name: "Blue Face Shield",
    desc: "Industrial face shield with clear visor for full-face safety protection in workshops and factories.",
    price: "620",
    badge: "Face Protection",
    cert: true,
    specs: ["Clear Visor", "Adjustable Headband", "Impact Resistant", "Light Weight"],
    color: "#1d5dff"
},

{
    id: 35,
    category: "face",
    name: "White Industrial Face Shield",
    desc: "Heavy-duty industrial face shield designed for chemical, laboratory, and workshop safety applications.",
    price: "650",
    badge: "Industrial",
    cert: true,
    specs: ["Full Face Coverage", "Chemical Resistant", "Adjustable Fit", "Industrial Safety"],
    color: "#d9d9d9"
},


{
    id: 37,
    category: "face",
    name: "Flip Front Welding Shield",
    desc: "Industrial welding face shield with flip-front viewing window for safe welding operations.",
    price: "1350",
    badge: "Flip Front",
    cert: true,
    specs: ["Flip Front Lens", "Heat Resistant", "Industrial Grade", "Comfort Headband"],
    color: "#111111"
},

{
    id: 38,
    category: "face",
    name: "Black Safety Face Shield",
    desc: "Durable black safety face shield designed for grinding, industrial, and workshop applications.",
    price: "580",
    badge: "Safety Shield",
    cert: true,
    specs: ["Clear Protection", "Adjustable Strap", "Impact Resistant", "Light Weight"],
    color: "#111111"
},

{
    id: 39,
    category: "face",
    name: "Green Face Shield",
    desc: "Industrial green face shield with transparent visor for workshop and engineering safety use.",
    price: "590",
    badge: "Industrial",
    cert: true,
    specs: ["Transparent Visor", "Comfort Fit", "Industrial Safety", "Reusable Design"],
    color: "#184d2f"
},

{
    id: 40,
    category: "face",
    name: "Yellow Face Shield",
    desc: "Protective yellow face shield with full-face transparent visor for industrial safety applications.",
    price: "610",
    badge: "Full Protection",
    cert: true,
    specs: ["Full Face Coverage", "Adjustable Headgear", "Impact Resistant", "Clear Vision"],
    color: "#ffd400"
},

{
    id: 36,
    category: "mask",
    name: "3M 8822 FFP2 Respirator Mask",
    desc: "Professional 3M FFP2 respirator mask with exhalation valve for advanced dust and particle protection.",
    price: "145",
    badge: "FFP2",
    cert: true,
    specs: ["Exhalation Valve", "FFP2 Protection", "Dust Filtration", "Comfort Fit"],
    color: "#f2f2f2"
},

{
    id: 41,
    category: "mask",
    name: "3M 9001 N95 Respirator",
    desc: "Lightweight 3M N95 respirator mask designed for industrial safety and airborne particle filtration.",
    price: "120",
    badge: "N95",
    cert: true,
    specs: ["N95 Filtration", "Light Weight", "Comfort Elastic", "Industrial Safety"],
    color: "#ffffff"
},

{
    id: 42,
    category: "mask",
    name: "3M 8210 Valve Respirator",
    desc: "Industrial-grade respirator mask with valve system for breathable and reliable particle protection.",
    price: "160",
    badge: "Valve Type",
    cert: true,
    specs: ["Valve System", "Dust Protection", "NIOSH Approved", "Comfort Wear"],
    color: "#fafafa"
},

{
    id: 43,
    category: "mask",
    name: "3M 9501+ N95 Mask",
    desc: "Premium 3M 9501+ N95 protective mask with advanced filtration for industrial and personal safety use.",
    price: "135",
    badge: "Premium",
    cert: true,
    specs: ["N95 Certified", "Advanced Filtration", "Soft Ear Loops", "Breathable Design"],
    color: "#f8f8f8"
},

{
    id: 44,
    category: "mask",
    name: "3M 9042 KN90 Mask",
    desc: "KN90 protective respirator mask designed for dust, pollution, and industrial particle protection.",
    price: "115",
    badge: "KN90",
    cert: true,
    specs: ["KN90 Protection", "Dust Filtration", "Comfort Fit", "Multi Layer Safety"],
    color: "#9a9a9a"
},

{
    id: 45,
    category: "respirator",
    name: "Full Face Industrial Respirator",
    desc: "Professional full-face respirator mask designed for chemical, gas, and industrial particle protection.",
    price: "2450",
    badge: "Full Face",
    cert: true,
    specs: ["Full Face Seal", "Chemical Protection", "Replaceable Filter", "Industrial Grade"],
    color: "#2f2f2f"
},

{
    id: 46,
    category: "respirator",
    name: "3M P100 Dual Filter Respirator",
    desc: "Advanced dual-filter respirator with P100 filtration for hazardous particles and industrial environments.",
    price: "1850",
    badge: "P100",
    cert: true,
    specs: ["P100 Filters", "Dual Cartridge", "NIOSH Approved", "Comfort Fit"],
    color: "#5d3fd3"
},

{
    id: 47,
    category: "respirator",
    name: "3M 6200 Half Face Respirator",
    desc: "Reusable half-face respirator designed for dust, fumes, and chemical vapor protection.",
    price: "1350",
    badge: "Reusable",
    cert: true,
    specs: ["Half Face Design", "Dual Filter Support", "Lightweight", "Durable Material"],
    color: "#2d2d2d"
},

{
    id: 48,
    category: "respirator",
    name: "3M Full Face Safety Respirator",
    desc: "Heavy-duty full-face respirator providing maximum respiratory and eye protection for industrial use.",
    price: "3200",
    badge: "Heavy Duty",
    cert: true,
    specs: ["Wide Lens View", "Full Protection", "Secure Head Harness", "Industrial Safety"],
    color: "#1f1f1f"
},

{
    id: 49,
    category: "respirator",
    name: "3M Dual Cartridge Respirator",
    desc: "Industrial dual-cartridge respirator mask for chemical handling and hazardous work environments.",
    price: "2150",
    badge: "Dual Cartridge",
    cert: true,
    specs: ["Dual Filters", "Chemical Resistant", "Comfort Breathing", "Professional Grade"],
    color: "#3a2a5f"
},

{
    id: 50,
    category: "respirator",
    name: "3M Blue Half Face Respirator",
    desc: "Compact blue half-face respirator mask with ergonomic fit for industrial respiratory safety.",
    price: "1250",
    badge: "Compact",
    cert: true,
    specs: ["Ergonomic Fit", "Reusable Design", "Dust Protection", "Soft Head Straps"],
    color: "#496d9b"
},

{
    id: 51,
    category: "respirator",
    name: "3M Gray Industrial Respirator",
    desc: "Premium industrial respirator mask designed for advanced airborne and chemical protection.",
    price: "1750",
    badge: "Industrial",
    cert: true,
    specs: ["Advanced Seal", "Replaceable Filters", "Chemical Protection", "Professional Use"],
    color: "#7a7a7a"
}

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
  13: "./img/helmat/bike-hel.jpeg",
  14: "./img/helmat/blue-hel.jpeg",
  15: "./img/helmat/digital-hel.jpeg",
  16: "./img/helmat/fullcover-hel.jpeg",
  17: "./img/helmat/glass-hel.jpeg",
  18: "./img/helmat/green-hel.jpeg",
  19: "./img/helmat/orange-hel.jpeg",
  20: "./img/helmat/rubber-hel.jpeg",
  21: "./img/helmat/voilet-hel.jpeg",
  22: "./img/helmat/weldding-hel.jpeg",
  23: "./img/helmat/yellow-helmat.jpeg",
  24: "./img/glass/glass-1.jpeg",
  25: "./img/glass/glass-2.jpeg",
  26: "./img/glass/glass-3.jpeg",
  27: "./img/glass/glass-4.jpeg",
  28: "./img/glass/glass-5.jpeg",
  29: "./img/glass/glass-6.jpeg",
  30: "./img/glass/glass-7.jpeg",
  31: "./img/glass/glass-8.jpeg",
  32: "./img/glass/glass-9.jpeg",
  33: "./img/glasshel/glasshel-1.jpeg",
  34: "./img/glasshel/glasshel-2.jpeg",
  35: "./img/glasshel/glasshel-3.jpeg",
  37: "./img/glasshel/glasshel-4.jpeg",
  38: "./img/glasshel/glasshel-5.jpeg",
  39: "./img/glasshel/glasshel-6.jpeg",
  40: "./img/glasshel/glasshel-7.jpeg",
  36: "./img/mask/mask-1.jpeg",
  41: "./img/mask/mask-2.jpeg",
  42: "./img/mask/mask-3.jpeg",
  43: "./img/mask/mask-4.jpeg",
  44: "./img/mask/mask-5.jpeg",

  45: "./img/facemask/fmask-1.jpeg",
  46: "./img/facemask/fmask-2.jpeg",
  47: "./img/facemask/fmask-3.jpeg",
  48: "./img/facemask/fmask-4.jpeg",
  49: "./img/facemask/fmask-5.jpeg",
  50: "./img/facemask/fmask-6.jpeg",
  51: "./img/facemask/fmask-7.jpeg",

  52: "./img/mask/mask-5.jpeg",
  53: "./img/mask/mask-5.jpeg",
  54: "./img/mask/mask-5.jpeg",

};


const productPages = {
  1:  "./product1.html",
  2:  "./product2.html",
  3:  "./product3.html",
  4:  "./product4.html",  
  5:  "./product5.html",
  6:  "./product6.html",
  7:  "./product7.html",
  8:  "./product8.html",
  9:  "./product9.html",
  10: "./product10.html",
  11: "./product11.html",
  12: "./product12.html",
  13: "./product13.html",
  14: "./product14.html",
  15: "./product15.html",
  16: "./product16.html",
  17: "./product17.html",
  18: "./product18.html",
  19: "./product19.html",
  20: "./product20.html",
  21: "./product21.html",
  22: "./product22.html",
  23: "./product23.html",
  24: "./product24.html",
  25: "./product25.html",
  26: "./product26.html",
  27: "./product27.html",
  28: "./product28.html",
  29: "./product29.html",
  30: "./product30.html",
  31: "./product31.html",
  32: "./product32.html",
  33: "./product33.html",
  34: "./product34.html",
  35: "./product35.html",
  37: "./product37.html",
  38: "./product38.html",
  39: "./product39.html",
  40: "./product40.html",
  
  
  

};


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
    // Fallback for products that don't have a page yet
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