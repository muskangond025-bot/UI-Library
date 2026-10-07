const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogRecentArticles${i} } from '../sections/blog/07-blog-recent-articles/recent-articles-${numStr}/BlogRecentArticles${i}';\n`;
  importsStr += `import blogRecentArticles${i}Data from '../sections/blog/07-blog-recent-articles/recent-articles-${numStr}/recent-articles-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Titles and Animations map
const titlesAndAnim = {
  1: { title: 'GLASS RECENT TIMELINE FEED', anim: 'BACKDROP BLUR TIMESTAMP PULSE & READ TIME BOUNCE' },
  2: { title: 'NEUMORPHIC COMPACT FEED LIST', anim: 'TACTILE INSET CARD ELEVATION & SPRING PRESS' },
  3: { title: 'HOLOGRAPHIC CYBER LIVE FEED', anim: 'CONTINUOUS LASER SCAN LINE & LIVE LED BLINK' },
  4: { title: 'MULTI-LAYER DEPTH CHRONO STACK', anim: 'SPATIAL 3D TILT & ELEVATED TIMELINE DEPTH' },
  5: { title: 'CLAYMORPHIC RECENT BUBBLE GRID', anim: 'BOUNCY 3D CLAY SPRING & INNER GLOW SHIFT' },
  6: { title: 'FROSTED RECENT HORIZONTAL SLIDER', anim: 'SMOOTH HORIZONTAL FROSTED CARD SLIDER' },
  7: { title: 'CHROME METALLIC SHEEN FEED', anim: 'LIQUID METALLIC LIGHT SHEEN WAVE OVER DARK TILES' },
  8: { title: 'AURORA MESH RECENT TRIPLE', anim: 'FLUID AURORA BLOB DRIFT & GLASS FLOAT' },
  9: { title: 'SPLIT HERO LATEST + TIMELINE', anim: 'NEWEST STORY SLIDE-IN & STAGGERED RECENT RAIL' },
  10: { title: 'DARK VELVET GLOW FEED STREAM', anim: 'PULSING VIOLET RADAR AURA & HIGH-CONTRAST FOCUS' },
  11: { title: 'JOURNAL SKEUOMORPHIC NEWSPAPER FEED', anim: 'TACTILE PAPER CARD TILT & VINTAGE DATE STAMP' },
  12: { title: 'SCI-FI HUD RECENT TELEMETRY', anim: 'HUD BRACKET EXPANSION & TELEMETRY READ COUNTER' },
  13: { title: 'BENTO LAYERED GLASS MASONRY', anim: 'ASYMMETRIC BENTO TILE EXPANSION & FOCUS SHIFT' },
  14: { title: 'LIQUID GLASS CAPSULE FEED', anim: 'FLOATING CAPSULE DRIFT & PARTICLE AURA' },
  15: { title: 'NEON EDGE GLOW RECENT CARDS', anim: '360-DEGREE ROTATING NEON RAINBOW BORDER' },
  16: { title: 'ARCHITECTURAL HAIRLINE FEED', anim: 'HAIRLINE GRID DRAW & ANCHOR SLIDE' },
  17: { title: 'MAGAZINE COVER RECENT GRID', anim: 'IMAGE ZOOM EXPAND & CURTAIN GRADIENT DROP' },
  18: { title: 'PRISMATIC REFRACTION GLASS FEED', anim: 'CHROMATIC REFRACTION SHIFT & RAINBOW REFLECTION' },
  19: { title: 'EMBOSSED VINTAGE RETRO CARDS', anim: 'DEBOSSED PRESS FEEDBACK & VINTAGE DATE POP' },
  20: { title: 'ULTRA STREAM FULL-BLEED FEED', anim: 'IMMERSIVE ENTRANCE SPRING & FULL BORDER PULSE' }
};

// 3. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `category === 'blog-recent-articles' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-recent-articles-\${i + 1}\`,
      title: \`RECENT ARTICLES — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Recent Articles variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Recent Articles" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `category === 'blog-recent-articles' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  const info = titlesAndAnim[i];
  newItemsStr += `      { id: 'blog-recent-articles-${i}', title: '${info.title} (ANIMATION: ${info.anim})', description: 'Design: ${info.title} • Animation: ${info.anim}', previewComponent: <BlogRecentArticles${i} data={blogRecentArticles${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully registered all 20 Blog Recent Articles designs with Design Name & Animation in SectionLibraryGrid.tsx!');
