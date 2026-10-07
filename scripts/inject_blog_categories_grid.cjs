const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogCategories${i} } from '../sections/blog/04-blog-categories/blog-categories-${numStr}/BlogCategories${i}';\n`;
  importsStr += `import blogCategories${i}Data from '../sections/blog/04-blog-categories/blog-categories-${numStr}/blog-categories-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `category === 'blog-categories' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-categories-\${i + 1}\`,
      title: \`BLOG CATEGORIES — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Blog Categories variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Blog Categories" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `category === 'blog-categories' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  newItemsStr += `      { id: 'blog-categories-${i}', title: 'BLOG CATEGORIES — VARIANT ${numStr}', description: 'Design: Blog Categories Variant ${numStr}', previewComponent: <BlogCategories${i} data={blogCategories${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully registered all 20 Blog Categories designs in SectionLibraryGrid.tsx!');
