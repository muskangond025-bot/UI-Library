const fs = require('fs');

const file = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let code = fs.readFileSync(file, 'utf8');

// Replace property access like accountWishlist01Data.heading || accountWishlist01Data.title
// or accountSavedProducts01Data.heading || accountSavedProducts01Data.title
code = code.replace(/([a-zA-Z0-9_]+Data)\.(heading|title)\s*\|\|\s*\1\.(heading|title)/g, (match, p1) => {
  return `(${p1} as any).title || (${p1} as any).heading`;
});

fs.writeFileSync(file, code, 'utf8');
console.log('Successfully updated SectionLibraryGrid.tsx');
