const fs = require('fs');
const path = require('path');

const file8 = path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-8/WhatSIncluded8.tsx');
const file8New = path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-8/WhatSIncluded8_CacheBust.tsx');

if (fs.existsSync(file8)) {
  fs.renameSync(file8, file8New);
}

const file9 = path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-9/WhatSIncluded9.tsx');
const file9New = path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-9/WhatSIncluded9_CacheBust.tsx');

if (fs.existsSync(file9)) {
  fs.renameSync(file9, file9New);
}

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

content = content.replace(
  "import WhatSIncluded8 from '../sections/product/08-whats-included/what-s-included-8/WhatSIncluded8';",
  "import WhatSIncluded8 from '../sections/product/08-whats-included/what-s-included-8/WhatSIncluded8_CacheBust';"
);
content = content.replace(
  "import WhatSIncluded9 from '../sections/product/08-whats-included/what-s-included-9/WhatSIncluded9';",
  "import WhatSIncluded9 from '../sections/product/08-whats-included/what-s-included-9/WhatSIncluded9_CacheBust';"
);

// Add timestamp to force HMR
content += '\\n// Cache bust ' + Date.now();

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Renamed 8 and 9 to force Vite to load the new files.');
