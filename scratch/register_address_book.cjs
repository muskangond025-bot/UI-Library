const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

let importsText = '';
let entriesText = '';

for (let i = 1; i <= 20; i++) {
  const pad = i.toString().padStart(2, '0');
  const componentName = `AccountAddressBook${i}`;
  const dataName = `accountAddressBook${pad}Data`;
  const importPath = `../sections/account/03-address-book/account-address-book-${pad}`;
  
  importsText += `import { ${componentName} } from '${importPath}';\n`;
  importsText += `import ${dataName} from '${importPath}.json';\n`;

  entriesText += `      { id: 'account-address-book-${i}', title: ${dataName}.title || 'SAVED ADDRESSES — VARIANT ${pad}', description: ${dataName}.description || 'Saved address variant ${i}', previewComponent: <${componentName} /> },\n`;
}

let gridContent = fs.readFileSync(gridPath, 'utf-8');

// 1. Insert imports at top
gridContent = importsText + '\n' + gridContent;

// 2. Add case to getSectionsForCategory
const caseBlock = `category === 'account-address-book' ? [\n${entriesText}    ] : `;
const targetMarker = "category === 'account-profile-information' ?";
gridContent = gridContent.replace(targetMarker, caseBlock + targetMarker);

fs.writeFileSync(gridPath, gridContent, 'utf-8');
console.log('Successfully registered all 20 account-address-book components into SectionLibraryGrid.tsx!');
