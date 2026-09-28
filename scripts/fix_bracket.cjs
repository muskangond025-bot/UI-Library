const fs = require('fs');
let c = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');
c = c.replace(/}\r?\n          category === 'product-gallery' \? \[/, "}\n      ] :\n    category === 'product-gallery' ? [");
fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', c);
console.log('Fixed');
