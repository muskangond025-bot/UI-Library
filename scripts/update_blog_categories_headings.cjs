const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

const titlesAndAnim = {
  1: { title: 'GLASSMORPHIC ICON BENTO GRID', anim: 'STAGGERED CONTAINER FADE & HOVER ICON SCALE' },
  2: { title: 'NEUMORPHIC TACTILE FILTER CARDS', anim: 'TACTILE DEPTH PRESS & SOFT SPRING BOUNCE' },
  3: { title: 'HOLOGRAPHIC CYBER MATRIX HUB', anim: 'NEON CYAN PULSE & MONOSPACE TELEMETRY FLICKER' },
  4: { title: 'MULTI-LAYER DEPTH CARDS', anim: 'SPATIAL Z-INDEX ELEVATION & SHADOW OFFSET' },
  5: { title: 'CLAYMORPHIC 3D BUBBLE GRID', anim: 'BOUNCY 3D CLAY SQUISH & INNER GLOW POP' },
  6: { title: 'FROSTED HORIZONTAL FILTER SLIDER', anim: 'SMOOTH HORIZONTAL DRAG & FROSTED BLUR' },
  7: { title: 'CHROME METALLIC SHEEN TILES', anim: 'LIQUID CHROME GRADIENT SHEEN SHIFT' },
  8: { title: 'AURORA MESH FLOATING PILLS', anim: 'FLUID AURORA MESH DRIFT & GLASS LIFT' },
  9: { title: 'SPLIT CATEGORY FEATURE + GRID', anim: 'DIRECTIONAL SLIDE-IN & DUAL-PANE STAGGER' },
  10: { title: 'DARK VELVET GLOW RADAR', anim: 'PULSING VIOLET RADAR AURA & HIGH-CONTRAST FOCUS' },
  11: { title: 'JOURNAL SKEUOMORPHIC STAMP GRID', anim: 'PAPER STAMP TILT & VINTAGE INK REVEAL' },
  12: { title: 'SCI-FI HUD TOPIC TELEMETRY', anim: 'HUD CORNER BRACKET REVEAL & TERMINAL BLINK' },
  13: { title: 'BENTO LAYERED GLASS MASONRY', anim: 'ASYMMETRIC MASONRY EXPANSION & FOCUS BLUR' },
  14: { title: 'LIQUID GLASS CAPSULE FILTER BAR', anim: 'FLOATING CAPSULE WAVE & RIPPLE FOCUS' },
  15: { title: 'NEON EDGE GLOW CATEGORY CARDS', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL HAIRLINE GRID', anim: 'HAIRLINE LINE DRAW & ANCHOR SLIDE' },
  17: { title: 'MAGAZINE MINIMALIST TOPIC LIST', anim: 'MINIMALIST LINEAR HOVER EXPAND' },
  18: { title: 'PRISMATIC REFRACTION GLASS CARDS', anim: 'CHROMATIC REFRACTION SHIFT & RAINBOW REFLECTION' },
  19: { title: 'EMBOSSED VINTAGE RETRO TILES', anim: 'DEBOSSED PRESS FEEDBACK & VINTAGE BADGE POP' },
  20: { title: 'ULTRA STREAM FULL-BLEED GRID', anim: 'IMMERSIVE ENTRANCE SPRING & FULL BORDER PULSE' }
};

for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  const oldTitlePattern = `id: 'blog-categories-${i}', title: 'BLOG CATEGORIES — VARIANT ${numStr}', description: 'Design: Blog Categories Variant ${numStr}'`;
  const newTitlePattern = `id: 'blog-categories-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}'`;
  
  content = content.replace(oldTitlePattern, newTitlePattern);
}

fs.writeFileSync(gridFile, content);
console.log('Successfully updated all 20 Blog Categories headings & descriptions with Design Name and Animation details!');
