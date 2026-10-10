import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let text = fs.readFileSync(file, 'utf-8');

const regex = /groups\s*=\s*\[\s*\.\.\.homeCategories[\s\S]*?\.filter\(g\s*=>\s*g\.id\s*===\s*activeCat\);/;
console.log('Matches regex:', regex.test(text));

const match = text.match(regex);
if (match) {
  console.log('Match content:', match[0]);
}
