const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 1, title: 'BENTO GRID FEATURES', desc: 'A sleek dark mode bento grid where hovering over feature boxes triggers subtle glow gradients and micro-animations on inner SVG icons.' },
  { id: 2, title: 'STICKY SCROLL IMAGES', desc: 'A split layout where the left side is a sticky full-height dynamic image that seamlessly crossfades as you scroll through huge typography features on the right.' },
  { id: 3, title: 'ACCORDION IMAGE REVEAL', desc: 'An interactive horizontal accordion. Clicking a vertical feature tab fluidly expands it to reveal a massive, detailed background image and action buttons.' },
  { id: 4, title: 'ORBITING SCI-FI NODES', desc: 'A breathtaking layout featuring a massive glowing central orb. Product features orbit the orb and connect via animated dashed SVG lines.' },
  { id: 5, title: 'MAGNETIC BENTO SPOTLIGHT', desc: 'A bento grid of features where tracking your mouse highlights the borders of the cards with a highly premium gradient spotlight effect.' },
  { id: 6, title: 'AUTO-PLAY TABS', desc: 'A sleek horizontal tab system. Each tab features a dynamic progress bar that auto-plays to the next tab, revealing a new high-res image and description.' },
  { id: 7, title: 'STAGGERED STICKY CARDS', desc: 'Massive, colorful feature cards that perfectly stack directly over each other as you scroll down the page, creating an immersive depth effect.' },
  { id: 8, title: 'MINIMAL SVG DRAWING', desc: 'A pure, minimalist grid of features utilizing SVG stroke animations that elegantly draw themselves as the section enters the viewport.' },
  { id: 9, title: 'INTERACTIVE PRODUCT HOTSPOTS', desc: 'A stunning central product mockup layered with pulsing hotspots. Interacting with them reveals beautiful glassmorphic feature tooltip cards.' },
  { id: 10, title: 'TYPOGRAPHIC SCROLL REVEAL', desc: 'A cinematic layout where massive background typography masks an image. Scrolling dynamically scales the background and shifts the typography.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-features-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Features 1-10 metadata updated successfully.');
