const fs = require('fs');
const path = require('path');

const oldDir = path.join(__dirname, '../src/components/sections/product/08-whats-in-the-box');
const newDir = path.join(__dirname, '../src/components/sections/product/08-whats-included');

if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir, { recursive: true });
}

for (let i = 1; i <= 10; i++) {
  const oldFolder = path.join(oldDir, `whats-in-the-box-${i}`);
  const newFolder = path.join(newDir, `what-s-included-${i}`);
  
  if (!fs.existsSync(newFolder)) {
    fs.mkdirSync(newFolder, { recursive: true });
  }

  const oldFile = path.join(oldFolder, `WhatsInTheBox${i}.tsx`);
  const newFile = path.join(newFolder, `WhatSIncluded${i}.tsx`);

  if (fs.existsSync(oldFile)) {
    let content = fs.readFileSync(oldFile, 'utf8');
    // Rename component definition
    content = content.replace(`WhatsInTheBox${i}`, `WhatSIncluded${i}`);
    
    fs.writeFileSync(newFile, content, 'utf8');
  }
}

// Update SectionLibraryGrid metadata
const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
if (fs.existsSync(gridPath)) {
  let content = fs.readFileSync(gridPath, 'utf8');
  // Copy over the descriptions and titles from whats-in-the-box to what-s-included
  const updates = [
    { id: 1, title: 'HOVER FADE GRID', desc: 'A clean, animated grid of included items. Hovering over a specific item dynamically highlights it while smoothly fading out the others.' },
    { id: 2, title: 'EXPLODED VIEW SCROLL', desc: 'A highly dynamic layout where scrolling causes included items to literally explode outwards from a central placeholder box into their final positions.' },
    { id: 3, title: 'INFINITE CAROUSEL', desc: 'A sleek, auto-scrolling horizontal carousel featuring massive minimal cards for every item included in the package.' },
    { id: 4, title: 'MINIMAL LIST FLOATING CURSOR', desc: 'A minimal, high-contrast list of items. Hovering over an item reveals a gorgeous floating image preview that tracks your cursor perfectly.' },
    { id: 5, title: 'INTERACTIVE PACKING SLIP', desc: 'A deeply aesthetic, jagged-edge receipt or packing slip design. Items and quantities are laid out in a premium monospace typography.' },
    { id: 6, title: 'ACCORDION UNBOX', desc: 'A premium vertical accordion layout. Clicking an item fluidly expands it to reveal a beautiful image placeholder and an in-depth description.' },
    { id: 7, title: 'SPOTLIGHT BENTO GRID', desc: 'An advanced bento grid where a radial gradient spotlight seamlessly follows your mouse cursor across the grid to highlight the included items.' },
    { id: 8, title: 'STACKING SCROLL CARDS', desc: 'A dynamic scroll layout where cards representing the included items pile and stack precisely on top of each other as you scroll down the container.' },
    { id: 9, title: 'SILHOUETTE HOVER REVEAL', desc: 'Items begin as sleek, dark grey silhouettes. Hovering over them fluidly restores their full color, brightness, and scale while revealing their names.' },
    { id: 10, title: 'CINEMATIC 3D CAROUSEL', desc: 'A fully interactive 3D CSS carousel. Users can spin the carousel left or right to view massive cards for each included item rotating in true 3D space.' }
  ];

  updates.forEach((update) => {
    const regex = new RegExp(
      `(id:\\s*'what-s-included-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
      'g'
    );
    content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
  });

  fs.writeFileSync(gridPath, content, 'utf8');
}

console.log("Migrated to what-s-included");
