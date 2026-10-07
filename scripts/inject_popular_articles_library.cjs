const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogPopularArticles${i} } from '../sections/blog/06-blog-popular-articles/popular-articles-${numStr}/BlogPopularArticles${i}';\n`;
  importsStr += `import blogPopularArticles${i}Data from '../sections/blog/06-blog-popular-articles/popular-articles-${numStr}/popular-articles-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Titles and Animations map
const titlesAndAnim = {
  1: { title: 'GLASS RANK TRENDING FEED', anim: 'BACKDROP BLUR RANK BADGE BOUNCE & VIEW COUNTER' },
  2: { title: 'NEUMORPHIC TOP RATED LIST', anim: 'TACTILE INSET CARD ELEVATION & SPRING PRESS' },
  3: { title: 'HOLOGRAPHIC CYBER TRENDING MATRIX', anim: 'CONTINUOUS LASER SCAN LINE & NEON CYAN PULSE' },
  4: { title: 'MULTI-LAYER DEPTH STACK', anim: 'SPATIAL 3D TILT & ELEVATED SHADOW RANK DEPTH' },
  5: { title: 'CLAYMORPHIC POPULAR BUBBLE CARDS', anim: 'BOUNCY 3D CLAY SPRING & INNER GLOW SHIFT' },
  6: { title: 'FROSTED POPULAR SLIDER', anim: 'SMOOTH HORIZONTAL FROSTED CARD SLIDER' },
  7: { title: 'CHROME METALLIC SHEEN FEED', anim: 'LIQUID METALLIC LIGHT SHEEN WAVE OVER DARK TILES' },
  8: { title: 'AURORA MESH POPULAR TRIPLE', anim: 'FLUID AURORA BLOB DRIFT & GLASS FLOAT' },
  9: { title: 'SPLIT HERO RANK 1 + RAIL', anim: 'HERO SLIDE-IN & STAGGERED RIGHT RAIL POPULAR FEED' },
  10: { title: 'DARK VELVET FLAME STREAM', anim: 'PULSING VIOLET RADAR AURA & HIGH-CONTRAST FOCUS' },
  11: { title: 'JOURNAL SKEUOMORPHIC NEWSPAPER', anim: 'TACTILE PAPER CARD TILT & VINTAGE RANK STAMP' },
  12: { title: 'SCI-FI HUD POPULAR TELEMETRY', anim: 'HUD BRACKET EXPANSION & TELEMETRY READ COUNTER' },
  13: { title: 'BENTO LAYERED GLASS MASONRY', anim: 'ASYMMETRIC BENTO TILE EXPANSION & FOCUS SHIFT' },
  14: { title: 'LIQUID GLASS CAPSULE FEED', anim: 'FLOATING CAPSULE DRIFT & PARTICLE AURA' },
  15: { title: 'NEON EDGE GLOW POPULAR CARDS', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL HAIRLINE RANK FEED', anim: 'HAIRLINE GRID DRAW & ANCHOR SLIDE' },
  17: { title: 'MAGAZINE COVER POPULAR GRID', anim: 'IMAGE ZOOM EXPAND & CURTAIN GRADIENT DROP' },
  18: { title: 'PRISMATIC REFRACTION GLASS FEED', anim: 'CHROMATIC REFRACTION SHIFT & RAINBOW REFLECTION' },
  19: { title: 'EMBOSSED VINTAGE RETRO CARDS', anim: 'DEBOSSED PRESS FEEDBACK & VINTAGE RANK POP' },
  20: { title: 'ULTRA STREAM FULL-BLEED FEED', anim: 'IMMERSIVE ENTRANCE SPRING & FULL BORDER PULSE' }
};

// 3. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `category === 'blog-popular-articles' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-popular-articles-\${i + 1}\`,
      title: \`POPULAR ARTICLES — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Popular Articles variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Popular Articles" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `category === 'blog-popular-articles' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  newItemsStr += `      { id: 'blog-popular-articles-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}', previewComponent: <BlogPopularArticles${i} data={blogPopularArticles${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully registered all 20 Blog Popular Articles designs with Design Name & Animation in SectionLibraryGrid.tsx!');
