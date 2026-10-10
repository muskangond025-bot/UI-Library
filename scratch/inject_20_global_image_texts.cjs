const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalImageText${i} } from '../sections/global/09-image-text/global-image-text-${i}/GlobalImageText${i}';`);
}
const importBlock = imports.join('\n') + '\n';
content = importBlock + content;

// Category mapping block
const items = [
  { id: 'global-image-text-1', title: 'Design 1: GLASSMORPHIC SPLIT SHOWCASE (ANIMATION: PARALLAX IMAGE FLOAT & BACKDROP BLUR GLINT)', desc: 'Design: GLASSMORPHIC SPLIT SHOWCASE • Animation: PARALLAX IMAGE FLOAT & BACKDROP BLUR GLINT', comp: '<GlobalImageText1 />' },
  { id: 'global-image-text-2', title: 'Design 2: MINIMALIST HIGH-FASHION EDITORIAL (ANIMATION: SMOOTH IMAGE SCALE-UP & FLOATING REVEAL)', desc: 'Design: MINIMALIST HIGH-FASHION EDITORIAL • Animation: SMOOTH IMAGE SCALE-UP & FLOATING REVEAL', comp: '<GlobalImageText2 />' },
  { id: 'global-image-text-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK SPLIT (ANIMATION: SKEWED HARD SHADOW PUSH & GLITCH BADGE)', desc: 'Design: NEO-BRUTALIST CYBERPUNK SPLIT • Animation: SKEWED HARD SHADOW PUSH & GLITCH BADGE', comp: '<GlobalImageText3 />' },
  { id: 'global-image-text-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC FEATURE DECK (ANIMATION: TACTILE PRESS BOUNCE & SPARKLE FLOAT)', desc: 'Design: 3D TACTILE CLAYMORPHIC FEATURE DECK • Animation: TACTILE PRESS BOUNCE & SPARKLE FLOAT', comp: '<GlobalImageText4 />' },
  { id: 'global-image-text-5', title: 'Design 5: HOLOGRAPHIC NEON CYBER HORIZON (ANIMATION: RAINBOW HOLOGRAPHIC SHIMMER & HUD CROSSHAIR)', desc: 'Design: HOLOGRAPHIC NEON CYBER HORIZON • Animation: RAINBOW HOLOGRAPHIC SHIMMER & HUD CROSSHAIR', comp: '<GlobalImageText5 />' },
  { id: 'global-image-text-6', title: 'Design 6: HORIZONTAL SPLIT SLIDER CANVAS (ANIMATION: INTERACTIVE STEP SWITCH & CROSSFADE FADE)', desc: 'Design: HORIZONTAL SPLIT SLIDER CANVAS • Animation: INTERACTIVE STEP SWITCH & CROSSFADE FADE', comp: '<GlobalImageText6 />' },
  { id: 'global-image-text-7', title: 'Design 7: SKEUOMORPHIC VELVET LUXURY HERITAGE (ANIMATION: GOLD SHIMMER REFLECTION & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC VELVET LUXURY HERITAGE • Animation: GOLD SHIMMER REFLECTION & PRESSED INSET', comp: '<GlobalImageText7 />' },
  { id: 'global-image-text-8', title: 'Design 8: DUAL-TONE DIAGONAL SLICE FEATURE (ANIMATION: DIAGONAL SLICE SLIDE & DYNAMIC COLOR FILL)', desc: 'Design: DUAL-TONE DIAGONAL SLICE FEATURE • Animation: DIAGONAL SLICE SLIDE & DYNAMIC COLOR FILL', comp: '<GlobalImageText8 />' },
  { id: 'global-image-text-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE SHOWCASE (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE SHOWCASE • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalImageText9 />' },
  { id: 'global-image-text-10', title: 'Design 10: RETRO VINTAGE POLAROID STORYTELLER (ANIMATION: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE)', desc: 'Design: RETRO VINTAGE POLAROID STORYTELLER • Animation: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE', comp: '<GlobalImageText10 />' },
  { id: 'global-image-text-11', title: 'Design 11: ISOMETRIC 3D SPATIAL DECK (ANIMATION: ISOMETRIC CARD LIFT UP & FLOATING SHADOW)', desc: 'Design: ISOMETRIC 3D SPATIAL DECK • Animation: ISOMETRIC CARD LIFT UP & FLOATING SHADOW', comp: '<GlobalImageText11 />' },
  { id: 'global-image-text-12', title: 'Design 12: MINIMALIST BLUEPRINT LINE-ART ARCHITECTURE (ANIMATION: HAIRLINE VECTOR DRAW & COORDINATE COUNTER)', desc: 'Design: MINIMALIST BLUEPRINT LINE-ART ARCHITECTURE • Animation: HAIRLINE VECTOR DRAW & COORDINATE COUNTER', comp: '<GlobalImageText12 />' },
  { id: 'global-image-text-13', title: 'Design 13: CIRCULAR ORBITAL FRAME FEATURE (ANIMATION: SMOOTH ORBITAL FLOAT & SPOTLIGHT GLOW)', desc: 'Design: CIRCULAR ORBITAL FRAME FEATURE • Animation: SMOOTH ORBITAL FLOAT & SPOTLIGHT GLOW', comp: '<GlobalImageText13 />' },
  { id: 'global-image-text-14', title: 'Design 14: CINEMATIC MOTION VIDEO STORYBOARD (ANIMATION: LIVE VIDEO OVERLAY UNBLUR & PLAYHEAD PULSE)', desc: 'Design: CINEMATIC MOTION VIDEO STORYBOARD • Animation: LIVE VIDEO OVERLAY UNBLUR & PLAYHEAD PULSE', comp: '<GlobalImageText14 />' },
  { id: 'global-image-text-15', title: 'Design 15: DIAMOND FACET PRISM SHOWCASE (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM SHOWCASE • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalImageText15 />' },
  { id: 'global-image-text-16', title: 'Design 16: CYBER MATRIX TELEMETRY TERMINAL (ANIMATION: MATRIX SCANLINE SWEEP & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TELEMETRY TERMINAL • Animation: MATRIX SCANLINE SWEEP & TELEMETRY PULSE', comp: '<GlobalImageText16 />' },
  { id: 'global-image-text-17', title: 'Design 17: ORGANIC CURVED SUNSET WAVE SHOWCASE (ANIMATION: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET WAVE SHOWCASE • Animation: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT', comp: '<GlobalImageText17 />' },
  { id: 'global-image-text-18', title: 'Design 18: ELEVATED LAYERED CARD STACK SHOWCASE (ANIMATION: CARD FAN-OUT ELEVATION & INTERACTIVE TAB)', desc: 'Design: ELEVATED LAYERED CARD STACK SHOWCASE • Animation: CARD FAN-OUT ELEVATION & INTERACTIVE TAB', comp: '<GlobalImageText18 />' },
  { id: 'global-image-text-19', title: 'Design 19: MODERN NEUMORPHIC TACTILE INSET SHOWCASE (ANIMATION: TACTILE INSET PRESS DEPTH & SOFT GLOW)', desc: 'Design: MODERN NEUMORPHIC TACTILE INSET SHOWCASE • Animation: TACTILE INSET PRESS DEPTH & SOFT GLOW', comp: '<GlobalImageText19 />' },
  { id: 'global-image-text-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO FEATURE SUITE (ANIMATION: STAGGERED CASCADE ENTRANCE & BADGE PULSE)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO FEATURE SUITE • Animation: STAGGERED CASCADE ENTRANCE & BADGE PULSE', comp: '<GlobalImageText20 />' },
];

const categoryBlock = `] : category === 'global-image-text' ? [\n` +
  items.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-category-grid'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Image Text sections into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-category-grid\' not found!');
}
