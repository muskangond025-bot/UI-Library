const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

const titlesAndAnim = {
  1: { title: 'GLASS BENTO FEED GRID', anim: 'STAGGERED FADE-UP & ACTIVE CARD SCALE' },
  2: { title: 'NEUMORPHIC VERTICAL LIST', anim: 'INSET SHADOW FEED & SOFT PRESS FEEDBACK' },
  3: { title: 'CYBER MATRIX FEED', anim: 'NEON CYAN STREAM & MONOSPACE TIMESTAMP PULSE' },
  4: { title: 'DEPTH MULTI-CARD STACK', anim: 'MULTI-LAYER STACKED ELEVATION & SHADOW DEPTH' },
  5: { title: 'CLAYMORPHIC PILL GRID', anim: 'BOUNCY 3D CLAY PILLS & INNER LIGHT GLOW' },
  6: { title: 'FROSTED HORIZONTAL SCROLL', anim: 'SMOOTH HORIZONTAL CARD DRAG & FROSTED BLUR' },
  7: { title: 'CHROME METALLIC LIST FEED', anim: 'LIQUID METALLIC SHEEN WAVE & EDGE HIGHLIGHT' },
  8: { title: 'AURORA MESH CARD TRIPLE', anim: 'FLUID AURORA BLOB DRIFT & GLASS FLOAT' },
  9: { title: 'SPLIT HERO + ARTICLE RAIL', anim: 'HERO SLIDE-IN & STAGGERED RAIL REVEAL' },
  10: { title: 'DARK VELVET TIMELINE STREAM', anim: 'TIMELINE VIOLET NODE RADAR & AURA GLOW' },
  11: { title: 'JOURNAL NEWSPAPER GRID', anim: 'TACTILE PAPER NOTE CARD TILT & INK ACCENTS' },
  12: { title: 'SCI-FI HUD FEED MATRIX', anim: 'HUD CORNER BRACKET REVEAL & TERMINAL READOUT' },
  13: { title: 'BENTO ASYMMETRIC MASONRY', anim: 'ASYMMETRIC MASONRY TILE EXPANSION & FOCUS SHIFT' },
  14: { title: 'LIQUID GLASS CAPSULE FEED', anim: 'FLOATING CAPSULE DRIFT & RIPPLE FOCUS' },
  15: { title: 'NEON EDGE GLOW GRID', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL LINE FEED', anim: 'HAIRLINE GRID DRAW & ANCHOR SLIDE' },
  17: { title: 'MAGAZINE COMPACT LIST', anim: 'MAGAZINE OVERLAY HOVER THUMBNAIL EXPAND' },
  18: { title: 'PRISMATIC REFRACTION CARDS', anim: 'CHROMATIC REFRACTION SHIFT & RAINBOW REFLECTION' },
  19: { title: 'RETRO EMBOSSED CARDS', anim: 'DEBOSSED PRESS FEEDBACK & VINTAGE BADGE POP' },
  20: { title: 'ULTRA STREAM FULL-BLEED', anim: 'IMMERSIVE ENTRANCE SPRING & FULL BORDER PULSE' }
};

for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  const oldTitlePattern = `id: 'blog-latest-articles-${i}', title: 'LATEST ARTICLES — VARIANT ${numStr}', description: 'Design: Latest Articles Variant ${numStr}'`;
  const newTitlePattern = `id: 'blog-latest-articles-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}'`;
  
  content = content.replace(oldTitlePattern, newTitlePattern);
}

fs.writeFileSync(gridFile, content);
console.log('Successfully updated all 20 Blog Latest Articles headings & descriptions with Design Name and Animation details!');
