const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build imports string
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  imports.push(`import { AccountRecentlyViewedProducts${i} } from '../sections/account/06-recently-viewed-products/account-recently-viewed-products-${num}';`);
  imports.push(`import accountRecentlyViewedProducts${num}Data from '../sections/account/06-recently-viewed-products/account-recently-viewed-products-${num}.json';`);
}

// Build category block string
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  items.push(`      { id: 'account-recently-viewed-products-${i}', title: accountRecentlyViewedProducts${num}Data.heading || accountRecentlyViewedProducts${num}Data.title || 'RECENTLY VIEWED — VARIANT ${num}', description: accountRecentlyViewedProducts${num}Data.description || 'Recently viewed variant ${i}', previewComponent: <AccountRecentlyViewedProducts${i} /> },`);
}

const categoryBlock = `    ] : category === 'account-recently-viewed-products' ? [\n` + items.join('\n') + `\n`;

// Inject imports at top (after last SavedProducts import)
const lastSavedImport = `import accountSavedProducts20Data from '../sections/account/05-saved-products/account-saved-products-20.json';`;
content = content.replace(lastSavedImport, `${lastSavedImport}\n${imports.join('\n')}`);

// Inject category block (before category === 'account-profile-information')
const profileCondition = `    ] : category === 'account-profile-information' ? [`;
content = content.replace(profileCondition, `${categoryBlock}${profileCondition}`);

fs.writeFileSync(gridPath, content);
console.log("Registered account-recently-viewed-products 01 through 20 in SectionLibraryGrid.tsx!");
