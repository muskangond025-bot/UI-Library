const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build Product Imports
const prodImports = [];
for (let i = 1; i <= 20; i++) {
  prodImports.push(`import ProductRecommendedProducts${i} from '../sections/product/19-recommended-products/product-recommended-products-${i}/ProductRecommendedProducts${i}';`);
  prodImports.push(`import productRecommendedProducts${i}Data from '../sections/product/19-recommended-products/product-recommended-products-${i}/product-recommended-products-${i}.json';`);
}

// Build Cart Imports
const cartImports = [];
for (let i = 1; i <= 20; i++) {
  cartImports.push(`import CartRecommendedProducts${i} from '../sections/cart/07-cart-recommended-products/cart-recommended-products-${i}/CartRecommendedProducts${i}';`);
  cartImports.push(`import cartRecommendedProducts${i}Data from '../sections/cart/07-cart-recommended-products/cart-recommended-products-${i}/cart-recommended-products-${i}.json';`);
}

const allImportsString = [...prodImports, ...cartImports].join('\n');

// Build Product Array Items
const prodItems = [];
for (let i = 1; i <= 20; i++) {
  prodItems.push(`{ id: 'product-recommended-products-${i}', title: productRecommendedProducts${i}Data.title || 'Product Recommended Products ${i}', description: productRecommendedProducts${i}Data.description || 'Product page recommendation', previewComponent: <ProductRecommendedProducts${i} data={productRecommendedProducts${i}Data as any} /> }`);
}

// Build Cart Array Items
const cartItems = [];
for (let i = 1; i <= 20; i++) {
  cartItems.push(`{ id: 'cart-recommended-products-${i}', title: cartRecommendedProducts${i}Data.title || 'Cart Recommended Products ${i}', description: cartRecommendedProducts${i}Data.description || 'Cart add-on recommendation', previewComponent: <CartRecommendedProducts${i} data={cartRecommendedProducts${i}Data as any} /> }`);
}

const productCategoryCode = `(category === 'product-recommended-products' || category === 'recommended-products') ? [\n      ${prodItems.join(',\n      ')}\n    ] : category === 'cart-recommended-products' ? [\n      ${cartItems.join(',\n      ')}\n    ] : `;

// Clean up old imports
content = content.replace(/import RecommendedProducts\d+ from [^\n]+\n/g, '');
content = content.replace(/import recommendedProducts\d+Data from [^\n]+\n/g, '');
content = content.replace(/import ProductRecommendedProducts\d+ from [^\n]+\n/g, '');
content = content.replace(/import productRecommendedProducts\d+Data from [^\n]+\n/g, '');
content = content.replace(/import CartRecommendedProducts\d+ from [^\n]+\n/g, '');
content = content.replace(/import cartRecommendedProducts\d+Data from [^\n]+\n/g, '');

// Inject new imports after last ReturnRefundInformation import
const anchorImport = `import returnRefundInformation20Data from '../sections/product/13-return-refund-information/return-refund-information-20/return-refund-information-20.json';`;
if (content.includes(anchorImport)) {
  content = content.replace(anchorImport, `${anchorImport}\n${allImportsString}`);
}

// Replace getSectionsForCategory check for recommended products
const oldCategoryRegex = /category === 'recommended-products' \? \[\s*[\s\S]*?\s*\] : /;
if (oldCategoryRegex.test(content)) {
  content = content.replace(oldCategoryRegex, productCategoryCode);
} else {
  // If not matched by regex, inject at start of getSectionsForCategory
  const anchorGetSections = `const getSectionsForCategory = (category: string) => {\n    return `;
  if (content.includes(anchorGetSections)) {
    content = content.replace(anchorGetSections, `const getSectionsForCategory = (category: string) => {\n    return ${productCategoryCode}`);
  }
}

fs.writeFileSync(gridPath, content, 'utf8');
console.log("SectionLibraryGrid.tsx updated with unique product-recommended-products & cart-recommended-products registration!");
