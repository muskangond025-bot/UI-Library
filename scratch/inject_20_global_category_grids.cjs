const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Prepare imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalCategoryGrid${i} } from '../sections/global/08-category-grid/global-category-grid-${i}/GlobalCategoryGrid${i}';`);
}
const importBlock = imports.join('\n') + '\n';

// Add imports after first import line
content = importBlock + content;

// Prepare category === 'global-category-grid' block
const titles = [
  { id: 'global-category-grid-1', title: 'Design 1: GLASSMORPHIC BENTO CATEGORY GRID (ANIMATION: HOVER 3D TILT & GLOW FOLLOW)', desc: 'Design: GLASSMORPHIC BENTO CATEGORY GRID • Animation: HOVER 3D TILT & GLOW FOLLOW', comp: '<GlobalCategoryGrid1 />' },
  { id: 'global-category-grid-2', title: 'Design 2: FLOATING PARALLAX EDITORIAL DECK (ANIMATION: MULTI-LAYER ELEVATION & IMAGE SLIDE)', desc: 'Design: FLOATING PARALLAX EDITORIAL DECK • Animation: MULTI-LAYER ELEVATION & IMAGE SLIDE', comp: '<GlobalCategoryGrid2 />' },
  { id: 'global-category-grid-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK GRID (ANIMATION: HARD OFFSET SHADOW & TEXT GLITCH)', desc: 'Design: NEO-BRUTALIST CYBERPUNK GRID • Animation: HARD OFFSET SHADOW & TEXT GLITCH', comp: '<GlobalCategoryGrid3 />' },
  { id: 'global-category-grid-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC PILL CARDS (ANIMATION: TACTILE PRESS BOUNCE & SOFT SHADOW)', desc: 'Design: 3D TACTILE CLAYMORPHIC PILL CARDS • Animation: TACTILE PRESS BOUNCE & SOFT SHADOW', comp: '<GlobalCategoryGrid4 />' },
  { id: 'global-category-grid-5', title: 'Design 5: HOLOGRAPHIC NEON MESH GRID (ANIMATION: IRIDESCENT NEON SHEEN & HUD CROSSHAIR)', desc: 'Design: HOLOGRAPHIC NEON MESH GRID • Animation: IRIDESCENT NEON SHEEN & HUD CROSSHAIR', comp: '<GlobalCategoryGrid5 />' },
  { id: 'global-category-grid-6', title: 'Design 6: HORIZONTAL EXPANDABLE ACCORDION GRID (ANIMATION: FLUID WIDTH EXPANSION & CURTAIN ZOOM)', desc: 'Design: HORIZONTAL EXPANDABLE ACCORDION GRID • Animation: FLUID WIDTH EXPANSION & CURTAIN ZOOM', comp: '<GlobalCategoryGrid6 />' },
  { id: 'global-category-grid-7', title: 'Design 7: SKEUOMORPHIC LUXURY VELVET CARDS (ANIMATION: GOLD EMBOSSED SHEEN & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC LUXURY VELVET CARDS • Animation: GOLD EMBOSSED SHEEN & PRESSED INSET', comp: '<GlobalCategoryGrid7 />' },
  { id: 'global-category-grid-8', title: 'Design 8: SPLIT-SCREEN DUAL TONE CARDS (ANIMATION: DIAGONAL HOVER SLIDE & DUAL COLOR SWITCH)', desc: 'Design: SPLIT-SCREEN DUAL TONE CARDS • Animation: DIAGONAL HOVER SLIDE & DUAL COLOR SWITCH', comp: '<GlobalCategoryGrid8 />' },
  { id: 'global-category-grid-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE DECK (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE DECK • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalCategoryGrid9 />' },
  { id: 'global-category-grid-10', title: 'Design 10: SUBTLE RETRO POLAROID GALLERY GRID (ANIMATION: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE)', desc: 'Design: SUBTLE RETRO POLAROID GALLERY GRID • Animation: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE', comp: '<GlobalCategoryGrid10 />' },
  { id: 'global-category-grid-11', title: 'Design 11: ISOMETRIC 3D STACKED TILE GRID (ANIMATION: SPATIAL ANGLED DEPTH & LIFT UP)', desc: 'Design: ISOMETRIC 3D STACKED TILE GRID • Animation: SPATIAL ANGLED DEPTH & LIFT UP', comp: '<GlobalCategoryGrid11 />' },
  { id: 'global-category-grid-12', title: 'Design 12: MINIMALIST LINE-ART WIREFRAME GRID (ANIMATION: HAIRLINE VECTOR DRAWING & COORDINATE COUNTER)', desc: 'Design: MINIMALIST LINE-ART WIREFRAME GRID • Animation: HAIRLINE VECTOR DRAWING & COORDINATE COUNTER', comp: '<GlobalCategoryGrid12 />' },
  { id: 'global-category-grid-13', title: 'Design 13: CIRCULAR RADIAL NODE CATEGORY RING (ANIMATION: ORBITAL ROTATION & NODE HOVER PULL)', desc: 'Design: CIRCULAR RADIAL NODE CATEGORY RING • Animation: ORBITAL ROTATION & NODE HOVER PULL', comp: '<GlobalCategoryGrid13 />' },
  { id: 'global-category-grid-14', title: 'Design 14: CINEMATIC MOTION CANVAS GRID (ANIMATION: LIVE VIDEO UNBLUR & PLAYHEAD PULSE)', desc: 'Design: CINEMATIC MOTION CANVAS GRID • Animation: LIVE VIDEO UNBLUR & PLAYHEAD PULSE', comp: '<GlobalCategoryGrid14 />' },
  { id: 'global-category-grid-15', title: 'Design 15: DIAMOND FACET PRISM GRID (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM GRID • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalCategoryGrid15 />' },
  { id: 'global-category-grid-16', title: 'Design 16: CYBER MATRIX TERMINAL GRID (ANIMATION: MATRIX CODE SCANLINE & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TERMINAL GRID • Animation: MATRIX CODE SCANLINE & TELEMETRY PULSE', comp: '<GlobalCategoryGrid16 />' },
  { id: 'global-category-grid-17', title: 'Design 17: ORGANIC CURVED SUNSET FLUID GRID (ANIMATION: PEBBLE BLOB MORPH & LIQUID WAVE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET FLUID GRID • Animation: PEBBLE BLOB MORPH & LIQUID WAVE DRIFT', comp: '<GlobalCategoryGrid17 />' },
  { id: 'global-category-grid-18', title: 'Design 18: ELEVATED CARD DECK FAN-OUT GRID (ANIMATION: CARD DECK FAN-OUT & ACTIVE SLIDE ELEVATION)', desc: 'Design: ELEVATED CARD DECK FAN-OUT GRID • Animation: CARD DECK FAN-OUT & ACTIVE SLIDE ELEVATION', comp: '<GlobalCategoryGrid18 />' },
  { id: 'global-category-grid-19', title: 'Design 19: MODERN NEUMORPHISM SOFT INSET GRID (ANIMATION: SOFT DUAL SHADOW INSET PRESS DEPTH)', desc: 'Design: MODERN NEUMORPHISM SOFT INSET GRID • Animation: SOFT DUAL SHADOW INSET PRESS DEPTH', comp: '<GlobalCategoryGrid19 />' },
  { id: 'global-category-grid-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO CAROUSEL GRID (ANIMATION: STAGGERED CASCADE ENTRANCE & BADGE PULSE)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO CAROUSEL GRID • Animation: STAGGERED CASCADE ENTRANCE & BADGE PULSE', comp: '<GlobalCategoryGrid20 />' },
];

const categoryBlock = `] : category === 'global-category-grid' ? [\n` +
  titles.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-product-grid'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Category Grids into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-product-grid\' not found!');
}
