const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalCustomerReviews${i} } from '../sections/global/12-customer-reviews/global-customer-reviews-${i}/GlobalCustomerReviews${i}';`);
}
const importBlock = imports.join('\n') + '\n';
content = importBlock + content;

// Category mapping block
const items = [
  { id: 'global-customer-reviews-1', title: 'Design 1: GLASSMORPHIC BENTO CUSTOMER REVIEW GRID (ANIMATION: HOVER 3D TILT & GLOW FOLLOW)', desc: 'Design: GLASSMORPHIC BENTO CUSTOMER REVIEW GRID • Animation: HOVER 3D TILT & GLOW FOLLOW', comp: '<GlobalCustomerReviews1 />' },
  { id: 'global-customer-reviews-2', title: 'Design 2: HIGH-FASHION EDITORIAL CUSTOMER REVIEW DECK (ANIMATION: SMOOTH TEXT ELEVATION & RATING BAR)', desc: 'Design: HIGH-FASHION EDITORIAL CUSTOMER REVIEW DECK • Animation: SMOOTH TEXT ELEVATION & RATING BAR', comp: '<GlobalCustomerReviews2 />' },
  { id: 'global-customer-reviews-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK REVIEW CARDS (ANIMATION: HARD OFFSET SHADOW PUSH & GLITCH PULSE)', desc: 'Design: NEO-BRUTALIST CYBERPUNK REVIEW CARDS • Animation: HARD OFFSET SHADOW PUSH & GLITCH PULSE', comp: '<GlobalCustomerReviews3 />' },
  { id: 'global-customer-reviews-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC CUSTOMER REVIEW CARDS (ANIMATION: TACTILE PRESS BOUNCE & SPARKLE EXPANSION)', desc: 'Design: 3D TACTILE CLAYMORPHIC CUSTOMER REVIEW CARDS • Animation: TACTILE PRESS BOUNCE & SPARKLE EXPANSION', comp: '<GlobalCustomerReviews4 />' },
  { id: 'global-customer-reviews-5', title: 'Design 5: HOLOGRAPHIC NEON CYBER REVIEW MATRIX (ANIMATION: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE)', desc: 'Design: HOLOGRAPHIC NEON CYBER REVIEW MATRIX • Animation: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE', comp: '<GlobalCustomerReviews5 />' },
  { id: 'global-customer-reviews-6', title: 'Design 6: HORIZONTAL EXPANDABLE ACCORDION REVIEWS (ANIMATION: FLUID WIDTH EXPANSION & PHOTO REVEAL)', desc: 'Design: HORIZONTAL EXPANDABLE ACCORDION REVIEWS • Animation: FLUID WIDTH EXPANSION & PHOTO REVEAL', comp: '<GlobalCustomerReviews6 />' },
  { id: 'global-customer-reviews-7', title: 'Design 7: SKEUOMORPHIC VELVET GOLD PRIVILEGE REVIEWS (ANIMATION: GOLD REFLECTION SWEEP & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC VELVET GOLD PRIVILEGE REVIEWS • Animation: GOLD REFLECTION SWEEP & PRESSED INSET', comp: '<GlobalCustomerReviews7 />' },
  { id: 'global-customer-reviews-8', title: 'Design 8: SPLIT-TONE DIAGONAL CUSTOMER REVIEW CARDS (ANIMATION: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH)', desc: 'Design: SPLIT-TONE DIAGONAL CUSTOMER REVIEW CARDS • Animation: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH', comp: '<GlobalCustomerReviews8 />' },
  { id: 'global-customer-reviews-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE REVIEW SHOWCASE (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE REVIEW SHOWCASE • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalCustomerReviews9 />' },
  { id: 'global-customer-reviews-10', title: 'Design 10: RETRO POLAROID CUSTOMER PHOTO REVIEW CARDS (ANIMATION: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE)', desc: 'Design: RETRO POLAROID CUSTOMER PHOTO REVIEW CARDS • Animation: DYNAMIC CARD STRAIGHTEN & UNSTICK TAPE', comp: '<GlobalCustomerReviews10 />' },
  { id: 'global-customer-reviews-11', title: 'Design 11: ISOMETRIC 3D SPATIAL CUSTOMER REVIEWS (ANIMATION: ISOMETRIC CARD LIFT UP & FLOATING SHADOW)', desc: 'Design: ISOMETRIC 3D SPATIAL CUSTOMER REVIEWS • Animation: ISOMETRIC CARD LIFT UP & FLOATING SHADOW', comp: '<GlobalCustomerReviews11 />' },
  { id: 'global-customer-reviews-12', title: 'Design 12: MINIMALIST BLUEPRINT LINE-ART REVIEW SPEC CARDS (ANIMATION: HAIRLINE VECTOR DRAW & DYNAMIC COUNTER)', desc: 'Design: MINIMALIST BLUEPRINT LINE-ART REVIEW SPEC CARDS • Animation: HAIRLINE VECTOR DRAW & DYNAMIC COUNTER', comp: '<GlobalCustomerReviews12 />' },
  { id: 'global-customer-reviews-13', title: 'Design 13: CIRCULAR RADIAL NODE REVIEW SPOTLIGHT (ANIMATION: SMOOTH ORBITAL ROTATION & NODE HOVER PULL)', desc: 'Design: CIRCULAR RADIAL NODE REVIEW SPOTLIGHT • Animation: SMOOTH ORBITAL ROTATION & NODE HOVER PULL', comp: '<GlobalCustomerReviews13 />' },
  { id: 'global-customer-reviews-14', title: 'Design 14: CINEMATIC MOTION VIDEO CUSTOMER REVIEWS (ANIMATION: LIVE VIDEO UNBLUR & PLAYHEAD PULSE)', desc: 'Design: CINEMATIC MOTION VIDEO CUSTOMER REVIEWS • Animation: LIVE VIDEO UNBLUR & PLAYHEAD PULSE', comp: '<GlobalCustomerReviews14 />' },
  { id: 'global-customer-reviews-15', title: 'Design 15: DIAMOND FACET PRISM CUSTOMER REVIEW CARDS (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM CUSTOMER REVIEW CARDS • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalCustomerReviews15 />' },
  { id: 'global-customer-reviews-16', title: 'Design 16: CYBER MATRIX TERMINAL REVIEW LOGS (ANIMATION: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TERMINAL REVIEW LOGS • Animation: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE', comp: '<GlobalCustomerReviews16 />' },
  { id: 'global-customer-reviews-17', title: 'Design 17: ORGANIC CURVED SUNSET FLUID REVIEW CARDS (ANIMATION: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET FLUID REVIEW CARDS • Animation: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT', comp: '<GlobalCustomerReviews17 />' },
  { id: 'global-customer-reviews-18', title: 'Design 18: ELEVATED CARD DECK FAN-OUT CUSTOMER REVIEWS (ANIMATION: CARD FAN-OUT & ACTIVE SLIDE ELEVATION)', desc: 'Design: ELEVATED CARD DECK FAN-OUT CUSTOMER REVIEWS • Animation: CARD FAN-OUT & ACTIVE SLIDE ELEVATION', comp: '<GlobalCustomerReviews18 />' },
  { id: 'global-customer-reviews-19', title: 'Design 19: MODERN NEUMORPHIC SOFT INSET REVIEW CARDS (ANIMATION: TACTILE INSET PRESS DEPTH & SOFT GLOW)', desc: 'Design: MODERN NEUMORPHIC SOFT INSET REVIEW CARDS • Animation: TACTILE INSET PRESS DEPTH & SOFT GLOW', comp: '<GlobalCustomerReviews19 />' },
  { id: 'global-customer-reviews-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO MASTER REVIEW SUITE (ANIMATION: STAGGERED CASCADE ENTRANCE & RATING BAR)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO MASTER REVIEW SUITE • Animation: STAGGERED CASCADE ENTRANCE & RATING BAR', comp: '<GlobalCustomerReviews20 />' },
];

const categoryBlock = `] : category === 'global-customer-reviews' ? [\n` +
  items.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-testimonials'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Customer Reviews into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-testimonials\' not found!');
}
