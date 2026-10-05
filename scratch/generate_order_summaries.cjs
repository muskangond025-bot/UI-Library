const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '07-order-summary');

const variants = [
  {
    num: 1,
    id: "checkout-order-summary-1",
    componentName: "CheckoutOrderSummary1",
    title: "Premium Order Card — Staggered Card Reveal",
    description: "Refined dark glassmorphic ecommerce order card with staggered product entry motion and animated subtotal breakdown.",
  },
  {
    num: 2,
    id: "checkout-order-summary-2",
    componentName: "CheckoutOrderSummary2",
    title: "Editorial Order Summary — Sequential Magazine Reveal",
    description: "Oversized serif typography with magazine-style product layout and anchored financial sidebar.",
  },
  {
    num: 3,
    id: "checkout-order-summary-3",
    componentName: "CheckoutOrderSummary3",
    title: "Compact Checkout Summary — Animated Value Counter",
    description: "Dense, space-saving order summary optimized for checkout sidebars with spring scale price animations.",
  },
  {
    num: 4,
    id: "checkout-order-summary-4",
    componentName: "CheckoutOrderSummary4",
    title: "Split Product + Total — Independent Dual Panel Reveal",
    description: "Dual-column split layout separating detailed item gallery from a highlighted indigo summary card.",
  },
  {
    num: 5,
    id: "checkout-order-summary-5",
    componentName: "CheckoutOrderSummary5",
    title: "Product Stack — Layered Card Unstack Reveal",
    description: "Visual card-stack order summary where overlapping product cards unstack into a structured order overview.",
  },
  {
    num: 6,
    id: "checkout-order-summary-6",
    componentName: "CheckoutOrderSummary6",
    title: "Timeline Order Summary — SVG Path Draw Reveal",
    description: "Order summary structured along a vertical SVG timeline connecting items, shipping estimate, and final total.",
  },
  {
    num: 7,
    id: "checkout-order-summary-7",
    componentName: "CheckoutOrderSummary7",
    title: "Minimal Monochrome — Progressive Line Draw",
    description: "Stark black and white minimal design with clean typography and progressive horizontal line animations.",
  },
  {
    num: 8,
    id: "checkout-order-summary-8",
    componentName: "CheckoutOrderSummary8",
    title: "Dark Premium Order — Depth Reveal Image Cards",
    description: "Luxury midnight dark mode checkout summary with glowing subtle borders and depth-animated product artwork.",
  },
  {
    num: 9,
    id: "checkout-order-summary-9",
    componentName: "CheckoutOrderSummary9",
    title: "Cart-Inspired Summary — Sequential Item Slide",
    description: "Polished mini-cart style order summary with slide-in item rows, quantity modifiers, and promo toggle.",
  },
  {
    num: 10,
    id: "checkout-order-summary-10",
    componentName: "CheckoutOrderSummary10",
    title: "Large Product Image — Image Clip Reveal",
    description: "Imagery-focused order summary giving hero prominence to main items with structured pricing panel.",
  },
  {
    num: 11,
    id: "checkout-order-summary-11",
    componentName: "CheckoutOrderSummary11",
    title: "Price-First Summary — Animated Calculation Sequence",
    description: "Financial-focused summary making subtotal, savings discount, tax, shipping, and grand total visually dominant.",
  },
  {
    num: 12,
    id: "checkout-order-summary-12",
    componentName: "CheckoutOrderSummary12",
    title: "Receipt-Inspired Summary — Top-to-Bottom Receipt Unroll",
    description: "Modern digital receipt layout featuring zig-zag edge detail, monospaced receipt font, barcode SVG, and paper unroll animation.",
  },
  {
    num: 13,
    id: "checkout-order-summary-13",
    componentName: "CheckoutOrderSummary13",
    title: "Horizontal Order Summary — Horizontal Slide Layout",
    description: "Wide horizontal product carousel summary with side-by-side product cards and right-anchored total card.",
  },
  {
    num: 14,
    id: "checkout-order-summary-14",
    componentName: "CheckoutOrderSummary14",
    title: "Product + Delivery Context — Connected Section Motion",
    description: "Order summary integrating product overview with live delivery ETA badge and shipping carrier context.",
  },
  {
    num: 15,
    id: "checkout-order-summary-15",
    componentName: "CheckoutOrderSummary15",
    title: "Collapsible Order Summary — Accordion Layout Transition",
    description: "Space-saving expandable summary allowing customers to toggle detailed item list or view quick totals.",
  },
  {
    num: 16,
    id: "checkout-order-summary-16",
    componentName: "CheckoutOrderSummary16",
    title: "3D Product Stack — Interactive Depth Parallax",
    description: "Layered product cards with subtle 3D perspective effect and hover depth interaction.",
  },
  {
    num: 17,
    id: "checkout-order-summary-17",
    componentName: "CheckoutOrderSummary17",
    title: "Asymmetric Grid Summary — Independent Grid Item Reveal",
    description: "Editorial asymmetric grid composition balancing unequal visual weights for items, pricing breakdown, and grand total.",
  },
  {
    num: 18,
    id: "checkout-order-summary-18",
    componentName: "CheckoutOrderSummary18",
    title: "Visual Price Breakdown — SVG Path Calculation Flow",
    description: "Interactive visual calculation diagram connecting Subtotal + Discount + Shipping + Tax to Grand Total using animated SVG lines.",
  },
  {
    num: 19,
    id: "checkout-order-summary-19",
    componentName: "CheckoutOrderSummary19",
    title: "Magazine Checkout Summary — Dual Motion System Layout",
    description: "Luxury magazine checkout section with large serif headlines, offset product cards, and dual-speed motion entrance.",
  },
  {
    num: 20,
    id: "checkout-order-summary-20",
    componentName: "CheckoutOrderSummary20",
    title: "Award-Style Order Summary — Glassmorphic Micro-Interaction Masterpiece",
    description: "Ultimate order summary combining glassmorphism ambient light, SVG badges, 3D card depth, and refined micro-interactions.",
  }
];

// Write json files
variants.forEach(v => {
  const folder = path.join(baseDir, `checkout-order-summary-${v.num}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  const jsonPath = path.join(folder, `checkout-order-summary-${v.num}.json`);
  const jsonContent = JSON.stringify({
    id: `checkout-order-summary-${v.num < 10 ? '0' + v.num : v.num}`,
    title: v.title,
    description: v.description,
    category: "checkout",
    subsection: "checkout-order-summary",
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

console.log("JSON files written successfully!");
