const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

// Ensure orderCategories is imported in SectionLibraryGrid.tsx
if (!content.includes('orderCategories')) {
  content = content.replace(
    `import { homeCategories, productCategories, cartCategories, checkoutCategories } from './navigationData';`,
    `import { homeCategories, productCategories, cartCategories, checkoutCategories, orderCategories } from './navigationData';`
  );
}

const subcats = [
  { catId: 'order-success', prefix: 'OrderSuccess', title: 'ORDER SUCCESS SECTION' },
  { catId: 'order-summary', prefix: 'OrderSummary', title: 'ORDER SUMMARY' },
  { catId: 'order-delivery-information', prefix: 'OrderDeliveryInformation', title: 'DELIVERY INFORMATION' },
  { catId: 'order-recommended-products', prefix: 'OrderRecommendedProducts', title: 'RECOMMENDED PRODUCTS' },
  { catId: 'order-customer-support', prefix: 'OrderCustomerSupport', title: 'CUSTOMER SUPPORT' },
  { catId: 'order-continue-shopping', prefix: 'OrderContinueShopping', title: 'CONTINUE SHOPPING' }
];

let orderBranches = '';

subcats.forEach(sub => {
  orderBranches += `    ] : category === '${sub.catId}' ? [\n`;
  for (let i = 1; i <= 20; i++) {
    const compName = `${sub.prefix}${i}`;
    const dataVar = `${sub.catId.replace(/-/g, '')}${i}Data`;
    const itemId = `${sub.catId}-${i}`;
    const itemTitle = `${sub.title} — VARIANT ${String(i).padStart(2, '0')}`;
    orderBranches += `      { id: '${itemId}', title: ${dataVar}.title || '${itemTitle}', description: ${dataVar}.description || 'Order section variant ${i}', previewComponent: <${compName} data={${dataVar} as any} /> }${i < 20 ? ',' : ''}\n`;
  }
});

// Remove old appended array at the end if present
const oldAppendedIdx = content.indexOf('];\n\n  if (activeCat ===');
if (oldAppendedIdx !== -1) {
  // Find where checkout-security-trust ends
  const secTrustIdx = content.indexOf(`category === 'checkout-security-trust'`);
  const closingIdx = content.indexOf(`] : [];`, secTrustIdx);
  if (closingIdx !== -1) {
    const beforeSec = content.slice(0, closingIdx);
    const afterSec = content.slice(oldAppendedIdx + 2);
    content = beforeSec + orderBranches + '    ] : []' + afterSec;
  }
}

// Fix activeCat mapping and groups array
content = content.replace(
  `} else if (activeCat === 'checkout') {\n    activeCat = 'checkout-header';\n  }`,
  `} else if (activeCat === 'checkout') {\n    activeCat = 'checkout-header';\n  } else if (activeCat === 'order') {\n    activeCat = 'order-success';\n  }`
);

content = content.replace(
  `groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories].filter(g => g.id === activeCat);`,
  `groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories, ...orderCategories].filter(g => g.id === activeCat);`
);

fs.writeFileSync(gridPath, content, 'utf-8');
console.log('Successfully fixed ORDER category routing and rendering in SectionLibraryGrid.tsx!');
