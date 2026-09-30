const fs = require('fs');
const path = require('path');

Array.from({ length: 10 }).forEach((_, i) => {
  const index = i + 11;
  const name = 'frequently-bought-together-' + index;
  const p = path.join('c:/UI Library/src/components/sections/product/15-frequently-bought-together', name, name + '.json');
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify({
    title: 'Frequently Bought Together ' + index,
    description: 'Beautiful, animated product bundle designs.'
  }, null, 2));
  console.log('Created ' + name + '.json');
});
