const fs = require('fs');
const path = require('path');

const tabs = [
  "Product Gallery", "Product Information", "Product Purchase Section", "Product Description",
  "Product Highlights", "Product Specifications", "Product Features", "What's Included",
  "Size Guide", "Product Care", "Warranty Information", "Shipping & Delivery Information",
  "Return & Refund Information", "Payment Information", "Frequently Bought Together",
  "Product Bundles", "Related Products", "Similar Products", "Recommended Products",
  "Customer Reviews", "Review Summary", "Customer Review Gallery", "Questions & Answers",
  "Product FAQ", "Brand Information"
];

function toKebabCase(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function toPascalCase(str) {
  return str.split(/[^a-zA-Z0-9]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}
function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// 1. Update SectionLibrarySidebar.tsx
const sidebarPath = path.join(__dirname, '../src/components/section-library/SectionLibrarySidebar.tsx');
let sidebarContent = fs.readFileSync(sidebarPath, 'utf-8');

const newCategories = tabs.map(tab => {
  const id = toKebabCase(tab);
  return `    { id: '${id}', label: '${tab}', icon: Grid },`;
}).join('\n');

// Find where to insert categories
const categoryEndIndex = sidebarContent.indexOf('  ];');
if (categoryEndIndex > -1) {
  sidebarContent = sidebarContent.substring(0, categoryEndIndex) + newCategories + '\n' + sidebarContent.substring(categoryEndIndex);
  fs.writeFileSync(sidebarPath, sidebarContent);
  console.log('Updated Sidebar');
}

// 2. Update SectionLibraryGrid.tsx
const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let gridContent = fs.readFileSync(gridPath, 'utf-8');

let newImports = '';
let newCategoriesSwitch = '';

tabs.forEach(tab => {
  const id = toKebabCase(tab);
  const folderName = toPascalCase(tab);
  
  newCategoriesSwitch += `    category === '${id}' ? [\n`;
  
  for (let i = 1; i <= 20; i++) {
    const itemName = `${toKebabCase(tab)}-${i}`;
    const componentName = `${folderName}${i}`;
    const dataName = `${toCamelCase(tab)}${i}Data`;
    
    newImports += `import ${componentName} from '../${folderName}/${itemName}/${componentName}';\n`;
    newImports += `import ${dataName} from '../${folderName}/${itemName}/${itemName}.json';\n`;
    
    newCategoriesSwitch += `        {
          id: '${itemName}',
          title: '${tab} ${i}',
          description: 'Placeholder content for ${tab} ${i}',
          previewComponent: <${componentName} data={${dataName} as any} />
        }${i < 20 ? ',' : ''}\n`;
  }
  newCategoriesSwitch += `      ] :\n`;
});

// Insert imports right after the last import statement
const importsEndRegex = /import .*;\n(?!\s*import)/;
const importsMatch = gridContent.match(importsEndRegex);
if (importsMatch) {
  const insertImportAt = importsMatch.index + importsMatch[0].length;
  gridContent = gridContent.slice(0, insertImportAt) + newImports + gridContent.slice(insertImportAt);
}

// Insert switch right before the final `] : [];`
const emptyArrayFallback = '] : [];';
const fallbackIndex = gridContent.lastIndexOf(emptyArrayFallback);
if (fallbackIndex > -1) {
  gridContent = gridContent.slice(0, fallbackIndex) + newCategoriesSwitch + gridContent.slice(fallbackIndex);
  fs.writeFileSync(gridPath, gridContent);
  console.log('Updated Grid');
}
