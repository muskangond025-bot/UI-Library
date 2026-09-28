const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

let importsToAdd = '';
for (let i = 11; i <= 20; i++) {
  importsToAdd += 'import ProductGallery' + i + ' from \'../sections/product/01-product-gallery/product-gallery-' + i + '/ProductGallery' + i + '\';\n';
  importsToAdd += 'import productGallery' + i + 'Data from \'../sections/product/01-product-gallery/product-gallery-' + i + '/product-gallery-' + i + '.json\';\n';
}

const lastImportIndex = content.lastIndexOf('import ');
const lastImportEnd = content.indexOf('\n', lastImportIndex);
content = content.slice(0, lastImportEnd + 1) + importsToAdd + content.slice(lastImportEnd + 1);

let objectsToAdd = '';
for (let i = 11; i <= 20; i++) {
  objectsToAdd += '        {\n          id: \'product-gallery-' + i + '\',\n          title: \'Product Gallery ' + i + '\',\n          description: productGallery' + i + 'Data?.description || \'Placeholder content\',\n          previewComponent: <ProductGallery' + i + ' data={productGallery' + i + 'Data as any} />\n        },\n';
}

const renderAnchor = "} else if (category === 'product-grid') {";
// Actually, earlier I injected "product-gallery-1" inside category === 'product-gallery'
// Let's find "id: 'product-gallery-10'"
const targetString = "id: 'product-gallery-10',";
const targetIndex = content.indexOf(targetString);
if (targetIndex !== -1) {
    // Find the end of this object (the closing bracket "},")
    const bracketIndex = content.indexOf('},', targetIndex);
    const splitIndex = bracketIndex + 2;
    content = content.slice(0, splitIndex) + '\n' + objectsToAdd + content.slice(splitIndex);
    fs.writeFileSync(gridPath, content);
    console.log('Successfully injected 11-20 into SectionLibraryGrid.tsx');
} else {
    console.log('Could not find product-gallery-10 block');
}
