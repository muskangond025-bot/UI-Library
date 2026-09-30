const fs = require('fs');
const path = require('path');

Array.from({ length: 10 }).forEach((_, i) => {
  const index = i + 11;
  const name = 'payment-information-' + index;
  const p = path.join('c:/UI Library/src/components/sections/product/14-payment-information', name, name + '.json');
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify({
    title: 'Payment Information ' + index,
    description: 'Beautiful, animated payment and security UI designs.'
  }, null, 2));
  console.log('Created ' + name + '.json');
});
