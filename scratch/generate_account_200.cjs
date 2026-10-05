const fs = require('fs');
const path = require('path');

const tabs = [
  { id: 'account-overview', name: 'Account Overview', compPrefix: 'AccountOverview', folder: '01-overview' },
  { id: 'account-profile-information', name: 'Profile Information', compPrefix: 'AccountProfileInformation', folder: '02-profile-information' },
  { id: 'account-address-book', name: 'Address Book', compPrefix: 'AccountAddressBook', folder: '03-address-book' },
  { id: 'account-wishlist', name: 'Wishlist', compPrefix: 'AccountWishlist', folder: '04-wishlist' },
  { id: 'account-saved-products', name: 'Saved Products', compPrefix: 'AccountSavedProducts', folder: '05-saved-products' },
  { id: 'account-recently-viewed-products', name: 'Recently Viewed Products', compPrefix: 'AccountRecentlyViewedProducts', folder: '06-recently-viewed-products' },
  { id: 'account-reviews-ratings', name: 'Reviews & Ratings', compPrefix: 'AccountReviewsRatings', folder: '07-reviews-ratings' },
  { id: 'account-loyalty-rewards', name: 'Loyalty / Rewards', compPrefix: 'AccountLoyaltyRewards', folder: '08-loyalty-rewards' },
  { id: 'account-coupons-offers', name: 'Coupons & Offers', compPrefix: 'AccountCouponsOffers', folder: '09-coupons-offers' },
  { id: 'account-notification-preferences', name: 'Notification Preferences', compPrefix: 'AccountNotificationPreferences', folder: '10-notification-preferences' }
];

const baseDir = 'c:\\UI Library\\src\\components\\sections\\account';

tabs.forEach(tab => {
  const targetDir = path.join(baseDir, tab.folder);
  fs.mkdirSync(targetDir, { recursive: true });

  for (let i = 1; i <= 20; i++) {
    const padded = String(i).padStart(2, '0');
    const compName = tab.compPrefix + i;
    const fileId = tab.id + '-' + padded;
    
    // JSON
    const jsonContent = JSON.stringify({
      id: fileId,
      title: tab.name + ' Variant ' + i,
      category: tab.id,
      description: 'Placeholder UI component ' + i + ' for ' + tab.name + '.'
    }, null, 2);

    fs.writeFileSync(path.join(targetDir, fileId + '.json'), jsonContent);

    // TSX
    const tsxContent = `import React from 'react';
import { motion } from 'framer-motion';

export function ${compName}() {
  return (
    <div className="p-8 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 text-white min-h-[300px] flex flex-col justify-center items-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 text-center max-w-md"
      >
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-500/30 mb-3 inline-block">
          ${tab.name}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">${tab.name} - Option ${i}</h3>
        <p className="text-slate-400 text-sm mb-6">Placeholder ${i} for ${tab.name}. High-performance responsive account management component.</p>
        <div className="flex justify-center gap-3">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
            Configure
          </button>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-700">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ${compName};
`;

    fs.writeFileSync(path.join(targetDir, fileId + '.tsx'), tsxContent);
  }
});

console.log('SUCCESS_FILES_GENERATED');
