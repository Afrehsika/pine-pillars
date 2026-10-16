/**
 * PINE PILLARS VENTURES — STATIC PRODUCT CATALOG DATA
 * Contains authentic product listings across the 3 primary supply divisions:
 * 1. Mining and Industrial Safety Equipment (mining)
 * 2. Healthcare and Medical Supplies (healthcare)
 * 3. General Merchandise and Wholesale Goods (general)
 *
 * All WhatsApp enquiry links are dynamically generated using:
 * WhatsApp Number: 18606568280
 * URL Schema: https://wa.me/18606568280?text=...
 */

const WHATSAPP_NUMBER = "18606568280";
const PHONE_NUMBER = "(860) 656-8280";
const PHONE_LINK = "tel:+18606568280";
const PHONE_NUMBER_GH = "+233 55 573 6123";
const PHONE_LINK_GH = "tel:+233555736123";
const EMAIL_ADDRESS = "info@pinepillarventure.com";
const EMAIL_LINK = "mailto:info@pinepillarventure.com";

const PRODUCTS = [
  // ----------------------------------------------------
  // DIVISION 1: MINING & INDUSTRIAL SAFETY EQUIPMENT
  // ----------------------------------------------------
  {
    id: "mining-01",
    name: "Heavy-Duty Steel-Toe Safety Boots",
    category: "mining",
    categoryLabel: "Mining Safety",
    image: "assets/mining-supplies.jpg",
    shortDescription: "Puncture-resistant Kevlar mid-soles, 200J steel toe cap, oil-proof rubber tread, and waterproof leather engineered for demanding operational environments.",
    specs: ["EN ISO 20345:S3", "Sizes 40–46", "Anti-Static", "Steel Toe Cap"],
    featured: true
  },
  {
    id: "mining-02",
    name: "Industrial Mining Helmet with Lamp Bracket",
    category: "mining",
    categoryLabel: "Mining Safety",
    image: "assets/mining-supplies.jpg",
    shortDescription: "High-impact ABS shell with integrated cap-lamp slot, 6-point ratchet suspension, sweatband, and reflective markings for underground and surface work.",
    specs: ["ANSI Z89.1 Type 1", "Ratchet 53–64cm", "Lamp Bracket", "High-Impact Shell"],
    featured: true
  },
  {
    id: "mining-03",
    name: "Dual-Cartridge Chemical & Dust Respirator",
    category: "mining",
    categoryLabel: "Mining Safety",
    image: "assets/mining-supplies.jpg",
    shortDescription: "Silicone face seal with interchangeable particulate and organic vapor cartridges, providing respiratory defense in quarry, processing, and blasting sites.",
    specs: ["NIOSH P100 Standard", "Replaceable Filters", "Silicone Face Seal"],
    featured: false
  },
  {
    id: "mining-04",
    name: "High-Visibility Reflective Safety Vest",
    category: "mining",
    categoryLabel: "Mining Safety",
    image: "assets/mining-supplies.jpg",
    shortDescription: "Breathable polyester mesh with 360-degree 2-inch reflective strips, radio loop, pen slots, and heavy-duty front zipper for site visibility.",
    specs: ["Class 2 High-Vis", "Multi-Pocket", "Heavy-Duty Zipper", "Breathable Mesh"],
    featured: false
  },
  {
    id: "mining-05",
    name: "Heavy-Duty Cut-Resistant Work Gloves",
    category: "mining",
    categoryLabel: "Mining Safety",
    image: "assets/mining-supplies.jpg",
    shortDescription: "Reinforced seamless knit protective gloves with sandy nitrile palm coating for maximum abrasion grip and sharp handling safety.",
    specs: ["Level 5 Cut Resistance", "Nitrile Coated", "Reinforced Palm", "Sizes M–XL"],
    featured: false
  },
  {
    id: "mining-06",
    name: "Industrial Safety Goggles & Eye Protection",
    category: "mining",
    categoryLabel: "Mining Safety",
    image: "assets/mining-supplies.jpg",
    shortDescription: "Anti-fog polycarbonate wraparound lens with indirect ventilation ports and adjustable elastic headband for dust and chemical splash barrier.",
    specs: ["ANSI Z87.1 Compliant", "Anti-Fog Coating", "UV400 Protection", "Indirect Vents"],
    featured: false
  },

  // ----------------------------------------------------
  // DIVISION 2: HEALTHCARE & MEDICAL SUPPLIES
  // ----------------------------------------------------
  {
    id: "health-01",
    name: "Medical Nitrile Examination Gloves",
    category: "healthcare",
    categoryLabel: "Healthcare Supplies",
    image: "assets/healthcare-supplies.jpg",
    shortDescription: "Powder-free, textured fingertip grip, puncture-resistant clinical gloves for diagnostic laboratories, clinical wards, and healthcare staff.",
    specs: ["100 pcs per Box", "Powder-Free", "Sizes S, M, L, XL", "Textured Grip"],
    featured: true
  },
  {
    id: "health-02",
    name: "3-Ply Hospital Surgical Face Masks",
    category: "healthcare",
    categoryLabel: "Healthcare Supplies",
    image: "assets/healthcare-supplies.jpg",
    shortDescription: "Bacterial filtration efficiency (BFE) ≥98%, comfortable elastic earloops, adjustable nose clip, and hypoallergenic non-woven protective barrier.",
    specs: ["BFE ≥ 98%", "50 pcs per Box", "Type IIR Standard", "3-Layer Shield"],
    featured: true
  },
  {
    id: "health-03",
    name: "Clinical Hospital Hand Sanitizer (5L & 20L)",
    category: "healthcare",
    categoryLabel: "Healthcare Supplies",
    image: "assets/healthcare-supplies.jpg",
    shortDescription: "Hospital-grade antiseptic and hard-surface sanitizing formulation developed for hospitals, clinics, testing centers, and care environments.",
    specs: ["75% Alcohol Base", "5L & 20L Drums", "Quick-Drying", "Clinical Grade"],
    featured: false
  },
  {
    id: "health-04",
    name: "Digital Non-Contact Infrared Thermometer",
    category: "healthcare",
    categoryLabel: "Healthcare Supplies",
    image: "assets/healthcare-supplies.jpg",
    shortDescription: "Instant 1-second temperature screening with color-coded fever alarm, back-lit LCD screen, and multi-record memory bank for medical triage.",
    specs: ["±0.2°C Precision", "1-Second Readout", "Memory Storage", "Backlit LCD"],
    featured: false
  },
  {
    id: "health-05",
    name: "Fluid-Resistant Disposable Isolation Gowns",
    category: "healthcare",
    categoryLabel: "Healthcare Supplies",
    image: "assets/healthcare-supplies.jpg",
    shortDescription: "Fluid-barrier spunbond polypropylene protective gowns with elastic wrist cuffs and neck ties for healthcare staff and infection control.",
    specs: ["Spunbond Polypropylene", "Elastic Wrist Cuffs", "Universal Fit", "Fluid-Resistant"],
    featured: false
  },
  {
    id: "health-06",
    name: "Digital Automated Blood Pressure Monitor",
    category: "healthcare",
    categoryLabel: "Healthcare Supplies",
    image: "assets/healthcare-supplies.jpg",
    shortDescription: "Upper-arm oscillometric digital blood pressure monitor with comfortable cuff, large digital display, and irregular heartbeat detector.",
    specs: ["Oscillometric", "Standard/Large Cuff", "Digital Memory", "Certified Accuracy"],
    featured: false
  },

  // ----------------------------------------------------
  // DIVISION 3: GENERAL MERCHANDISE & WHOLESALE GOODS
  // ----------------------------------------------------
  {
    id: "general-01",
    name: "Commercial Reinforced Tarpaulins & Weather Covers",
    category: "general",
    categoryLabel: "General Merchandise",
    image: "assets/showroom.jpg",
    shortDescription: "Heavy-duty UV-stabilized waterproof woven poly tarpaulins with reinforced brass eyelets for transit freight, equipment, and storage safeguarding.",
    specs: ["UV Stabilized", "Waterproof Woven Poly", "Reinforced Brass Eyelets", "Multi-Size"],
    featured: true
  },
  {
    id: "general-02",
    name: "Industrial Stackable Storage Crates & Tool Bins",
    category: "general",
    categoryLabel: "General Merchandise",
    image: "assets/showroom.jpg",
    shortDescription: "High-density polyethylene impact-resistant transport crates for warehousing, logistics distribution, retail goods, and heavy trade storage.",
    specs: ["HDPE Material", "Stackable Design", "60L & 100L", "Reinforced Handles"],
    featured: true
  },
  {
    id: "general-03",
    name: "Contractor Hardware & Heavy Fastener Cartons",
    category: "general",
    categoryLabel: "General Merchandise",
    image: "assets/showroom.jpg",
    shortDescription: "Hot-dip galvanized high-tensile bolts, anchors, industrial wire nails, and masonry fixings delivered by bulk carton to contractors and supply depots.",
    specs: ["Galvanized Coating", "Bulk Cartons", "Industrial Grade", "Various Thread Sizes"],
    featured: false
  },
  {
    id: "general-04",
    name: "Bulk Trade Consumables & Warehouse Pallets",
    category: "general",
    categoryLabel: "General Merchandise",
    image: "assets/showroom.jpg",
    shortDescription: "Palletized trade goods, commercial paper supplies, industrial adhesive packaging tapes, and pallet stretch wrap for business institutions.",
    specs: ["Pallet & Carton Tiers", "Commercial Grade", "Direct Sourcing", "Priority Dispatch"],
    featured: false
  }
];

