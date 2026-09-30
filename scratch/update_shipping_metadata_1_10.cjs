const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 1, title: 'GLASS ICON GRID', desc: 'A futuristic global shipping grid using ReactBits style glass icons that pop with a glow on hover.' },
  { id: 2, title: 'PORTAL REVEAL HERO', desc: 'A stunning portal animation where the screen parts open to reveal a full-bleed background image with express delivery details.' },
  { id: 3, title: 'INFINITE MARQUEE TAPE', desc: 'A diagonal, brutalist infinite scrolling ticker tape delivering shipping highlights on an endless loop.' },
  { id: 4, title: 'TYPOGRAPHIC DESTINATIONS', desc: 'A minimalist TypeUI-inspired destination selector featuring massive typography and sleek cross-fade state transitions.' },
  { id: 5, title: 'ANIMATED ROUTE ARC', desc: 'A visual route tracker that literally draws an arc connecting the warehouse to your door as you scroll down.' },
  { id: 6, title: '3D BOX UNBOXING', desc: 'An interactive unboxing experience. Hover over the card to pop open the top flaps of the 3D box.' },
  { id: 7, title: 'STEPPER TIMELINE', desc: 'An elegant step-by-step delivery journey that connects each phase with an animated blue progress line.' },
  { id: 8, title: 'ESTIMATOR CALCULATOR', desc: 'An interactive shipping estimator tool featuring input animations and a delayed celebration toast on success.' },
  { id: 9, title: 'DRIVING TRUCK TOY', desc: 'A playful hover micro-interaction where a delivery truck hits the gas and bumps along an animated road.' },
  { id: 10, title: 'PACKING SLIP RECEIPT', desc: 'A skeuomorphic design featuring a printed packing slip that physically slides out of an envelope when in view.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'shipping-delivery-information-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Shipping 1-10 metadata updated successfully.');
