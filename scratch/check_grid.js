import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let text = fs.readFileSync(file, 'utf-8');

console.log('Includes about-team-showcase:', text.includes("category === 'about-team-showcase'"));
console.log('Includes about-company-timeline:', text.includes("category === 'about-company-timeline'"));
console.log('Includes about-brand-values:', text.includes("category === 'about-brand-values'"));
