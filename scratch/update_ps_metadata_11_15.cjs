const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 11, title: 'HOVER REVEAL CARDS', desc: 'Minimal specification cards with sleek icons that push their titles upward to smoothly reveal detailed spec lists upon hover.' },
  { id: 12, title: '3D ISOMETRIC CUBE', desc: 'An auto-rotating, fully 3D isometric cube where each face of the cube presents a different core hardware specification category.' },
  { id: 13, title: 'STICKY EDITORIAL SIDEBAR', desc: 'A classic premium layout featuring a left-side sticky navigation that tracks perfectly as you scroll through massive typography spec sections.' },
  { id: 14, title: 'BLUEPRINT HOTSPOTS', desc: 'An interactive technical wireframe blueprint. Hovering over pulsing radar hotspots reveals targeted specification details via glassmorphic tooltips.' },
  { id: 15, title: 'STAGGERED PARALLAX GRID', desc: 'An immersive parallax layout where adjacent columns of specification cards smoothly scroll in opposite directions as you move down the page.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-specifications-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Specs 11-15 metadata updated successfully.');
