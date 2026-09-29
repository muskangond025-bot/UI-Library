const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const updates = [
  { id: 11, title: 'ROTARY SIZE SELECTOR', desc: 'A stunning circular dial interface. Clicking a button rotates the massive dial with a spring animation to update the dimensions in the center.' },
  { id: 12, title: 'HORIZONTAL CARD SNAP', desc: 'A horizontal scroll container where huge dimension comparison cards slide in and snap precisely into the center of your view.' },
  { id: 13, title: 'EXPANDABLE MEASURING TAPE', desc: 'A visual measuring tape UI. Size markers pop out like dynamic spring-loaded pins along the tape as it scrolls into view.' },
  { id: 14, title: 'NEON HOVER CHART', desc: 'A dark-mode cyberpunk size chart. Hovering over any cell creates glowing neon intersecting crosshairs across the entire row and column.' },
  { id: 15, title: '3D FLIP CONVERSION TABLE', desc: 'Each size is a physical 3D card. Hovering over a card elegantly flips it in 3D space to reveal international sizing (US, UK, EU).' },
  { id: 16, title: 'TEAR-OFF RECEIPT GUIDE', desc: 'Designed like a physical vintage receipt or ticket that shows sizes. Features custom CSS jagged edges and a barcode.' },
  { id: 17, title: 'DYNAMIC RADAR CHART', desc: 'An interactive SVG radar chart showing how sizes scale up. Hovering a size button instantly morphs the polygon shape with fluid motion.' },
  { id: 18, title: 'PARALLAX IMAGE OVERLAY', desc: 'A large model image background with parallax scrolling, overlaid with sleek glassmorphic size measurements that slide into view.' },
  { id: 19, title: 'MINIMALIST WIZARD FLOW', desc: 'A stepper UI: "Step 1: Choose fit", "Step 2: Recommended Size". Features smooth cross-fading transitions between steps.' },
  { id: 20, title: 'INTERACTIVE CLICK MARQUEE', desc: 'A massive continuous scrolling text marquee of sizes. Clicking a scrolling size freezes the marquee and expands a beautiful glass spec sheet.' }
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
content += '\\n// Cache bust sg11-20 ' + Date.now();

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Fixed metadata for Size Guide 11-20 in SectionLibraryGrid.tsx');
