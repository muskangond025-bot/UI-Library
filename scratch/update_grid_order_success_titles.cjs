const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

const titlesMap = {
  'order-success-1': { title: 'PREMIUM CONFIRMATION — STAGGERED REVEAL', desc: 'Large success message with order reference and next steps revealed with staggered entrance physics.' },
  'order-success-2': { title: 'ANIMATED SUCCESS CHECK — SVG DRAW PATH', desc: 'Large custom SVG checkmark progressive drawing path animation as visual centerpiece.' },
  'order-success-3': { title: 'EDITORIAL SUCCESS — TYPOGRAPHY CLIP REVEAL', desc: 'Oversized luxury typography reveal with refined order metadata below.' },
  'order-success-4': { title: 'ORDER TIMELINE — PROGRESS LINE ANIMATION', desc: 'Visual order timeline (Confirmed → Processing → Shipped → Delivered) with SVG progress line draw to confirmed stage.' },
  'order-success-5': { title: 'DELIVERY FOCUSED — ESTIMATED DATE TRANSITION', desc: 'Oversized estimated arrival date window transition as primary hero element.' },
  'order-success-6': { title: 'PREMIUM DARK SUCCESS — LAYERED DEPTH RISE', desc: 'Luxury dark confirmation panel with glowing ambient aura, refined hierarchy and micro-interactions.' },
  'order-success-7': { title: 'MINIMAL MONOCHROME — PROGRESSIVE RULE DRAW', desc: 'Extremely clean monochrome layout with thin rules progressively drawing around content.' },
  'order-success-8': { title: 'ORDER RECEIPT — VERTICAL RECEIPT REVEAL', desc: 'Digital receipt layout revealing vertically with itemized total and confirmation stamp.' },
  'order-success-9': { title: 'PRODUCT CELEBRATION — SCALE IMAGE REVEAL', desc: 'Prominent product preview image scaling into view alongside order success badge.' },
  'order-success-10': { title: 'CONFIRMATION CARD STACK — DEPTH LAYERING', desc: 'Layered cards (Success, Details, Next Steps) sliding into place with spring physics.' },
  'order-success-11': { title: 'CONFETTI / CELEBRATION — GEOMETRIC PARTICLE MOTION', desc: 'Tasteful geometric particle motion celebrating successful checkout completion.' },
  'order-success-12': { title: 'SUCCESS + NEXT STEPS — SEQUENTIAL ACTION REVEAL', desc: 'Sequential action reveal (View Order, Track Order, Continue Shopping).' },
  'order-success-13': { title: 'ORDER NUMBER HERO — TYPOGRAPHIC REVEAL', desc: 'Order reference #DH-28491 as hero text with typographic reveal motion.' },
  'order-success-14': { title: 'DELIVERY ROUTE — SVG ROUTE PATH DRAW', desc: 'Abstract delivery route concept drawing SVG path from Order → Warehouse → Delivery.' },
  'order-success-15': { title: 'CIRCULAR SUCCESS — PROGRESS RING DRAW', desc: 'Circular confirmation ring drawing around checkmark and order reference.' },
  'order-success-16': { title: 'SPLIT SUCCESS — DUAL PANEL ENTRANCE', desc: 'Left confirmation message and Right order details entering from opposite directions.' },
  'order-success-17': { title: '3D SUCCESS CARD — PERSPECTIVE TILT REVEAL', desc: 'Layered confirmation card with CSS perspective 3D tilt and smooth spring rotation.' },
  'order-success-18': { title: 'MAGAZINE CELEBRATION — STAGGERED BLOCK REVEAL', desc: 'Magazine editorial layout with staggered text block reveal timings.' },
  'order-success-19': { title: 'FUTURE DIGITAL SUCCESS — HUD MATRIX INTERFACE', desc: 'Futuristic HUD interface with geometric SVG scanner, restrained glow, and matrix depth.' },
  'order-success-20': { title: 'AWARD-STYLE ORDER SUCCESS — ULTIMATE MOMENT', desc: 'The ultimate ecommerce final moment combining custom SVG success animation, delivery visualization, micro-interactions, and next steps.' }
};

Object.keys(titlesMap).forEach((idKey) => {
  const item = titlesMap[idKey];
  const oldRegex = new RegExp(`\\{\\s*id:\\s*'${idKey}',\\s*title:[^,]+,\\s*description:[^,]+,`, 'g');
  const newStr = `{ id: '${idKey}', title: '${item.title}', description: '${item.desc}',`;
  content = content.replace(oldRegex, newStr);
});

fs.writeFileSync(gridPath, content, 'utf-8');
console.log('Successfully updated SectionLibraryGrid.tsx titles and descriptions for order-success!');
