const fs = require('fs');
const path = require('path');

const gridFilePath = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let gridCode = fs.readFileSync(gridFilePath, 'utf8');

// Build getSectionsForCategory case block for global-product-grid
let caseBlock = `] : category === 'global-product-grid' ? [\n`;
for (let i = 1; i <= 20; i++) {
  caseBlock += `      { id: 'global-product-grid-${i}', title: 'Global Product Grid ${i}', description: 'Design: Global Product Grid ${i}', previewComponent: <GlobalProductGrid${i} /> },\n`;
}

// Insert right before category === 'global-promotional-banner'
const searchStr = "] : category === 'global-promotional-banner' ? [";
gridCode = gridCode.replace(searchStr, caseBlock + searchStr);

fs.writeFileSync(gridFilePath, gridCode, 'utf8');
console.log('Successfully registered global-product-grid in getSectionsForCategory in SectionLibraryGrid.tsx!');
