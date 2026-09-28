const fs = require('fs');
const path = require('path');

const previewLayoutPath = path.join(__dirname, '../src/components/section-library/SectionPreviewLayout.tsx');
let content = fs.readFileSync(previewLayoutPath, 'utf8');

let importsToAdd = '';
for (let i = 11; i <= 20; i++) {
  importsToAdd += 'import ProductGallery' + i + ' from \'../sections/product/01-product-gallery/product-gallery-' + i + '/ProductGallery' + i + '\';\n';
  importsToAdd += 'import productGallery' + i + 'Data from \'../sections/product/01-product-gallery/product-gallery-' + i + '/product-gallery-' + i + '.json\';\n';
}

const lastImportIndex = content.lastIndexOf('import ');
const lastImportEnd = content.indexOf('\n', lastImportIndex);
content = content.slice(0, lastImportEnd + 1) + importsToAdd + content.slice(lastImportEnd + 1);

let casesToAdd = '';
for (let i = 11; i <= 20; i++) {
  casesToAdd += ') : sectionId === \'product-gallery-' + i + '\' ? (\n              <ProductGallery' + i + ' data={sectionData || productGallery' + i + 'Data as any} />\n            ';
}

const renderAnchor = ") : sectionId.startsWith('product-grid-') ? (";
content = content.replace(renderAnchor, casesToAdd + renderAnchor);

fs.writeFileSync(previewLayoutPath, content);
console.log('Successfully injected 11-20 into SectionPreviewLayout.tsx');
