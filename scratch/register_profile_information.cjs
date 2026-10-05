const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

let importsText = '';
let entriesText = '';

for (let i = 1; i <= 20; i++) {
  const pad = i.toString().padStart(2, '0');
  const componentName = `AccountProfileInformation${i}`;
  const dataName = `accountProfileInformation${pad}Data`;
  const importPath = `../sections/account/02-profile-information/account-profile-information-${pad}`;
  
  importsText += `import { ${componentName} } from '${importPath}';\n`;
  importsText += `import ${dataName} from '${importPath}.json';\n`;

  entriesText += `      { id: 'account-profile-information-${i}', title: ${dataName}.title || 'PROFILE INFORMATION — VARIANT ${pad}', description: ${dataName}.description || 'Profile information variant ${i}', previewComponent: <${componentName} /> },\n`;
}

let gridContent = fs.readFileSync(gridPath, 'utf-8');

// 1. Insert imports at top
gridContent = importsText + '\n' + gridContent;

// 2. Add case to getSectionsForCategory
const caseBlock = `category === 'account-profile-information' ? [\n${entriesText}    ] : `;
const targetMarker = "category === 'account-overview' ?";
gridContent = gridContent.replace(targetMarker, caseBlock + targetMarker);

fs.writeFileSync(gridPath, gridContent, 'utf-8');
console.log('Successfully registered all 20 account-profile-information components into SectionLibraryGrid.tsx!');
