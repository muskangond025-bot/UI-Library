const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogNewsletter${i} } from '../sections/blog/08-blog-newsletter/newsletter-${numStr}/BlogNewsletter${i}';\n`;
  importsStr += `import blogNewsletter${i}Data from '../sections/blog/08-blog-newsletter/newsletter-${numStr}/newsletter-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Titles and Animations map
const titlesAndAnim = {
  1: { title: 'GLASSMORPHIC SUBSCRIBER HERO', anim: 'BACKDROP BLUR GLOW RING PULSE & SUCCESS POP' },
  2: { title: 'NEUMORPHIC DUAL-SHADOW BOX', anim: 'TACTILE INSET FIELD FOCUS & SOFT PRESS FEEDBACK' },
  3: { title: 'HOLOGRAPHIC CYBER TERMINAL SUB', anim: 'CONTINUOUS LASER SCAN LINE & TERMINAL PROMPT TYPING' },
  4: { title: 'MULTI-LAYER DEPTH CARD BOX', anim: 'SPATIAL 3D TILT & ELEVATED SHADOW FIELD DEPTH' },
  5: { title: 'CLAYMORPHIC 3D BUBBLE FORM', anim: 'BOUNCY 3D CLAY BUTTON SPRING & INNER GLOW SHIFT' },
  6: { title: 'FROSTED GLASS FLOATING CAPSULE', anim: 'FLOATING CAPSULE CONTAINER & BLUR FADE-IN' },
  7: { title: 'CHROME METALLIC SHEEN BANNER', anim: 'LIQUID METALLIC LIGHT SHEEN WAVE OVER DARK BOX' },
  8: { title: 'AURORA MESH NEWSLETTER BOX', anim: 'FLUID AURORA BLOB DRIFT & GLASS FLOAT' },
  9: { title: 'SPLIT HERO CONTENT + FORM', anim: 'BENEFITS LIST SLIDE-IN & FORM REVEAL' },
  10: { title: 'DARK VELVET GLOW RADAR BOX', anim: 'PULSING VIOLET RADAR AURA & HIGH-CONTRAST FOCUS' },
  11: { title: 'JOURNAL SKEUOMORPHIC STAMP BOX', anim: 'TACTILE PAPER CARD TILT & VINTAGE WAX STAMP' },
  12: { title: 'SCI-FI HUD TELEMETRY SUB BOX', anim: 'HUD BRACKET EXPANSION & SUBSCRIBER TELEMETRY READ' },
  13: { title: 'BENTO LAYERED GLASS SUBSCRIBER', anim: 'ASYMMETRIC BENTO TILE EXPANSION & FOCUS SHIFT' },
  14: { title: 'LIQUID GLASS CAPSULE SUB BAR', anim: 'FLOATING CAPSULE DRIFT & PARTICLE AURA' },
  15: { title: 'NEON EDGE GLOW NEWSLETTER CARD', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL HAIRLINE LINE FORM', anim: 'HAIRLINE GRID DRAW & ANCHOR SLIDE' },
  17: { title: 'MAGAZINE COVER OVERLAY SUB BOX', anim: 'BACKGROUND IMAGE ZOOM EXPAND & CURTAIN GRADIENT DROP' },
  18: { title: 'PRISMATIC REFRACTION GLASS BOX', anim: 'CHROMATIC REFRACTION SHIFT & RAINBOW REFLECTION' },
  19: { title: 'EMBOSSED VINTAGE RETRO BOX', anim: 'DEBOSSED PRESS FEEDBACK & VINTAGE BUTTON POP' },
  20: { title: 'ULTRA STREAM FULL-BLEED SUB', anim: 'IMMERSIVE ENTRANCE SPRING & FULL BORDER PULSE' }
};

// 3. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `category === 'blog-newsletter' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-newsletter-\${i + 1}\`,
      title: \`BLOG NEWSLETTER — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Blog Newsletter variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Blog Newsletter" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `category === 'blog-newsletter' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  newItemsStr += `      { id: 'blog-newsletter-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}', previewComponent: <BlogNewsletter${i} data={blogNewsletter${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully registered all 20 Blog Newsletter designs with Design Name & Animation in SectionLibraryGrid.tsx!');
