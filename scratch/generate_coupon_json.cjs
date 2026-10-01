const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/04-coupon-discount-section';
fs.mkdirSync(baseDir, { recursive: true });

const concepts = [
  { num: 1, name: 'CouponDiscountSection1', folder: 'coupon-discount-section-1', title: '01. Premium Digital Coupon Wallet', desc: 'Wallet-style collection of available coupons presenting digital vouchers inside a sleek card container.', styleTag: 'Digital Wallet' },
  { num: 2, name: 'CouponDiscountSection2', folder: 'coupon-discount-section-2', title: '02. Editorial Offer List', desc: 'High-fashion magazine layout with oversized serif discount numbers and minimal rules.', styleTag: 'Editorial Serif' },
  { num: 3, name: 'CouponDiscountSection3', folder: 'coupon-discount-section-3', title: '03. Premium Ticket-Style Coupons', desc: 'Perforated ticket-style vouchers with notch edges and instant copyable discount codes.', styleTag: 'Ticket Notch' },
  { num: 4, name: 'CouponDiscountSection4', folder: 'coupon-discount-section-4', title: '04. Horizontal Offer Strip', desc: 'Wide horizontal offer rows pairing left percentage callouts with right redemption buttons.', styleTag: 'Horizontal Strip' },
  { num: 5, name: 'CouponDiscountSection5', folder: 'coupon-discount-section-5', title: '05. Discount-First Visual Grid', desc: 'Grid layout anchored by massive discount percentage badges dominating each card.', styleTag: 'Discount Dominant' },
  { num: 6, name: 'CouponDiscountSection6', folder: 'coupon-discount-section-6', title: '06. Layered Coupon Sheet Stack', desc: 'Vertically stacked overlapping coupon cards with subtle depth shadows.', styleTag: 'Layered Stack' },
  { num: 7, name: 'CouponDiscountSection7', folder: 'coupon-discount-section-7', title: '07. Expandable Coupon Terms Accordion', desc: 'Collapsed summary cards expanding on click to reveal detailed terms, minimum order, and category restrictions.', styleTag: 'Expandable Terms' },
  { num: 8, name: 'CouponDiscountSection8', folder: 'coupon-discount-section-8', title: '08. Offer Discovery Filter Grid', desc: 'Category filter bar (All, Fashion, New User, High Savings) filtering available promotional vouchers.', styleTag: 'Filter Grid' },
  { num: 9, name: 'CouponDiscountSection9', folder: 'coupon-discount-section-9', title: '09. Horizontal Coupon Carousel', desc: 'Touch-enabled horizontal carousel slider for browsing promotional vouchers.', styleTag: 'Horizontal Carousel' },
  { num: 10, name: 'CouponDiscountSection10', folder: 'coupon-discount-section-10', title: '10. Potential Savings Calculator Display', desc: 'Header highlighting maximum savings potential above qualifying discount vouchers.', styleTag: 'Savings Potential' },
  { num: 11, name: 'CouponDiscountSection11', folder: 'coupon-discount-section-11', title: '11. Eligibility-Focused Offer Section', desc: 'Clear visual badges indicating exact user eligibility requirements (New User, Cart > ₹2k).', styleTag: 'Eligibility Badges' },
  { num: 12, name: 'CouponDiscountSection12', folder: 'coupon-discount-section-12', title: '12. Expiry-Focused Urgency Coupons', desc: 'Prominent expiry badges and countdown indicators highlighting limited voucher availability.', styleTag: 'Expiry Urgency' },
  { num: 13, name: 'CouponDiscountSection13', folder: 'coupon-discount-section-13', title: '13. Applied Coupon Active State Display', desc: 'Spotlight view displaying the currently active applied coupon with option to swap vouchers.', styleTag: 'Active Applied State' },
  { num: 14, name: 'CouponDiscountSection14', folder: 'coupon-discount-section-14', title: '14. Side-by-Side Coupon Comparison', desc: 'Structured comparison columns evaluating discount percentage, min order, and max savings.', styleTag: 'Side Comparison' },
  { num: 15, name: 'CouponDiscountSection15', folder: 'coupon-discount-section-15', title: '15. Minimalist Typographic Offers', desc: 'Cardless monospaced layout using whitespace and bold text hierarchy.', styleTag: 'Minimalist Mono' },
  { num: 16, name: 'CouponDiscountSection16', folder: 'coupon-discount-section-16', title: '16. Vertical Sidebar Offer Rail', desc: 'Narrow sidebar rail layout optimized for desktop checkout columns.', styleTag: 'Vertical Side Rail' },
  { num: 17, name: 'CouponDiscountSection17', folder: 'coupon-discount-section-17', title: '17. Asymmetric Featured Coupon Layout', desc: 'Asymmetric 7/5 layout pairing a large featured deal with supporting vouchers.', styleTag: 'Asymmetric 7/5' },
  { num: 18, name: 'CouponDiscountSection18', folder: 'coupon-discount-section-18', title: '18. Interactive Code Reveal Voucher', desc: 'Hidden coupon code revealing upon user click with instant copy feedback.', styleTag: 'Interactive Reveal' },
  { num: 19, name: 'CouponDiscountSection19', folder: 'coupon-discount-section-19', title: '19. Full-Width Editorial Experience', desc: 'Full-width luxury announcement banner presenting premium discount codes.', styleTag: 'Full-Width Banner' },
  { num: 20, name: 'CouponDiscountSection20', folder: 'coupon-discount-section-20', title: '20. Avant-Garde Experimental Coupon', desc: 'Experimental dark mode luxury voucher with glowing neon accents and diagonal framing.', styleTag: 'Avant-Garde Dark' }
];

concepts.forEach(c => {
  const dirPath = path.join(baseDir, c.folder);
  fs.mkdirSync(dirPath, { recursive: true });

  const jsonContent = JSON.stringify({
    heading: c.title,
    description: c.desc,
    coupons: [
      { id: "SAVE20", code: "SAVE20", discount: "20% OFF", title: "Festive Season Discount", minOrder: "₹2,499", expiry: "Valid till Dec 31", status: "available" },
      { id: "WELCOME500", code: "WELCOME500", discount: "₹500 OFF", title: "New Customer Gift", minOrder: "₹1,999", expiry: "Valid for 7 days", status: "available" },
      { id: "FREESHIP", code: "FREESHIP", discount: "FREE SHIP", title: "Complimentary Delivery", minOrder: "₹999", expiry: "No Expiry", status: "available" }
    ],
    styleTag: c.styleTag
  }, null, 2);
  fs.writeFileSync(path.join(dirPath, c.folder + '.json'), jsonContent, 'utf8');
});

console.log('Successfully created JSON files for Coupon & Discount 1-20!');
