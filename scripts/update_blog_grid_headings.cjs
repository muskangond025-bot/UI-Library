const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

const titlesAndAnim = {
  1: { title: 'GLASS BENTO GRID FEED', anim: 'STAGGERED FADE-UP & IMAGE ZOOM ON HOVER' },
  2: { title: 'NEUMORPHIC SOFT CARD GRID', anim: 'TACTILE INSET SHADOW & SPRING PRESS' },
  3: { title: 'HOLOGRAPHIC CYBER MATRIX GRID', anim: 'INFINITE LASER SCAN LINE & NEON GLOW PULSE' },
  4: { title: 'MULTI-LAYER DEPTH GRID', anim: '3D SPATIAL TILT & ELEVATED SHADOW DEPTH' },
  5: { title: 'CLAYMORPHIC 3D CARD GRID', anim: 'BOUNCY 3D CLAY SPRING & INNER SHADOW SHIFT' },
  6: { title: 'FROSTED GLASS MASONRY GRID', anim: 'SMOOTH MASONRY FADE-IN & FROSTED BLUR' },
  7: { title: 'CHROME METALLIC SHEEN GRID', anim: 'LIQUID METALLIC LIGHT SHEEN WAVE' },
  8: { title: 'AURORA MESH CARD TRIPLE GRID', anim: 'FLUID AURORA BLOB DRIFT & GLASS FLOAT' },
  9: { title: 'SPLIT HERO + ARTICLE GRID', anim: 'DIRECTIONAL SLIDE-IN & STAGGER REVEAL' },
  10: { title: 'DARK VELVET GLOW GRID', anim: 'PULSING VIOLET RADAR AURA & HIGH-CONTRAST FOCUS' },
  11: { title: 'JOURNAL SKEUOMORPHIC PAPER GRID', anim: 'TACTILE PAPER CARD TILT & INK DROP FADE' },
  12: { title: 'SCI-FI HUD FEED GRID', anim: 'HUD BRACKET CORNER EXPANSION & GLITCH FLICKER' },
  13: { title: 'BENTO LAYERED GLASS MASONRY', anim: 'ASYMMETRIC TILE EXPANSION & FOCUS SHIFT' },
  14: { title: 'LIQUID GLASS CAPSULE FEED GRID', anim: 'FLOATING CAPSULE DRIFT & RIPPLE RAYS' },
  15: { title: 'NEON EDGE GLOW GRID', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL HAIRLINE GRID', anim: 'HAIRLINE DRAW & TEXT ANCHOR SLIDE' },
  17: { title: 'MAGAZINE COVER GRID', anim: 'IMAGE ZOOM EXPAND & CURTAIN GRADIENT DROP' },
  18: { title: 'PRISMATIC REFRACTION GRID', anim: 'CHROMATIC REFRACTION SHIFT & RAINBOW REFLECTION' },
  19: { title: 'EMBOSSED VINTAGE RETRO GRID', anim: 'DEBOSSED PRESS FEEDBACK & VINTAGE BADGE POP' },
  20: { title: 'ULTRA STREAM FULL-BLEED GRID', anim: 'IMMERSIVE ENTRANCE SPRING & FULL BORDER PULSE' }
};

for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  const oldTitlePattern = `id: 'blog-grid-${i}', title: 'BLOG GRID — VARIANT ${numStr}', description: 'Design: Blog Grid Variant ${numStr}'`;
  const newTitlePattern = `id: 'blog-grid-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}'`;
  
  content = content.replace(oldTitlePattern, newTitlePattern);
}

fs.writeFileSync(gridFile, content);
console.log('Successfully updated all 20 Blog Grid titles & descriptions with Design Name and Animation details!');
