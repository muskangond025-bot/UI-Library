const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = '';
for (let i = 1; i <= 20; i++) {
  imports += `import RecentlyViewedProducts${i} from '../sections/cart/08-recently-viewed-products/recently-viewed-products-${i}/RecentlyViewedProducts${i}';\n`;
  imports += `import recentlyViewedProducts${i}Data from '../sections/cart/08-recently-viewed-products/recently-viewed-products-${i}/recently-viewed-products-${i}.json';\n`;
}

// Inject imports at top of file after React import
content = content.replace("import React from 'react';", `${imports}\nimport React from 'react';`);

// Build section array
let sectionItems = [];
for (let i = 1; i <= 20; i++) {
  sectionItems.push(`      { id: 'recently-viewed-products-${i}', title: recentlyViewedProducts${i}Data.title || 'Recently Viewed Products ${i}', description: recentlyViewedProducts${i}Data.description || 'Recently viewed items display', previewComponent: <RecentlyViewedProducts${i} data={recentlyViewedProducts${i}Data as any} /> }`);
}

let sectionArrayCode = `    category === 'recently-viewed-products' ? [\n${sectionItems.join(',\n')}\n    ] : `;

// Replace the fallback `] : [];` before `let activeCat = category;`
content = content.replace("] : [];\n  };\n\n  let activeCat = category;", `] : ${sectionArrayCode}[];\n  };\n\n  let activeCat = category;`);

fs.writeFileSync(gridPath, content, 'utf8');
console.log("Registered Recently Viewed Products in SectionLibraryGrid.tsx successfully!");
