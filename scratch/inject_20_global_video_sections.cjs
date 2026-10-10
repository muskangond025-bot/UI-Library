const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalVideoSection${i} } from '../sections/global/13-video-section/global-video-section-${i}/GlobalVideoSection${i}';`);
}
const importBlock = imports.join('\n') + '\n';
content = importBlock + content;

// Category mapping block
const items = [
  { id: 'global-video-section-1', title: 'Design 1: GLASSMORPHIC BENTO VIDEO SUITE (ANIMATION: HOVER 3D TILT & PLAYHEAD PULSE)', desc: 'Design: GLASSMORPHIC BENTO VIDEO SUITE • Animation: HOVER 3D TILT & PLAYHEAD PULSE', comp: '<GlobalVideoSection1 />' },
  { id: 'global-video-section-2', title: 'Design 2: HIGH-FASHION EDITORIAL CINEMA DECK (ANIMATION: SMOOTH SCALE-UP & MULTI-LAYER ELEVATION)', desc: 'Design: HIGH-FASHION EDITORIAL CINEMA DECK • Animation: SMOOTH SCALE-UP & MULTI-LAYER ELEVATION', comp: '<GlobalVideoSection2 />' },
  { id: 'global-video-section-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK VIDEO PLAYER (ANIMATION: HARD OFFSET SHADOW PUSH & GLITCH PULSE)', desc: 'Design: NEO-BRUTALIST CYBERPUNK VIDEO PLAYER • Animation: HARD OFFSET SHADOW PUSH & GLITCH PULSE', comp: '<GlobalVideoSection3 />' },
  { id: 'global-video-section-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC VIDEO CARDS (ANIMATION: TACTILE PRESS BOUNCE & SPARKLE EXPANSION)', desc: 'Design: 3D TACTILE CLAYMORPHIC VIDEO CARDS • Animation: TACTILE PRESS BOUNCE & SPARKLE EXPANSION', comp: '<GlobalVideoSection4 />' },
  { id: 'global-video-section-5', title: 'Design 5: HOLOGRAPHIC NEON CYBER VIDEO MATRIX (ANIMATION: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE)', desc: 'Design: HOLOGRAPHIC NEON CYBER VIDEO MATRIX • Animation: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE', comp: '<GlobalVideoSection5 />' },
  { id: 'global-video-section-6', title: 'Design 6: HORIZONTAL EXPANDABLE ACCORDION VIDEO DECK (ANIMATION: FLUID WIDTH EXPANSION & UNBLUR)', desc: 'Design: HORIZONTAL EXPANDABLE ACCORDION VIDEO DECK • Animation: FLUID WIDTH EXPANSION & UNBLUR', comp: '<GlobalVideoSection6 />' },
  { id: 'global-video-section-7', title: 'Design 7: SKEUOMORPHIC VELVET GOLD CINEMA (ANIMATION: GOLD REFLECTION SWEEP & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC VELVET GOLD CINEMA • Animation: GOLD REFLECTION SWEEP & PRESSED INSET', comp: '<GlobalVideoSection7 />' },
  { id: 'global-video-section-8', title: 'Design 8: SPLIT-TONE DIAGONAL VIDEO FEATURE (ANIMATION: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH)', desc: 'Design: SPLIT-TONE DIAGONAL VIDEO FEATURE • Animation: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH', comp: '<GlobalVideoSection8 />' },
  { id: 'global-video-section-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE VIDEO SHOWCASE (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE VIDEO SHOWCASE • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalVideoSection9 />' },
  { id: 'global-video-section-10', title: 'Design 10: RETRO POLAROID FILM REEL SHOWCASE (ANIMATION: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE)', desc: 'Design: RETRO POLAROID FILM REEL SHOWCASE • Animation: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE', comp: '<GlobalVideoSection10 />' },
  { id: 'global-video-section-11', title: 'Design 11: ISOMETRIC 3D SPATIAL VIDEO DECK (ANIMATION: ISOMETRIC CARD LIFT UP & FLOATING SHADOW)', desc: 'Design: ISOMETRIC 3D SPATIAL VIDEO DECK • Animation: ISOMETRIC CARD LIFT UP & FLOATING SHADOW', comp: '<GlobalVideoSection11 />' },
  { id: 'global-video-section-12', title: 'Design 12: MINIMALIST BLUEPRINT LINE-ART VIDEO SPEC (ANIMATION: HAIRLINE VECTOR DRAW & PLAYHEAD COUNTER)', desc: 'Design: MINIMALIST BLUEPRINT LINE-ART VIDEO SPEC • Animation: HAIRLINE VECTOR DRAW & PLAYHEAD COUNTER', comp: '<GlobalVideoSection12 />' },
  { id: 'global-video-section-13', title: 'Design 13: CIRCULAR RADIAL NODE VIDEO SPOTLIGHT (ANIMATION: SMOOTH ORBITAL ROTATION & NODE HOVER PULL)', desc: 'Design: CIRCULAR RADIAL NODE VIDEO SPOTLIGHT • Animation: SMOOTH ORBITAL ROTATION & NODE HOVER PULL', comp: '<GlobalVideoSection13 />' },
  { id: 'global-video-section-14', title: 'Design 14: CINEMATIC WIDESCREEN MOTION CANVAS (ANIMATION: LIVE VIDEO UNBLUR & WAVEFORM AUDIO PULSE)', desc: 'Design: CINEMATIC WIDESCREEN MOTION CANVAS • Animation: LIVE VIDEO UNBLUR & WAVEFORM AUDIO PULSE', comp: '<GlobalVideoSection14 />' },
  { id: 'global-video-section-15', title: 'Design 15: DIAMOND FACET PRISM VIDEO SHOWCASE (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM VIDEO SHOWCASE • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalVideoSection15 />' },
  { id: 'global-video-section-16', title: 'Design 16: CYBER MATRIX TERMINAL VIDEO STREAM (ANIMATION: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TERMINAL VIDEO STREAM • Animation: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE', comp: '<GlobalVideoSection16 />' },
  { id: 'global-video-section-17', title: 'Design 17: ORGANIC CURVED SUNSET FLUID VIDEO CANVAS (ANIMATION: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET FLUID VIDEO CANVAS • Animation: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT', comp: '<GlobalVideoSection17 />' },
  { id: 'global-video-section-18', title: 'Design 18: ELEVATED CARD DECK FAN-OUT VIDEO PLAYER (ANIMATION: CARD FAN-OUT & ACTIVE SLIDE ELEVATION)', desc: 'Design: ELEVATED CARD DECK FAN-OUT VIDEO PLAYER • Animation: CARD FAN-OUT & ACTIVE SLIDE ELEVATION', comp: '<GlobalVideoSection18 />' },
  { id: 'global-video-section-19', title: 'Design 19: MODERN NEUMORPHIC SOFT INSET VIDEO PLAYER (ANIMATION: TACTILE INSET PRESS DEPTH & SOFT GLOW)', desc: 'Design: MODERN NEUMORPHIC SOFT INSET VIDEO PLAYER • Animation: TACTILE INSET PRESS DEPTH & SOFT GLOW', comp: '<GlobalVideoSection19 />' },
  { id: 'global-video-section-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO MASTER VIDEO SUITE (ANIMATION: STAGGERED CASCADE ENTRANCE & WAVEFORM PULSE)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO MASTER VIDEO SUITE • Animation: STAGGERED CASCADE ENTRANCE & WAVEFORM PULSE', comp: '<GlobalVideoSection20 />' },
];

const categoryBlock = `] : category === 'global-video-section' ? [\n` +
  items.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-customer-reviews'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Video Sections into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-customer-reviews\' not found!');
}
