const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add imports
let importsToAdd = '';
let objectsToAdd = '';

for (let i = 1; i <= 10; i++) {
  importsToAdd += `import ShippingDeliveryInformation${i} from '../sections/product/12-shipping-delivery-information/shipping-delivery-information-${i}/ShippingDeliveryInformation${i}';\n`;
  importsToAdd += `import shippingDeliveryInformation${i}Data from '../sections/product/12-shipping-delivery-information/shipping-delivery-information-${i}/shipping-delivery-information-${i}.json';\n`;

  objectsToAdd += `
  {
    id: 'shipping-delivery-information-${i}',
    title: 'Shipping Component ${i}',
    description: 'A shipping delivery information component.',
    category: 'shipping-delivery-information',
    component: <ShippingDeliveryInformation${i} data={shippingDeliveryInformation${i}Data} />
  },`;
}

// Insert imports at the end of the import block
const lastImportIndex = content.lastIndexOf('import ');
const endOfLastImport = content.indexOf('\\n', lastImportIndex) !== -1 ? content.indexOf('\\n', lastImportIndex) + 1 : content.indexOf('\\r\\n', lastImportIndex) + 2;

// Or just place it before 'export const sections' or 'const sections'
const sectionsRegex = /(const sections.*?=\s*\[)/s;
if (sectionsRegex.test(content)) {
  content = content.replace(sectionsRegex, importsToAdd + '\\n$1' + objectsToAdd);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully injected imports and sections.');
} else {
  console.log('Could not find sections array.');
}
