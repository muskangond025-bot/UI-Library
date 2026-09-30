const fs = require('fs');
const path = require('path');

Array.from({ length: 10 }).forEach((_, i) => {
  const index = i + 11;
  const name = 'return-refund-information-' + index;
  const p = path.join('c:/UI Library/src/components/sections/product/13-return-refund-information', name, name + '.json');
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify({
    title: 'Return & Refund Information ' + index,
    description: 'Clear presentation of return policies, refund processes, and related information.'
  }, null, 2));
  console.log('Created ' + name + '.json');
});
