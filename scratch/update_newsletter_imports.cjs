const fs = require('fs');

// 1. Update navigationData.ts
const navPath = 'src/components/section-library/navigationData.ts';
let nav = fs.readFileSync(navPath, 'utf8');
nav = nav.replace("id: 'global-newsletter', label: 'Newsletter', mappedId: 'newsletter'", "id: 'global-newsletter', label: 'Newsletter', mappedId: 'global-newsletter'");
fs.writeFileSync(navPath, nav, 'utf8');
console.log('Updated navigationData.ts for global-newsletter');

// 2. Update SectionLibraryGrid.tsx
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let sectionGrid = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalNewsletter${i} } from '../sections/global/16-newsletter/global-newsletter-${i}/GlobalNewsletter${i}';`);
}
const importBlock = imports.join('\n');

if (!sectionGrid.includes('GlobalNewsletter1')) {
  sectionGrid = importBlock + '\n' + sectionGrid;
}

const names = [
  'Floating Glassmorphic Island',
  'Minimalist Serif Cultural Gazette',
  'Neo-Brutalist Cyberpunk Box',
  'High-Tech Bento Column Matrix',
  'Clean Horizontal Banner Stream',
  'Floating Glassmorphic Portal',
  'Minimalist Typographic List',
  'Sidebar Spotlight Hub',
  'Neumorphic Soft Velvet Box',
  'Cyberpunk Neon Terminal Protocol',
  'Asymmetric Floating Story Box',
  'Gradient Border Glow Banner',
  'Clean Dual-Tone Publication',
  'Modern Bento Compact Box',
  'Horizontal Slide-Over Feed',
  'Compact List & Spotlight',
  'Tabbed Industry Insights Hub',
  'Dynamic Parallax Cover Lift',
  'Card Overlay High-Contrast Box',
  '3D Perspective Staggered Grid'
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
  items.push(`      { id: 'global-newsletter-${i}', title: 'Design ${i}: ${names[i - 1]} (ANIMATION: ${anims[i - 1]})', description: 'Design: ${names[i - 1]} • Animation: ${anims[i - 1]}', previewComponent: <GlobalNewsletter${i} /> }`);
}

const target = "] : category === 'global-faq' ? [";
const replacement = `] : category === 'global-newsletter' ? [\n${items.join(',\n')}\n` + target;

sectionGrid = sectionGrid.replace(target, replacement);

fs.writeFileSync(gridPath, sectionGrid, 'utf8');
console.log('Updated SectionLibraryGrid.tsx for global-newsletter successfully!');
