const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/15-frequently-bought-together');

const details = {
  1: {
    title: "Glassmorphism Ecosystem Bundle",
    description: "Sleek dark glassmorphism card stack with active item highlights, interactive checkbox toggles, dynamic price counter animations, and hover elevation."
  },
  2: {
    title: "Interactive Modular Rack Kit",
    description: "Modern horizontal module selector with smooth Framer Motion spring sliders, real-time total savings calculator, and soft ambient neon backdrop glow."
  },
  3: {
    title: "3D Drop Tray Studio Kit",
    description: "Interactive 3D drop-tray layout with floating card elevation, spring physics expand/collapse animations, and glow indicator badges."
  },
  4: {
    title: "Magnetic Orbit Tech Cluster",
    description: "Orbital visual layout featuring interactive revolving module nodes, dynamic SVG connection lines, and glowing pulse data animation."
  },
  5: {
    title: "Minimalist Light Theme Bundle",
    description: "Clean high-contrast light theme design with crisp micro-interactions, smooth hover scaling, and interactive checkbox state transitions."
  },
  6: {
    title: "Neumorphic Luxury Audio Pack",
    description: "Soft tactile neumorphic elevation cards, subtle inset shadow toggle switches, and smooth animated summary breakdown."
  },
  7: {
    title: "Bright Non-Rotated Stack Cards",
    description: "Clean bright container layout with un-rotated stack cards, smooth slide-in entry animations, and clear savings callout tags."
  },
  8: {
    title: "Cyber Matrix Creator Kit",
    description: "Dark futuristic cyber grid theme with glowing neon borders, real Unsplash hardware imagery, and Framer Motion hover feedback."
  },
  9: {
    title: "Accordion Expandable Cross-Sell",
    description: "Smooth Framer Motion layout accordion with fluid height transitions, icon badge highlights, and instant bundle cart actions."
  },
  10: {
    title: "Split-Screen Hero Inspector",
    description: "Hero product inspector with side-by-side add-on selection panel, real-time savings counter, and smooth spring badge popups."
  },
  11: {
    title: "Vertical Timeline Accessory Rail",
    description: "Step-by-step vertical timeline connector layout with progressive checkmarks, animated connection fill, and hover zoom."
  },
  12: {
    title: "Floating Carousel Bundle Showcase",
    description: "Horizontal swipeable card carousel with spring-damped drag interactions, snap-to-grid pagination, and smooth badge pulse."
  },
  13: {
    title: "Interactive Portal Reveal Doors",
    description: "Dual sliding portal door animation revealing attached modular accessories with smooth layout transitions and clean zero-overlap text."
  },
  14: {
    title: "Developer Workstation Power Kit",
    description: "Simple & premium developer setup layout featuring real hardware photos, clean grid alignment, and single-dollar price accuracy."
  },
  15: {
    title: "Minimal Glass Card Reel",
    description: "Ultra-clean frosted glass card layout with glowing selection borders, fluid scale animations, and instant bundle total recalculation."
  },
  16: {
    title: "Pro Lens & Gear Kit Showcase",
    description: "High-end photography gear kit layout with real Unsplash camera equipment photos, interactive badge toggles, and smooth spring physics."
  },
  17: {
    title: "Compact Horizontal Drawer Kit",
    description: "Space-saving horizontal drawer selector with smooth expand/collapse Framer Motion transitions and high-contrast badges."
  },
  18: {
    title: "Tablet Pro Ecosystem Stack",
    description: "Luxury tablet & stylus accessory bundle with real product imagery, interactive pill badges, and smooth hover elevation."
  },
  19: {
    title: "Vlogging Master Orbital Kit",
    description: "Orbital accessory node layout with top-hemisphere badge positioning, zero text truncation, floating glass drawer, and smooth spring animations."
  },
  20: {
    title: "Ergonomic Workstation Setup Suite",
    description: "High-converting e-commerce product card grid with real lifestyle photos, rating badges, savings calculator, and smooth hover interactions."
  }
};

for (let i = 1; i <= 20; i++) {
  const folder = `frequently-bought-together-${i}`;
  const jsonPath = path.join(baseDir, folder, `${folder}.json`);
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    data.title = details[i].title;
    data.description = details[i].description;
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${folder}.json`);
  }
}
console.log('All 20 JSON metadata files updated successfully!');
