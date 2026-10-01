const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = '';
for (let i = 1; i <= 20; i++) {
  imports += `import EmptyCartSection${i} from '../sections/cart/09-empty-cart-section/empty-cart-section-${i}/EmptyCartSection${i}';\n`;
  imports += `import emptyCartSection${i}Data from '../sections/cart/09-empty-cart-section/empty-cart-section-${i}/empty-cart-section-${i}.json';\n`;
}

// Inject imports at top of file after React import
content = content.replace("import React from 'react';", `${imports}\nimport React from 'react';`);

// Build section array
let sectionItems = [];
for (let i = 1; i <= 20; i++) {
  sectionItems.push(`      { id: 'empty-cart-section-${i}', title: emptyCartSection${i}Data.title || 'Empty Cart Section ${i}', description: emptyCartSection${i}Data.description || 'Empty cart layout composition', previewComponent: <EmptyCartSection${i} data={emptyCartSection${i}Data as any} /> }`);
}

let sectionArrayCode = `    category === 'empty-cart-section' ? [\n${sectionItems.join(',\n')}\n    ] : `;

// Replace `] : [];\n  };\n\n  let activeCat = category;`
content = content.replace("] : [];\n  };\n\n  let activeCat = category;", `] : ${sectionArrayCode}[];\n  };\n\n  let activeCat = category;`);

fs.writeFileSync(gridPath, content, 'utf8');
console.log("Registered Empty Cart Section 1 to 20 in SectionLibraryGrid.tsx successfully!");
