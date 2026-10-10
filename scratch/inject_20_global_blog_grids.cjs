const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalBlogGrid${i} } from '../sections/global/14-blog-grid/global-blog-grid-${i}/GlobalBlogGrid${i}';`);
}
const importBlock = imports.join('\n') + '\n';
content = importBlock + content;

// Category mapping block
const items = [
  { id: 'global-blog-grid-1', title: 'Design 1: GLASSMORPHIC BENTO BLOG GRID (ANIMATION: HOVER 3D TILT & GLOW FOLLOW)', desc: 'Design: GLASSMORPHIC BENTO BLOG GRID • Animation: HOVER 3D TILT & GLOW FOLLOW', comp: '<GlobalBlogGrid1 />' },
  { id: 'global-blog-grid-2', title: 'Design 2: HIGH-FASHION EDITORIAL LUXURY MAGAZINE GRID (ANIMATION: SMOOTH IMAGE SCALE-UP & TEXT ELEVATION)', desc: 'Design: HIGH-FASHION EDITORIAL LUXURY MAGAZINE GRID • Animation: SMOOTH IMAGE SCALE-UP & TEXT ELEVATION', comp: '<GlobalBlogGrid2 />' },
  { id: 'global-blog-grid-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK BLOG CARDS (ANIMATION: HARD OFFSET SHADOW PUSH & GLITCH BADGE)', desc: 'Design: NEO-BRUTALIST CYBERPUNK BLOG CARDS • Animation: HARD OFFSET SHADOW PUSH & GLITCH BADGE', comp: '<GlobalBlogGrid3 />' },
  { id: 'global-blog-grid-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC BLOG DECK (ANIMATION: TACTILE PRESS BOUNCE & SPARKLE EXPANSION)', desc: 'Design: 3D TACTILE CLAYMORPHIC BLOG DECK • Animation: TACTILE PRESS BOUNCE & SPARKLE EXPANSION', comp: '<GlobalBlogGrid4 />' },
  { id: 'global-blog-grid-5', title: 'Design 5: HOLOGRAPHIC NEON CYBER BLOG MATRIX (ANIMATION: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE)', desc: 'Design: HOLOGRAPHIC NEON CYBER BLOG MATRIX • Animation: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE', comp: '<GlobalBlogGrid5 />' },
  { id: 'global-blog-grid-6', title: 'Design 6: HORIZONTAL EXPANDABLE ACCORDION BLOG GRID (ANIMATION: FLUID WIDTH EXPANSION & TEXT UNBLUR)', desc: 'Design: HORIZONTAL EXPANDABLE ACCORDION BLOG GRID • Animation: FLUID WIDTH EXPANSION & TEXT UNBLUR', comp: '<GlobalBlogGrid6 />' },
  { id: 'global-blog-grid-7', title: 'Design 7: SKEUOMORPHIC VELVET GOLD PRIVILEGE JOURNAL (ANIMATION: GOLD REFLECTION SWEEP & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC VELVET GOLD PRIVILEGE JOURNAL • Animation: GOLD REFLECTION SWEEP & PRESSED INSET', comp: '<GlobalBlogGrid7 />' },
  { id: 'global-blog-grid-8', title: 'Design 8: SPLIT-TONE DIAGONAL ARTICLE CARDS (ANIMATION: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH)', desc: 'Design: SPLIT-TONE DIAGONAL ARTICLE CARDS • Animation: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH', comp: '<GlobalBlogGrid8 />' },
  { id: 'global-blog-grid-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE BLOG DECK (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE BLOG DECK • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalBlogGrid9 />' },
  { id: 'global-blog-grid-10', title: 'Design 10: RETRO POLAROID FILM REEL JOURNAL GRID (ANIMATION: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE)', desc: 'Design: RETRO POLAROID FILM REEL JOURNAL GRID • Animation: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE', comp: '<GlobalBlogGrid10 />' },
  { id: 'global-blog-grid-11', title: 'Design 11: ISOMETRIC 3D SPATIAL ARTICLE DECK (ANIMATION: ISOMETRIC CARD LIFT UP & FLOATING SHADOW)', desc: 'Design: ISOMETRIC 3D SPATIAL ARTICLE DECK • Animation: ISOMETRIC CARD LIFT UP & FLOATING SHADOW', comp: '<GlobalBlogGrid11 />' },
  { id: 'global-blog-grid-12', title: 'Design 12: MINIMALIST BLUEPRINT LINE-ART ARTICLE SPEC (ANIMATION: HAIRLINE VECTOR DRAW & DYNAMIC COUNTER)', desc: 'Design: MINIMALIST BLUEPRINT LINE-ART ARTICLE SPEC • Animation: HAIRLINE VECTOR DRAW & DYNAMIC COUNTER', comp: '<GlobalBlogGrid12 />' },
  { id: 'global-blog-grid-13', title: 'Design 13: CIRCULAR RADIAL NODE ARTICLE RING (ANIMATION: SMOOTH ORBITAL ROTATION & NODE HOVER PULL)', desc: 'Design: CIRCULAR RADIAL NODE ARTICLE RING • Animation: SMOOTH ORBITAL ROTATION & NODE HOVER PULL', comp: '<GlobalBlogGrid13 />' },
  { id: 'global-blog-grid-14', title: 'Design 14: CINEMATIC MOTION VIDEO ARTICLE CANVAS (ANIMATION: LIVE VIDEO UNBLUR & WAVEFORM PULSE)', desc: 'Design: CINEMATIC MOTION VIDEO ARTICLE CANVAS • Animation: LIVE VIDEO UNBLUR & WAVEFORM PULSE', comp: '<GlobalBlogGrid14 />' },
  { id: 'global-blog-grid-15', title: 'Design 15: DIAMOND FACET PRISM BLOG GRID (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM BLOG GRID • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalBlogGrid15 />' },
  { id: 'global-blog-grid-16', title: 'Design 16: CYBER MATRIX TERMINAL BLOG LOGS (ANIMATION: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TERMINAL BLOG LOGS • Animation: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE', comp: '<GlobalBlogGrid16 />' },
  { id: 'global-blog-grid-17', title: 'Design 17: ORGANIC CURVED SUNSET FLUID JOURNAL (ANIMATION: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET FLUID JOURNAL • Animation: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT', comp: '<GlobalBlogGrid17 />' },
  { id: 'global-blog-grid-18', title: 'Design 18: ELEVATED CARD DECK FAN-OUT BLOG GRID (ANIMATION: CARD FAN-OUT & ACTIVE SLIDE ELEVATION)', desc: 'Design: ELEVATED CARD DECK FAN-OUT BLOG GRID • Animation: CARD FAN-OUT & ACTIVE SLIDE ELEVATION', comp: '<GlobalBlogGrid18 />' },
  { id: 'global-blog-grid-19', title: 'Design 19: MODERN NEUMORPHIC SOFT INSET ARTICLE GRID (ANIMATION: TACTILE INSET PRESS DEPTH & SOFT GLOW)', desc: 'Design: MODERN NEUMORPHIC SOFT INSET ARTICLE GRID • Animation: TACTILE INSET PRESS DEPTH & SOFT GLOW', comp: '<GlobalBlogGrid19 />' },
  { id: 'global-blog-grid-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO MASTER BLOG SUITE (ANIMATION: STAGGERED CASCADE ENTRANCE & BADGE PULSE)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO MASTER BLOG SUITE • Animation: STAGGERED CASCADE ENTRANCE & BADGE PULSE', comp: '<GlobalBlogGrid20 />' },
];

const categoryBlock = `] : category === 'global-blog-grid' ? [\n` +
  items.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-video-section'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Blog Grids into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-video-section\' not found!');
}
