import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let text = fs.readFileSync(file, 'utf-8');

// Ensure aboutCategories contains mappedId correctly matching category
text = text.replace("case 'about-team-showcase':", "case 'about-team-showcase':");

// Re-write clean grid section filter to guarantee array match
const categoryFilterLogic = `
  let activeCat = category;
  let groups = [];
  if (activeCat === 'account') {
    activeCat = 'account-overview';
  } else if (activeCat === 'home') {
    activeCat = 'hero-banner';
  } else if (activeCat === 'product') {
    activeCat = 'product-gallery';
  } else if (activeCat === 'cart') {
    activeCat = 'cart-items-section';
  } else if (activeCat === 'checkout') {
    activeCat = 'checkout-header';
  } else if (activeCat === 'frequently-bought-together') {
    activeCat = 'cart-frequently-bought-together';
  } else if (activeCat === 'recommended-products') {
    activeCat = 'cart-recommended-products';
  }
  
  groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories, ...orderCategories, ...accountCategories, ...offersCategories, ...blogCategories, ...aboutCategories].filter(g => (g.mappedId || g.id) === activeCat || g.id === activeCat);
`;

const oldFilterRegex = /let activeCat = category;[\s\S]*?groups = \[\.\.\.homeCategories[\s\S]*?\.filter\(g => g\.id === activeCat\);/;
if (oldFilterRegex.test(text)) {
  text = text.replace(oldFilterRegex, categoryFilterLogic.trim());
  fs.writeFileSync(file, text, 'utf-8');
  console.log('Successfully updated groups filter matching logic in SectionLibraryGrid.tsx!');
} else {
  console.log('Old filter regex did not match');
}
