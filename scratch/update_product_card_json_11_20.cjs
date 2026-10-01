const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/10-product-card');

const meta = {
  11: {
    title: "Cursor Reactive Gaming Headset Card",
    description: "Dark mode cursor-tracking spotlight glow card with Flat EQ and Bass Boosted audio toggle switches."
  },
  12: {
    title: "Interactive Kit Addon Card with Haptic Feedback",
    description: "Action camera card with checkable kit accessories and simulated haptic shake error feedback on checkout."
  },
  13: {
    title: "3D Perspective Tilt Studio Headphone Card",
    description: "Interactive 3D tilt card that rotates smoothly on mouse hover using Framer Motion perspective transforms."
  },
  14: {
    title: "Shared-Element Quick-View Trench Coat Card",
    description: "High-fashion apparel card featuring an interactive full-screen quick-view modal overlay with shared-element transition."
  },
  15: {
    title: "Cinematic Sound Aura Noise-Canceling Card",
    description: "Dark synthwave aesthetic card with pulsating background aura glow and sound test playback simulation."
  },
  16: {
    title: "Multi-Step Custom Engraving Watch Card",
    description: "3-step interactive checkout wizard card (Variant -> Laser Engraving -> Order Summary)."
  },
  17: {
    title: "Dynamic Light/Dark Mode Switcher Card",
    description: "In-card theme switcher toggle allowing real-time color interpolation between sleek dark and clean light mode."
  },
  18: {
    title: "Skeleton-to-Data Loader Ring Light Card",
    description: "Interactive loading state demo card with shimmering skeleton placeholders transitioning into real data."
  },
  19: {
    title: "Organic Eco Blob Mini Tripod Card",
    description: "Glassmorphism card set against continuously rotating background gradient SVG blobs."
  },
  20: {
    title: "Ergonomic Workstation Standing Desk Card",
    description: "High-converting product card for luxury standing desk workstation setup with rating stars and instant order CTA."
  }
};

for (let i = 11; i <= 20; i++) {
  const folder = `product-card-${i}`;
  const jsonPath = path.join(baseDir, folder, `product-card-${i}.json`);
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    data.title = meta[i].title;
    data.description = meta[i].description;
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  }
}
console.log('JSON metadata 11 to 20 updated successfully!');
