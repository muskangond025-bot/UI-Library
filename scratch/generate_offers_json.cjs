const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/03-cart-offers';
fs.mkdirSync(baseDir, { recursive: true });

const concepts = [
  { num: 1, name: 'CartOffers1', folder: 'cart-offers-1', title: '01. Banner Grid Cart Offers', desc: 'Grid of promotional discount banners featuring promo code badges and instant copy buttons.', styleTag: 'Grid Banners' },
  { num: 2, name: 'CartOffers2', folder: 'cart-offers-2', title: '02. Carousel Slider Cart Offers', desc: 'Interactive horizontal offer carousel with touch-swipe navigation and highlighted offer tags.', styleTag: 'Carousel Slider' },
  { num: 3, name: 'CartOffers3', folder: 'cart-offers-3', title: '03. Accordion Expandable Offers', desc: 'Vertical accordion listing available bundle and cart discounts with detailed terms expansion.', styleTag: 'Accordion List' },
  { num: 4, name: 'CartOffers4', folder: 'cart-offers-4', title: '04. Coupon Code Input & Applied List', desc: 'Dedicated promo code redemption box with active coupon tags and discount indicators.', styleTag: 'Code Redemption' },
  { num: 5, name: 'CartOffers5', folder: 'cart-offers-5', title: '05. Bank & Payment Partner Offers', desc: 'Card showcase highlighting instant cashback and EMI offers from partner banks.', styleTag: 'Bank Cashback' },
  { num: 6, name: 'CartOffers6', folder: 'cart-offers-6', title: '06. Tiered Savings Progress Offers', desc: 'Milestone progress bar unlocking extra 5%, 10%, and 15% discounts as cart value increases.', styleTag: 'Tiered Milestones' },
  { num: 7, name: 'CartOffers7', folder: 'cart-offers-7', title: '07. Bundle & Buy More Save More', desc: 'Multi-buy offer section encouraging customers to add 1 more item to unlock ₹500 off.', styleTag: 'Multi-Buy Saver' },
  { num: 8, name: 'CartOffers8', folder: 'cart-offers-8', title: '08. Free Gift with Purchase Offers', desc: 'Visual gift selector unlocking complimentary luxury gifts when cart reaches target total.', styleTag: 'Free Gift Unlock' },
  { num: 9, name: 'CartOffers9', folder: 'cart-offers-9', title: '09. Limited-Time Flash Cart Offers', desc: 'Urgency-driven countdown banner offering extra 10% off if order is placed within 15 mins.', styleTag: 'Countdown Flash' },
  { num: 10, name: 'CartOffers10', folder: 'cart-offers-10', title: '10. Loyalty Points & Rewards Offers', desc: 'Reward point redemption widget showing available points balance and instant cash value discount.', styleTag: 'Loyalty Points' },
  { num: 11, name: 'CartOffers11', folder: 'cart-offers-11', title: '11. Scratch Card Surprise Offers', desc: 'Interactive gamified scratch card revealing a mystery discount coupon upon tap.', styleTag: 'Scratch Card' },
  { num: 12, name: 'CartOffers12', folder: 'cart-offers-12', title: '12. Minimal Typography List Offers', desc: 'Clean monospaced list of available cart promotions with minimal rule dividers.', styleTag: 'Minimalist Mono' },
  { num: 13, name: 'CartOffers13', folder: 'cart-offers-13', title: '13. Floating Banner Toast Offers', desc: 'Floating toast banner notifying user of applicable auto-applied cart savings.', styleTag: 'Toast Notification' },
  { num: 14, name: 'CartOffers14', folder: 'cart-offers-14', title: '14. Multi-Tiered Cashback Cards', desc: 'Staggered card layout displaying UPI, Wallet, and Credit Card discount incentives.', styleTag: 'Multi-Payment Cards' },
  { num: 15, name: 'CartOffers15', folder: 'cart-offers-15', title: '15. VIP Exclusive Member Offers', desc: 'Luxury gold-accented VIP member perks card offering free express delivery and double points.', styleTag: 'VIP Exclusive' },
  { num: 16, name: 'CartOffers16', folder: 'cart-offers-16', title: '16. Side Rail Compact Offers', desc: 'Compact side-rail list of auto-applicable coupons for narrow cart columns.', styleTag: 'Side Rail List' },
  { num: 17, name: 'CartOffers17', folder: 'cart-offers-17', title: '17. Full Width Promo Banner Bar', desc: 'Wide horizontal announcement bar displaying top active promo codes.', styleTag: 'Full Width Bar' },
  { num: 18, name: 'CartOffers18', folder: 'cart-offers-18', title: '18. Interactive Coupon Drawer Offers', desc: 'Clean trigger button opening a slide-out drawer with all available promotional vouchers.', styleTag: 'Voucher Drawer' },
  { num: 19, name: 'CartOffers19', folder: 'cart-offers-19', title: '19. Asymmetric Editorial Offers', desc: 'High-fashion editorial layout pairing promo imagery with asymmetric discount copy.', styleTag: 'Editorial Asymmetric' },
  { num: 20, name: 'CartOffers20', folder: 'cart-offers-20', title: '20. Avant-Garde Dark Mode Offers', desc: 'Experimental dark mode offer card with glowing neon accents and live discount copy counters.', styleTag: 'Avant-Garde Neon' }
];

concepts.forEach(c => {
  const dirPath = path.join(baseDir, c.folder);
  fs.mkdirSync(dirPath, { recursive: true });

  const jsonContent = JSON.stringify({
    heading: c.title,
    description: c.desc,
    offers: [
      { code: "FESTIVE20", title: "Flat 20% OFF", subtitle: "On orders above ₹2,999", discount: "20% OFF", badge: "POPULAR" },
      { code: "FREESHIP", title: "Free Express Shipping", subtitle: "Valid on all prepaid orders", discount: "FREE SHIP", badge: "AUTO-APPLIED" },
      { code: "BANK10", title: "10% Instant Bank Cashback", subtitle: "With HDFC & ICICI Cards", discount: "10% OFF", badge: "BANK OFFER" }
    ],
    styleTag: c.styleTag
  }, null, 2);
  fs.writeFileSync(path.join(dirPath, c.folder + '.json'), jsonContent, 'utf8');
});

console.log('Created JSON files for Cart Offers 1-20!');
