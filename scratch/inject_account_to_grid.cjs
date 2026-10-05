const fs = require('fs');

const gridPath = 'c:\\UI Library\\src\\components\\section-library\\SectionLibraryGrid.tsx';
let gridContent = fs.readFileSync(gridPath, 'utf8');

const tabs = [
  { id: 'account-overview', compPrefix: 'AccountOverview', folder: '01-overview' },
  { id: 'account-profile-information', compPrefix: 'AccountProfileInformation', folder: '02-profile-information' },
  { id: 'account-address-book', compPrefix: 'AccountAddressBook', folder: '03-address-book' },
  { id: 'account-wishlist', compPrefix: 'AccountWishlist', folder: '04-wishlist' },
  { id: 'account-saved-products', compPrefix: 'AccountSavedProducts', folder: '05-saved-products' },
  { id: 'account-recently-viewed-products', compPrefix: 'AccountRecentlyViewedProducts', folder: '06-recently-viewed-products' },
  { id: 'account-reviews-ratings', compPrefix: 'AccountReviewsRatings', folder: '07-reviews-ratings' },
  { id: 'account-loyalty-rewards', compPrefix: 'AccountLoyaltyRewards', folder: '08-loyalty-rewards' },
  { id: 'account-coupons-offers', compPrefix: 'AccountCouponsOffers', folder: '09-coupons-offers' },
  { id: 'account-notification-preferences', compPrefix: 'AccountNotificationPreferences', folder: '10-notification-preferences' }
];

let importsStr = '\n// ACCOUNT IMPORTS\n';

tabs.forEach(tab => {
  for (let i = 1; i <= 20; i++) {
    const padded = String(i).padStart(2, '0');
    const compName = tab.compPrefix + i;
    const fileId = tab.id + '-' + padded;
    
    importsStr += `import { ${compName} } from '../sections/account/${tab.folder}/${fileId}';\n`;
    importsStr += `import ${compName}Data from '../sections/account/${tab.folder}/${fileId}.json';\n`;
  }
});

let casesStr = '\n      // ACCOUNT CASES\n';

tabs.forEach(tab => {
  casesStr += `      case '${tab.id}':\n        return [\n`;
  for (let i = 1; i <= 20; i++) {
    const compName = tab.compPrefix + i;
    casesStr += `          { ...${compName}Data, previewComponent: <${compName} /> },\n`;
  }
  casesStr += `        ];\n`;
});

// Insert imports right before "interface SectionLibraryGridProps"
const interfaceIdx = gridContent.indexOf('interface SectionLibraryGridProps');
if (interfaceIdx !== -1) {
  gridContent = gridContent.slice(0, interfaceIdx) + importsStr + '\n' + gridContent.slice(interfaceIdx);
}

// Insert cases right before "default:" in getCategorySections
const defaultIdx = gridContent.indexOf('default:');
if (defaultIdx !== -1) {
  gridContent = gridContent.slice(0, defaultIdx) + casesStr + '\n      ' + gridContent.slice(defaultIdx);
}

fs.writeFileSync(gridPath, gridContent);
console.log('SUCCESS_GRID_INJECTED');
