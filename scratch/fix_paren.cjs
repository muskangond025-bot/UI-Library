const fs = require('fs');
let content = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const target = "category === 'cart-items-section' ? [";
const replacement = "(category === 'cart-items-section') ? [";

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', content, 'utf8');
  console.log('Replaced successfully!');
} else {
  console.log('Target not found');
}
