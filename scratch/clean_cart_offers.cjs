const fs = require('fs');
let content = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const target = "      category === 'cart-offers' ||\n      category === 'cart-offers' ||";
const replacement = "      category === 'cart-offers' ||";

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', content, 'utf8');
  console.log('Cleaned duplicate cart-offers line!');
} else {
  console.log('Target not found');
}
