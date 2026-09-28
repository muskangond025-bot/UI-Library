const fs = require('fs');
const path = require('path');

const descriptions = {
  1: "Standard Grid with hover zoom & smooth crossfade animations",
  2: "Masonry Grid with fade-up glassmorphism overlays",
  3: "Infinite Horizontal Marquee with zoom-on-hover",
  4: "Feature Focus (1 large image, smaller stacked thumbnails)",
  5: "Sliding Carousel with Glass Icons and pagination",
  6: "Asymmetric Split Layout (text details left, gallery grid right)",
  7: "Scroll-linked Parallax Gallery (opposite movement on scroll)",
  8: "Expanding Cards / Accordion style gallery (hover to expand)",
  9: "Aesthetic Presentation layout with sub-images",
  10: "Cinematic Full-width Slides with sleek typography"
};

for (let i = 1; i <= 10; i++) {
  const jsonPath = path.join(__dirname, '../src/components/sections/product/01-product-gallery/product-gallery-' + i + '/product-gallery-' + i + '.json');
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    data.description = descriptions[i];
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    console.log('Updated description for product-gallery-' + i + '.json');
  }
}
