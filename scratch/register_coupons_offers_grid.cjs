const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

// 1. Generate Import Statements
let imports = '';
for (let i = 1; i <= 20; i++) {
  const numStr = String(i).padStart(2, '0');
  imports += `import { AccountCouponsOffers${i} } from '../sections/account/09-coupons-offers/account-coupons-offers-${numStr}';\n`;
  imports += `import accountCouponsOffers${numStr}Data from '../sections/account/09-coupons-offers/account-coupons-offers-${numStr}.json';\n`;
}

if (!content.includes('AccountCouponsOffers1')) {
  const targetImportLine = "import accountLoyaltyRewards20Data from '../sections/account/08-loyalty-rewards/account-loyalty-rewards-20.json';";
  content = content.replace(targetImportLine, targetImportLine + '\n' + imports);
  console.log('Added 20 Coupons & Offers imports to SectionLibraryGrid.tsx');
}

// 2. Generate Grid Branch
let branch = `    ] : category === 'account-coupons-offers' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = String(i).padStart(2, '0');
  branch += `      { id: 'account-coupons-offers-${i}', title: accountCouponsOffers${numStr}Data.heading || accountCouponsOffers${numStr}Data.title || 'COUPONS & OFFERS — VARIANT ${numStr}', description: accountCouponsOffers${numStr}Data.description || 'Coupons & offers variant ${i}', previewComponent: <AccountCouponsOffers${i} /> },\n`;
}

if (content.includes("category === 'account-coupons-offers'")) {
  console.log('Category branch for account-coupons-offers already exists.');
} else {
  const targetBranchLine = "] : category === 'account-loyalty-rewards' ? [";
  content = content.replace(targetBranchLine, branch + '    ' + targetBranchLine);
  console.log('Added account-coupons-offers category branch to SectionLibraryGrid.tsx');
}

fs.writeFileSync(gridPath, content, 'utf-8');
console.log('SectionLibraryGrid.tsx successfully updated!');
