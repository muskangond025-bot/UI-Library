const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const items = [
  { id: 1, num: '01', design: 'FROSTED GLASSMORPHISM', anim: 'FLOATING AMBIENT ORBS & GLOW' },
  { id: 2, num: '02', design: 'DARK OBSIDIAN GLASS', anim: 'NEON LASER SWEEP & PULSE' },
  { id: 3, num: '03', design: 'SOFT NEUMORPHISM', anim: 'DUAL-SHADOW DEPTH & TACTILE PRESS' },
  { id: 4, num: '04', design: 'HOLO CHROMA FOIL', anim: 'CHROMATIC RAINBOW BORDER ROTATION' },
  { id: 5, num: '05', design: '3D CLAYMORPHISM', anim: 'SOFT SQUISHY REACTION & 3D TILT' },
  { id: 6, num: '06', design: 'NEO-BRUTALISM', anim: 'HARD STARK OFFSET SHADOW POP' },
  { id: 7, num: '07', design: 'METALLIC CHROMIUM', anim: 'LIQUID METAL SHEEN & SHINE' },
  { id: 8, num: '08', design: 'CYBERPUNK HUD GLASS', anim: 'SCANLINE RADAR SWEEP & LATENCY PULSE' },
  { id: 9, num: '09', design: 'VELVET MATTE GLASS', anim: 'SATIN DIFFUSE AURA FADE-IN' },
  { id: 10, num: '10', design: 'LIQUID AURORA MORPHISM', anim: 'MORPHING SVG AURORA WAVE FLOW' },
  { id: 11, num: '11', design: 'PRISM LIGHT GLASS', anim: 'PRISM COLOR SPLITTING & BEAM TILT' },
  { id: 12, num: '12', design: 'FLOATING PARALLAX STACK', anim: 'MULTI-PLANE SCROLL ELEVATION' },
  { id: 13, num: '13', design: 'SKEUOMORPHIC BEVEL', anim: 'GLOSSY BEVEL SHINE & SEAL PRESS' },
  { id: 14, num: '14', design: 'MONOCHROME HAIRLINE', anim: 'ARCHITECTURAL LINEAR GRID SCALE' },
  { id: 15, num: '15', design: 'BENTO BOX GLASS', anim: 'STAGGERED MODULAR TILE FADE-UP' },
  { id: 16, num: '16', design: 'FROSTED BIO-GLASS', anim: 'ORGANIC LEAF PARTICLE FLOATING' },
  { id: 17, num: '17', design: 'COSMIC STARFIELD', anim: 'TWINKLING NEBULA STAR PARTICLES' },
  { id: 18, num: '18', design: 'DRAWER MODAL', anim: 'SLIDE-OUT CONSULTATION DRAWER REVEAL' },
  { id: 19, num: '19', design: 'SYNTHWAVE NEON GRID', anim: 'PERSPECTIVE GRID SCROLL & SCANLINE' },
  { id: 20, num: '20', design: 'ULTRA LUXURY DIAMOND', anim: 'FACETED DIAMOND SPARKLE FLARE' }
];

for (const it of items) {
  const oldRegex = new RegExp(`title: 'ABOUT CTA BANNER — VARIANT ${it.num}', description: '[^']+'`, 'g');
  const newStr = `title: '${it.design} CTA (ANIMATION: ${it.anim})', description: 'Design: ${it.design} • Animation: ${it.anim}'`;
  content = content.replace(oldRegex, newStr);
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully updated SectionLibraryGrid.tsx titles & descriptions for CTA Banners.');
