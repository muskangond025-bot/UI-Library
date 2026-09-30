const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 1, title: 'PORTAL HERO WARRANTY', desc: 'A stunning hero section with radial portal gradient, glassmorphic shield icon, and button slide animation.' },
  { id: 2, title: 'PARALLAX NUMBER REVEAL', desc: 'Massive background numbers that move in opposite directions on scroll, combined with an animated progress bar.' },
  { id: 3, title: 'TABBED COVERAGE VIEWER', desc: 'An interactive tab layout with a fluid active indicator and smooth crossfade text transitions.' },
  { id: 4, title: 'ROTATING TEXT REVEAL', desc: 'A bold satisfaction guarantee with text that flips into view from the bottom using spring physics.' },
  { id: 5, title: 'TIMELINE STEPS', desc: 'A step-by-step repair process with staggered entrance animations and hover states that reveal background glow.' },
  { id: 6, title: 'SMOOTH ACCORDION FAQ', desc: 'An accordion FAQ section with smooth height/opacity transitions and rotating plus/minus icons.' },
  { id: 7, title: 'STAGGERED LIST', desc: 'A staggered list entrance animation with blurred initial states, set inside an elegant editorial card layout.' },
  { id: 8, title: 'HOVER REVEAL CARD', desc: 'A 5-year warranty badge card that expands vertically to reveal more details and a subtle gradient on hover.' },
  { id: 9, title: '3D PERSPECTIVE GLOBAL', desc: 'A global warranty card utilizing 3D perspective scroll animations with scale, rotateX, and opacity transforms.' },
  { id: 10, title: 'LOADING CERTIFICATE', desc: 'A two-step animation simulating a loading spinner that transitions into a beautifully rendered warranty certificate.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'warranty-information-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Warranty 1-10 metadata updated successfully.');
