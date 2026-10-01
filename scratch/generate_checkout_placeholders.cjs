const fs = require('fs');
const path = require('path');

const baseCheckoutDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout');

if (!fs.existsSync(baseCheckoutDir)) {
  fs.mkdirSync(baseCheckoutDir, { recursive: true });
}

const checkoutSubtabs = [
  {
    folder: '01-checkout-header',
    prefix: 'checkout-header',
    compPrefix: 'CheckoutHeader',
    label: 'Checkout Header',
    category: 'checkout',
    subsection: 'checkout-header'
  },
  {
    folder: '02-customer-information',
    prefix: 'customer-information',
    compPrefix: 'CustomerInformation',
    label: 'Customer Information',
    category: 'checkout',
    subsection: 'customer-information'
  },
  {
    folder: '03-shipping-address',
    prefix: 'shipping-address',
    compPrefix: 'ShippingAddress',
    label: 'Shipping Address',
    category: 'checkout',
    subsection: 'shipping-address'
  },
  {
    folder: '04-billing-address',
    prefix: 'billing-address',
    compPrefix: 'BillingAddress',
    label: 'Billing Address',
    category: 'checkout',
    subsection: 'billing-address'
  },
  {
    folder: '05-delivery-options',
    prefix: 'delivery-options',
    compPrefix: 'DeliveryOptions',
    label: 'Delivery Options',
    category: 'checkout',
    subsection: 'delivery-options'
  },
  {
    folder: '06-payment-options',
    prefix: 'payment-options',
    compPrefix: 'PaymentOptions',
    label: 'Payment Options',
    category: 'checkout',
    subsection: 'payment-options'
  },
  {
    folder: '07-order-summary',
    prefix: 'checkout-order-summary',
    compPrefix: 'CheckoutOrderSummary',
    label: 'Order Summary',
    category: 'checkout',
    subsection: 'checkout-order-summary'
  },
  {
    folder: '08-discount-coupon',
    prefix: 'checkout-discount-coupon',
    compPrefix: 'CheckoutDiscountCoupon',
    label: 'Discount / Coupon Section',
    category: 'checkout',
    subsection: 'checkout-discount-coupon'
  },
  {
    folder: '09-gift-card',
    prefix: 'checkout-gift-card',
    compPrefix: 'CheckoutGiftCard',
    label: 'Gift Card Section',
    category: 'checkout',
    subsection: 'checkout-gift-card'
  },
  {
    folder: '10-security-trust',
    prefix: 'checkout-security-trust',
    compPrefix: 'CheckoutSecurityTrust',
    label: 'Security / Trust Section',
    category: 'checkout',
    subsection: 'checkout-security-trust'
  }
];

let totalCreated = 0;

checkoutSubtabs.forEach(subtab => {
  const subtabFolder = path.join(baseCheckoutDir, subtab.folder);
  if (!fs.existsSync(subtabFolder)) {
    fs.mkdirSync(subtabFolder, { recursive: true });
  }

  for (let i = 1; i <= 20; i++) {
    const pad = i.toString().padStart(2, '0');
    const variantId = `${subtab.prefix}-${i}`;
    const componentName = `${subtab.compPrefix}${i}`;
    const variantFolder = path.join(subtabFolder, `${subtab.prefix}-${i}`);
    
    if (!fs.existsSync(variantFolder)) {
      fs.mkdirSync(variantFolder, { recursive: true });
    }

    // TSX Placeholder Component
    const tsxPath = path.join(variantFolder, `${componentName}.tsx`);
    const tsxCode = `import React from 'react';

export function ${componentName}({ data }: { data?: any }) {
  return (
    <div className="w-full py-16 px-6 bg-slate-900 border border-slate-800 rounded-2xl text-center font-sans text-white my-4">
      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">
        ${subtab.label.toUpperCase()} // VARIANT ${pad}
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
        ${subtab.label} — Variant ${pad} Placeholder
      </h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto">
        Placeholder for ${subtab.label} variant ${pad}. Premium interactive design will be inserted here.
      </p>
    </div>
  );
}

export default ${componentName};
`;
    fs.writeFileSync(tsxPath, tsxCode, 'utf8');

    // JSON Metadata File
    const jsonPath = path.join(variantFolder, `${subtab.prefix}-${i}.json`);
    const jsonContent = {
      id: `${subtab.prefix}-${pad}`,
      title: `${subtab.label} — ${pad}`,
      description: `Placeholder for ${subtab.label} variant ${pad}`,
      category: subtab.category,
      subsection: subtab.subsection,
      variant: i,
      section: {
        settings: {
          title: `${subtab.label} ${pad}`,
          description: `Placeholder structure for ${subtab.label} variant ${pad}`
        }
      }
    };
    fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');

    totalCreated++;
  }
});

console.log(`Successfully created ${totalCreated} Checkout placeholders across 10 subtabs!`);
