const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const updates = [
  { id: 1, title: 'INTERACTIVE HOVER MATRIX', desc: 'A minimalist table. Hovering over a row highlights the whole row smoothly. Entrance animation features a cascading fade-in.' },
  { id: 2, title: 'TOGGLE INTERACTIVE TABLE', desc: 'A custom toggle switch with a smooth spring animation that changes between CM and INCHES. Features large glassmorphic size cards.' },
  { id: 3, title: 'CLEAN EDITORIAL TABLE', desc: 'A clean, high-contrast table layout with a bold blue circular icon. The rows enter with a staggered left-to-right fade.' },
  { id: 4, title: 'GLASSMORPHIC SIZE CARDS', desc: 'Glassmorphic size blocks. Hovering over them scales up the size text and seamlessly drops down exact measurements. Features an infinite marquee background.' },
  { id: 5, title: 'HUMAN SILHOUETTE VISUALIZER', desc: 'A 2D silhouette visualizer. Clicking a size animates physical lines drawing out to show the exact measurements on the abstract silhouette.' },
  { id: 6, title: 'ACCORDION SIZE BREAKDOWN', desc: 'A massive vertical accordion. Each size is a huge row. Clicking it expands with a spring physics bounce to show detailed breakdown.' },
  { id: 7, title: 'BENTO GRID DIMENSIONS', desc: 'A split bento grid layout where a large dark card contains the size options and a secondary card details how to measure yourself.' },
  { id: 8, title: 'GRID STAGGER REVEAL', desc: 'A clean grid of light cards. The components utilize staggered entrance animations, dropping in with a satisfying spring bounce.' },
  { id: 9, title: 'FASHION EDITORIAL GUIDE', desc: 'Huge typography with razor-thin lines. Very fashion-forward with subtle text reveals and an animated background blur effect on load.' },
  { id: 10, title: 'INTERACTIVE DRAG-AND-COMPARE', desc: 'A custom slider track that you can click to instantly morph the measurements between XS, S, M, L, XL with satisfying spring physics.' }
];

updates.forEach((update) => {
  const regexDouble = new RegExp(
    `(id:\\s*'size-guide-${update.id}',\\s*title:\\s*)"[^"]+"(,\\s*description:\\s*)"[^"]+"`,
    'g'
  );
  content = content.replace(regexDouble, `$1"${update.title}"$2"${update.desc}"`);
  
  const regexSingle = new RegExp(
    `(id:\\s*'size-guide-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regexSingle, `$1"${update.title}"$2"${update.desc}"`);
});

// Cache bust force HMR
content += '\\n// Cache bust ' + Date.now();

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Fixed metadata for Size Guide 1-10 in SectionLibraryGrid.tsx');
