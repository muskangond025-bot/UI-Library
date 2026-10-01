const fs = require('fs');
const path = require('path');

const rpDir = path.join(__dirname, '../src/components/sections/product/17-related-products');
const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

const titles = {
  1: "GLASSMORPHISM CAROUSEL RAIL",
  2: "INTERACTIVE TABBED CATEGORY REEL",
  3: "3D CURTAIN UNCOVER HERO SPLIT",
  4: "BENTO GRID RECOMMENDATION SHOWCASE",
  5: "MINIMALIST SCANDINAVIAN LIGHT GRID",
  6: "CYBER MATRIX GAMING ACCESSORIES SLIDER",
  7: "SPLIT-SCREEN HERO INSPECTOR & RAIL",
  8: "NEUMORPHIC SOFT TACTILE AUDIO CARDS",
  9: "EXPANDABLE SPEC ACCORDION REEL",
  10: "360-DEGREE INTERACTIVE LENS ROTATOR",
  11: "CURSOR SPOTLIGHT GLOW GRID",
  12: "HAPTIC ERROR CHECKBOX ACCESSORY MATRIX",
  13: "3D MOUSE PARALLAX TILT CARDS",
  14: "SHARED-ELEMENT QUICK VIEW MODAL RAIL",
  15: "PULSATING SOUND AURA MUSIC SUITE",
  16: "MULTI-STEP RECOMMENDATION BUILDER WIZARD",
  17: "DYNAMIC LIGHT & DARK MODE SWITCHER RAIL",
  18: "SKELETON-TO-DATA SHIMMER LOADER REEL",
  19: "ORGANIC SVG BLOB ECO RECOMMENDATIONS",
  20: "ENTERPRISE COMPARISON TABLE & RECOMMENDATIONS"
};

const descs = {
  1: "Dark frosted glass card carousel with specular highlights, smooth scroll, and active item toasts.",
  2: "Top tab category switcher with smooth spring sliders between companion tech packs.",
  3: "Interactive uncover curtain reveal button unleashing 3D companion equipment.",
  4: "High-contrast bento grid layout displaying related accessories with rating stars.",
  5: "Clean Scandinavian white/beige design for fashion & footwear recommendations.",
  6: "Dark futuristic gaming grid with glowing neon borders and hardware specs breakdown.",
  7: "Left sticky main hero inspector paired with right side-scroll selection cards.",
  8: "Soft tactile neumorphic shadows with metallic highlights for audio accessories.",
  9: "Cards with expandable technical specifications accordion drawer.",
  10: "Embedded 360 range slider for inspecting related camera lenses.",
  11: "Interactive cursor tracking spotlight glow background effect across slate cards.",
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

// Sync SectionLibraryGrid.tsx
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

console.log('Related Products 1 to 20 titles and metadata cleaned and synced!');
