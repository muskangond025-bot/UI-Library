const fs = require('fs');
const path = require('path');

const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

// 1. Build imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  importsStr += `import { CartItemsSection${i} } from '../sections/cart/01-cart-items-section/cart-items-section-${i}/CartItemsSection${i}';\n`;
  importsStr += `import cartItemsSection${i}Data from '../sections/cart/01-cart-items-section/cart-items-section-${i}/cart-items-section-${i}.json';\n`;
}

// 2. Add imports after last existing import
const firstExportIdx = content.indexOf('export const');
content = content.slice(0, firstExportIdx) + importsStr + '\n' + content.slice(firstExportIdx);

// 3. Build group items array
let itemsStr = 'category === \'cart-items-section\' ? [\n';
for (let i = 1; i <= 20; i++) {
  itemsStr += `        {\n          id: 'cart-items-section-${i}',\n          title: cartItemsSection${i}Data.heading,\n          description: cartItemsSection${i}Data.description,\n          previewComponent: <CartItemsSection${i} data={cartItemsSection${i}Data as any} />\n        }${i < 20 ? ',' : ''}\n`;
}
itemsStr += '      ] :\n    (';

// 4. Replace old dummy cart fallback block
const dummyBlock = `category === 'cart-items-section' ||`;
content = content.replace(dummyBlock, itemsStr + `\n      category === 'cart-items-section' ||`);

fs.writeFileSync(gridPath, content, 'utf8');
console.log('SectionLibraryGrid updated with all 20 Cart Item variants!');
