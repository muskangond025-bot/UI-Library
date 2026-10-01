const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/16-product-bundles');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Write files for 1 to 20
for (let i = 1; i <= 20; i++) {
  const folder = `product-bundles-${i}`;
  const dirPath = path.join(baseDir, folder);
  ensureDir(dirPath);

  const tsxPath = path.join(dirPath, `ProductBundles${i}.tsx`);
  const jsonPath = path.join(dirPath, `product-bundles-${i}.json`);

  // Simple clean JSON
  const jsonContent = {
    title: `${i < 10 ? '0' + i : i}. PRODUCT BUNDLE ${i}`,
    description: `High-converting interactive product bundle section ${i} with Framer Motion animations.`
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
}

console.log('Folders and JSON initialized for 1 to 20.');
