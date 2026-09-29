const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    id: 'product-highlights-1',
    title: 'GLASSMORPHIC 3D TILT GRID',
    desc: 'A grid of frosted-glass feature cards featuring 3D spring-physics tilt, scaling icons, and cursor-tracking radial glare on hover.'
  },
  {
    id: 'product-highlights-2',
    title: 'INTERACTIVE VELOCITY MARQUEE',
    desc: 'Infinite dual-directional feature tracks that skew based on scroll velocity and pause on hover, elevating hovered image cards with a spring scale.'
  },
  {
    id: 'product-highlights-3',
    title: 'CINEMATIC STICKY LENS REVEAL',
    desc: 'Editorial storytelling layout where staggered glassmorphic text controls sticky full-height images that reveal through an expanding circular clip-path.'
  },
  {
    id: 'product-highlights-4',
    title: 'INTERACTIVE HOTSPOT EXPLORER',
    desc: 'A central hero product image overlaid with infinitely pulsing interactive markers that spring open into detailed feature cards when clicked.'
  },
  {
    id: 'product-highlights-5',
    title: 'SMOOTH EXPANDING ACCORDION',
    desc: 'A space-efficient feature list utilizing layout animations for buttery-smooth height expansion, fading inactive rows to focus on revealed image details.'
  },
  {
    id: 'product-highlights-6',
    title: 'COMPONENT SHELL SIX',
    desc: 'A basic structural placeholder component with a centered label, reserving space for future feature implementation.'
  },
  {
    id: 'product-highlights-7',
    title: 'SCAFFOLD CONTAINER SEVEN',
    desc: 'An empty UI wrapper displaying placeholder text, acting as a structural starting point for upcoming design iterations.'
  },
  {
    id: 'product-highlights-8',
    title: 'BASE PLACEHOLDER EIGHT',
    desc: 'A generic unstyled div block meant to secure layout positioning while awaiting the final product feature development.'
  },
  {
    id: 'product-highlights-9',
    title: 'STRUCTURAL BLOCK NINE',
    desc: 'A minimalistic development placeholder showing a simple heading, ensuring the application grid renders correctly during construction.'
  },
  {
    id: 'product-highlights-10',
    title: 'UI FRAMEWORK TEN',
    desc: 'An unimplemented section container functioning as a temporary visual anchor before the final highlights design is integrated.'
  }
];

updates.forEach((update, idx) => {
  const num = idx + 1;
  const regex = new RegExp(
    `(id:\\s*'product-highlights-${num}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Metadata updated successfully.');
