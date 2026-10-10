const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Prepare Imports
const imports = [];
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  imports.push(`import { AboutCertifications${i} } from '../sections/about/09-about-certifications/certifications-${num}/AboutCertifications${i}';`);
}

// 2. Prepare Category Array Block
const items = [];
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  items.push(`      { id: 'about-certifications-${i}', title: 'ABOUT CERTIFICATIONS — VARIANT ${num}', description: 'Enterprise Certification & Compliance Standard Variant ${i}', previewComponent: <AboutCertifications${i} /> },`);
}

const categoryBlock = `] : category === 'about-certifications' ? [\n` + items.join('\n') + `\n    `;

// Add imports at top of file
content = imports.join('\n') + '\n' + content;

// Replace category check
content = content.replace(
  `] : category === 'about-team-showcase' ? [`,
  categoryBlock + `] : category === 'about-team-showcase' ? [`
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully registered about-certifications in SectionLibraryGrid.tsx');
