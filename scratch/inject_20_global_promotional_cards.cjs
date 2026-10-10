const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(file, 'utf8');

// Prepare imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalPromotionalCards${i} } from '../sections/global/10-promotional-cards/global-promotional-cards-${i}/GlobalPromotionalCards${i}';`);
}
const importBlock = imports.join('\n') + '\n';
content = importBlock + content;

// Category mapping block
const items = [
  { id: 'global-promotional-cards-1', title: 'Design 1: GLASSMORPHIC BENTO PROMO CARDS (ANIMATION: HOVER 3D TILT & GLOW FOLLOW)', desc: 'Design: GLASSMORPHIC BENTO PROMO CARDS • Animation: HOVER 3D TILT & GLOW FOLLOW', comp: '<GlobalPromotionalCards1 />' },
  { id: 'global-promotional-cards-2', title: 'Design 2: HIGH-FASHION EDITORIAL LUXURY CARDS (ANIMATION: SMOOTH IMAGE ZOOM & MULTI-LAYER ELEVATION)', desc: 'Design: HIGH-FASHION EDITORIAL LUXURY CARDS • Animation: SMOOTH IMAGE ZOOM & MULTI-LAYER ELEVATION', comp: '<GlobalPromotionalCards2 />' },
  { id: 'global-promotional-cards-3', title: 'Design 3: NEO-BRUTALIST CYBERPUNK PROMO CARDS (ANIMATION: HARD OFFSET SHADOW PUSH & SKWEEKED GLITCH BADGE)', desc: 'Design: NEO-BRUTALIST CYBERPUNK PROMO CARDS • Animation: HARD OFFSET SHADOW PUSH & SKWEEKED GLITCH BADGE', comp: '<GlobalPromotionalCards3 />' },
  { id: 'global-promotional-cards-4', title: 'Design 4: 3D TACTILE CLAYMORPHIC VOUCHER CARDS (ANIMATION: TACTILE PRESS BOUNCE & SPARKLE EXPANSION)', desc: 'Design: 3D TACTILE CLAYMORPHIC VOUCHER CARDS • Animation: TACTILE PRESS BOUNCE & SPARKLE EXPANSION', comp: '<GlobalPromotionalCards4 />' },
  { id: 'global-promotional-cards-5', title: 'Design 5: HOLOGRAPHIC NEON CYBER DISCOUNT DECK (ANIMATION: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE)', desc: 'Design: HOLOGRAPHIC NEON CYBER DISCOUNT DECK • Animation: HOLOGRAPHIC SHIMMER SWEEP & LASER PULSE', comp: '<GlobalPromotionalCards5 />' },
  { id: 'global-promotional-cards-6', title: 'Design 6: HORIZONTAL SPLIT ACCORDION PROMO CARDS (ANIMATION: FLUID WIDTH EXPANSION & INSTANT COUPON REVEAL)', desc: 'Design: HORIZONTAL SPLIT ACCORDION PROMO CARDS • Animation: FLUID WIDTH EXPANSION & INSTANT COUPON REVEAL', comp: '<GlobalPromotionalCards6 />' },
  { id: 'global-promotional-cards-7', title: 'Design 7: SKEUOMORPHIC VELVET GOLD PRIVILEGE CARDS (ANIMATION: GOLD REFLECTION SWEEP & PRESSED INSET)', desc: 'Design: SKEUOMORPHIC VELVET GOLD PRIVILEGE CARDS • Animation: GOLD REFLECTION SWEEP & PRESSED INSET', comp: '<GlobalPromotionalCards7 />' },
  { id: 'global-promotional-cards-8', title: 'Design 8: SPLIT-TONE DIAGONAL FLASH SALE CARDS (ANIMATION: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH)', desc: 'Design: SPLIT-TONE DIAGONAL FLASH SALE CARDS • Animation: DIAGONAL SLIDE & DYNAMIC COLOR SWITCH', comp: '<GlobalPromotionalCards8 />' },
  { id: 'global-promotional-cards-9', title: 'Design 9: SUB-ZERO ICE FROST REFRACTIVE PROMO DECK (ANIMATION: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER)', desc: 'Design: SUB-ZERO ICE FROST REFRACTIVE PROMO DECK • Animation: CRYSTAL LIGHT SPLIT & SNOWFALL SHIMMER', comp: '<GlobalPromotionalCards9 />' },
  { id: 'global-promotional-cards-10', title: 'Design 10: RETRO POLAROID TICKET PROMO CARDS (ANIMATION: DYNAMIC CARD STRAIGHTEN & TICKET TEAR)', desc: 'Design: RETRO POLAROID TICKET PROMO CARDS • Animation: DYNAMIC CARD STRAIGHTEN & TICKET TEAR', comp: '<GlobalPromotionalCards10 />' },
  { id: 'global-promotional-cards-11', title: 'Design 11: ISOMETRIC 3D SPATIAL PROMO CARDS (ANIMATION: ISOMETRIC CARD LIFT UP & FLOATING SHADOW)', desc: 'Design: ISOMETRIC 3D SPATIAL PROMO CARDS • Animation: ISOMETRIC CARD LIFT UP & FLOATING SHADOW', comp: '<GlobalPromotionalCards11 />' },
  { id: 'global-promotional-cards-12', title: 'Design 12: MINIMALIST BLUEPRINT LINE-ART SPEC CARDS (ANIMATION: HAIRLINE VECTOR DRAW & DYNAMIC COUPON COUNTER)', desc: 'Design: MINIMALIST BLUEPRINT LINE-ART SPEC CARDS • Animation: HAIRLINE VECTOR DRAW & DYNAMIC COUPON COUNTER', comp: '<GlobalPromotionalCards12 />' },
  { id: 'global-promotional-cards-13', title: 'Design 13: CIRCULAR ORBITAL WHEEL PROMO RING (ANIMATION: SMOOTH ORBITAL ROTATION & NODE HOVER PULL)', desc: 'Design: CIRCULAR ORBITAL WHEEL PROMO RING • Animation: SMOOTH ORBITAL ROTATION & NODE HOVER PULL', comp: '<GlobalPromotionalCards13 />' },
  { id: 'global-promotional-cards-14', title: 'Design 14: CINEMATIC MOTION VIDEO PROMO CARDS (ANIMATION: LIVE VIDEO UNBLUR & PLAYHEAD PULSE)', desc: 'Design: CINEMATIC MOTION VIDEO PROMO CARDS • Animation: LIVE VIDEO UNBLUR & PLAYHEAD PULSE', comp: '<GlobalPromotionalCards14 />' },
  { id: 'global-promotional-cards-15', title: 'Design 15: DIAMOND FACET PRISM PROMO CARDS (ANIMATION: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL)', desc: 'Design: DIAMOND FACET PRISM PROMO CARDS • Animation: PRISMATIC FACET ANGLE SHIFT & RAY REVEAL', comp: '<GlobalPromotionalCards15 />' },
  { id: 'global-promotional-cards-16', title: 'Design 16: CYBER MATRIX TERMINAL PROMO CARDS (ANIMATION: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE)', desc: 'Design: CYBER MATRIX TERMINAL PROMO CARDS • Animation: MATRIX CODE SCANLINE SWEEP & TELEMETRY PULSE', comp: '<GlobalPromotionalCards16 />' },
  { id: 'global-promotional-cards-17', title: 'Design 17: ORGANIC CURVED SUNSET FLUID CARDS (ANIMATION: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT)', desc: 'Design: ORGANIC CURVED SUNSET FLUID CARDS • Animation: PEBBLE BLOB MORPH & LIQUID RIPPLE DRIFT', comp: '<GlobalPromotionalCards17 />' },
  { id: 'global-promotional-cards-18', title: 'Design 18: ELEVATED CARD DECK FAN-OUT PROMO CARDS (ANIMATION: CARD FAN-OUT & ACTIVE SLIDE ELEVATION)', desc: 'Design: ELEVATED CARD DECK FAN-OUT PROMO CARDS • Animation: CARD FAN-OUT & ACTIVE SLIDE ELEVATION', comp: '<GlobalPromotionalCards18 />' },
  { id: 'global-promotional-cards-19', title: 'Design 19: MODERN NEUMORPHIC SOFT INSET PROMO CARDS (ANIMATION: TACTILE INSET PRESS DEPTH & SOFT GLOW)', desc: 'Design: MODERN NEUMORPHIC SOFT INSET PROMO CARDS • Animation: TACTILE INSET PRESS DEPTH & SOFT GLOW', comp: '<GlobalPromotionalCards19 />' },
  { id: 'global-promotional-cards-20', title: 'Design 20: FLAGSHIP OMNICHANNEL BENTO MASTER PROMO SUITE (ANIMATION: STAGGERED CASCADE ENTRANCE & COUNTDOWN PULSE)', desc: 'Design: FLAGSHIP OMNICHANNEL BENTO MASTER PROMO SUITE • Animation: STAGGERED CASCADE ENTRANCE & COUNTDOWN PULSE', comp: '<GlobalPromotionalCards20 />' },
];

const categoryBlock = `] : category === 'global-promotional-cards' ? [\n` +
  items.map(t => `      { id: '${t.id}', title: '${t.title}', description: '${t.desc}', previewComponent: ${t.comp} },`).join('\n') + '\n';

const targetPos = content.indexOf("] : category === 'global-image-text'");
if (targetPos !== -1) {
  content = content.slice(0, targetPos) + categoryBlock + content.slice(targetPos);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully injected 20 Global Promotional Cards into SectionLibraryGrid.tsx!');
} else {
  console.error('Target string ] : category === \'global-image-text\' not found!');
}
