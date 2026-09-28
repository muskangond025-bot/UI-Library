const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components');
const sectionsDir = path.join(baseDir, 'sections');
const productDir = path.join(sectionsDir, 'product');

if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });
if (!fs.existsSync(productDir)) fs.mkdirSync(productDir, { recursive: true });

const mapping = {
  // Group 1
  'Banner': '01-hero-banner',
  'HeroCarousel': '02-hero-carousel',
  'PromotionalBanner': '03-promotional-banner',
  'FeaturedCategory': '04-featured-categories',
  'CategoryGrid': '05-category-grid',
  'FeaturedCollection': '06-featured-collections',
  'ProductGrid': '07-product-grid',
  'ProductCarousel': '08-product-carousel',
  'BestSeller': '09-best-sellers',
  'NewArrival': '10-new-arrivals',
  'TrendingProducts': '11-trending-products',
  'TrendingProduct': '11-trending-products',
  'SaleProducts': '12-sale-products',
  'FlashSale': '13-flash-sale',
  'FeaturedProductTab': '14-featured-product',
  'ImageText': '15-image-text',
  'SplitImage': '16-split-image-content',
  'PromotionalCards': '17-promotional-cards',
  'WhyChooseUs': '18-why-choose-us',
  'BrandShowcase': '19-brand-showcase',
  'Testimonial': '20-testimonials',
  'CustomerReview': '21-customer-reviews',
  'VideoShowcase': '22-video-showcase',
  'BlogHighlight': '23-blog-highlights',
  'BuyingGuide': '24-buying-guide',
  'Faq': '25-faq',
  'Newsletter': '26-newsletter',

  // Group 2
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

const unmoved = [];
const moved = [];

Object.entries(mapping).forEach(([oldName, newPath]) => {
  const oldFullPath = path.join(baseDir, oldName);
  const newFullPath = path.join(sectionsDir, newPath);

  if (fs.existsSync(oldFullPath)) {
    try {
      fs.cpSync(oldFullPath, newFullPath, { recursive: true });
      moved.push(`${oldName} -> ${newPath}`);
      try {
        fs.rmSync(oldFullPath, { recursive: true, force: true });
      } catch (rmErr) {
        unmoved.push(`${oldName} copied successfully, but original could not be deleted (likely locked by IDE).`);
      }
    } catch (e) {
      unmoved.push(`${oldName} could not be copied: ${e.message}`);
    }
  }
});

// Update imports
const gridPath = path.join(baseDir, 'section-library', 'SectionLibraryGrid.tsx');
if (fs.existsSync(gridPath)) {
  let content = fs.readFileSync(gridPath, 'utf8');
  Object.entries(mapping).forEach(([oldName, newPath]) => {
    const regex = new RegExp(`from '\\.\\./${oldName}/`, 'g');
    content = content.replace(regex, `from '../sections/${newPath}/`);
  });
  fs.writeFileSync(gridPath, content);
}

fs.writeFileSync(path.join(__dirname, 'reorganize_report.json'), JSON.stringify({ moved, unmoved }, null, 2));
console.log('Done');
