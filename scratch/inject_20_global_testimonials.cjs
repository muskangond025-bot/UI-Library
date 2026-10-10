const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalTestimonials${i} } from '../sections/global/11-testimonials/global-testimonials-${i}/GlobalTestimonials${i}';`);
}
const importBlock = imports.join('\n') + '\n';
content = importBlock + content;

// Category mapping block
const items = [
  { id: 'global-testimonials-1', title: 'Design 1: GLASSMORPHIC BENTO TESTIMONIAL GRID (ANIMATION: HOVER 3D TILT & GLOW FOLLOW)', desc: 'Design: GLASSMORPHIC BENTO TESTIMONIAL GRID • Animation: HOVER 3D TILT & GLOW FOLLOW', comp: '<GlobalTestimonials1 />' },
  { id: 'global-testimonials-2', title: 'Design 2: HIGH-FASHION EDITORIAL LUXURY TESTIMONIALS (ANIMATION: SMOOTH TEXT FADE-IN & MULTI-LAYER ELEVATION)', desc: 'Design: HIGH-FASHION EDITORIAL LUXURY TESTIMONIALS • Animation: SMOOTH TEXT FADE-IN & MULTI-LAYER ELEVATION', comp: '<GlobalTestimonials2 />' },
  { id: 'global-testimonials-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK TESTIMONIAL CARDS (ANIMATION: HARD OFFSET SHADOW PUSH & GLITCH BADGE)', desc: 'Design: NEO-BRUTALIST CYBERPUNK TESTIMONIAL CARDS • Animation: HARD OFFSET SHADOW PUSH & GLITCH BADGE', comp: '<GlobalTestimonials3 />' },
  { id: 'global-testimonials-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC QUOTE CARDS (ANIMATION: TACTILE PRESS BOUNCE & SPARKLE EXPANSION)', desc: 'Design: 3D TACTILE CLAYMORPHIC QUOTE CARDS • Animation: TACTILE PRESS BOUNCE & SPARKLE EXPANSION', comp: '<GlobalTestimonials4 />' },
  { id: 'global-testimonials-5', title: 'Design 5: HOLOGRAPHIC NEON CYBER FEEDBACK DECK (ANIMATION: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE)', desc: 'Design: HOLOGRAPHIC NEON CYBER FEEDBACK DECK • Animation: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE', comp: '<GlobalTestimonials5 />' },
  { id: 'global-testimonials-6', title: 'Design 6: HORIZONTAL EXPANDABLE ACCORDION TESTIMONIALS (ANIMATION: FLUID WIDTH EXPANSION & INSTANT QUOTE REVEAL)', desc: 'Design: HORIZONTAL EXPANDABLE ACCORDION TESTIMONIALS • Animation: FLUID WIDTH EXPANSION & INSTANT QUOTE REVEAL', comp: '<GlobalTestimonials6 />' },
  { id: 'global-testimonials-7', title: 'Design 7: SKEUOMORPHIC VELVET GOLD PRIVILEGE TESTIMONIALS (ANIMATION: GOLD REFLECTION SWEEP & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC VELVET GOLD PRIVILEGE TESTIMONIALS • Animation: GOLD REFLECTION SWEEP & PRESSED INSET', comp: '<GlobalTestimonials7 />' },
  { id: 'global-testimonials-8', title: 'Design 8: SPLIT-TONE DIAGONAL TESTIMONIAL CARDS (ANIMATION: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH)', desc: 'Design: SPLIT-TONE DIAGONAL TESTIMONIAL CARDS • Animation: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH', comp: '<GlobalTestimonials8 />' },
  { id: 'global-testimonials-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE REVIEW DECK (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE REVIEW DECK • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalTestimonials9 />' },
  { id: 'global-testimonials-10', title: 'Design 10: RETRO POLAROID CUSTOMER REVIEW CARDS (ANIMATION: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE)', desc: 'Design: RETRO POLAROID CUSTOMER REVIEW CARDS • Animation: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE', comp: '<GlobalTestimonials10 />' },
  { id: 'global-testimonials-11', title: 'Design 11: ISOMETRIC 3D SPATIAL TESTIMONIALS (ANIMATION: ISOMETRIC CARD LIFT UP & FLOATING SHADOW)', desc: 'Design: ISOMETRIC 3D SPATIAL TESTIMONIALS • Animation: ISOMETRIC CARD LIFT UP & FLOATING SHADOW', comp: '<GlobalTestimonials11 />' },
  { id: 'global-testimonials-12', title: 'Design 12: MINIMALIST BLUEPRINT LINE-ART FEEDBACK CARDS (ANIMATION: HAIRLINE VECTOR DRAW & DYNAMIC COUNTER)', desc: 'Design: MINIMALIST BLUEPRINT LINE-ART FEEDBACK CARDS • Animation: HAIRLINE VECTOR DRAW & DYNAMIC COUNTER', comp: '<GlobalTestimonials12 />' },
  { id: 'global-testimonials-13', title: 'Design 13: CIRCULAR RADIAL NODE TESTIMONIAL RING (ANIMATION: SMOOTH ORBITAL ROTATION & NODE HOVER PULL)', desc: 'Design: CIRCULAR RADIAL NODE TESTIMONIAL RING • Animation: SMOOTH ORBITAL ROTATION & NODE HOVER PULL', comp: '<GlobalTestimonials13 />' },
  { id: 'global-testimonials-14', title: 'Design 14: CINEMATIC MOTION VIDEO TESTIMONIALS (ANIMATION: LIVE VIDEO UNBLUR & PLAYHEAD PULSE)', desc: 'Design: CINEMATIC MOTION VIDEO TESTIMONIALS • Animation: LIVE VIDEO UNBLUR & PLAYHEAD PULSE', comp: '<GlobalTestimonials14 />' },
  { id: 'global-testimonials-15', title: 'Design 15: DIAMOND FACET PRISM TESTIMONIAL CARDS (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM TESTIMONIAL CARDS • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalTestimonials15 />' },
  { id: 'global-testimonials-16', title: 'Design 16: CYBER MATRIX TERMINAL TESTIMONIAL CARDS (ANIMATION: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TERMINAL TESTIMONIAL CARDS • Animation: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE', comp: '<GlobalTestimonials16 />' },
  { id: 'global-testimonials-17', title: 'Design 17: ORGANIC CURVED SUNSET FLUID TESTIMONIALS (ANIMATION: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET FLUID TESTIMONIALS • Animation: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT', comp: '<GlobalTestimonials17 />' },
  { id: 'global-testimonials-18', title: 'Design 18: ELEVATED CARD DECK FAN-OUT TESTIMONIALS (ANIMATION: CARD FAN-OUT & ACTIVE SLIDE ELEVATION)', desc: 'Design: ELEVATED CARD DECK FAN-OUT TESTIMONIALS • Animation: CARD FAN-OUT & ACTIVE SLIDE ELEVATION', comp: '<GlobalTestimonials18 />' },
  { id: 'global-testimonials-19', title: 'Design 19: MODERN NEUMORPHIC SOFT INSET TESTIMONIALS (ANIMATION: TACTILE INSET PRESS DEPTH & SOFT GLOW)', desc: 'Design: MODERN NEUMORPHIC SOFT INSET TESTIMONIALS • Animation: TACTILE INSET PRESS DEPTH & SOFT GLOW', comp: '<GlobalTestimonials19 />' },
  { id: 'global-testimonials-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO MASTER TESTIMONIAL SUITE (ANIMATION: STAGGERED CASCADE ENTRANCE & BADGE PULSE)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO MASTER TESTIMONIAL SUITE • Animation: STAGGERED CASCADE ENTRANCE & BADGE PULSE', comp: '<GlobalTestimonials20 />' },
];

const categoryBlock = `] : category === 'global-testimonials' ? [\n` +
  items.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-promotional-cards'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Testimonials into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-promotional-cards\' not found!');
}
