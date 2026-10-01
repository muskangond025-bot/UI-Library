const fs = require('fs');
const path = require('path');

const rpDir = path.join(__dirname, '../src/components/sections/product/17-related-products');
const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

const titles = {
  1: "GLASSMORPHISM CAROUSEL RAIL",
  2: "INFINITE REEL STACK SHOWCASE",
  3: "3D UNCOVER REVEAL CURTAIN",
  4: "BENTO GRID RECOMMENDATION SHOWCASE",
  5: "MINIMALIST LIGHT APPAREL REEL",
  6: "CYBER MATRIX GAMING ACCESSORIES",
  7: "SPLIT HERO VINTAGE CAMERA GEAR",
  8: "NEUMORPHIC LUXURY AUDIO ACCESSORIES",
  9: "ACCORDION TIMEPIECE SPEC REEL",
  10: "360-DEGREE INTERACTIVE CAMERA LENSES",
  11: "CURSOR SPOTLIGHT AUDIO COMPANIONS",
  12: "ACTION CAM HAPTIC ACCESSORIES",
  13: "3D PARALLAX WORKSTATION SUITE",
  14: "SHARED-ELEMENT QUICK VIEW APPAREL",
  15: "PULSATING SOUND AURA MUSIC GEAR",
  16: "MULTI-STEP CUSTOM ACCESSORY WIZARD",
  17: "DYNAMIC LIGHT & DARK MODE TABLET GEAR",
  18: "SKELETON SHIMMER DATA LOADER REEL",
  19: "ORGANIC SVG BLOB ECO ACCESSORIES",
  20: "ULTIMATE ENTERPRISE RECOMMENDATIONS GRID"
};

const descs = {
  1: "Dark frosted glass card carousel with specular highlights, smooth scroll, and active item toasts.",
  2: "Stacked product deck carousel with drag and swipe interactions for related tech items.",
  3: "Curtain reveal trigger unveiling recommended companion items with 3D elevation.",
  4: "High-contrast bento grid layout displaying related accessories with rating stars and instant cart CTAs.",
  5: "Clean Scandinavian white/beige design for fashion & footwear recommendations.",
  6: "Dark futuristic gaming grid with glowing neon borders and hardware specs breakdown.",
  7: "Dual-side layout with left main hero recommendation and right side-scroll cards.",
  8: "Soft tactile neumorphic shadows with metallic highlights for audio accessories.",
  9: "Cards with expandable technical specifications accordion drawer.",
  10: "Embedded 360 range slider for inspecting related camera lenses.",
  11: "Interactive cursor tracking spotlight glow background effect.",
  12: "Action camera accessories rail with checkbox selections and haptic error feedback.",
  13: "3D parallax tilt cards that rotate dynamically on mouse hover.",
  14: "Full-bleed quick view modal preview overlay trigger on card click.",
  15: "Music production accessories with animated audio visualizer pulses.",
  16: "Step-by-step recommendation flow (Step 1: Pick Case -> Step 2: Pick Strap).",
  17: "In-card theme toggle allowing real-time light/dark mode switching.",
  18: "Shimmering skeleton loader demo transitioning into real related items.",
  19: "Rotating gradient SVG blobs with eco-friendly bamboo desk accessories.",
  20: "High-converting recommendation grid with verified review badges and instant checkout CTAs."
};

// Sync JSON metadata
for (let i = 1; i <= 20; i++) {
  const folder = `related-products-${i}`;
  const jsonPath = path.join(rpDir, folder, `related-products-${i}.json`);
  const data = {
    title: titles[i],
    description: descs[i]
  };
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
}

// Sync SectionLibraryGrid
let content = fs.readFileSync(gridPath, 'utf8');

let newArray = "category === 'related-products' ? [\n";
for (let i = 1; i <= 20; i++) {
  newArray += `        {\n`;
  newArray += `          id: 'related-products-${i}',\n`;
  newArray += `          title: relatedProducts${i}Data.title || "${titles[i]}",\n`;
  newArray += `          description: relatedProducts${i}Data.description || "${descs[i]}",\n`;
  newArray += `          previewComponent: <RelatedProducts${i} data={relatedProducts${i}Data as any} />\n`;
  newArray += `        }${i < 20 ? ',' : ''}\n`;
}
newArray += `      ] :`;

const regex = /category === 'related-products' \? \[\s*[\s\S]*?\] :/;
if (regex.test(content)) {
  content = content.replace(regex, newArray);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log('SectionLibraryGrid.tsx updated for related-products!');
}

console.log('Cleaned headers & synced metadata for Related Products 1 to 20!');
