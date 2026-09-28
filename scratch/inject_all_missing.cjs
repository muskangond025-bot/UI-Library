const fs = require('fs');
const path = require('path');

const mapping = {
  'ProductGallery': 'product/01-product-gallery',
  'ProductInformation': 'product/02-product-information',
  'ProductPurchaseSection': 'product/03-product-purchase-section',
  'ProductDescription': 'product/04-product-description',
  'ProductHighlights': 'product/05-product-highlights',
  'ProductSpecifications': 'product/06-product-specifications',
  'ProductFeatures': 'product/07-product-features',
  'WhatSIncluded': 'product/08-whats-included',
  'SizeGuide': 'product/09-size-guide',
  'ProductCare': 'product/10-product-care',
  'WarrantyInformation': 'product/11-warranty-information',
  'ShippingDeliveryInformation': 'product/12-shipping-delivery-information',
  'ReturnRefundInformation': 'product/13-return-refund-information',
  'PaymentInformation': 'product/14-payment-information',
  'FrequentlyBoughtTogether': 'product/15-frequently-bought-together',
  'ProductBundles': 'product/16-product-bundles',
  'RelatedProducts': 'product/17-related-products',
  'SimilarProducts': 'product/18-similar-products',
  'RecommendedProducts': 'product/19-recommended-products',
  'CustomerReviews': 'product/20-customer-reviews',
  'ReviewSummary': 'product/21-review-summary',
  'CustomerReviewGallery': 'product/22-customer-review-gallery',
  'QuestionsAnswers': 'product/23-questions-answers',
  'ProductFaq': 'product/24-product-faq',
  'BrandInformation': 'product/25-brand-information',
};

function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

const gridPath = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

const regex = /<([A-Z][a-zA-Z]+)(\d+)\s+data=\{([a-zA-Z0-9]+)\s+as\s+any\}/g;
let match;
let importsToInject = '';

while ((match = regex.exec(content)) !== null) {
  const compName = match[1]; // e.g., ProductInformation
  const num = match[2];      // e.g., 1
  const dataVar = match[3];  // e.g., productInformation1Data
  
  if (mapping[compName]) {
    const basePath = mapping[compName];
    const kebabName = camelToKebab(compName);
    
    // Check if it's already imported
    if (!content.includes(`import ${compName}${num} from`)) {
        importsToInject += `import ${compName}${num} from '../sections/${basePath}/${kebabName}-${num}/${compName}${num}';\n`;
    }
    
    if (!content.includes(`import ${dataVar} from`)) {
        importsToInject += `import ${dataVar} from '../sections/${basePath}/${kebabName}-${num}/${kebabName}-${num}.json';\n`;
    }
  }
}

if (importsToInject) {
  // Find the last import statement in the file
  const importRegex = /^import\s+.*?;?\s*$/gm;
  let m;
  let lastImportIndex = 0;
  while ((m = importRegex.exec(content)) !== null) {
    lastImportIndex = m.index + m[0].length;
  }

  if (lastImportIndex > 0) {
    content = content.slice(0, lastImportIndex) + '\n\n' + importsToInject + content.slice(lastImportIndex);
  } else {
    content = importsToInject + '\n' + content;
  }

  fs.writeFileSync(gridPath, content, 'utf8');
  console.log('Injected missing imports for all products');
} else {
  console.log('No missing imports found.');
}
