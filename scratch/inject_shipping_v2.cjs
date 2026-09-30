const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Generate Imports
let importsToAdd = '';
for (let i = 1; i <= 10; i++) {
  importsToAdd += `import ShippingDeliveryInformation${i} from '../sections/product/12-shipping-delivery-information/shipping-delivery-information-${i}/ShippingDeliveryInformation${i}';\n`;
  importsToAdd += `import shippingDeliveryInformation${i}Data from '../sections/product/12-shipping-delivery-information/shipping-delivery-information-${i}/shipping-delivery-information-${i}.json';\n`;
}

// Ensure the json files exist, create dummy json if they don't
for (let i = 1; i <= 10; i++) {
  const dir = path.join(__dirname, `../src/components/sections/product/12-shipping-delivery-information/shipping-delivery-information-${i}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const jsonPath = path.join(dir, `shipping-delivery-information-${i}.json`);
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, '{}', 'utf8');
  }
}

// Insert imports right before "export const sections =" or at the end of imports
const interfaceMatch = content.indexOf('interface GridProps {');
if (interfaceMatch !== -1) {
  content = content.slice(0, interfaceMatch) + importsToAdd + '\n' + content.slice(interfaceMatch);
}

// 2. Generate the Array
let sectionsArray = `
    : category === 'shipping-delivery-information'
    ? [`;
    
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

updates.forEach(update => {
  sectionsArray += `
        {
          id: 'shipping-delivery-information-${update.id}',
          title: '${update.title}',
          description: '${update.desc}',
          previewComponent: <ShippingDeliveryInformation${update.id} data={shippingDeliveryInformation${update.id}Data} />
        },`;
});

sectionsArray += `
      ]`;

// Inject into getSectionsForCategory
const returnMatch = content.indexOf('return category === \'hero\'');
if (returnMatch !== -1) {
  // We'll just insert our ternary condition at the end before the final fallback
  // The final fallback is usually an empty array or something like "[]" at the end of the ternary chain.
  // Wait, let's just append to the beginning of the return statement
  content = content.replace('return category === \'hero\'', `return category === 'shipping-delivery-information' ? [${updates.map(u => `{ id: 'shipping-delivery-information-${u.id}', title: '${u.title}', description: '${u.desc}', previewComponent: <ShippingDeliveryInformation${u.id} data={shippingDeliveryInformation${u.id}Data} /> }`).join(', ')}] : category === 'hero'`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected Shipping Delivery Information into SectionLibraryGrid.tsx');
