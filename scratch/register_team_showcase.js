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
  imports += `import { AboutTeamShowcase${i} } from '../sections/about/08-about-team-showcase/team-${numStr}/AboutTeamShowcase${i}';\n`;
}

// Add imports at top
content = imports + content;

// Inject category section into getSectionsForCategory
const targetMarker = "] : category === 'about-company-timeline' ? [";

const teamSection = `    ] : category === 'about-team-showcase' ? [
${Array.from({length: 20}, (_, i) => `      { id: 'about-team-showcase-${i+1}', title: 'ABOUT TEAM SHOWCASE — VARIANT ${(i+1).toString().padStart(2, '0')}', description: 'Team Showcase Member Profile Variant ${i+1}', previewComponent: <AboutTeamShowcase${i+1} /> },`).join('\n')}`;

content = content.replace(targetMarker, teamSection + '\n' + targetMarker);

fs.writeFileSync(gridFilePath, content, 'utf-8');
console.log('Successfully registered 20 Team Showcase components in SectionLibraryGrid.tsx!');
