const fs = require('fs');

// 1. Update navigationData.ts
const navPath = 'src/components/section-library/navigationData.ts';
let nav = fs.readFileSync(navPath, 'utf8');
nav = nav.replace("id: 'global-faq', label: 'FAQ', mappedId: 'faq'", "id: 'global-faq', label: 'FAQ', mappedId: 'global-faq'");
fs.writeFileSync(navPath, nav, 'utf8');
console.log('Updated navigationData.ts for global-faq');

// 2. Update SectionLibraryGrid.tsx
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let sectionGrid = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalFaq${i} } from '../sections/global/15-faq/global-faq-${i}/GlobalFaq${i}';`);
}
const importBlock = imports.join('\n');

if (!sectionGrid.includes('GlobalFaq1')) {
  sectionGrid = importBlock + '\n' + sectionGrid;
}

// Build array items
const names = [
  'Modern Searchable Accordion',
  'Minimalist Serif Editorial Gazette',
  'Neo-Brutalist Cyberpunk Racks',
  'High-Tech Bento Grid Cards',
  'Categorized Tabbed FAQ Switcher',
  'Floating Glassmorphic Accordion',
  'Minimalist Typographic List',
  'Sidebar Spotlight FAQ Hub',
  'Neumorphic Soft Reader',
  'Cyberpunk Neon Wireframe Protocol',
  'Asymmetric Floating Cards',
  'Gradient Border Glow Accordion',
  'Clean Dual-Tone Publication',
  'Modern Bento Compact Grid',
  'Horizontal Slide-Over Stream',
  'Compact List & Spotlight',
  'Tabbed Industry Insights',
  'Dynamic Parallax Cover Lift',
  'Card Overlay High-Contrast',
  '3D Perspective Staggered Grid'
];

const anims = [
  'smooth-accordion-collapse',
  'editorial-fade-expand',
  'neo-brutalist-slide-toggle',
  'bento-hover-lift',
  'tab-switch-fade',
  'glass-pulse-glow',
  'underline-expand-hover',
  'spotlight-pulse',
  'inset-press-elevation',
  'neon-border-pulse',
  'floating-tilt-hover',
  'gradient-shift-border',
  'dual-tone-slide-in',
  'bento-hover-expand',
  'slide-over-peek',
  'compact-fade-in',
  'tab-fade-switch',
  'parallax-scroll-lift',
  'overlay-zoom-fade',
  '3d-perspective-lift'
];

let items = [];
for (let i = 1; i <= 20; i++) {
  items.push(`      {
        title: 'Design ${i}: ${names[i - 1]} (ANIMATION: ${anims[i - 1]})',
        previewComponent: <GlobalFaq${i} />
      }`);
}

const categoryCase = `    if (category === 'global-faq') {
      return [
${items.join(',\n')}
      ];
    }`;

if (sectionGrid.includes("if (category === 'global-faq')")) {
  sectionGrid = sectionGrid.replace(/if \(category === 'global-faq'\)\s*\{[\s\S]*?\n    \}/, categoryCase);
} else {
  sectionGrid = sectionGrid.replace("if (category === 'faq')", `${categoryCase}\n\n    if (category === 'faq')`);
}

fs.writeFileSync(gridPath, sectionGrid, 'utf8');
console.log('Updated SectionLibraryGrid.tsx for global-faq successfully!');
