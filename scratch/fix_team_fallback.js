import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gridFilePath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');

let content = fs.readFileSync(gridFilePath, 'utf-8');

const targetStr = "] : category.startsWith('about-') ? Array.from({ length: 20 }, (_, i) => {";
if (content.includes(targetStr)) {
  const fixCode = `] : (category.startsWith('about-') && category !== 'about-team-showcase' && category !== 'about-company-timeline' && category !== 'about-brand-values') ? Array.from({ length: 20 }, (_, i) => {`;
  content = content.replace(targetStr, fixCode);
  fs.writeFileSync(gridFilePath, content, 'utf-8');
  console.log('Successfully fixed fallback condition in SectionLibraryGrid.tsx!');
} else {
  console.log('Target string not found');
}
