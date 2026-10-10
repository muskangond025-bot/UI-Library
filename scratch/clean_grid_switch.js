import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'section-library', 'SectionLibraryGrid.tsx');
let text = fs.readFileSync(file, 'utf-8');

// Replace getSectionsForCategory with a clean switch case
const targetMarker = 'const getSectionsForCategory = (category: string) => {';
const targetEndMarker = 'let activeCat = category;';

const startIdx = text.indexOf(targetMarker);
const endIdx = text.indexOf(targetEndMarker);

console.log('startIdx:', startIdx, 'endIdx:', endIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const newFunction = `const getSectionsForCategory = (category: string) => {
    switch (category) {
      case 'about-team-showcase':
        return [
${Array.from({length: 20}, (_, i) => `          { id: 'about-team-showcase-${i+1}', title: 'ABOUT TEAM SHOWCASE — VARIANT ${(i+1).toString().padStart(2, '0')}', description: 'Team Showcase Member Profile Variant ${i+1}', previewComponent: <AboutTeamShowcase${i+1} /> },`).join('\n')}
        ];
      case 'about-company-timeline':
        return [
${Array.from({length: 20}, (_, i) => `          { id: 'about-company-timeline-${i+1}', title: 'ABOUT COMPANY TIMELINE — VARIANT ${(i+1).toString().padStart(2, '0')}', description: 'Company Timeline Milestone & History Variant ${i+1}', previewComponent: <AboutCompanyTimeline${i+1} /> },`).join('\n')}
        ];
      case 'about-brand-values':
        return [
${Array.from({length: 20}, (_, i) => `          { id: 'about-brand-values-${i+1}', title: 'ABOUT BRAND VALUES — VARIANT ${(i+1).toString().padStart(2, '0')}', description: 'Brand Values & Pillars Variant ${i+1}', previewComponent: <AboutBrandValues${i+1} /> },`).join('\n')}
        ];
      default:
        break;
    }
`;
  text = text.substring(0, startIdx) + newFunction + text.substring(startIdx + targetMarker.length);
  fs.writeFileSync(file, text, 'utf-8');
  console.log('Successfully updated switch case in getSectionsForCategory!');
}
