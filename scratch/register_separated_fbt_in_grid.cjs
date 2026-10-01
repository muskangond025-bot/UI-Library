const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build Product FBT Imports
const prodFbtImports = [];
for (let i = 1; i <= 20; i++) {
  prodFbtImports.push(`import ProductFrequentlyBoughtTogether${i} from '../sections/product/15-frequently-bought-together/frequently-bought-together-${i}/FrequentlyBoughtTogether${i}';`);
  prodFbtImports.push(`import productFrequentlyBoughtTogether${i}Data from '../sections/product/15-frequently-bought-together/frequently-bought-together-${i}/frequently-bought-together-${i}.json';`);
}

// Build Cart FBT Imports
const cartFbtImports = [];
for (let i = 1; i <= 20; i++) {
  cartFbtImports.push(`import CartFrequentlyBoughtTogether${i} from '../sections/cart/06-cart-frequently-bought-together/cart-frequently-bought-together-${i}/CartFrequentlyBoughtTogether${i}';`);
  cartFbtImports.push(`import cartFrequentlyBoughtTogether${i}Data from '../sections/cart/06-cart-frequently-bought-together/cart-frequently-bought-together-${i}/cart-frequently-bought-together-${i}.json';`);
}

const allFbtImportsString = [...prodFbtImports, ...cartFbtImports].join('\n');

// Build Product FBT Items
const prodFbtItems = [];
for (let i = 1; i <= 20; i++) {
  prodFbtItems.push(`{ id: 'product-frequently-bought-together-${i}', title: productFrequentlyBoughtTogether${i}Data.title || 'Product Frequently Bought Together ${i}', description: productFrequentlyBoughtTogether${i}Data.description || 'Product page bundle composition', previewComponent: <ProductFrequentlyBoughtTogether${i} data={productFrequentlyBoughtTogether${i}Data as any} /> }`);
}

// Build Cart FBT Items
const cartFbtItems = [];
for (let i = 1; i <= 20; i++) {
  cartFbtItems.push(`{ id: 'cart-frequently-bought-together-${i}', title: cartFrequentlyBoughtTogether${i}Data.title || 'Cart Frequently Bought Together ${i}', description: cartFrequentlyBoughtTogether${i}Data.description || 'Cart add-on bundle composition', previewComponent: <CartFrequentlyBoughtTogether${i} data={cartFrequentlyBoughtTogether${i}Data as any} /> }`);
}

const fbtCategoryCode = `(category === 'product-frequently-bought-together' || category === 'frequently-bought-together') ? [\n      ${prodFbtItems.join(',\n      ')}\n    ] : category === 'cart-frequently-bought-together' ? [\n      ${cartFbtItems.join(',\n      ')}\n    ] : `;

// Clean up old FBT imports
content = content.replace(/import FrequentlyBoughtTogether\d+ from [^\n]+\n/g, '');
content = content.replace(/import frequentlyBoughtTogether\d+Data from [^\n]+\n/g, '');
content = content.replace(/import ProductFrequentlyBoughtTogether\d+ from [^\n]+\n/g, '');
content = content.replace(/import productFrequentlyBoughtTogether\d+Data from [^\n]+\n/g, '');
content = content.replace(/import CartFrequentlyBoughtTogether\d+ from [^\n]+\n/g, '');
content = content.replace(/import cartFrequentlyBoughtTogether\d+Data from [^\n]+\n/g, '');

// Inject imports
const anchorImport = `import returnRefundInformation20Data from '../sections/product/13-return-refund-information/return-refund-information-20/return-refund-information-20.json';`;
if (content.includes(anchorImport)) {
  content = content.replace(anchorImport, `${anchorImport}\n${allFbtImportsString}`);
}

// Replace category check for FBT
const oldFbtRegex = /category === 'frequently-bought-together' \? \[\s*[\s\S]*?\s*\] : /;
if (oldFbtRegex.test(content)) {
  content = content.replace(oldFbtRegex, fbtCategoryCode);
} else {
  const anchorGetSections = `const getSectionsForCategory = (category: string) => {\n    return `;
  if (content.includes(anchorGetSections)) {
    content = content.replace(anchorGetSections, `const getSectionsForCategory = (category: string) => {\n    return ${fbtCategoryCode}`);
  }
}

fs.writeFileSync(gridPath, content, 'utf8');
console.log("SectionLibraryGrid.tsx updated with separated Product & Cart Frequently Bought Together!");
