const fs = require('fs');
const path = require('path');

const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

// 1. Build imports for Cart Summary 1-20
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  importsStr += `import { CartSummary${i} } from '../sections/cart/02-cart-summary/cart-summary-${i}/CartSummary${i}';\n`;
  importsStr += `import cartSummary${i}Data from '../sections/cart/02-cart-summary/cart-summary-${i}/cart-summary-${i}.json';\n`;
}

// 2. Add imports at top
content = importsStr + content;

// 3. Build Cart Summary items block
let summaryBlock = `category === 'cart-summary' ? [\n`;
for (let i = 1; i <= 20; i++) {
  summaryBlock += `        {\n          id: 'cart-summary-${i}',\n          title: cartSummary${i}Data.heading,\n          description: cartSummary${i}Data.description,\n          previewComponent: <CartSummary${i} data={cartSummary${i}Data as any} />\n        }${i < 20 ? ',' : ''}\n`;
}
summaryBlock += `      ] :\n    (`;

// 4. Replace placeholder cart-summary ternary in SectionLibraryGrid.tsx
const oldDummy = `category === 'cart-summary' ||`;
content = content.replace(oldDummy, summaryBlock + `\n      category === 'cart-offers' ||`);

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Successfully integrated Cart Summary 1-20 into SectionLibraryGrid.tsx!');
