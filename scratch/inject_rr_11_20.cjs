const fs = require('fs');
const path = require('path');

const file = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let c = fs.readFileSync(file, 'utf8');

const updates = [
  { id: 11, title: 'GRID TO DETAILS MORPH', desc: 'A grid of return reasons that seamlessly morphs into a detailed policy card when clicked.' },
  { id: 12, title: 'ORGANIC BLOB BACKGROUND', desc: 'A soft, organic blob background that slowly morphs behind a glassmorphism policy card.' },
  { id: 13, title: 'DRAG TO RETURN', desc: 'An interactive drag-and-drop zone where you drag an item into a box to reveal the policy.' },
  { id: 14, title: 'TERMINAL AUTOTYPING', desc: 'A strict terminal interface that types out the automated refund policy.' },
  { id: 15, title: '3D ORIGAMI ACCORDION', desc: 'A 3D origami-style accordion that physically unfolds down the screen.' },
  { id: 16, title: 'DATA VIZ POLICY', desc: 'Animated 3D bars showcasing 100% Refunds and 0% Restocking Fees.' },
  { id: 17, title: 'MAGNETIC HOVER REVEAL', desc: 'A magnetic button that sticks to the cursor and unlocks the policy when clicked.' },
  { id: 18, title: 'MULTI-LAYER TEXT MASK', desc: 'Huge text masking a visual journey, expanding to show full refund details.' },
  { id: 19, title: 'CYBERPUNK NEON GLOW', desc: 'A futuristic glowing neon outline that traces the borders of the return policy.' },
  { id: 20, title: 'SCRATCH CARD SIMULATOR', desc: 'A fun simulation where clicking reveals the hidden return policy underneath a coating.' }
];

let itemsStr11_20 = updates.map(u => {
  return '{ id: "return-refund-information-' + u.id + '", title: "' + u.title + '", description: "' + u.desc + '", previewComponent: <ReturnRefundInformation' + u.id + ' data={returnRefundInformation' + u.id + 'Data as any} /> }';
}).join(', ');

// Append to the existing array.
const regex = /(category === 'return-refund-information' \? \[.*?)(\] :)/s;
c = c.replace(regex, (match, p1, p2) => {
  return p1 + ', ' + itemsStr11_20 + p2;
});

let imports = '';
for (let i = 11; i <= 20; i++) {
  imports += 'import ReturnRefundInformation' + i + ' from "../sections/product/13-return-refund-information/return-refund-information-' + i + '/ReturnRefundInformation' + i + '";\n';
  imports += 'import returnRefundInformation' + i + 'Data from "../sections/product/13-return-refund-information/return-refund-information-' + i + '/return-refund-information-' + i + '.json";\n';
}

const insertPos = c.indexOf('interface GridProps');
c = c.slice(0, insertPos) + imports + '\n' + c.slice(insertPos);

fs.writeFileSync(file, c);
console.log('Injected RR 11-20');
