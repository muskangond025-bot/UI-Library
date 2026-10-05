const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

// 1. Generate Import Statements
let imports = '';
for (let i = 1; i <= 20; i++) {
  const numStr = String(i).padStart(2, '0');
  imports += `import { AccountNotificationPreferences${i} } from '../sections/account/10-notification-preferences/account-notification-preferences-${numStr}';\n`;
  imports += `import accountNotificationPreferences${numStr}Data from '../sections/account/10-notification-preferences/account-notification-preferences-${numStr}.json';\n`;
}

if (!content.includes('AccountNotificationPreferences1')) {
  const targetImportLine = "import accountCouponsOffers20Data from '../sections/account/09-coupons-offers/account-coupons-offers-20.json';";
  content = content.replace(targetImportLine, targetImportLine + '\n' + imports);
  console.log('Added 20 Notification Preferences imports to SectionLibraryGrid.tsx');
}

// 2. Generate Grid Branch
let branch = `    ] : category === 'account-notification-preferences' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = String(i).padStart(2, '0');
  branch += `      { id: 'account-notification-preferences-${i}', title: accountNotificationPreferences${numStr}Data.heading || accountNotificationPreferences${numStr}Data.title || 'NOTIFICATION PREFERENCES — VARIANT ${numStr}', description: accountNotificationPreferences${numStr}Data.description || 'Notification preferences variant ${i}', previewComponent: <AccountNotificationPreferences${i} /> },\n`;
}

if (content.includes("category === 'account-notification-preferences'")) {
  console.log('Category branch for account-notification-preferences already exists.');
} else {
  const targetBranchLine = "] : category === 'account-coupons-offers' ? [";
  content = content.replace(targetBranchLine, branch + '    ' + targetBranchLine);
  console.log('Added account-notification-preferences category branch to SectionLibraryGrid.tsx');
}

fs.writeFileSync(gridPath, content, 'utf-8');
console.log('SectionLibraryGrid.tsx successfully updated!');
