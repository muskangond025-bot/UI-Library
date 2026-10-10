import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gridFilePath = path.join(__dirname, '..', 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');

let content = fs.readFileSync(gridFilePath, 'utf-8');

const targetMarker = "] : category === 'about-image-content' ? [";

const timelineEntries = `    ] : category === 'about-company-timeline' ? [
${Array.from({length: 20}, (_, i) => `      { id: 'about-company-timeline-${i+1}', title: 'ABOUT COMPANY TIMELINE — VARIANT ${(i+1).toString().padStart(2, '0')}', description: 'Company Timeline Milestone & History Variant ${i+1}', previewComponent: <AboutCompanyTimeline${i+1} /> },`).join('\n')}
    ] : category === 'about-brand-values' ? [
${Array.from({length: 20}, (_, i) => `      { id: 'about-brand-values-${i+1}', title: 'ABOUT BRAND VALUES — VARIANT ${(i+1).toString().padStart(2, '0')}', description: 'Brand Values & Pillars Variant ${i+1}', previewComponent: <AboutBrandValues${i+1} /> },`).join('\n')}`;

content = content.replace(targetMarker, timelineEntries + '\n' + targetMarker);

fs.writeFileSync(gridFilePath, content, 'utf-8');
console.log('Successfully injected Company Timeline & Brand Values into getSectionsForCategory array!');
