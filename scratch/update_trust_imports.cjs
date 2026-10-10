const fs = require('fs');

// 1. Update navigationData.ts
const navPath = 'src/components/section-library/navigationData.ts';
let nav = fs.readFileSync(navPath, 'utf8');
nav = nav.replace("id: 'global-trust-certification', label: 'Trust / Certification Section', mappedId: 'about-certifications'", "id: 'global-trust-certification', label: 'Trust / Certification Section', mappedId: 'global-trust-certification'");
fs.writeFileSync(navPath, nav, 'utf8');
console.log('Updated navigationData.ts for global-trust-certification');

// 2. Update SectionLibraryGrid.tsx
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let sectionGrid = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalTrustCertification${i} } from '../sections/global/17-trust-certification/global-trust-certification-${i}/GlobalTrustCertification${i}';`);
}
const importBlock = imports.join('\n');

if (!sectionGrid.includes('GlobalTrustCertification1')) {
  sectionGrid = importBlock + '\n' + sectionGrid;
}

const names = [
  'Floating Glassmorphic Trust Matrix',
  'Minimalist Serif Cultural Gazette Badges',
  'Neo-Brutalist Cyberpunk Trust Matrix',
  'High-Tech Bento Trust & Compliance Grid',
  'Clean Horizontal Security Strip',
  'Floating Glassmorphic Badge Portal',
  'Minimalist Typographic Spec List',
  'Sidebar Spotlight Trust Hub',
  'Neumorphic Soft Velvet Shield',
  'Cyberpunk Neon Terminal Protocol',
  'Asymmetric Floating Guarantee Cards',
  'Gradient Border Glow Trust Strip',
  'Clean Dual-Tone Standard Publication',
  'Modern Bento Compact Certification',
  'Horizontal Slide-Over Security Feed',
  'Compact List & Spotlight Badges',
  'Tabbed Industry Insights Standard',
  'Dynamic Parallax Cover Trust Lift',
  'Card Overlay High-Contrast Shield',
  '3D Perspective Staggered Badge Grid'
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
  items.push(`      { id: 'global-trust-certification-${i}', title: 'Design ${i}: ${names[i - 1]} (ANIMATION: ${anims[i - 1]})', description: 'Design: ${names[i - 1]} • Animation: ${anims[i - 1]}', previewComponent: <GlobalTrustCertification${i} /> }`);
}

const target = "] : category === 'global-newsletter' ? [";
const replacement = `] : category === 'global-trust-certification' ? [\n${items.join(',\n')}\n` + target;

sectionGrid = sectionGrid.replace(target, replacement);

fs.writeFileSync(gridPath, sectionGrid, 'utf8');
console.log('Updated SectionLibraryGrid.tsx for global-trust-certification successfully!');
