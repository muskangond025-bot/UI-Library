const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogLatestArticles${i} } from '../sections/blog/03-blog-latest-articles/latest-articles-${numStr}/BlogLatestArticles${i}';\n`;
  importsStr += `import blogLatestArticles${i}Data from '../sections/blog/03-blog-latest-articles/latest-articles-${numStr}/latest-articles-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `category === 'blog-latest-articles' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-latest-articles-\${i + 1}\`,
      title: \`LATEST ARTICLES — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Latest Articles variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Latest Articles" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `category === 'blog-latest-articles' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  newItemsStr += `      { id: 'blog-latest-articles-${i}', title: 'LATEST ARTICLES — VARIANT ${numStr}', description: 'Design: Latest Articles Variant ${numStr}', previewComponent: <BlogLatestArticles${i} data={blogLatestArticles${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully registered all 20 Blog Latest Articles designs in SectionLibraryGrid.tsx!');
