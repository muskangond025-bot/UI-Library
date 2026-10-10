import fs from 'fs';
import path from 'path';

const gridFile = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let text = fs.readFileSync(gridFile, 'utf-8');

// Touch file to trigger Vite HMR rebuild
text += '\n// Force Vite reload ' + Date.now();
fs.writeFileSync(gridFile, text, 'utf-8');
console.log('Successfully touched SectionLibraryGrid.tsx for Vite HMR!');
