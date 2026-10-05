const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '09-gift-card');

const variants = [
  {
    num: 1,
    id: "checkout-gift-card-1",
    componentName: "CheckoutGiftCard1",
    title: "Premium Gift Card — Layered Depth Reveal",
    description: "Refined digital gift card graphic featuring metallic chip artwork, card number, and layered depth entrance animation."
  },
  {
    num: 2,
    id: "checkout-gift-card-2",
    componentName: "CheckoutGiftCard2",
    title: "Gift Card Wallet — Digital Card Stacking",
    description: "Digital card wallet interface displaying multiple stored gift cards sliding into position."
  },
  {
    num: 3,
    id: "checkout-gift-card-3",
    componentName: "CheckoutGiftCard3",
    title: "Minimal Redemption — Smooth Expansion Transition",
    description: "Clean gift card code and PIN input with typography and smooth applied state expansion."
  },
  {
    num: 4,
    id: "checkout-gift-card-4",
    componentName: "CheckoutGiftCard4",
    title: "Gift Card + Balance — Animated Counter Reveal",
    description: "Hero balance card highlighting available gift card balance ($250.00) with animated count-in transition."
  },
  {
    num: 5,
    id: "checkout-gift-card-5",
    componentName: "CheckoutGiftCard5",
    title: "Envelope Reveal — Flap Unfold Motion",
    description: "Digital gift envelope concept where the envelope flap unfolds to reveal the gift card code panel."
  },
  {
    num: 6,
    id: "checkout-gift-card-6",
    componentName: "CheckoutGiftCard6",
    title: "Split Gift Experience — Opposite Panel Entrance",
    description: "Dual-column layout featuring a gold-foil gift card visual on left and code/PIN form on right entering from opposite sides."
  },
  {
    num: 7,
    id: "checkout-gift-card-7",
    componentName: "CheckoutGiftCard7",
    title: "Stacked Gift Cards — Fan-Out Card Separation",
    description: "Multiple stored gift cards layered in a stack that fan out into selectable cards upon click."
  },
  {
    num: 8,
    id: "checkout-gift-card-8",
    componentName: "CheckoutGiftCard8",
    title: "Premium Dark Gift Card — Controlled Glow Motion",
    description: "Luxury dark mode gift card box with gold metallic borders and controlled glow hover interactions."
  },
  {
    num: 9,
    id: "checkout-gift-card-9",
    componentName: "CheckoutGiftCard9",
    title: "Gift Card Carousel — Snap Focus Carousel",
    description: "Horizontal carousel of available digital gift cards with smooth snap focus motion."
  },
  {
    num: 10,
    id: "checkout-gift-card-10",
    componentName: "CheckoutGiftCard10",
    title: "Digital Gift Ticket — Clip-Path Edge Reveal",
    description: "Gift voucher designed like a premium gift ticket with clip-path edge reveal and ribbon detail."
  },
  {
    num: 11,
    id: "checkout-gift-card-11",
    componentName: "CheckoutGiftCard11",
    title: "Balance Progress — SVG Path Fill Update",
    description: "Gift card balance tracker visualizing applied value vs remaining balance using an animated SVG progress bar."
  },
  {
    num: 12,
    id: "checkout-gift-card-12",
    componentName: "CheckoutGiftCard12",
    title: "Gift Card Timeline — SVG Connector Draw",
    description: "Three-step redemption flow (Enter Code → Verify PIN → Apply Balance) connected by an SVG drawing line."
  },
  {
    num: 13,
    id: "checkout-gift-card-13",
    componentName: "CheckoutGiftCard13",
    title: "Gift Card + Order — Visual Order Connection",
    description: "Gift card value representation visually connecting applied balance to the order total."
  },
  {
    num: 14,
    id: "checkout-gift-card-14",
    componentName: "CheckoutGiftCard14",
    title: "Expandable Gift Card — Accordion Layout Transition",
    description: "Collapsible promo bar ('Have a Gift Card?') expanding into code, PIN, and balance inputs with height transition."
  },
  {
    num: 15,
    id: "checkout-gift-card-15",
    componentName: "CheckoutGiftCard15",
    title: "Gift Card Profile — Layered Info Reveal",
    description: "Personalized gift card profile card displaying cardholder name, card number GC-8842, balance, and active status."
  },
  {
    num: 16,
    id: "checkout-gift-card-16",
    componentName: "CheckoutGiftCard16",
    title: "Icon-Led Gift Card — Icon Pulse Response",
    description: "Icon-driven gift card redemption form featuring custom icons for gift, balance, PIN, and security."
  },
  {
    num: 17,
    id: "checkout-gift-card-17",
    componentName: "CheckoutGiftCard17",
    title: "Applied Gift Card State — Animated SVG Checkmark",
    description: "Applied gift card focus view featuring animated SVG checkmark draw, remaining balance calculator, and remove action."
  },
  {
    num: 18,
    id: "checkout-gift-card-18",
    componentName: "CheckoutGiftCard18",
    title: "3D Gift Card — Perspective Rotation Tilt",
    description: "Interactive 3D digital gift card with perspective rotation tilt and floating shadow depth."
  },
  {
    num: 19,
    id: "checkout-gift-card-19",
    componentName: "CheckoutGiftCard19",
    title: "Editorial Gift Card — Dual Motion System",
    description: "High-fashion editorial layout featuring oversized typography 'REDEEM YOUR GIFT' and dual-motion entrance."
  },
  {
    num: 20,
    id: "checkout-gift-card-20",
    componentName: "CheckoutGiftCard20",
    title: "Award-Style Gift Card — Ambient Glassmorphic Masterpiece",
    description: "Ultimate Gift Card experience combining dark glassmorphism, ambient light glow, 3D tilt, and live balance calculation."
  }
];

// Write JSON files
variants.forEach(v => {
  const folder = path.join(baseDir, `checkout-gift-card-${v.num}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  const jsonPath = path.join(folder, `checkout-gift-card-${v.num}.json`);
  const jsonContent = JSON.stringify({
    id: `checkout-gift-card-${v.num < 10 ? '0' + v.num : v.num}`,
    title: v.title,
    description: v.description,
    category: "checkout",
    subsection: "checkout-gift-card",
    variant: v.num,
    section: {
      settings: {
        title: v.title,
        description: v.description
      }
    }
  }, null, 2);
  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
});

console.log("JSON metadata files written for all 20 gift card variants!");
