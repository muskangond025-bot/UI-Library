const fs = require('fs');
const path = require('path');

const gridFilePath = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let gridCode = fs.readFileSync(gridFilePath, 'utf8');

// Build imports
let imports = '';
for (let i = 1; i <= 20; i++) {
  imports += `import { GlobalProductGrid${i} } from '../sections/global/06-product-grid/global-product-grid-${i}/GlobalProductGrid${i}';\n`;
}

// Add imports at top
gridCode = imports + gridCode;

// Build render cases
const titles = [
  'AURORA GLASS BENTO PRODUCT GRID (ANIMATION: FLOAT & GLOW INTERACTIVE HOVER)',
  'CYBERPUNK MATRIX HUD PRODUCT GRID (ANIMATION: GLITCH SHIMMER & SCANLINE PASS)',
  'NEUMORPHIC SOFT EMBOSSED GRID (ANIMATION: TACTILE DEEP PRESS & ELEVATE)',
  'CLAYMORPHIC 3D POP CART GRID (ANIMATION: BOUNCE HOVER & 3D TILT CARDS)',
  'SUB-ZERO CRYO FROST SHOWCASE (ANIMATION: ICE CRYSTAL SHADOW & FROST PULSE)',
  'RETRO 8-BIT ARCADE COMMERCE (ANIMATION: PIXEL FLASH & BUTTON BOUNCE)',
  'SWISS ARCHITECTURAL MONOCHROME GRID (ANIMATION: GRID LINE DRAW & REVEAL OVERLAY)',
  'GLASSMORPHIC PRISM DISPERSION GRID (ANIMATION: CHROMATIC REFRACTION & TILT)',
  'GOLDEN LUXURY VINTAGE CATALOGUE (ANIMATION: GOLDEN GLIMMER & SILK CROSSFADE)',
  'BIOPHILIC ECO SPHERE DISPLAY (ANIMATION: LEAF ORBIT & NATURE BREATHING PULSE)',
  'STICKER COLLAGE STREETWEAR GRID (ANIMATION: STICKER ROTATE ON HOVER & SLIDE-IN)',
  'VAPORWAVE 80S SYNTH GRID (ANIMATION: NEON GRID PASS & RETRO GLOW)',
  'MINIMAL JAPANESE ZEN PRODUCT SPACES (ANIMATION: SOFT FADE & BOTANICAL SLOW DRAW)',
  'SPACE EXPLORER ORBITAL PRODUCT MATRIX (ANIMATION: STAR DUST PARALLAX & GRAVITY PULL)',
  'HOLOGRAPHIC 3D SPATIAL STOREFRONT (ANIMATION: HOLOGRAM SCAN & SPECTRUM SHINE)',
  'EDITORIAL LUXURY FASHION LOOKBOOK (ANIMATION: ZOOM SMOOTH & METRIC SLIDE UP)',
  'KINETIC DYNAMIC TYPOGRAPHIC GRID (ANIMATION: TEXT TICKER RUN & CARD ELEVATE)',
  'TACTILE PAPER CUT ART CATALOGUE (ANIMATION: LAYER SHADOW DROP & UNFOLD)',
  'BAUHAUS GEOMETRIC COLOR BLOCK GRID (ANIMATION: PRIMARY BLOCK SHIFT & ROTATE ICON)',
  'CYBER ORGANIC BIOPUNK MARKETPLACE (ANIMATION: BIO-CELL PULSE & TOXIC NEON HOVER)'
];

let caseBlock = `      case 'global-product-grid':
        return (
          <div className="space-y-12">
`;

for (let i = 1; i <= 20; i++) {
  const compName = `GlobalProductGrid${i}`;
  caseBlock += `            <div id="global-product-grid-${i}">
              <SectionPreview title="Design ${i}: ${titles[i-1]}">
                <${compName} />
              </SectionPreview>
            </div>
`;
}

caseBlock += `          </div>
        );
`;

// Insert caseBlock into switch statement right before standard render
const searchStr = "switch (activeSubcategory) {";
gridCode = gridCode.replace(searchStr, searchStr + '\n' + caseBlock);

fs.writeFileSync(gridFilePath, gridCode, 'utf8');
console.log('Successfully registered Global Product Grid 1-20 in SectionLibraryGrid.tsx');
