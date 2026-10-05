const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build imports string
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  imports.push(`import { AccountReviewsRatings${i} } from '../sections/account/07-reviews-ratings/account-reviews-ratings-${num}';`);
  imports.push(`import accountReviewsRatings${num}Data from '../sections/account/07-reviews-ratings/account-reviews-ratings-${num}.json';`);
}

// Build category block string
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = i < 10 ? `0${i}` : `${i}`;
  items.push(`      { id: 'account-reviews-ratings-${i}', title: accountReviewsRatings${num}Data.heading || accountReviewsRatings${num}Data.title || 'REVIEWS & RATINGS — VARIANT ${num}', description: accountReviewsRatings${num}Data.description || 'Reviews & ratings variant ${i}', previewComponent: <AccountReviewsRatings${i} /> },`);
}

const categoryBlock = `    ] : category === 'account-reviews-ratings' ? [\n` + items.join('\n') + `\n`;

// Inject imports at top (after last RecentlyViewed import)
const lastRecentlyImport = `import accountRecentlyViewedProducts20Data from '../sections/account/06-recently-viewed-products/account-recently-viewed-products-20.json';`;
content = content.replace(lastRecentlyImport, `${lastRecentlyImport}\n${imports.join('\n')}`);

// Inject category block (before category === 'account-profile-information')
const profileCondition = `    ] : category === 'account-profile-information' ? [`;
content = content.replace(profileCondition, `${categoryBlock}${profileCondition}`);

fs.writeFileSync(gridPath, content);
console.log("Registered account-reviews-ratings 01 through 20 in SectionLibraryGrid.tsx!");
