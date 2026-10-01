const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const titles = {
  1: "01. GLASSMORPHISM ACRYLIC 3D CARD",
  2: "02. INFINITE VARIANT STACK SLIDER",
  3: "03. 360° PERSPECTIVE ROTATION VIEW",
  4: "04. MINIMALIST LUXURY ATELIER",
  5: "05. NEUMORPHIC TACTILE SMARTWATCH",
  6: "06. CYBER MATRIX NEON GLOW EDITION",
  7: "07. RETRO SPLIT UNCOVER CARD",
  8: "08. SNEAKERHEAD LIMITED RUN CARD",
  9: "09. ACCORDION SPEC DRAWER CARD",
  10: "10. NEXT-GEN AR CREATOR CARD",
  11: "11. CURSOR SPOTLIGHT GLOW CARD",
  12: "12. HAPTIC ERROR CHECKLIST CARD",
  13: "13. 3D PARALLAX PERSPECTIVE TILT",
  14: "14. SHARED-ELEMENT QUICK VIEW CARD",
  15: "15. PULSATING AURA SOUND CARD",
  16: "16. MULTI-STEP ENGRAVING WIZARD",
  17: "17. DYNAMIC LIGHT & DARK MODE CARD",
  18: "18. SKELETON SHIMMER DATA LOADER",
  19: "19. ORGANIC ROTATING SVG BLOB CARD",
  20: "20. WORKSTATION SETUP SUITE CARD"
};

const descs = {
  1: "Frosted acrylic glass backdrop with dynamic color swatch selector, floating wishlist morph button, and active cart toast.",
  2: "Interactive horizontal variant tab switcher with smooth crossfade slide animations and detailed tech specs breakdown.",
  3: "Interactive rotation slider allowing users to inspect camera angles in real time with high-contrast stock badges.",
  4: "Scandinavian dark theme coat card featuring interactive size picker (S, M, L, XL) and handcrafted badge.",
  5: "Soft tactile elevation card with band variant selector, battery life status widget, and high-impact CTA.",
  6: "Futuristic dark cyber grid aesthetic with glowing emerald borders, hardware specs, and MSRP checkout.",
  7: "Classic instant camera showcase with discount percentage badge, review rating stars, and gradient purchase action.",
  8: "High-energy sneaker card featuring EU shoe size selection buttons, limited run tag, and vibrant red accents.",
  9: "Luxury timepiece card with expandable technical specifications accordion drawer and fluid Framer Motion spring transition.",
  10: "High-impact creator mic showcase card with AR-ready badge, star rating breakdown, and purple glow ambient backdrop.",
  11: "Dark mode cursor-tracking spotlight glow card with Flat EQ and Bass Boosted audio toggle switches.",
  12: "Action camera card with checkable kit accessories and simulated haptic shake error feedback on checkout.",
  13: "Interactive 3D tilt card that rotates smoothly on mouse hover using Framer Motion perspective transforms.",
  14: "High-fashion apparel card featuring an interactive full-screen quick-view modal overlay with shared-element transition.",
  15: "Dark synthwave aesthetic card with pulsating background aura glow and sound test playback simulation.",
  16: "3-step interactive checkout wizard card (Variant -> Laser Engraving -> Order Summary).",
  17: "In-card theme switcher toggle allowing real-time color interpolation between sleek dark and clean light mode.",
  18: "Interactive loading state demo card with shimmering skeleton placeholders transitioning into real data.",
  19: "Glassmorphism card set against continuously rotating background gradient SVG blobs.",
  20: "High-converting product card for luxury standing desk workstation setup with rating stars and instant order CTA."
};

// Build replacement array for product-card
let newArray = "category === 'product-card' ? [\n";
for (let i = 1; i <= 20; i++) {
  newArray += `        {\n`;
  newArray += `          id: 'product-card-${i}',\n`;
  newArray += `          title: productCard${i}Data.title || "${titles[i]}",\n`;
  newArray += `          description: productCard${i}Data.description || "${descs[i]}",\n`;
  newArray += `          previewComponent: <ProductCard${i} data={productCard${i}Data as any} />\n`;
  newArray += `        }${i < 20 ? ',' : ''}\n`;
}
newArray += `      ] :`;

// Replace in SectionLibraryGrid
const regex = /category === 'product-card' \? \[\s*[\s\S]*?\] :/;
if (regex.test(content)) {
  content = content.replace(regex, newArray);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log('Updated SectionLibraryGrid.tsx product-card section!');
} else {
  console.log('Regex did not match product-card block');
}
