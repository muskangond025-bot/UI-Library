const fs = require('fs');
const path = require('path');

const subtabs = [
  { folder: '01-offers-hero', prefix: 'offers-hero', compPrefix: 'OffersHero', label: 'Offers Hero' },
  { folder: '02-flash-sale', prefix: 'offers-flash-sale', compPrefix: 'OffersFlashSale', label: 'Flash Sale' },
  { folder: '03-deals-grid', prefix: 'offers-deals-grid', compPrefix: 'OffersDealsGrid', label: 'Deals Grid' },
  { folder: '04-featured-offers', prefix: 'offers-featured', compPrefix: 'OffersFeatured', label: 'Featured Offers' },
  { folder: '05-coupon-offers', prefix: 'offers-coupon', compPrefix: 'OffersCoupon', label: 'Coupon Offers' },
  { folder: '06-limited-time-offers', prefix: 'offers-limited-time', compPrefix: 'OffersLimitedTime', label: 'Limited Time Offers' },
  { folder: '07-clearance-sale', prefix: 'offers-clearance', compPrefix: 'OffersClearance', label: 'Clearance Sale' },
  { folder: '08-bundle-offers', prefix: 'offers-bundle', compPrefix: 'OffersBundle', label: 'Bundle Offers' },
  { folder: '09-free-shipping-offers', prefix: 'offers-free-shipping', compPrefix: 'OffersFreeShipping', label: 'Free Shipping Offers' },
  { folder: '10-offer-categories', prefix: 'offers-categories', compPrefix: 'OffersCategories', label: 'Offer Categories' },
  { folder: '11-offers-faq', prefix: 'offers-faq', compPrefix: 'OffersFaq', label: 'Offers FAQ' }
];

const baseDir = 'c:/UI Library/src/components/sections/offers';

subtabs.forEach(subtab => {
  for (let i = 1; i <= 20; i++) {
    const varNumStr = String(i).padStart(2, '0');
    const folderName = `${subtab.prefix}-${varNumStr}`;
    const targetPath = path.join(baseDir, subtab.folder, folderName);
    
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    const compName = `${subtab.compPrefix}${i}`;
    const tsxFileName = `${compName}.tsx`;
    const jsonFileName = `${subtab.prefix}-${varNumStr}.json`;

    const jsonContent = {
      heading: `${subtab.label.toUpperCase()} — VARIANT ${varNumStr}`,
      description: `${subtab.label} section variant ${i} placeholder.`
    };

    const tsxContent = `import React from 'react';

export function ${compName}() {
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white rounded-xl border border-indigo-900/50 shadow-2xl">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-widest uppercase rounded-full border border-indigo-500/30">
          ${subtab.label} Variant ${varNumStr}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200">
          ${subtab.label} Section ${i}
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Exclusive deal showcase card featuring high-conversion promotional layouts, countdown timers, and discount tag badges.
        </p>
      </div>
    </div>
  );
}
export default ${compName};
`;

    fs.writeFileSync(path.join(targetPath, jsonFileName), JSON.stringify(jsonContent, null, 2), 'utf8');
    fs.writeFileSync(path.join(targetPath, tsxFileName), tsxContent, 'utf8');
  }
});

console.log('Successfully generated all 220 Offers / Deals placeholders and JSON metadata files.');
