const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build imports string
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  imports.push(`import { AccountWishlist${i} } from '../sections/account/04-wishlist/account-wishlist-${num}';`);
  imports.push(`import accountWishlist${num}Data from '../sections/account/04-wishlist/account-wishlist-${num}.json';`);
}

// Build category block string
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  items.push(`      { id: 'account-wishlist-${i}', title: accountWishlist${num}Data.heading || accountWishlist${num}Data.title || 'WISHLIST — VARIANT ${num}', description: accountWishlist${num}Data.description || 'Wishlist variant ${i}', previewComponent: <AccountWishlist${i} /> },`);
}

const categoryBlock = `    ] : category === 'account-wishlist' ? [\n` + items.join('\n') + `\n`;

// Inject imports at top (after last AccountAddressBook import)
const lastAddressImport = `import accountAddressBook20Data from '../sections/account/03-address-book/account-address-book-20.json';`;
content = content.replace(lastAddressImport, `${lastAddressImport}\n${imports.join('\n')}`);

// Inject category block (before category === 'account-profile-information')
const profileCondition = `    ] : category === 'account-profile-information' ? [`;
content = content.replace(profileCondition, `${categoryBlock}${profileCondition}`);

fs.writeFileSync(gridPath, content);
console.log("Registered account-wishlist 01 through 20 in SectionLibraryGrid.tsx!");
