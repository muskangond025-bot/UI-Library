const fs = require('fs');
const path = require('path');

const overviewDir = path.resolve(__dirname, '../src/components/sections/account/01-overview');
const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

let importsText = '';
let entriesText = '';

for (let i = 1; i <= 20; i++) {
  const pad = i.toString().padStart(2, '0');
  const componentName = `AccountOverview${i}`;
  const dataName = `accountOverview${pad}Data`;
  const importPath = `../sections/account/01-overview/account-overview-${pad}`;
  
  importsText += `import { ${componentName} } from '${importPath}';\n`;
  importsText += `import ${dataName} from '${importPath}.json';\n`;

  entriesText += `      { id: 'account-overview-${i}', title: ${dataName}.title || 'ACCOUNT OVERVIEW — VARIANT ${pad}', description: ${dataName}.description || 'Account overview variant ${i}', previewComponent: <${componentName} /> },\n`;
}

let gridContent = fs.readFileSync(gridPath, 'utf-8');

// 1. Insert imports at top
gridContent = importsText + '\n' + gridContent;

// 2. Add case to getSectionsForCategory
const caseBlock = `category === 'account-overview' ? [\n${entriesText}    ] : `;
const targetMarker = "category === 'order-success' ?";
gridContent = gridContent.replace(targetMarker, caseBlock + targetMarker);

// 3. Add account-overview to groups filtering
const filterTarget = `groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories, ...orderCategories].filter`;
const filterReplacement = `groups = [...homeCategories, ...productCategories, ...cartCategories, ...checkoutCategories, ...orderCategories, ...accountCategories].filter`;
gridContent = gridContent.replace(filterTarget, filterReplacement);

// 4. Also handle default category alias if needed
const activeCatTarget = `if (activeCat === 'home') {`;
const activeCatReplacement = `if (activeCat === 'account') {\n    activeCat = 'account-overview';\n  } else if (activeCat === 'home') {`;
gridContent = gridContent.replace(activeCatTarget, activeCatReplacement);

fs.writeFileSync(gridPath, gridContent, 'utf-8');
console.log('Successfully registered all 20 account-overview components into SectionLibraryGrid.tsx!');
