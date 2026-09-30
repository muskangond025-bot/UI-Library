const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 11, title: 'CURSOR FOLLOWER GLOW', desc: 'A dark layout featuring a custom cursor follower with glow and blur effects responding to mouse movement.' },
  { id: 12, title: 'HAPTIC CHECKLIST', desc: 'An interactive checklist with micro-interactions, layout transitions on tap, and simulated haptic shake error feedback.' },
  { id: 13, title: '3D PARALLAX TILT', desc: 'A stunning 3D perspective layout with parallax tilt effects and glowing elements that follow your cursor.' },
  { id: 14, title: 'SHARED ELEMENT MATCHED-MOTION', desc: 'Clicking a grid item seamlessly expands it into a full overlay card using Shared-Element matched-motion transitions.' },
  { id: 15, title: 'CINEMATIC SEQUENCE & NOISE', desc: 'An edgy cinematic sequence with a pulsating blur effect and a background static noise layer.' },
  { id: 16, title: 'STEPPER ANIMATION', desc: 'A multi-step form flow animation with a dynamic progress bar and smooth horizontal slide transitions.' },
  { id: 17, title: 'THEME TRANSITION', desc: 'A playful component showcasing a smooth, gradual transition between light and dark modes with color interpolation.' },
  { id: 18, title: 'SKELETON TO DATA MORPH', desc: 'A realistic simulation of a loading state with spinner and skeleton placeholders that gracefully transition into actual data.' },
  { id: 19, title: 'EMPTY STATE HOVER DISTORTION', desc: 'An empty state card surrounded by animated SVG blobs featuring 3D hover distortion effects.' },
  { id: 20, title: 'SCROLL PROGRESS PARALLAX', desc: 'A dramatic scroll-linked parallax layout where typography enters sequentially accompanied by a top scroll progress bar.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-care-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Care 11-20 metadata updated successfully.');
