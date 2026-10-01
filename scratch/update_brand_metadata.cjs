const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

const baseDir = path.join(__dirname, '../src/components/sections/product/25-brand-information');

for (let i = 1; i <= 20; i++) {
  const jsonPath = path.join(baseDir, `brand-information-${i}`, `brand-information-${i}.json`);
  if (fs.existsSync(jsonPath)) {
    const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const title = json.title || '';
    const description = json.description || json.desc || '';

    const regex = new RegExp(
      `(id:\\s*'brand-information-${i}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
      'g'
    );
    content = content.replace(regex, `$1'${title.replace(/'/g, "\\'")}'$2'${description.replace(/'/g, "\\'")}'`);
  }
}

fs.writeFileSync(gridPath, content, 'utf8');
console.log('SectionLibraryGrid metadata updated successfully for Brand Information 1-20.');
