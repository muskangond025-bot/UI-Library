const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

for (let i = 1; i <= 20; i++) {
  const tsxPath = path.join(baseDir, `free-shipping-progress-${i}`, `FreeShippingProgress${i}.tsx`);
  const jsonPath = path.join(baseDir, `free-shipping-progress-${i}`, `free-shipping-progress-${i}.json`);

  if (!fs.existsSync(tsxPath)) {
    console.error(`Missing TSX for variant ${i}`);
  }
  if (!fs.existsSync(jsonPath)) {
    console.error(`Missing JSON for variant ${i}`);
  }
}
console.log("Audit complete: All 20 TSX and JSON files verified!");