/**
 * Builds the official WhatsApp enquiry URL for a specific product
 * Formats message: "Hello Pine Pillars Ventures, I would like to enquire about [Product Name]. Please provide more information, availability, and a quotation."
 */
function getProductWhatsAppUrl(productName) {
  const message = `Hello Pine Pillars Ventures, I would like to enquire about ${productName}. Please provide more information, availability, and a quotation.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Render a single product card HTML
 */
function renderProductCard(product) {
  const waUrl = getProductWhatsAppUrl(product.name);
  const specsHtml = product.specs.map(spec => `<span class="spec-pill">${spec}</span>`).join("");

  return `
    <article class="product-card" data-category="${product.category}" id="${product.id}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <span class="product-category-badge">${product.categoryLabel}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.shortDescription}</p>
        <div class="product-specs">${specsHtml}</div>
        <div class="product-footer">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-enquire-product" aria-label="Enquire about ${product.name} on WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.146-.537-1.745-.722-2.883-2.511-2.97-2.628-.088-.117-.714-.949-.714-1.809 0-.859.45-1.282.61-1.455.16-.174.348-.217.464-.217.116 0 .232.001.333.006.107.005.25-.041.391.298.145.348.493 1.202.536 1.29.043.087.072.189.014.305-.058.116-.087.188-.174.29-.087.101-.183.226-.261.305-.088.087-.179.182-.077.357.102.174.453.747.973 1.21 1.014.904 1.297.989 1.48 1.062.183.072.29-.014.398-.145.109-.131.464-.537.587-.725.123-.189.247-.16.413-.099.167.061 1.058.499 1.239.589.181.09.302.134.346.208.044.075.044.435-.1 1.84z"/>
            </svg>
            <span>Enquire About This Product</span>
          </a>
        </div>
      </div>
    </article>
  `;
}
