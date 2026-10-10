const fs = require('fs');
const path = require('path');

const gridFilePath = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let gridCode = fs.readFileSync(gridFilePath, 'utf8');

// Build imports
let imports = '';
for (let i = 1; i <= 20; i++) {
  imports += `import { GlobalProductCarousel${i} } from '../sections/global/07-product-carousel/global-product-carousel-${i}/GlobalProductCarousel${i}';\n`;
}

// Add imports at top
gridCode = imports + gridCode;

// Build getSectionsForCategory case block for global-product-carousel
let caseBlock = `] : category === 'global-product-carousel' ? [\n`;
for (let i = 1; i <= 20; i++) {
  caseBlock += `      { id: 'global-product-carousel-${i}', title: 'Global Product Carousel ${i}', description: 'Design: Global Product Carousel ${i}', previewComponent: <GlobalProductCarousel${i} /> },\n`;
}

// Insert right before category === 'global-product-grid'
const searchStr = "] : category === 'global-product-grid' ? [";
gridCode = gridCode.replace(searchStr, caseBlock + searchStr);

fs.writeFileSync(gridFilePath, gridCode, 'utf8');
console.log('Successfully registered global-product-carousel in getSectionsForCategory in SectionLibraryGrid.tsx!');
