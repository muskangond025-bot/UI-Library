const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Prepare Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  imports.push(`import { AboutCtaBanner${i} } from '../sections/about/11-about-cta-banner/cta-banner-${num}/AboutCtaBanner${i}';`);
}

// 2. Prepare Category Array Block
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  items.push(`      { id: 'about-cta-banner-${i}', title: 'ABOUT CTA BANNER — VARIANT ${num}', description: 'High-Conversion CTA Call-to-Action Banner Variant ${i}', previewComponent: <AboutCtaBanner${i} /> },`);
}

const categoryBlock = `] : category === 'about-cta-banner' ? [\n` + items.join('\n') + `\n    `;

// Add imports at top of file
content = imports.join('\n') + '\n' + content;

// Replace category check
content = content.replace(
  `] : category === 'about-partners-brands' ? [`,
  categoryBlock + `] : category === 'about-partners-brands' ? [`
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully registered about-cta-banner in SectionLibraryGrid.tsx');
