const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const titles = [
  "Classic Bar Fill", "Radial Donut Progress", "Milestone Roadmap", "Distance-To-Go Hero",
  "Savings Reveal Card", "Offset Ring & Total", "Multi-Tier Ladder", "Cardless Editorial",
  "Stacked Progress Flow", "Horizontal Journey", "Floating Target Badge", "Shopping Bag Fill",
  "Package Box Meter", "Segmented Block Meter", "Minimal Floating Pill", "Asymmetric Split",
  "Full-Width Status Banner", "Interactive Perk Unlocker", "State-Shift Achievement", "Experimental Liquid Wave"
];

const descs = [
  "A bright horizontal progress bar that fills smoothly toward the free shipping goal with real-time percentage badge.",
  "A circular SVG radial tracker with central spend percentage and surrounding progress statistics.",
  "A horizontal roadmap connecting ₹0 to Free Shipping with glowing milestone nodes.",
  "Over-sized typography placing focus on the exact remaining amount required to unlock free delivery.",
  "A card highlighting potential delivery cost savings with a dynamic progress fill.",
  "A large side-by-side ring chart displaying cart metrics with a right-aligned unlock breakdown.",
  "A vertical benefit ladder showing progress across Standard, Express, and Free Shipping tiers.",
  "Minimalist high-fashion typography with a subtle animated underline progress track.",
  "Vertical stage cards connecting current cart value, remaining gap, and final unlock target.",
  "An interactive horizontal scroll track with swipeable milestone cards.",
  "A 3D floating target destination badge that shifts closer as cart value increases.",
  "A vector shopping bag illustration that fills with liquid color as threshold is approached.",
  "A delivery box visual representation that fills layer-by-layer up to 100%.",
  "Five discrete block segments that illuminate sequentially as spending milestones are met.",
  "A compact floating status pill designed for header cart popups and mobile drawers.",
  "Asymmetric split composition with massive remaining gap on left and detailed progress right.",
  "An edge-to-edge commerce status bar with live progress indicators and continuation CTA.",
  "Multi-level perk unlocks revealing bonus gifts, priority packing, and free shipping.",
  "A vivid locked-to-unlocked state transformation with success micro-animations.",
  "Glassmorphic card featuring interactive state toggle, liquid progress waves, and floating badge physics."
];

const items = [];
for (let i = 1; i <= 20; i++) {
  items.push(`{ id: 'free-shipping-progress-${i}', title: ${JSON.stringify(titles[i-1])}, description: ${JSON.stringify(descs[i-1])}, previewComponent: <FreeShippingProgress${i} data={freeShippingProgress${i}Data} /> }`);
}

const targetStr = `const getSectionsForCategory = (category: string) => {\n    return category === 'free-shipping-progress' ? [\n      ${items.join(',\n      ')}\n    ] : `;

const originalStr = `const getSectionsForCategory = (category: string) => {\n    return `;

if (content.includes(originalStr)) {
  content = content.replace(originalStr, targetStr);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log("Successfully injected free-shipping-progress category array into getSectionsForCategory!");
} else {
  console.error("Original target string not found!");
}
