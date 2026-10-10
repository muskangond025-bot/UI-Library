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
  imports += `import { AboutCompanyTimeline${i} } from '../sections/about/06-about-company-timeline/timeline-${numStr}/AboutCompanyTimeline${i}';\n`;
}

// Insert imports at top
content = imports + content;

// Add case block for about-company-timeline
const searchStr = "case 'about-brand-values':";
if (content.includes(searchStr)) {
  const timelineCase = `
      case 'about-company-timeline':
        return (
          <div className="space-y-12">
            {[${Array.from({length: 20}, (_, idx) => `<AboutCompanyTimeline${idx+1} key={${idx+1}} />`).join(', ')}]}
          </div>
        );`;
  content = content.replace(searchStr, timelineCase + '\n' + searchStr);
}

fs.writeFileSync(gridFilePath, content, 'utf-8');
console.log('Successfully registered Company Timeline 1-20 in SectionLibraryGrid.tsx!');
