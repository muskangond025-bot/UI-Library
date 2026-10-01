const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/10-product-card');

const designTitles = {
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

for (let i = 1; i <= 20; i++) {
  const folder = `product-card-${i}`;
  const tsxPath = path.join(baseDir, folder, `ProductCard${i}.tsx`);
  const jsonPath = path.join(baseDir, folder, `product-card-${i}.json`);

  if (fs.existsSync(jsonPath)) {
    const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    json.title = designTitles[i];
    fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), 'utf8');
  }
}

console.log('Internal design & animation headings 1 to 20 updated!');
