const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/10-product-card');

const meta = {
  1: {
    title: "Glassmorphism Audio Headphone Card",
    description: "Frosted acrylic glass backdrop with dynamic color swatch selector, floating wishlist morph button, and active cart toast."
  },
  2: {
    title: "Multi-Variant Smartwatch Stack Card",
    description: "Interactive horizontal variant tab switcher with smooth crossfade slide animations and detailed tech specs breakdown."
  },
  3: {
    title: "360-Degree Interactive View Camera Card",
    description: "Interactive rotation slider allowing users to inspect camera angles in real time with high-contrast stock badges."
  },
  4: {
    title: "Minimalist Luxury Apparel Card",
    description: "Scandinavian dark theme coat card featuring interactive size picker (S, M, L, XL) and handcrafted badge."
  },
  5: {
    title: "Neumorphic Tactile Fitness Tracker Card",
    description: "Soft tactile elevation card with band variant selector, battery life status widget, and high-impact CTA."
  },
  6: {
    title: "Cyber Matrix GPU Processor Card",
    description: "Futuristic dark cyber grid aesthetic with glowing emerald borders, hardware specs, and MSRP checkout."
  },
  7: {
    title: "Vintage Camera Uncover Card",
    description: "Classic instant camera showcase with discount percentage badge, review rating stars, and gradient purchase action."
  },
  8: {
    title: "Limited Edition Sneakerhead Card",
    description: "High-energy sneaker card featuring EU shoe size selection buttons, limited run tag, and vibrant red accents."
  },
  9: {
    title: "Accordion Spec Drawer Timepiece Card",
    description: "Luxury timepiece card with expandable technical specifications accordion drawer and fluid Framer Motion spring transition."
  },
  10: {
    title: "Next-Gen AR Creator Microphone Card",
    description: "High-impact creator mic showcase card with AR-ready badge, star rating breakdown, and purple glow ambient backdrop."
  }
};

for (let i = 1; i <= 10; i++) {
  const folder = `product-card-${i}`;
  const jsonPath = path.join(baseDir, folder, `product-card-${i}.json`);
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    data.title = meta[i].title;
    data.description = meta[i].description;
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  }
}
console.log('JSON metadata 1 to 10 updated successfully!');
