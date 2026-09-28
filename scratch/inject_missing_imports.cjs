const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

let imports = '';
for (let i = 1; i <= 20; i++) {
  imports += `import ProductGallery${i} from '../sections/product/01-product-gallery/product-gallery-${i}/ProductGallery${i}';\n`;
  imports += `import productGallery${i}Data from '../sections/product/01-product-gallery/product-gallery-${i}/product-gallery-${i}.json';\n`;
}

// Find the last import statement in the file
const importRegex = /^import\s+.*?;?\s*$/gm;
let match;
let lastImportIndex = 0;
while ((match = importRegex.exec(content)) !== null) {
  lastImportIndex = match.index + match[0].length;
}

if (lastImportIndex > 0) {
  content = content.slice(0, lastImportIndex) + '\n\n' + imports + content.slice(lastImportIndex);
} else {
  content = imports + '\n' + content;
}

fs.writeFileSync(path, content, 'utf8');
console.log('Injected 20 ProductGallery imports');
