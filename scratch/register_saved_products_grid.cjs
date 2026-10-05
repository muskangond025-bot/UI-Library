const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build imports string
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  imports.push(`import { AccountSavedProducts${i} } from '../sections/account/05-saved-products/account-saved-products-${num}';`);
  imports.push(`import accountSavedProducts${num}Data from '../sections/account/05-saved-products/account-saved-products-${num}.json';`);
}

// Build category block string
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  items.push(`      { id: 'account-saved-products-${i}', title: accountSavedProducts${num}Data.heading || accountSavedProducts${num}Data.title || 'SAVED PRODUCTS — VARIANT ${num}', description: accountSavedProducts${num}Data.description || 'Saved product variant ${i}', previewComponent: <AccountSavedProducts${i} /> },`);
}

const categoryBlock = `    ] : category === 'account-saved-products' ? [\n` + items.join('\n') + `\n`;

// Inject imports at top (after last Wishlist import)
const lastWishlistImport = `import accountWishlist20Data from '../sections/account/04-wishlist/account-wishlist-20.json';`;
content = content.replace(lastWishlistImport, `${lastWishlistImport}\n${imports.join('\n')}`);

// Inject category block (before category === 'account-profile-information')
const profileCondition = `    ] : category === 'account-profile-information' ? [`;
content = content.replace(profileCondition, `${categoryBlock}${profileCondition}`);

fs.writeFileSync(gridPath, content);
console.log("Registered account-saved-products 01 through 20 in SectionLibraryGrid.tsx!");
