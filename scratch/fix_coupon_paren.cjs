const fs = require('fs');
let content = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const target = `      ] :
    (
      category === 'coupon-discount-section' ? [`;

const replacement = `      ] :
    category === 'coupon-discount-section' ? [`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', content, 'utf8');
  console.log('Fixed extra parenthesis on coupon-discount-section condition!');
} else {
  console.log('Target not found');
}
