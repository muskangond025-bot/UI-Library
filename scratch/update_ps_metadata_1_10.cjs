const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 1, title: 'STAGGERED LIST REVEAL', desc: 'A clean, staggered list reveal where each specification is inside a premium dark card with subtle hover color transitions.' },
  { id: 2, title: 'FROSTED GLASS ICONS', desc: 'A gorgeous grid where each spec icon is encased in a frosted glassmorphic block that glows and animates a gradient slide on hover.' },
  { id: 3, title: 'INTERACTIVE TAB FOLDERS', desc: 'An interactive tabbed folder layout. Clicking on a category smoothly crossfades the highly detailed specification bullet points.' },
  { id: 4, title: 'EDITORIAL SPEC GRID', desc: 'A pure, minimalist editorial grid with razor-thin borders, massive typography, and high-contrast hover states for a modern look.' },
  { id: 5, title: 'INFINITE PARALLAX MARQUEE', desc: 'A breathtaking dual-directional parallax marquee that infinitely scrolls massive hollow typography in opposite directions.' },
  { id: 6, title: 'EXPANDING ACCORDION TABLE', desc: 'A minimalist, smoothly expanding table where clicking a row reveals detailed specifications with a spring-physics animation.' },
  { id: 7, title: 'SVG RADAR CHART', desc: 'A beautiful visual representation of metrics using animated SVG polygons mapped on an interactive performance radar chart.' },
  { id: 8, title: 'MAGNETIC CURSOR SPOTLIGHT', desc: 'A bento grid of specifications where hovering your cursor casts a real-time magnetic spotlight glow effect over the technical data.' },
  { id: 9, title: 'HORIZONTAL SCROLL CARDS', desc: 'A massive sticky horizontal scroll timeline that translates your vertical scrolling into a smooth horizontal journey across feature cards.' },
  { id: 10, title: 'TYPEWRITER LINE REVEAL', desc: 'Massive editorial tech specs that reveal themselves line-by-line from behind invisible bounding boxes as you scroll into view.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-specifications-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Specs 1-10 metadata updated successfully.');
