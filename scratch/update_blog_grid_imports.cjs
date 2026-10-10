const fs = require('fs');

// 1. Update navigationData.ts
const navPath = 'src/components/section-library/navigationData.ts';
let nav = fs.readFileSync(navPath, 'utf8');
nav = nav.replace("id: 'global-blog-grid', label: 'Blog Grid', mappedId: 'blog-grid'", "id: 'global-blog-grid', label: 'Blog Grid', mappedId: 'global-blog-grid'");
fs.writeFileSync(navPath, nav, 'utf8');
console.log('Updated navigationData.ts');

// 2. Update SectionLibraryGrid.tsx
const gridPath = 'src/components/section-library/SectionLibraryGrid.tsx';
let sectionGrid = fs.readFileSync(gridPath, 'utf8');

// Build imports
let imports = [];
for (let i = 1; i <= 20; i++) {
  imports.push(`import { GlobalBlogGrid${i} } from '../sections/global/14-blog-grid/GlobalBlogGrid${i}';`);
}
const importBlock = imports.join('\n');

if (!sectionGrid.includes('GlobalBlogGrid1')) {
  sectionGrid = importBlock + '\n' + sectionGrid;
}

// Build array items
const names = [
  'Editorial Hero & Masonry Feed',
  'Magazine Feature & Horizontal Cards',
  'Tech Portal Split Layout',
  'Minimalist Card Stream',
  'Interactive Filterable Topic Hub',
  'Glassmorphism Article Showcase',
  'Bold Typographic Focus Grid',
  'Sidebar Spotlight & Content Feed',
  'Neumorphic Reader Stream',
  'Cyberpunk Neon Post Matrix',
  'Asymmetric Floating Story Cards',
  'Gradient Border Glow Grid',
  'Clean Dual-Tone Publication',
  'Modern Bento Article Grid',
  'Horizontal Slide-Over Feed',
  'Compact List & Featured Spotlight',
  'Tabbed Industry Insights Grid',
  'Dynamic Parallax Cover Stream',
  'Card Overlay High-Contrast Feed',
  '3D Perspective Staggered Grid'
];

const anims = [
  'staggered-fade-up',
  'scale-up-hover',
  'slide-left-fade',
  'smooth-lift-shadow',
  'spring-pop-filter',
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
        previewComponent: <GlobalBlogGrid${i} />
      }`);
}

const categoryCase = `    if (category === 'global-blog-grid') {
      return [
${items.join(',\n')}
      ];
    }`;

if (sectionGrid.includes("if (category === 'global-blog-grid')")) {
  sectionGrid = sectionGrid.replace(/if \(category === 'global-blog-grid'\)\s*\{[\s\S]*?\n    \}/, categoryCase);
} else {
  sectionGrid = sectionGrid.replace("if (category === 'blog-grid')", `${categoryCase}\n\n    if (category === 'blog-grid')`);
}

fs.writeFileSync(gridPath, sectionGrid, 'utf8');
console.log('Updated SectionLibraryGrid.tsx successfully!');
