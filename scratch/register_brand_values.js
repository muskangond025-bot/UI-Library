import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gridFilePath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');

let content = fs.readFileSync(gridFilePath, 'utf-8');

// Build imports
let imports = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i < 10 ? '0' + i : '' + i;
  imports += `import { AboutBrandValues${i} } from '../sections/about/07-about-brand-values/brand-values-${numStr}/AboutBrandValues${i}';\n`;
}

// Insert imports at the top
content = imports + content;

// Build render entries
let entries = '';
for (let i = 1; i <= 20; i++) {
  const numStr = i < 10 ? '0' + i : '' + i;
  entries += `
        {
          id: 'about-brand-values-${i}',
          name: 'About Brand Values ${i}',
          category: 'about-brand-values',
          component: <AboutBrandValues${i} />,
        },`;
}

// Find position to insert into categories map or standard grid render
const targetCategoryMarker = "case 'about-brand-values':";
if (content.includes(targetCategoryMarker)) {
  console.log('Category marker exists');
} else {
  // Append case block or add to section list
  const searchStr = "case 'about-company-timeline':";
  if (content.includes(searchStr)) {
    const brandValuesCase = `
      case 'about-brand-values':
        return (
          <div className="space-y-12">
            {[${Array.from({length: 20}, (_, idx) => `<AboutBrandValues${idx+1} key={${idx+1}} />`).join(', ')}]}
          </div>
        );`;
    content = content.replace(searchStr, brandValuesCase + '\n' + searchStr);
  }
}

fs.writeFileSync(gridFilePath, content, 'utf-8');
console.log('Successfully updated SectionLibraryGrid.tsx!');
