const fs = require('fs');

const subtabs = [
  { folder: '01-offers-hero', prefix: 'offers-hero', compPrefix: 'OffersHero', categoryId: 'offers-hero', titlePrefix: 'OFFERS HERO' },
  { folder: '02-flash-sale', prefix: 'offers-flash-sale', compPrefix: 'OffersFlashSale', categoryId: 'offers-flash-sale', titlePrefix: 'FLASH SALE' },
  { folder: '03-deals-grid', prefix: 'offers-deals-grid', compPrefix: 'OffersDealsGrid', categoryId: 'offers-deals-grid', titlePrefix: 'DEALS GRID' },
  { folder: '04-featured-offers', prefix: 'offers-featured', compPrefix: 'OffersFeatured', categoryId: 'offers-featured', titlePrefix: 'FEATURED OFFERS' },
  { folder: '05-coupon-offers', prefix: 'offers-coupon', compPrefix: 'OffersCoupon', categoryId: 'offers-coupon', titlePrefix: 'COUPON OFFERS' },
  { folder: '06-limited-time-offers', prefix: 'offers-limited-time', compPrefix: 'OffersLimitedTime', categoryId: 'offers-limited-time', titlePrefix: 'LIMITED TIME OFFERS' },
  { folder: '07-clearance-sale', prefix: 'offers-clearance', compPrefix: 'OffersClearance', categoryId: 'offers-clearance', titlePrefix: 'CLEARANCE SALE' },
  { folder: '08-bundle-offers', prefix: 'offers-bundle', compPrefix: 'OffersBundle', categoryId: 'offers-bundle', titlePrefix: 'BUNDLE OFFERS' },
  { folder: '09-free-shipping-offers', prefix: 'offers-free-shipping', compPrefix: 'OffersFreeShipping', categoryId: 'offers-free-shipping', titlePrefix: 'FREE SHIPPING OFFERS' },
  { folder: '10-offer-categories', prefix: 'offers-categories', compPrefix: 'OffersCategories', categoryId: 'offers-categories', titlePrefix: 'OFFER CATEGORIES' },
  { folder: '11-offers-faq', prefix: 'offers-faq', compPrefix: 'OffersFaq', categoryId: 'offers-faq', titlePrefix: 'OFFERS FAQ' }
];

const gridPath = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let gridContent = fs.readFileSync(gridPath, 'utf8');

// Generate category mapping code
let categoryMappingStr = '';

subtabs.forEach((st) => {
  categoryMappingStr += `    ] : category === '${st.categoryId}' ? [\n`;
  
  for (let i = 1; i <= 20; i++) {
    const dataVar = `${st.compPrefix.charAt(0).toLowerCase() + st.compPrefix.slice(1)}${i}Data`;
    const compName = `${st.compPrefix}${i}`;
    categoryMappingStr += `      { id: '${st.prefix}-${i}', title: ${dataVar}.heading || ${dataVar}.title || '${st.titlePrefix} — VARIANT ${String(i).padStart(2, '0')}', description: ${dataVar}.description || '${st.titlePrefix} variant ${i}', previewComponent: <${compName} /> },\n`;
  }
});

const targetMarker = `] : [];`;
if (gridContent.includes(targetMarker)) {
  gridContent = gridContent.replace(targetMarker, categoryMappingStr + `    ] : [];`);
  fs.writeFileSync(gridPath, gridContent, 'utf8');
  console.log('Successfully injected all 11 Offers / Deals category mappings!');
} else {
  console.error('Target marker `] : [];` not found!');
}
