const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    id: 'product-highlights-16',
    title: 'SCROLL SVG PATH REVEAL',
    desc: 'An immersive vertical timeline where an SVG line dynamically draws itself connecting premium typography feature points based on the user\'s scroll depth.'
  },
  {
    id: 'product-highlights-17',
    title: 'MAGNETIC TOOLTIP MARKERS',
    desc: 'A gorgeous full-width product image overlaid with animated pulsing hotspot markers that magnetically react to the cursor and reveal glassmorphic tooltips on hover.'
  },
  {
    id: 'product-highlights-18',
    title: 'STAGGERED TEXT REVEAL',
    desc: 'High-impact editorial typography that sequentially slides into view from behind invisible bounding boxes as the user scrolls down the page.'
  },
  {
    id: 'product-highlights-19',
    title: 'ASYMMETRICAL PARALLAX GRID',
    desc: 'A vibrant bento grid layout where each colored feature card travels at a slightly different vertical speed, creating a beautiful asymmetrical parallax effect.'
  },
  {
    id: 'product-highlights-20',
    title: 'INTERACTIVE STACKED FOLDERS',
    desc: 'A highly tactile UI component resembling a deck of colorful folders. Clicking any folder brings it to the front while smoothly lowering the inactive folders into the background.'
  }
];

updates.forEach((update, idx) => {
  const num = idx + 16;
  const regex = new RegExp(
    `(id:\\s*'product-highlights-${num}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Metadata 16-20 updated successfully.');
