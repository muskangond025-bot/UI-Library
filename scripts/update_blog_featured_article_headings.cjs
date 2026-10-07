const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

const titlesAndAnim = {
  1: { title: 'GLASS EDITORIAL SPOTLIGHT', anim: 'BACKDROP BLUR GLOW & SCALE AMBIENT BACKGROUND' },
  2: { title: 'NEUMORPHIC MAGAZINE FEATURE', anim: 'DUAL SOFT DACTILE SHADOWS & PRESSED ACTIVE BUTTONS' },
  3: { title: 'HOLOGRAPHIC CYBER HUB', anim: 'NEON SCANNING LINE LOOP & HUD OVERLAY FLICKER' },
  4: { title: 'DEPTH CARD SPLIT SPOTLIGHT', anim: 'MULTI-LAYERED STACKED DEPTH WITH PARALLAX ELEVATION' },
  5: { title: 'CLAYMORPHIC 3D STORY CARD', anim: 'ROUNDED 3D CLAY VOLUME & INNER AMBIENT LIGHT POP' },
  6: { title: 'FROSTED BENTO FEATURE GRID', anim: 'MULTI-TILE FROSTED GLASS & INTERACTIVE HIGHLIGHT' },
  7: { title: 'CHROME METALLIC TECH FOCUS', anim: 'HIGH-CONTRAST CHROME SHEEN & LIQUID METAL EDGE' },
  8: { title: 'AURORA DYNAMIC MESH FOCUS', anim: 'FLOATING FLUID MESH BLOB DRIFT & GLASS LIFT' },
  9: { title: 'SPLIT CAROUSEL FEATURED FOCUS', anim: 'PROGRESS TIMELINE & SMOOTH SLIDE CROSS-FADE' },
  10: { title: 'VELVET DARK MODE GLASS', anim: 'DEEP DARK VELVET MODE & VIOLET AURA PULSE' },
  11: { title: 'SKEUOMORPHIC JOURNAL NOTE', anim: 'FOLDED PAPER TACTILE EDGE & VINTAGE INK ACCENT' },
  12: { title: 'SCI-FI HUD FEATURED FRAME', anim: 'HUD CORNER BRACKETS & TELEMETRY PROGRESS RING' },
  13: { title: 'BENTO STACKED GLASS FEATURE', anim: 'PRIMARY HERO GLASS & SECONDARY MINI TILE STACK' },
  14: { title: 'LIQUID GLASS FLOATING CAPSULE', anim: 'CURVED LIQUID CAPSULE DRIFT & PARTICLE AURA' },
  15: { title: 'NEON EDGE GLOW FEATURE', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL WIREFRAME GLASS', anim: 'MINIMALIST LINEAR GRIDLINES & TYPOGRAPHY FOCUS' },
  17: { title: 'FULL POSTER COVER SPOTLIGHT', anim: 'FULL-HEIGHT IMAGE POSTER & FLOATING TEXT CURTAIN' },
  18: { title: 'PRISMATIC REFRACTION GLASS', anim: 'CHROMATIC REFRACTION BLUR & RAINBOW REFLECTION' },
  19: { title: 'EMBOSSED VINTAGE RETRO CARD', anim: 'DEBOSSED BADGE PRESS & WARM FILM GRAIN TEXTURE' },
  20: { title: 'ULTRA HERO FULL-BLEED OVERLAY', anim: 'FULL VIEWPORT OVERLAY & READING PROGRESS GAUGE' }
};

for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  const oldTitlePattern = `id: 'blog-featured-article-${i}', title: 'FEATURED ARTICLE — VARIANT ${numStr}', description: 'Design: Featured Article Variant ${numStr}'`;
  const newTitlePattern = `id: 'blog-featured-article-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}'`;
  
  content = content.replace(oldTitlePattern, newTitlePattern);
}

fs.writeFileSync(gridFile, content);
console.log('Successfully updated all 20 Blog Featured Article headings & descriptions with Design Name and Animation details!');
