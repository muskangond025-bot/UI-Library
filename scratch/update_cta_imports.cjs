const fs = require('fs');

// 1. Update navigationData.ts
const navPath = 'src/components/section-library/navigationData.ts';
let nav = fs.readFileSync(navPath, 'utf8');
nav = nav.replace("id: 'global-cta-banner', label: 'CTA Banner', mappedId: 'about-cta-banner'", "id: 'global-cta-banner', label: 'CTA Banner', mappedId: 'global-cta-banner'");
fs.writeFileSync(navPath, nav, 'utf8');
console.log('Updated navigationData.ts for global-cta-banner');

// 2. Update SectionLibraryGrid.tsx
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let sectionGrid = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalCtaBanner${i} } from '../sections/global/18-cta-banner/global-cta-banner-${i}/GlobalCtaBanner${i}';`);
}
const importBlock = imports.join('\n');

if (!sectionGrid.includes('GlobalCtaBanner1')) {
  sectionGrid = importBlock + '\n' + sectionGrid;
}

const names = [
  'Floating Glassmorphic Island Banner',
  'Minimalist Serif Cultural Gazette Invitation',
  'Neo-Brutalist Cyberpunk Box Banner',
  'High-Tech Bento Column Matrix Banner',
  'Clean Horizontal Banner Strip',
  'Floating Glassmorphic Portal Banner',
  'Minimalist Typographic Action Strip',
  'Sidebar Spotlight CTA Hub',
  'Neumorphic Soft Velvet Banner',
  'Cyberpunk Neon Terminal Protocol Banner',
  'Asymmetric Floating Story Banner',
  'Gradient Border Glow Banner Strip',
  'Clean Dual-Tone Publication Banner',
  'Modern Bento Compact Banner',
  'Horizontal Slide-Over Stream Banner',
  'Compact List & Spotlight CTA',
  'Tabbed Industry Insights Banner',
  'Dynamic Parallax Cover CTA Lift',
  'Card Overlay High-Contrast Banner',
  '3D Perspective Staggered Grid Banner'
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
  items.push(`      { id: 'global-cta-banner-${i}', title: 'Design ${i}: ${names[i - 1]} (ANIMATION: ${anims[i - 1]})', description: 'Design: ${names[i - 1]} • Animation: ${anims[i - 1]}', previewComponent: <GlobalCtaBanner${i} /> }`);
}

const target = "] : category === 'global-trust-certification' ? [";
const replacement = `] : category === 'global-cta-banner' ? [\n${items.join(',\n')}\n` + target;

sectionGrid = sectionGrid.replace(target, replacement);

fs.writeFileSync(gridPath, sectionGrid, 'utf8');
console.log('Updated SectionLibraryGrid.tsx for global-cta-banner successfully!');
