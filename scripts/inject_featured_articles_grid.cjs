const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

// 1. Generate Imports
let importsStr = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  importsStr += `import { BlogFeaturedArticle${i} } from '../sections/blog/02-blog-featured-article/featured-article-${numStr}/BlogFeaturedArticle${i}';\n`;
  importsStr += `import blogFeaturedArticle${i}Data from '../sections/blog/02-blog-featured-article/featured-article-${numStr}/featured-article-${numStr}.json';\n`;
}

// Prepend imports
content = importsStr + content;

// 2. Replace placeholder mapping with actual items array
const oldPlaceholderPattern = `: category === 'blog-featured-article' ? Array.from({ length: 20 }, (_, i) => ({
      id: \`blog-featured-article-\${i + 1}\`,
      title: \`FEATURED ARTICLE — VARIANT \${(i + 1).toString().padStart(2, '0')}\`,
      description: \`Placeholder layout for Featured Article variant \${i + 1}\`,
      previewComponent: <BlogPlaceholder categoryName="Featured Article" variantNumber={i + 1} />
    })) :`;

let newItemsStr = `: category === 'blog-featured-article' ? [\n`;
for (let i = 1; i <= 20; i++) {
  const numStr = i.toString().padStart(2, '0');
  newItemsStr += `      { id: 'blog-featured-article-${i}', title: 'FEATURED ARTICLE — VARIANT ${numStr}', description: 'Design: Featured Article Variant ${numStr}', previewComponent: <BlogFeaturedArticle${i} data={blogFeaturedArticle${i}Data} /> },\n`;
}
newItemsStr += `    ] :`;

content = content.replace(oldPlaceholderPattern, newItemsStr);

fs.writeFileSync(gridFile, content);
console.log('Successfully injected all 20 Blog Featured Article designs into SectionLibraryGrid.tsx!');
