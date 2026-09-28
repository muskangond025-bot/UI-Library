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

const baseDir = path.join(__dirname, '../src/components');

tabs.forEach(tab => {
  const folderName = toPascalCase(tab);
  const categoryPath = path.join(baseDir, folderName);
  
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
  }

  for (let i = 1; i <= 20; i++) {
    const itemName = `${toKebabCase(tab)}-${i}`;
    const itemDir = path.join(categoryPath, itemName);
    if (!fs.existsSync(itemDir)) {
      fs.mkdirSync(itemDir, { recursive: true });
    }

    const componentName = `${folderName}${i}`;
    const tsxCode = `import React from 'react';

export default function ${componentName}({ data }: { data: any }) {
  return (
    <div className="p-8 border rounded-lg bg-white shadow-sm flex items-center justify-center">
      <h2 className="text-xl font-bold text-gray-500">${tab} ${i} Placeholder</h2>
    </div>
  );
}
`;
    fs.writeFileSync(path.join(itemDir, `${componentName}.tsx`), tsxCode);

    const jsonCode = `{
  "title": "${tab} ${i}",
  "description": "Placeholder content for ${tab} ${i}"
}
`;
    fs.writeFileSync(path.join(itemDir, `${itemName}.json`), jsonCode);
  }
});
