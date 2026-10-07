const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogGrid${i} } from '../sections/blog/05-blog-grid/blog-grid-${numStr}/BlogGrid${i}';\n`;
  importsStr += `import blogGrid${i}Data from '../sections/blog/05-blog-grid/blog-grid-${numStr}/blog-grid-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `category === 'blog-grid' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-grid-\${i + 1}\`,
      title: \`BLOG GRID — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Blog Grid variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Blog Grid" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `category === 'blog-grid' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  newItemsStr += `      { id: 'blog-grid-${i}', title: 'BLOG GRID — VARIANT ${numStr}', description: 'Design: Blog Grid Variant ${numStr}', previewComponent: <BlogGrid${i} data={blogGrid${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully registered all 20 Blog Grid designs in SectionLibraryGrid.tsx!');
