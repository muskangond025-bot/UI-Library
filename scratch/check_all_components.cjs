const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/12-shipping-delivery-information');

for (let i = 1; i <= 20; i++) {
  const compDir = path.join(baseDir, `shipping-delivery-information-${i}`);
  const tsxPath = path.join(compDir, `ShippingDeliveryInformation${i}.tsx`);
  const jsonPath = path.join(compDir, `shipping-delivery-information-${i}.json`);

  if (!fs.existsSync(tsxPath)) {
    console.log(`Missing TSX: ${i}`);
    continue;
  }
  
  const tsxContent = fs.readFileSync(tsxPath, 'utf8');
  let jsonContent = {};
  if (fs.existsSync(jsonPath)) {
    jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  }

  // Check for potential unsafe property accesses on settings inside TSX
  const matches = tsxContent.match(/settings\.([a-zA-Z0-9_]+)\.map/g);
  if (matches) {
    matches.forEach(m => {
      const prop = m.replace('settings.', '').replace('.map', '');
      const settings = jsonContent?.section?.settings || {};
      if (!settings[prop]) {
        console.log(`WARNING Component ${i}: settings.${prop}.map called, but '${prop}' is missing in JSON settings!`);
      }
    });
  }
}
console.log('Check completed.');
