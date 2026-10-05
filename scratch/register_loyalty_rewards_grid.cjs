const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

// 1. Generate Import Statements
let imports = '';
for (let i = 1; i <= 20; i++) {
  const numStr = String(i).padStart(2, '0');
  imports += `import { AccountLoyaltyRewards${i} } from '../sections/account/08-loyalty-rewards/account-loyalty-rewards-${numStr}';\n`;
  imports += `import accountLoyaltyRewards${numStr}Data from '../sections/account/08-loyalty-rewards/account-loyalty-rewards-${numStr}.json';\n`;
}

// Check if imports already added
if (!content.includes('AccountLoyaltyRewards1')) {
  const targetImportLine = "import accountReviewsRatings20Data from '../sections/account/07-reviews-ratings/account-reviews-ratings-20.json';";
  content = content.replace(targetImportLine, targetImportLine + '\n' + imports);
  console.log('Added 20 Loyalty & Rewards imports to SectionLibraryGrid.tsx');
}

// 2. Generate Grid Branch
let branch = `    ] : category === 'account-loyalty-rewards' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = String(i).padStart(2, '0');
  branch += `      { id: 'account-loyalty-rewards-${i}', title: accountLoyaltyRewards${numStr}Data.heading || accountLoyaltyRewards${numStr}Data.title || 'LOYALTY & REWARDS — VARIANT ${numStr}', description: accountLoyaltyRewards${numStr}Data.description || 'Loyalty & rewards variant ${i}', previewComponent: <AccountLoyaltyRewards${i} /> },\n`;
}

// Check if category branch already added
if (content.includes("category === 'account-loyalty-rewards'")) {
  console.log('Category branch for account-loyalty-rewards already exists.');
} else {
  const targetBranchLine = "] : category === 'account-reviews-ratings' ? [";
  content = content.replace(targetBranchLine, branch + '    ' + targetBranchLine);
  console.log('Added account-loyalty-rewards category branch to SectionLibraryGrid.tsx');
}

fs.writeFileSync(gridPath, content, 'utf-8');
console.log('SectionLibraryGrid.tsx successfully updated!');
