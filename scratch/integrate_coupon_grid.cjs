const fs = require('fs');
const path = require('path');

const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

// 1. Build imports for Coupon & Discount Section 1-20
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  importsStr += `import { CouponDiscountSection${i} } from '../sections/cart/04-coupon-discount-section/coupon-discount-section-${i}/CouponDiscountSection${i}';\n`;
  importsStr += `import couponDiscountSection${i}Data from '../sections/cart/04-coupon-discount-section/coupon-discount-section-${i}/coupon-discount-section-${i}.json';\n`;
}

// 2. Add imports at top
content = importsStr + content;

// 3. Build Coupon Discount items block
let couponBlock = `category === 'coupon-discount-section' ? [\n`;
for (let i = 1; i <= 20; i++) {
  couponBlock += `        {\n          id: 'coupon-discount-section-${i}',\n          title: couponDiscountSection${i}Data.heading,\n          description: couponDiscountSection${i}Data.description,\n          previewComponent: <CouponDiscountSection${i} data={couponDiscountSection${i}Data as any} />\n        }${i < 20 ? ',' : ''}\n`;
}
couponBlock += `      ] :\n    (`;

// 4. Replace placeholder coupon-discount-section ternary in SectionLibraryGrid.tsx
const oldDummy = `category === 'coupon-discount-section' ||`;
content = content.replace(oldDummy, couponBlock + `\n      category === 'shipping-information' ||`);

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Successfully integrated Coupon & Discount 1-20 into SectionLibraryGrid.tsx!');
