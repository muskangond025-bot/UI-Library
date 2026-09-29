const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    id: 'product-highlights-6',
    title: 'CINEMATIC BENTO GRID',
    desc: 'An asymmetrical bento grid featuring glassmorphic overlay cards that gracefully fade and scale into view on scroll, complete with hover-responsive scaling and image dimming.'
  },
  {
    id: 'product-highlights-7',
    title: 'STICKY PARALLAX DECK',
    desc: 'A deck of full-width feature cards that stack sequentially on top of each other using scroll-linked parallax scaling and vertical translation for a seamless story.'
  },
  {
    id: 'product-highlights-8',
    title: 'CURSOR SPOTLIGHT GRID',
    desc: 'A futuristic feature grid where a dynamic, blurred ambient light element constantly follows the user cursor to reveal glassmorphic card boundaries.'
  },
  {
    id: 'product-highlights-9',
    title: 'INFINITE WIREFRAME ROTATION',
    desc: 'An immersive absolute-centered focus layout backed by a hypnotically rotating infinite background wireframe that scales in on scroll.'
  },
  {
    id: 'product-highlights-10',
    title: 'PARALLAX TEXT MASK',
    desc: 'A massive mix-blend-difference typography layout that scrolls inversely against a slowly scaling high-resolution background image.'
  }
];

updates.forEach((update, idx) => {
  const num = idx + 6;
  const regex = new RegExp(
    `(id:\\s*'product-highlights-${num}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Metadata 6-10 updated successfully.');
