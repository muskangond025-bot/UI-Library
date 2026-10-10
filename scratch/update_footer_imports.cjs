const fs = require('fs');

// 1. Update navigationData.ts
const navPath = 'src/components/section-library/navigationData.ts';
let nav = fs.readFileSync(navPath, 'utf8');
nav = nav.replace("id: 'global-footer', label: 'Footer', mappedId: 'global-footer'", "id: 'global-footer', label: 'Footer', mappedId: 'global-footer'");
fs.writeFileSync(navPath, nav, 'utf8');
console.log('Updated navigationData.ts for global-footer');

// 2. Update SectionLibraryGrid.tsx
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let sectionGrid = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalFooter${i} } from '../sections/global/19-footer/global-footer-${i}/GlobalFooter${i}';`);
}
const importBlock = imports.join('\n');

if (!sectionGrid.includes('GlobalFooter1')) {
  sectionGrid = importBlock + '\n' + sectionGrid;
}

const names = [
  'Floating Glassmorphic Cyber Footprint',
  'Minimalist Serif Cultural Gazette Footnote',
  'Neo-Brutalist Cyberpunk Footer Terminal',
  'High-Tech Bento Grid Master Footer',
  'Clean Horizontal Clean Footer Strip',
  'Floating Glassmorphic Portal Footer',
  'Minimalist Typographic Action Footer',
  'Sidebar Spotlight Footer Hub',
  'Neumorphic Soft Velvet Footer',
  'Cyberpunk Neon Terminal Protocol Footer',
  'Asymmetric Floating Story Footer',
  'Gradient Border Glow Footer Strip',
  'Clean Dual-Tone Publication Footer',
  'Modern Bento Compact Footer',
  'Horizontal Slide-Over Stream Footer',
  'Compact List & Spotlight Footer',
  'Tabbed Industry Insights Footer',
  'Dynamic Parallax Cover Footer Lift',
  'Card Overlay High-Contrast Footer',
  '3D Perspective Staggered Grid Footer'
];

const anims = [
  'glass-pulse-glow',
  'editorial-fade-expand',
  'neo-brutalist-button-pop',
  'bento-hover-lift',
  'horizontal-slide-in',
  'glass-shimmer-sweep',
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
  items.push(`      { id: 'global-footer-${i}', title: 'Design ${i}: ${names[i - 1]} (ANIMATION: ${anims[i - 1]})', description: 'Design: ${names[i - 1]} • Animation: ${anims[i - 1]}', previewComponent: <GlobalFooter${i} /> }`);
}

const target = "] : category === 'global-cta-banner' ? [";
const replacement = `] : category === 'global-footer' ? [\n${items.join(',\n')}\n` + target;

sectionGrid = sectionGrid.replace(target, replacement);

fs.writeFileSync(gridPath, sectionGrid, 'utf8');
console.log('Updated SectionLibraryGrid.tsx for global-footer successfully!');
