const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 1, title: 'DARK GLASSMORPHISM GRID', desc: 'A sleek, dark glassmorphism grid with framer-motion hover animations and subtle radial gradients.' },
  { id: 2, title: 'SCROLL REVEAL TYPOGRAPHY', desc: 'A typography-heavy design featuring scroll-based word reveal animations and a dynamic progress bar.' },
  { id: 3, title: 'ANIMATED TABS', desc: 'An interactive tabbed folder layout with a deep blue theme and smooth content crossfade transitions.' },
  { id: 4, title: 'PARALLAX PORTAL HERO', desc: 'A vibrant, gradient-background design with scroll-driven parallax blur effects inspired by portal hero designs.' },
  { id: 5, title: 'HOVER ELEVATION CARDS', desc: "An emerald-themed Do's and Don'ts layout with spring-based entry animations and floating hover elevation." },
  { id: 6, title: 'GLOWING BORDER CARD', desc: 'A premium card with a dynamic glowing gradient border effect and expandable text on hover.' },
  { id: 7, title: 'STAGGERED TEXT REVEAL', desc: 'A bold, high-contrast quick-start guide featuring staggered text and line reveal animations.' },
  { id: 8, title: 'SPRING SPLIT CARDS', desc: 'A clean split-card layout highlighting warnings and support with responsive spring hover animations.' },
  { id: 9, title: 'ELEGANT FADE LIST', desc: 'A minimalist list with elegant, staggered fade-in animations for care instructions and material content.' },
  { id: 10, title: 'FLUID ACCORDION', desc: 'A beautifully animated fluid accordion dropdown utilizing Framer Motion for smooth height and padding transitions.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-care-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Care 1-10 metadata updated successfully.');
