const fs = require('fs');
const path = require('path');

const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

// 1. Build imports for Cart Offers 1-20
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  importsStr += `import { CartOffers${i} } from '../sections/cart/03-cart-offers/cart-offers-${i}/CartOffers${i}';\n`;
  importsStr += `import cartOffers${i}Data from '../sections/cart/03-cart-offers/cart-offers-${i}/cart-offers-${i}.json';\n`;
}

// 2. Add imports at top
content = importsStr + content;

// 3. Build Cart Offers items block
let offersBlock = `category === 'cart-offers' ? [\n`;
for (let i = 1; i <= 20; i++) {
  offersBlock += `        {\n          id: 'cart-offers-${i}',\n          title: cartOffers${i}Data.heading,\n          description: cartOffers${i}Data.description,\n          previewComponent: <CartOffers${i} data={cartOffers${i}Data as any} />\n        }${i < 20 ? ',' : ''}\n`;
}
offersBlock += `      ] :\n    (`;

// 4. Replace placeholder cart-offers ternary in SectionLibraryGrid.tsx
const oldDummy = `category === 'cart-offers' ||`;
content = content.replace(oldDummy, offersBlock + `\n      category === 'coupon-discount-section' ||`);

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Successfully integrated Cart Offers 1-20 into SectionLibraryGrid.tsx!');
