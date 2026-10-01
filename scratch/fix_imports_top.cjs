const fs = require('fs');
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

// 1. Remove misplaced imports at the bottom
const splitMarker = '// Force HMR reload 1790665112221\\n// Cache bust 1790665804614\\n// Cache bust 1790666530251\\n// Cache bust sg11-20 179066673642import { CartItemsSection1 }';

if (content.includes(splitMarker)) {
  const cutoffIdx = content.indexOf(splitMarker);
  content = content.slice(0, cutoffIdx);
} else if (content.includes("import { CartItemsSection1 }")) {
  const cutoffIdx = content.lastIndexOf("import { CartItemsSection1 }");
  content = content.slice(0, cutoffIdx);
}

// 2. Build proper imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  importsStr += `import { CartItemsSection${i} } from '../sections/cart/01-cart-items-section/cart-items-section-${i}/CartItemsSection${i}';\n`;
  importsStr += `import cartItemsSection${i}Data from '../sections/cart/01-cart-items-section/cart-items-section-${i}/cart-items-section-${i}.json';\n`;
}

// 3. Prepend imports to top of file
content = importsStr + content;

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Fixed imports placement in SectionLibraryGrid.tsx!');
