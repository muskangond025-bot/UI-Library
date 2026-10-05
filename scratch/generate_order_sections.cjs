const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const subcats = [
  {
    folder: '01-order-success',
    catId: 'order-success',
    prefix: 'OrderSuccess',
    titlePrefix: 'Order Success Section',
    tag: 'ORDER SUCCESS SECTION'
  },
  {
    folder: '02-order-summary',
    catId: 'order-summary',
    prefix: 'OrderSummary',
    titlePrefix: 'Order Summary',
    tag: 'ORDER SUMMARY'
  },
  {
    folder: '03-delivery-information',
    catId: 'order-delivery-information',
    prefix: 'OrderDeliveryInformation',
    titlePrefix: 'Delivery Information',
    tag: 'DELIVERY INFORMATION'
  },
  {
    folder: '04-recommended-products',
    catId: 'order-recommended-products',
    prefix: 'OrderRecommendedProducts',
    titlePrefix: 'Recommended Products',
    tag: 'RECOMMENDED PRODUCTS'
  },
  {
    folder: '05-customer-support',
    catId: 'order-customer-support',
    prefix: 'OrderCustomerSupport',
    titlePrefix: 'Customer Support',
    tag: 'CUSTOMER SUPPORT'
  },
  {
    folder: '06-continue-shopping',
    catId: 'order-continue-shopping',
    prefix: 'OrderContinueShopping',
    titlePrefix: 'Continue Shopping',
    tag: 'CONTINUE SHOPPING'
  }
];

const baseDir = path.join(rootDir, 'src', 'components', 'sections', 'order');

subcats.forEach((subcat) => {
  const subcatDir = path.join(baseDir, subcat.folder);
  if (!fs.existsSync(subcatDir)) {
    fs.mkdirSync(subcatDir, { recursive: true });
  }

  for (let i = 1; i <= 20; i++) {
    const variantNameKebab = `${subcat.catId}-${i}`;
    const variantFolder = path.join(subcatDir, variantNameKebab);
    if (!fs.existsSync(variantFolder)) {
      fs.mkdirSync(variantFolder, { recursive: true });
    }

    const componentName = `${subcat.prefix}${i}`;
    const tsxPath = path.join(variantFolder, `${componentName}.tsx`);
    const jsonPath = path.join(variantFolder, `${variantNameKebab}.json`);

    const padI = String(i).padStart(2, '0');
    const titleStr = `${subcat.titlePrefix} — Variant ${padI} Placeholder`;
    const descStr = `Placeholder for ${subcat.titlePrefix} variant ${padI}. Premium interactive design will be inserted here.`;

    const tsxContent = `import React from 'react';

export function ${componentName}({ data }: { data?: any }) {
  return (
    <div className="w-full py-16 px-6 bg-slate-900 border border-slate-800 rounded-2xl text-center font-sans text-white my-4">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
        ${subcat.tag} // VARIANT ${padI}
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
        ${titleStr}
      </h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto">
        ${descStr}
      </p>
    </div>
  );
}

export default ${componentName};
`;

    const jsonContent = JSON.stringify({
      id: variantNameKebab,
      name: titleStr,
      description: descStr,
      category: subcat.catId,
      componentName: componentName,
      meta: {
        id: variantNameKebab,
        name: titleStr,
        description: descStr,
        category: subcat.catId,
        componentName: componentName
      }
    }, null, 2);

    fs.writeFileSync(tsxPath, tsxContent, 'utf-8');
    fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
  }
});

console.log('Successfully updated all 120 ORDER section placeholder components!');
