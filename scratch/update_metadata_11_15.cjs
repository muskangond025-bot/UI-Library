const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    id: 'product-highlights-11',
    title: 'MORPHING ACCORDION GALLERY',
    desc: 'An interactive flex-box accordion that expands its high-resolution image cards on hover, dynamically re-flowing space with smooth spring physics.'
  },
  {
    id: 'product-highlights-12',
    title: 'HORIZONTAL SCROLL TIMELINE',
    desc: 'Translates vertical user scrolling into a seamless horizontal timeline presentation using sticky containers and scroll-linked transforms.'
  },
  {
    id: 'product-highlights-13',
    title: '3D HOVER TILT CARDS',
    desc: 'A premium grid of glassmorphic cards that track the users cursor, rotating dynamically in 3D space with advanced spring-damped physics.'
  },
  {
    id: 'product-highlights-14',
    title: 'SCROLL BLUR REVEAL',
    desc: 'Massive editorial typography that utilizes scroll-linked CSS blur filters and scaling to seamlessly fade in and out of sharp focus as the user scrolls.'
  },
  {
    id: 'product-highlights-15',
    title: 'SPINNING CONIC BORDERS',
    desc: 'A sleek dark mode bento grid where ultra-thin conic gradients infinitely spin around the borders of the feature cards using pure CSS animation.'
  }
];

updates.forEach((update, idx) => {
  const num = idx + 11;
  const regex = new RegExp(
    `(id:\\s*'product-highlights-${num}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Metadata 11-15 updated successfully.');
