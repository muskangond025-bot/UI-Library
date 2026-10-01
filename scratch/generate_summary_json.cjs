const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/02-cart-summary';
fs.mkdirSync(baseDir, { recursive: true });

const concepts = [
  { num: 1, name: 'CartSummary1', folder: 'cart-summary-1', title: '01. Classic Premium Cart Summary', desc: 'Refined vertical financial breakdown with elegant line dividers, currency formatting, trust badges, and prominent checkout CTA button.', styleTag: 'Classic Vertical' },
  { num: 2, name: 'CartSummary2', folder: 'cart-summary-2', title: '02. Split Financial & Checkout Summary', desc: 'Dual-panel 50/50 layout placing itemized financial breakdown on the left and large total + checkout action card on the right.', styleTag: 'Dual Panel 50/50' },
  { num: 3, name: 'CartSummary3', folder: 'cart-summary-3', title: '03. Editorial Oversized Total Summary', desc: 'Serif typography-led layout where the grand total dominates as an editorial hero element above secondary charges.', styleTag: 'Editorial Total' },
  { num: 4, name: 'CartSummary4', folder: 'cart-summary-4', title: '04. Sticky Anchored Checkout Summary', desc: 'Floating action summary bar with sticky bottom checkout CTA and expanding breakdown toggle.', styleTag: 'Sticky CTA Bar' },
  { num: 5, name: 'CartSummary5', folder: 'cart-summary-5', title: '05. Savings-First Financial Summary', desc: 'Prominent savings badge banner as the primary visual header, followed by itemized order breakdown.', styleTag: 'Savings Priority' },
  { num: 6, name: 'CartSummary6', folder: 'cart-summary-6', title: '06. Horizontal Financial Flow Summary', desc: 'Horizontal step-by-step summary flow: Subtotal -> Discount -> Shipping -> Total with mobile vertical transformation.', styleTag: 'Horizontal Flow' },
  { num: 7, name: 'CartSummary7', folder: 'cart-summary-7', title: '07. Stepper Checkout Progress Summary', desc: 'Combines visual checkout stepper progress (Cart -> Address -> Payment) with a structured order summary overview.', styleTag: 'Progress Stepper' },
  { num: 8, name: 'CartSummary8', folder: 'cart-summary-8', title: '08. Minimalist Typography Summary', desc: 'Cardless minimal design relying strictly on whitespace, uppercase labels, and clean mono typography.', styleTag: 'Minimalist Mono' },
  { num: 9, name: 'CartSummary9', folder: 'cart-summary-9', title: '09. Multi-Layered Overlapping Summary', desc: 'Three-tiered visual depth composition layering background shadow card, detail breakdown card, and elevated total CTA card.', styleTag: 'Multi-Layer Depth' },
  { num: 10, name: 'CartSummary10', folder: 'cart-summary-10', title: '10. Floating Total Glassmorphic Panel', desc: 'Financial list sits in a light card while the payable total and checkout CTA float inside a dark glassmorphic card.', styleTag: 'Floating Glass' },
  { num: 11, name: 'CartSummary11', folder: 'cart-summary-11', title: '11. Coupon-Focused Order Summary', desc: 'Prominent promo code input field and active discount status indicator anchoring the order financial summary.', styleTag: 'Promo Anchor' },
  { num: 12, name: 'CartSummary12', folder: 'cart-summary-12', title: '12. Ultra-Compact Cart Summary', desc: 'Space-efficient compact summary card tailored for slide-out drawers and narrow cart columns.', styleTag: 'Compact Drawer' },
  { num: 13, name: 'CartSummary13', folder: 'cart-summary-13', title: '13. Large Total Hero Summary', desc: 'Grand total figure presented as a massive headline display above compact secondary financial charges.', styleTag: 'Hero Figure' },
  { num: 14, name: 'CartSummary14', folder: 'cart-summary-14', title: '14. Two-Tier Separated Summary', desc: 'Clear two-card separation between Tier 1 (Cost breakdown) and Tier 2 (Final payable & payment methods).', styleTag: 'Two Tier Cards' },
  { num: 15, name: 'CartSummary15', folder: 'cart-summary-15', title: '15. Infographic Savings Summary', desc: 'Visual proportion bar showing Subtotal vs Savings vs Taxes alongside key financial figures.', styleTag: 'Infographic Bar' },
  { num: 16, name: 'CartSummary16', folder: 'cart-summary-16', title: '16. Side-Rail Desktop Summary', desc: 'Structured desktop side-rail column with payment guarantee badges and fluid mobile stack transformation.', styleTag: 'Desktop Side Rail' },
  { num: 17, name: 'CartSummary17', folder: 'cart-summary-17', title: '17. Full-Width Wide Summary Bar', desc: 'Full-width horizontal summary banner integrating breakdown metrics and checkout CTA in one unified bar.', styleTag: 'Full Width Banner' },
  { num: 18, name: 'CartSummary18', folder: 'cart-summary-18', title: '18. Expandable Financial Accordion', desc: 'Default view shows Total + Savings + CTA with accordion expander revealing Subtotal, Shipping, and Taxes.', styleTag: 'Expandable Accordion' },
  { num: 19, name: 'CartSummary19', folder: 'cart-summary-19', title: '19. Asymmetric Editorial Summary', desc: 'Off-center asymmetric 7/5 column layout with offset price headers and luxury editorial styling.', styleTag: 'Asymmetric 7/5' },
  { num: 20, name: 'CartSummary20', folder: 'cart-summary-20', title: '20. Avant-Garde Experimental Summary', desc: 'Experimental dark mode luxury summary with diagonal borders, glowing total counters, and floating CTA pill.', styleTag: 'Avant-Garde Dark' }
];

concepts.forEach(c => {
  const dirPath = path.join(baseDir, c.folder);
  fs.mkdirSync(dirPath, { recursive: true });

  const jsonContent = JSON.stringify({
    heading: c.title,
    description: c.desc,
    summary: {
      currency: "₹",
      subtotal: 5999,
      discount: 800,
      shipping: 0,
      shippingThreshold: 1000,
      tax: 540,
      savings: 800,
      total: 5739,
      coupon: {
        code: "SAVE20",
        applied: true
      },
      checkoutLabel: "Proceed to Checkout",
      styleTag: c.styleTag
    }
  }, null, 2);
  fs.writeFileSync(path.join(dirPath, c.folder + '.json'), jsonContent, 'utf8');
});

console.log('Successfully created JSON files for Cart Summary 1-20!');
