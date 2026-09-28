const fs = require('fs');
const path = require('path');

const previewFile = path.join(__dirname, '../src/components/section-library/SectionPreviewLayout.tsx');

let content = fs.readFileSync(previewFile, 'utf8');

// Generate imports
let imports = '';
for (let i = 1; i <= 10; i++) {
  imports += "import ProductGallery" + i + " from '../sections/product/01-product-gallery/product-gallery-" + i + "/ProductGallery" + i + "';\n";
  imports += "import productGallery" + i + "Data from '../sections/product/01-product-gallery/product-gallery-" + i + "/product-gallery-" + i + ".json';\n";
}

// Generate ternary cases
let cases = '';
for (let i = 1; i <= 10; i++) {
  cases += "            ) : sectionId === 'product-gallery-" + i + "' ? (\n";
  cases += "              <ProductGallery" + i + " data={sectionData || productGallery" + i + "Data as any} />\n";
}

// Inject imports after the last import
const importMatch = content.match(/import [\s\S]*?;\n/g);
if (importMatch) {
  const lastImport = importMatch[importMatch.length - 1];
  content = content.replace(lastImport, lastImport + imports);
}

// Inject cases before the default "Preview not built out"
const fallbackRegex = /\) : sectionId\.startsWith\('product-grid-'\) \? \([\s\S]*?\) : \(/;
content = content.replace(fallbackRegex, cases + content.match(fallbackRegex)[0]);

fs.writeFileSync(previewFile, content);
console.log('Successfully injected Product Gallery previews into SectionPreviewLayout.tsx');
