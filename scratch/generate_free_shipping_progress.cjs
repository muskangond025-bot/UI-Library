const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// 20 unique concepts & titles
const variants = [
  {
    num: 1,
    title: "Classic Bar Fill",
    desc: "A bright horizontal progress bar that fills smoothly toward the free shipping goal with real-time percentage badge.",
    compName: "FreeShippingProgress1"
  },
  {
    num: 2,
    title: "Radial Donut Progress",
    desc: "A circular SVG radial tracker with central spend percentage and surrounding progress statistics.",
    compName: "FreeShippingProgress2"
  },
  {
    num: 3,
    title: "Milestone Journey Track",
    desc: "A horizontal roadmap connecting ₹0 to Free Shipping with glowing milestone nodes.",
    compName: "FreeShippingProgress3"
  },
  {
    num: 4,
    title: "Distance-To-Go Hero",
    desc: "Over-sized typography placing focus on the exact remaining amount required to unlock free delivery.",
    compName: "FreeShippingProgress4"
  },
  {
    num: 5,
    title: "Savings Reveal Card",
    desc: "A card highlighting potential delivery cost savings with a dynamic progress fill.",
    compName: "FreeShippingProgress5"
  },
  {
    num: 6,
    title: "Offset Ring & Total",
    desc: "A large side-by-side ring chart displaying cart metrics with a right-aligned unlock breakdown.",
    compName: "FreeShippingProgress6"
  },
  {
    num: 7,
    title: "Multi-Tier Benefit Ladder",
    desc: "A vertical benefit ladder showing progress across Standard, Express, and Free Shipping tiers.",
    compName: "FreeShippingProgress7"
  },
  {
    num: 8,
    title: "Cardless Editorial Typography",
    desc: "Minimalist high-fashion typography with a subtle animated underline progress track.",
    compName: "FreeShippingProgress8"
  },
  {
    num: 9,
    title: "Stacked Progress Flow",
    desc: "Vertical stage cards connecting current cart value, remaining gap, and final unlock target.",
    compName: "FreeShippingProgress9"
  },
  {
    num: 10,
    title: "Horizontal Scroll Journey",
    desc: "An interactive horizontal scroll track with swipeable milestone cards.",
    compName: "FreeShippingProgress10"
  },
  {
    num: 11,
    title: "Floating Target Badge",
    desc: "A 3D floating target destination badge that shifts closer as cart value increases.",
    compName: "FreeShippingProgress11"
  },
  {
    num: 12,
    title: "Shopping Bag Liquid Fill",
    desc: "A vector shopping bag illustration that fills with liquid color as threshold is approached.",
    compName: "FreeShippingProgress12"
  },
  {
    num: 13,
    title: "Package Box Meter",
    desc: "A delivery box visual representation that fills layer-by-layer up to 100%.",
    compName: "FreeShippingProgress13"
  },
  {
    num: 14,
    title: "Segmented Block Meter",
    desc: "Five discrete block segments that illuminate sequentially as spending milestones are met.",
    compName: "FreeShippingProgress14"
  },
  {
    num: 15,
    title: "Minimal Floating Pill",
    desc: "A compact floating status pill designed for header cart popups and mobile drawers.",
    compName: "FreeShippingProgress15"
  },
  {
    num: 16,
    title: "Asymmetric Split Metric",
    desc: "Asymmetric split composition with massive remaining gap on left and detailed progress right.",
    compName: "FreeShippingProgress16"
  },
  {
    num: 17,
    title: "Full-Width Status Banner",
    desc: "An edge-to-edge commerce status bar with live progress indicators and continuation CTA.",
    compName: "FreeShippingProgress17"
  },
  {
    num: 18,
    title: "Interactive Perk Unlocker",
    desc: "Multi-level perk unlocks revealing bonus gifts, priority packing, and free shipping.",
    compName: "FreeShippingProgress18"
  },
  {
    num: 19,
    title: "State-Shift Achievement",
    desc: "A vivid locked-to-unlocked state transformation with success micro-animations.",
    compName: "FreeShippingProgress19"
  },
  {
    num: 20,
    title: "Experimental Liquid Wave",
    desc: "Glassmorphic card featuring interactive state toggle, liquid progress waves, and floating badge physics.",
    compName: "FreeShippingProgress20"
  }
];

console.log("Variants defined:", variants.length);
