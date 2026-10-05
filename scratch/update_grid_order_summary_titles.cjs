const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

const titlesMap = {
  'order-summary-1': { title: 'CLASSIC PREMIUM SUMMARY — STAGGERED ROW REVEAL', desc: 'Clean structured product list with itemized pricing panel and staggered row entrance motion.' },
  'order-summary-2': { title: 'EDITORIAL ORDER SUMMARY — TYPOGRAPHY CLIP REVEAL', desc: 'Oversized editorial typography reveal paired with an asymmetric product breakdown.' },
  'order-summary-3': { title: 'SPLIT SUMMARY — DUAL COLUMN ENTRANCE', desc: 'Products presented on the left column with financial breakdown entering independently on the right.' },
  'order-summary-4': { title: 'PRODUCT-FIRST SUMMARY — CLIP-PATH REVEAL', desc: 'Large product iconography and image placement dominates visual hierarchy.' },
  'order-summary-5': { title: 'PRICE-FIRST SUMMARY — PROGRESSIVE PRICE REVEAL', desc: 'Grand total and savings breakdown positioned as the hero visual element.' },
  'order-summary-6': { title: 'RECEIPT SUMMARY — VERTICAL RECEIPT DRAW', desc: 'Digital receipt structure with itemized rows revealing vertically with perforated line aesthetic.' },
  'order-summary-7': { title: 'HORIZONTAL PRODUCT SUMMARY — HORIZONTAL SLIDE REVEAL', desc: 'Products arranged horizontally with side slide reveal interaction.' },
  'order-summary-8': { title: 'STACKED PRODUCT CARDS — CARD STACK DEPTH', desc: 'Products presented as layered card deck stacked in position with depth.' },
  'order-summary-9': { title: 'COMPACT CHECKOUT SUMMARY — DENSE USABILITY', desc: 'Dense, highly usable checkout summary with inline item insertion & price transition.' },
  'order-summary-10': { title: 'ASYMMETRIC GRID — EDITORIAL LAYOUT REVEAL', desc: 'Editorial grid with intentionally different column sizes and independent section reveal.' },
  'order-summary-11': { title: 'COLLAPSIBLE SUMMARY — HEIGHT TRANSITION', desc: 'Expandable product detail accordion with smooth height & layout transition.' },
  'order-summary-12': { title: 'SAVINGS-CENTRIC SUMMARY — SAVINGS HIGHLIGHT', desc: 'Visually highlights subtotal, coupon discount, total savings, and final payable amount.' },
  'order-summary-13': { title: 'TIMELINE SUMMARY — CONNECTOR LINE DRAW', desc: 'Vertical order timeline structure with animated SVG connector lines.' },
  'order-summary-14': { title: 'DARK LUXURY SUMMARY — AMBIENT LIGHT MOTION', desc: 'Premium dark ecommerce summary composition with subtle depth & light movement.' },
  'order-summary-15': { title: 'IMAGE + INFORMATION STACK — SEPARATE ENTRANCE', desc: 'Distinctive image and information stacked composition with separate entrance timing.' },
  'order-summary-16': { title: '3D PRODUCT SUMMARY — PERSPECTIVE PARALLAX', desc: 'Layered product order cards using CSS perspective 3D depth and parallax hover tilt.' },
  'order-summary-17': { title: 'PRICE CALCULATION VISUAL — GEOMETRIC PATH FLOW', desc: 'Visual calculation relationship (Products → Subtotal → Discount → Tax → Total) with progress line.' },
  'order-summary-18': { title: 'MINIMAL MONOCHROME — PROGRESSIVE RULE DRAW', desc: 'Strong typography, clean whitespace, and thin rules drawing progressively.' },
  'order-summary-19': { title: 'MAGAZINE CHECKOUT — EDITORIAL MOTION REVEAL', desc: 'Premium editorial ecommerce composition with staggered text block timing.' },
  'order-summary-20': { title: 'AWARD-STYLE ORDER SUMMARY — ULTIMATE MOMENT', desc: 'The ultimate order summary combining editorial typography, asymmetric layout, price hierarchy, SVG, and interactive tabs.' }
};

Object.keys(titlesMap).forEach((idKey) => {
  const item = titlesMap[idKey];
  const oldRegex = new RegExp(`\\{\\s*id:\\s*'${idKey}',\\s*title:[^,]+,\\s*description:[^,]+,`, 'g');
  const newStr = `{ id: '${idKey}', title: '${item.title}', description: '${item.desc}',`;
  content = content.replace(oldRegex, newStr);
});

fs.writeFileSync(gridPath, content, 'utf-8');
console.log('Successfully updated SectionLibraryGrid.tsx titles and descriptions for order-summary!');
