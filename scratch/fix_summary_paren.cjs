const fs = require('fs');
let content = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const target = "      (category === 'cart-summary' ? [";
const replacement = "      category === 'cart-summary' ? [";

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', content, 'utf8');
  console.log('Fixed extra parenthesis on cart-summary condition!');
} else {
  console.log('Target string not found');
}
