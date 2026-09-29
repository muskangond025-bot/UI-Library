const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const updates = [
  { id: 11, title: 'NEON GLOW CARDS', desc: 'Dark mode. Items inside cards with a neon glowing border that pulses, revealing a beautiful image inside.' },
  { id: 12, title: 'HORIZONTAL MARQUEE PANELS', desc: 'A massive horizontal infinite marquee of included items, big bold text, images inside the marquee.' },
  { id: 13, title: 'SLIDING ACCORDION CAROUSEL', desc: 'An accordion but horizontal. When you hover over a panel, it expands sideways to show the item image and quantity.' },
  { id: 14, title: 'MINIMALIST LIST', desc: 'A clean text list. Clicking an item slides down an image inline with a smooth spring.' },
  { id: 15, title: 'PARALLAX STACK', desc: 'Items overlap each other slightly in a vertical list, and as you scroll they separate and form a neat grid.' },
  { id: 16, title: 'CIRCULAR REVEAL', desc: 'Items arranged in a circle. The center shows the selected item image and quantity. Hovering items updates the center.' },
  { id: 17, title: 'GLASS BENTO', desc: 'Glassmorphism bento grid for the included items. Floating on a colorful gradient background.' },
  { id: 18, title: 'TICKER TAPE CARDS', desc: 'A continuous stock-ticker like tape of text behind floating, slow-bobbing cards.' },
  { id: 19, title: 'FOLDING PANELS', desc: 'The items look like a folded piece of paper. As they appear in view, they unfold into flat cards.' },
  { id: 20, title: 'CURSOR TRAIL REVEAL', desc: 'As you move the mouse across a blank canvas, images of the included items pop up behind the cursor and slowly fade out.' }
];

updates.forEach((update) => {
  const regexDouble = new RegExp(
    `(id:\\s*'what-s-included-${update.id}',\\s*title:\\s*)"[^"]+"(,\\s*description:\\s*)"[^"]+"`,
    'g'
  );
  content = content.replace(regexDouble, `$1"${update.title}"$2"${update.desc}"`);
  
  const regexSingle = new RegExp(
    `(id:\\s*'what-s-included-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regexSingle, `$1"${update.title}"$2"${update.desc}"`);
});

// Force HMR reload
content += '\n// Force HMR reload ' + Date.now();

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Fixed metadata for 11-20 in SectionLibraryGrid.tsx');
