const fs = require('fs');
let content = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const target = `      ] :
    (category === 'cart-items-section') ? [`;

const replacement = `      ] :
    category === 'cart-items-section' ? [`;

content = content.replace(target, replacement);

const targetEnd = `      ] :
    (
      category === 'cart-summary'`;

const replacementEnd = `      ] :
      (category === 'cart-summary'`;

content = content.replace(targetEnd, replacementEnd);
fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', content, 'utf8');
console.log('Fixed parentheses!');
