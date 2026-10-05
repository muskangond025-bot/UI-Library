const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
const importsPath = path.resolve(__dirname, 'order_imports.txt');

let gridCode = fs.readFileSync(gridPath, 'utf-8');
const orderImports = fs.readFileSync(importsPath, 'utf-8');

// 1. Add imports at the top
gridCode = orderImports + '\n' + gridCode;

// 2. Update navigationData import
gridCode = gridCode.replace(
  `import { homeCategories, productCategories, cartCategories, checkoutCategories } from './navigationData';`,
  `import { homeCategories, productCategories, cartCategories, checkoutCategories, orderCategories } from './navigationData';`
);

// 3. Generate order category branches
const subcats = [
  { catId: 'order-success', prefix: 'OrderSuccess', title: 'ORDER SUCCESS SECTION' },
  { catId: 'order-summary', prefix: 'OrderSummary', title: 'ORDER SUMMARY' },
  { catId: 'order-delivery-information', prefix: 'OrderDeliveryInformation', title: 'DELIVERY INFORMATION' },
  { catId: 'order-recommended-products', prefix: 'OrderRecommendedProducts', title: 'RECOMMENDED PRODUCTS' },
  { catId: 'order-customer-support', prefix: 'OrderCustomerSupport', title: 'CUSTOMER SUPPORT' },
  { catId: 'order-continue-shopping', prefix: 'OrderContinueShopping', title: 'CONTINUE SHOPPING' }
];

let branchesCode = '';
subcats.forEach(sub => {
  branchesCode += `    ] : category === '${sub.catId}' ? [\n`;
  for (let i = 1; i <= 20; i++) {
    const compName = `${sub.prefix}${i}`;
    const dataVar = `${sub.catId.replace(/-/g, '')}${i}Data`;
    const itemId = `${sub.catId}-${i}`;
    const itemTitle = `${sub.title} — VARIANT ${String(i).padStart(2, '0')}`;
    branchesCode += `      { id: '${itemId}', title: ${dataVar}.title || '${itemTitle}', description: ${dataVar}.description || 'Order section variant ${i}', previewComponent: <${compName} data={${dataVar} as any} /> }${i < 20 ? ',' : ''}\n`;
  }
});

// Locate `category === 'checkout-security-trust'`
const marker = `id: 'checkout-security-trust-20'`;
const markerIdx = gridCode.indexOf(marker);

if (markerIdx !== -1) {
  // Find the `] : [];` following this marker
  const endBracketIdx = gridCode.indexOf(`] : [];`, markerIdx);
  if (endBracketIdx !== -1) {
    const before = gridCode.slice(0, endBracketIdx);
    const after = gridCode.slice(endBracketIdx);
    gridCode = before + branchesCode + after;
    console.log('Successfully inserted order branches!');
  } else {
    console.log('Error: Could not find ] : []; after marker!');
  }
} else {
  console.log('Error: Could not find marker!');
}

// 4. Update activeCat and groups array
gridCode = gridCode.replace(
  `else if (activeCat === 'checkout') {\n    activeCat = 'checkout-header';\n  }`,
  `else if (activeCat === 'checkout') {\n    activeCat = 'checkout-header';\n  } else if (activeCat === 'order') {\n    activeCat = 'order-success';\n  }`
);

gridCode = gridCode.replace(
  `groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories].filter(g => g.id === activeCat);`,
  `groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories, ...orderCategories].filter(g => g.id === activeCat);`
);

fs.writeFileSync(gridPath, gridCode, 'utf-8');
console.log('Successfully patched SectionLibraryGrid.tsx!');
