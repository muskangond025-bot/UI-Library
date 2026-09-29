const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 16, title: 'SCROLL-DRIVEN SVG TIMELINE', desc: 'A massive vertical SVG path that dynamically draws itself downwards as you scroll, sequentially revealing branching technical data points.' },
  { id: 17, title: 'DYNAMIC SCI-FI TECH RING', desc: 'A glowing, rotating circular UI interface. Clicking different data nodes on the ring instantly updates the central holographic spec values.' },
  { id: 18, title: 'MAGAZINE SPREAD TYPOGRAPHY', desc: 'A massive, high-contrast typography layout inspired by editorial magazine spreads. Scrolling triggers staggered word reveals.' },
  { id: 19, title: 'GENERATIONAL COMPARISON SLIDER', desc: 'A sleek comparison grid. Hovering over a specification triggers a smooth glassmorphic overlay that compares the previous generation to the new upgrade.' },
  { id: 20, title: 'AUTO-PLAY BENTO GRID', desc: 'An interactive bento grid layout where one specification card is always active. It automatically cycles through the bento boxes like a dynamic slideshow!' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-specifications-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Specs 16-20 metadata updated successfully.');
