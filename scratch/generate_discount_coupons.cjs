const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '08-discount-coupon');

const variants = [
  {
    num: 1,
    id: "checkout-discount-coupon-1",
    componentName: "CheckoutDiscountCoupon1",
    title: "Minimal Coupon Input — Smooth Expansion Transition",
    description: "Single-line coupon input with expandable input field and smooth applied status transition."
  },
  {
    num: 2,
    id: "checkout-discount-coupon-2",
    componentName: "CheckoutDiscountCoupon2",
    title: "Coupon Card Collection — Card Lift Selection",
    description: "Collection of available promotional cards displaying codes and minimum order conditions with active card lifting motion."
  },
  {
    num: 3,
    id: "checkout-discount-coupon-3",
    componentName: "CheckoutDiscountCoupon3",
    title: "Ticket Coupon Stub — Clip-Path Edge Reveal",
    description: "Perforated ticket stub coupons with clip-path edge reveal and one-click code copy action."
  },
  {
    num: 4,
    id: "checkout-discount-coupon-4",
    componentName: "CheckoutDiscountCoupon4",
    title: "Split Offer + Code — Dual Panel Directional Slide",
    description: "Two-panel promotional layout featuring a savings highlight message on left and interactive coupon input on right."
  },
  {
    num: 5,
    id: "checkout-discount-coupon-5",
    componentName: "CheckoutDiscountCoupon5",
    title: "Savings-First Design — Animated Savings Counter",
    description: "Hero savings display highlighting total discount amount ($50.00 SAVED) with animated count-in transition."
  },
  {
    num: 6,
    id: "checkout-discount-coupon-6",
    componentName: "CheckoutDiscountCoupon6",
    title: "Horizontal Coupon Carousel — Snap Carousel Motion",
    description: "Horizontal scrollable coupon card strip with smooth snap selection and highlight pill indicators."
  },
  {
    num: 7,
    id: "checkout-discount-coupon-7",
    componentName: "CheckoutDiscountCoupon7",
    title: "Stacked Coupon Cards — Interactive Layer Separation",
    description: "Visually stacked coupon cards that separate into detailed offer tiles upon user interaction."
  },
  {
    num: 8,
    id: "checkout-discount-coupon-8",
    componentName: "CheckoutDiscountCoupon8",
    title: "Premium Dark Coupon — Glowing Border Accent",
    description: "Luxury dark mode coupon box featuring gold subtle borders and controlled glow hover interactions."
  },
  {
    num: 9,
    id: "checkout-discount-coupon-9",
    componentName: "CheckoutDiscountCoupon9",
    title: "Promo Code + Offer Grid — Staggered Tile Reveal",
    description: "Combination of top coupon entry box and a multi-tile promo grid with staggered entrance animation."
  },
  {
    num: 10,
    id: "checkout-discount-coupon-10",
    componentName: "CheckoutDiscountCoupon10",
    title: "Scratch & Reveal Concept — Masked Offer Reveal",
    description: "Interactive secret discount offer box featuring a simulated swipe-to-reveal layer transition."
  },
  {
    num: 11,
    id: "checkout-discount-coupon-11",
    componentName: "CheckoutDiscountCoupon11",
    title: "Discount Progress — SVG Threshold Path Fill",
    description: "Progressive offer unlock bar with animated SVG fill showing progress toward free shipping and extra 20% off."
  },
  {
    num: 12,
    id: "checkout-discount-coupon-12",
    componentName: "CheckoutDiscountCoupon12",
    title: "Coupon Timeline — SVG Connecting Line Draw",
    description: "Timeline flow of unlockable promotional tiers connected by a progressive SVG drawing line."
  },
  {
    num: 13,
    id: "checkout-discount-coupon-13",
    componentName: "CheckoutDiscountCoupon13",
    title: "Receipt Savings — Animated Price Row Insertion",
    description: "Digital receipt savings breakdown with animated insertion of applied discount line items."
  },
  {
    num: 14,
    id: "checkout-discount-coupon-14",
    componentName: "CheckoutDiscountCoupon14",
    title: "Floating Coupon Panel — Layered Depth Rise",
    description: "Floating elevated promo card panel layered over checkout backdrop with subtle depth rise animation."
  },
  {
    num: 15,
    id: "checkout-discount-coupon-15",
    componentName: "CheckoutDiscountCoupon15",
    title: "Icon-Led Offer Selector — Morphing Icon Motion",
    description: "Category-based offer selector with custom animated icons for percentage, shipping, first order, and VIP offers."
  },
  {
    num: 16,
    id: "checkout-discount-coupon-16",
    componentName: "CheckoutDiscountCoupon16",
    title: "Expandable Coupon Drawer — Accordion Height Transition",
    description: "Collapsible promo bar that expands into a full offer selection drawer with layout transition."
  },
  {
    num: 17,
    id: "checkout-discount-coupon-17",
    componentName: "CheckoutDiscountCoupon17",
    title: "Applied Coupon Focus — Animated SVG Checkmark",
    description: "Applied coupon state focus featuring animated SVG checkmark draw, savings summary, and quick remove trigger."
  },
  {
    num: 18,
    id: "checkout-discount-coupon-18",
    componentName: "CheckoutDiscountCoupon18",
    title: "3D Coupon Ticket — Perspective Depth Rotation",
    description: "Interactive 3D coupon ticket card with perspective rotation tilt and floating shadow depth."
  },
  {
    num: 19,
    id: "checkout-discount-coupon-19",
    componentName: "CheckoutDiscountCoupon19",
    title: "Editorial Promo Section — Dual Speed Motion",
    description: "High-fashion editorial promotion section combining oversized typography with dual-speed motion entrance."
  },
  {
    num: 20,
    id: "checkout-discount-coupon-20",
    componentName: "CheckoutDiscountCoupon20",
    title: "Award-Style Coupon Experience — Glassmorphic Ambient Masterpiece",
    description: "Ultimate promotional experience combining glassmorphism ambient light, SVG badges, 3D depth, and micro-interactions."
  }
];

// Write JSON files
variants.forEach(v => {
  const folder = path.join(baseDir, `checkout-discount-coupon-${v.num}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  const jsonPath = path.join(folder, `checkout-discount-coupon-${v.num}.json`);
  const jsonContent = JSON.stringify({
    id: `checkout-discount-coupon-${v.num < 10 ? '0' + v.num : v.num}`,
    title: v.title,
    description: v.description,
    category: "checkout",
    subsection: "checkout-discount-coupon",
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

console.log("JSON files written for all 20 discount coupon variants!");
