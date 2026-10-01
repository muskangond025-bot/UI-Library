const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const titles = [
  "Editorial Typography Statement",
  "Radial Donut Threshold Gauge",
  "Milestone Roadmap Journey",
  "Vertical Process Flow Column",
  "Threshold Split Comparison",
  "Segmented Block Track Meter",
  "Shopping Bag Fill Graphic",
  "Package Box Level Indicator",
  "Target Destination Bulls-Eye",
  "Countdown Distance Counter",
  "Multi-Tier Benefit Ladder",
  "Asymmetric Editorial Layout",
  "Full-Width Commerce Status Strip",
  "Vertical Thermometer Meter",
  "Ring + Content Split Layout",
  "Interactive Benefit Reveal",
  "Minimal Cart Sidebar Micro Pill",
  "Achievement State Transformation",
  "Visual Route Path Journey",
  "Experimental Award Glassmorphic"
];

const descs = [
  "No card container box. Oversized typography hero statement placing focus on the exact remaining amount with a minimal underline progress line.",
  "Large circular donut progress gauge centered visually with percentage readout inside and remaining details below.",
  "Horizontal roadmap timeline with milestone nodes connecting cart total to destination.",
  "Vertical process column connecting Cart Value down to Free Shipping Target.",
  "2-column split card comparing Current Cart Value against Target Threshold with a middle indicator bridge.",
  "Discrete block segments that illuminate step-by-step.",
  "Vector Shopping Bag illustration filling with liquid color as threshold increases.",
  "Delivery box visual filling up progressively.",
  "Visual target destination with an animated pointer moving toward the zero shipping fee target center.",
  "Digital timer aesthetic focusing on exact distance remaining.",
  "3-tier step ladder showing active level highlight.",
  "Asymmetric off-center composition with massive metric left and stacked progress right.",
  "Edge-to-edge commerce status strip across the page.",
  "Vertical progress gauge rising upward.",
  "Ring chart on left, detailed info breakdown on right.",
  "Milestones reveal perks upon progression.",
  "Ultra-compact status pill for cart sidebar.",
  "Focuses on the transformation between LOCKED and UNLOCKED states.",
  "Winding SVG path with delivery van traveling along the path.",
  "Unconventional award-level glassmorphic card featuring dimensional motion & liquid wave physics."
];

const items = [];
for (let i = 1; i <= 20; i++) {
  items.push(`{ id: 'free-shipping-progress-${i}', title: ${JSON.stringify(titles[i-1])}, description: ${JSON.stringify(descs[i-1])}, previewComponent: <FreeShippingProgress${i} data={freeShippingProgress${i}Data} /> }`);
}

const targetCode = `category === 'free-shipping-progress' ? [\n      ${items.join(',\n      ')}\n    ] : `;

const searchRegex = /category === 'free-shipping-progress' \? \[\s*[\s\S]*?\s*\] : /;

if (searchRegex.test(content)) {
  content = content.replace(searchRegex, targetCode);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log("SectionLibraryGrid updated with new distinct titles and descriptions!");
} else {
  console.log("Pattern not matched.");
}
