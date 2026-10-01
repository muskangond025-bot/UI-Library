const fs = require('fs');
const path = require('path');

const pbDir = path.join(__dirname, '../src/components/sections/product/16-product-bundles');

const titles = {
  1: "01. GLASSMORPHISM CREATOR STUDIO BUNDLE",
  2: "02. INFINITE REEL TIER SLIDER BUNDLE",
  3: "03. 3D FLOATING ECOSYSTEM UNCOVER BUNDLE",
  4: "04. MODULAR SMART SECURITY SYSTEM",
  5: "05. MINIMALIST SNEAKER & HOODIE FIT SET",
  6: "06. CYBERPUNK PRO BATTLESTATION PACK",
  7: "07. RETRO ANALOG FILM CAMERA BUNDLE",
  8: "08. NEUMORPHIC AUDIOPHILE LISTENING SUITE",
  9: "09. LUXURY TIMEPIECE GIFT PACK",
  10: "10. 360° PERSPECTIVE ROTATION SUITE",
  11: "11. CURSOR SPOTLIGHT REACTIVE BUNDLE",
  12: "12. HAPTIC ERROR ACTION CAM BUNDLE",
  13: "13. 3D PARALLAX TILT WORKSTATION BUNDLE",
  14: "14. SHARED-ELEMENT QUICK VIEW BUNDLE",
  15: "15. PULSATING SOUND AURA MUSIC SUITE",
  16: "16. MULTI-STEP CUSTOM BUNDLE WIZARD",
  17: "17. DYNAMIC LIGHT & DARK MODE BUNDLE",
  18: "18. SKELETON SHIMMER DATA LOADER BUNDLE",
  19: "19. ORGANIC ROTATING SVG BLOB ECO WORKSTATION",
  20: "20. ULTIMATE ALL-IN-ONE ENTERPRISE SUITE"
};

const descs = {
  1: "Frosted acrylic glass card stack with active add-on selection, dynamic price calculations, and live savings badge.",
  2: "Horizontal sliding card reel for 3 broadcast tiers with spring-damped drag and tap selection.",
  3: "Layered 3D card layout where clicking Uncover Bundle triggers a smooth curtain reveal animation.",
  4: "Interactive hub-and-spoke layout with base station and smart camera attachments.",
  5: "Clean Scandinavian aesthetic sneaker and matching hoodie bundle set.",
  6: "Futuristic neon cyan/emerald matrix style RGB gaming setup bundle.",
  7: "Classic analog instant camera with leather case and 3-pack film accessories.",
  8: "Soft-shadow tactile container with wireless ANC headphones and aluminum stand.",
  9: "Luxury leather timepiece with extra Italian calfskin strap gift pack.",
  10: "Interactive 360 product view rotator for core item in bundle with floating accessory cards.",
  11: "Dark mode spotlight glow effect following user cursor with audio setup bundle.",
  12: "Waterproof Action Cam with checkable kit accessories and haptic error feedback.",
  13: "3D mouse parallax tilt card featuring Ergonomic Desk and Dual Monitor Arm.",
  14: "Compact bundle preview card expanding into a full-bleed modal preview overlay.",
  15: "Studio Monitors and Audio Interface with animated audio waveform visualizer.",
  16: "Step-by-step interactive bundle builder wizard (Core -> Accessories -> Protection).",
  17: "In-card theme toggle (Light / Dark) for multi-device tablet ecosystem.",
  18: "Interactive skeleton shimmer preview loading state transitioning into real bundle products.",
  19: "Continuous rotating background gradient blobs with eco-friendly bamboo workstation accessories.",
  20: "Multi-card grid layout with savings countdown timer, verified review stars, and instant checkout CTA."
};

for (let i = 1; i <= 20; i++) {
  const folder = `product-bundles-${i}`;
  const jsonPath = path.join(pbDir, folder, `product-bundles-${i}.json`);
  const data = {
    title: titles[i],
    description: descs[i]
  };
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('Product Bundles JSON metadata 1 to 20 successfully synced!');
