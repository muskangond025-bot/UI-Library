const fs = require('fs');
const path = require('path');

const reliableImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80", // Red Nike
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80", // Headphones
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80", // Watch
  "https://images.unsplash.com/photo-1546435770-a3e426fa03bd?w=1200&q=80", // Camera
  "https://images.unsplash.com/photo-1583394838173-6143b40d6cda?w=1200&q=80", // Sneaker
  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=80", // Speaker
  "https://images.unsplash.com/photo-1528702748617-c64d49e9cb99?w=1200&q=80", // Polaroid
  "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?w=1200&q=80"  // Pink camera
];

for (let i = 1; i <= 20; i++) {
  const jsonPath = path.join(__dirname, '../src/components/sections/product/01-product-gallery/product-gallery-' + i + '/product-gallery-' + i + '.json');
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const start = i % 4;
    data.settings = data.settings || {};
    data.settings.images = [
      reliableImages[start],
      reliableImages[(start + 1) % 8],
      reliableImages[(start + 2) % 8],
      reliableImages[(start + 3) % 8],
      reliableImages[(start + 4) % 8]
    ];
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    console.log('Updated images for product-gallery-' + i + '.json');
  }
}
