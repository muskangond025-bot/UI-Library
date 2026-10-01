const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const checkoutSubtabs = [
  {
    folder: '01-checkout-header',
    prefix: 'checkout-header',
    compPrefix: 'CheckoutHeader',
    label: 'Checkout Header',
    categoryKey: 'checkout-header'
  },
  {
    folder: '02-customer-information',
    prefix: 'customer-information',
    compPrefix: 'CustomerInformation',
    label: 'Customer Information',
    categoryKey: 'customer-information'
  },
  {
    folder: '03-shipping-address',
    prefix: 'shipping-address',
    compPrefix: 'ShippingAddress',
    label: 'Shipping Address',
    categoryKey: 'shipping-address'
  },
  {
    folder: '04-billing-address',
    prefix: 'billing-address',
    compPrefix: 'BillingAddress',
    label: 'Billing Address',
    categoryKey: 'billing-address'
  },
  {
    folder: '05-delivery-options',
    prefix: 'delivery-options',
    compPrefix: 'DeliveryOptions',
    label: 'Delivery Options',
    categoryKey: 'delivery-options'
  },
  {
    folder: '06-payment-options',
    prefix: 'payment-options',
    compPrefix: 'PaymentOptions',
    label: 'Payment Options',
    categoryKey: 'payment-options'
  },
  {
    folder: '07-order-summary',
    prefix: 'checkout-order-summary',
    compPrefix: 'CheckoutOrderSummary',
    label: 'Order Summary',
    categoryKey: 'checkout-order-summary'
  },
  {
    folder: '08-discount-coupon',
    prefix: 'checkout-discount-coupon',
    compPrefix: 'CheckoutDiscountCoupon',
    label: 'Discount / Coupon Section',
    categoryKey: 'checkout-discount-coupon'
  },
  {
    folder: '09-gift-card',
    prefix: 'checkout-gift-card',
    compPrefix: 'CheckoutGiftCard',
    label: 'Gift Card Section',
    categoryKey: 'checkout-gift-card'
  },
  {
    folder: '10-security-trust',
    prefix: 'checkout-security-trust',
    compPrefix: 'CheckoutSecurityTrust',
    label: 'Security / Trust Section',
    categoryKey: 'checkout-security-trust'
  }
];

// Build imports for all 200 components
let imports = '';
checkoutSubtabs.forEach(subtab => {
  for (let i = 1; i <= 20; i++) {
    imports += `import ${subtab.compPrefix}${i} from '../sections/checkout/${subtab.folder}/${subtab.prefix}-${i}/${subtab.compPrefix}${i}';\n`;
    imports += `import ${subtab.compPrefix.toLowerCase()}${i}Data from '../sections/checkout/${subtab.folder}/${subtab.prefix}-${i}/${subtab.prefix}-${i}.json';\n`;
  }
});

// Update imports from navigationData
content = content.replace(
  "import { homeCategories, productCategories, cartCategories } from './navigationData';",
  "import { homeCategories, productCategories, cartCategories, checkoutCategories } from './navigationData';"
);

// Inject component imports right before React import
content = content.replace("import React from 'react';", `${imports}\nimport React from 'react';`);

// Build ternary section resolution blocks for each checkout category
let checkoutTernaries = '';
checkoutSubtabs.forEach(subtab => {
  let items = [];
  for (let i = 1; i <= 20; i++) {
    const pad = i.toString().padStart(2, '0');
    const dataVar = `${subtab.compPrefix.toLowerCase()}${i}Data`;
    const Comp = `${subtab.compPrefix}${i}`;
    items.push(`      { id: '${subtab.prefix}-${i}', title: ${dataVar}.title || '${subtab.label} ${pad}', description: ${dataVar}.description || 'Placeholder for ${subtab.label} variant ${pad}', previewComponent: <${Comp} data={${dataVar} as any} /> }`);
  }

  checkoutTernaries += `    category === '${subtab.categoryKey}' ? [\n${items.join(',\n')}\n    ] : `;
});

// Replace fallback `] : [];\n  };\n\n  let activeCat = category;`
content = content.replace(
  "] : [];\n  };\n\n  let activeCat = category;",
  `] : ${checkoutTernaries}[];\n  };\n\n  let activeCat = category;`
);

// Update activeCat alias logic for checkout
const activeCatCheck = `  } else if (activeCat === 'cart') {
    activeCat = 'cart-items-section';
  } else if (activeCat === 'checkout') {
    activeCat = 'checkout-header';
  }`;

content = content.replace(
  "  } else if (activeCat === 'cart') {\n    activeCat = 'cart-items-section';\n  }",
  activeCatCheck
);

// Update groups array calculation to include checkoutCategories
content = content.replace(
  "groups = [...homeCategories, ...productCategories, ...cartCategories].filter(g => g.id === activeCat);",
  "groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories].filter(g => g.id === activeCat);"
);

fs.writeFileSync(gridPath, content, 'utf8');
console.log("Successfully registered all 200 Checkout placeholders in SectionLibraryGrid.tsx!");
