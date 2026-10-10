const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Prepare Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  imports.push(`import { AboutPartnersBrands${i} } from '../sections/about/10-about-partners-brands/partners-brands-${num}/AboutPartnersBrands${i}';`);
}

// 2. Prepare Category Array Block
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  items.push(`      { id: 'about-partners-brands-${i}', title: 'ABOUT PARTNERS / BRANDS — VARIANT ${num}', description: 'Global Partners & Brand Alliance Variant ${i}', previewComponent: <AboutPartnersBrands${i} /> },`);
}

const categoryBlock = `] : category === 'about-partners-brands' ? [\n` + items.join('\n') + `\n    `;

// Add imports at top of file
content = imports.join('\n') + '\n' + content;

// Replace category check
content = content.replace(
  `] : category === 'about-certifications' ? [`,
  categoryBlock + `] : category === 'about-certifications' ? [`
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully registered about-partners-brands in SectionLibraryGrid.tsx');
