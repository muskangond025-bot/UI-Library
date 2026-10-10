const fs = require('fs');

let content = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const target = "] : category === 'global-blog-grid' ? [";

const replacement = `] : category === 'global-faq' ? [
      { id: 'global-faq-1', title: 'Design 1: Modern Searchable Accordion (ANIMATION: smooth-accordion-collapse)', description: 'Design: Modern Searchable Accordion • Animation: smooth-accordion-collapse', previewComponent: <GlobalFaq1 /> },
      { id: 'global-faq-2', title: 'Design 2: Minimalist Serif Editorial Gazette (ANIMATION: editorial-fade-expand)', description: 'Design: Minimalist Serif Editorial Gazette • Animation: editorial-fade-expand', previewComponent: <GlobalFaq2 /> },
      { id: 'global-faq-3', title: 'Design 3: Neo-Brutalist Cyberpunk Racks (ANIMATION: neo-brutalist-slide-toggle)', description: 'Design: Neo-Brutalist Cyberpunk Racks • Animation: neo-brutalist-slide-toggle', previewComponent: <GlobalFaq3 /> },
      { id: 'global-faq-4', title: 'Design 4: High-Tech Bento Grid Cards (ANIMATION: bento-hover-lift)', description: 'Design: High-Tech Bento Grid Cards • Animation: bento-hover-lift', previewComponent: <GlobalFaq4 /> },
      { id: 'global-faq-5', title: 'Design 5: Categorized Tabbed FAQ Switcher (ANIMATION: tab-switch-fade)', description: 'Design: Categorized Tabbed FAQ Switcher • Animation: tab-switch-fade', previewComponent: <GlobalFaq5 /> },
      { id: 'global-faq-6', title: 'Design 6: Floating Glassmorphic Accordion (ANIMATION: glass-pulse-glow)', description: 'Design: Floating Glassmorphic Accordion • Animation: glass-pulse-glow', previewComponent: <GlobalFaq6 /> },
      { id: 'global-faq-7', title: 'Design 7: Minimalist Typographic List (ANIMATION: underline-expand-hover)', description: 'Design: Minimalist Typographic List • Animation: underline-expand-hover', previewComponent: <GlobalFaq7 /> },
      { id: 'global-faq-8', title: 'Design 8: Sidebar Spotlight FAQ Hub (ANIMATION: spotlight-pulse)', description: 'Design: Sidebar Spotlight FAQ Hub • Animation: spotlight-pulse', previewComponent: <GlobalFaq8 /> },
      { id: 'global-faq-9', title: 'Design 9: Neumorphic Soft Reader (ANIMATION: inset-press-elevation)', description: 'Design: Neumorphic Soft Reader • Animation: inset-press-elevation', previewComponent: <GlobalFaq9 /> },
      { id: 'global-faq-10', title: 'Design 10: Cyberpunk Neon Wireframe Protocol (ANIMATION: neon-border-pulse)', description: 'Design: Cyberpunk Neon Wireframe Protocol • Animation: neon-border-pulse', previewComponent: <GlobalFaq10 /> },
      { id: 'global-faq-11', title: 'Design 11: Asymmetric Floating Cards (ANIMATION: floating-tilt-hover)', description: 'Design: Asymmetric Floating Cards • Animation: floating-tilt-hover', previewComponent: <GlobalFaq11 /> },
      { id: 'global-faq-12', title: 'Design 12: Gradient Border Glow Accordion (ANIMATION: gradient-shift-border)', description: 'Design: Gradient Border Glow Accordion • Animation: gradient-shift-border', previewComponent: <GlobalFaq12 /> },
      { id: 'global-faq-13', title: 'Design 13: Clean Dual-Tone Publication (ANIMATION: dual-tone-slide-in)', description: 'Design: Clean Dual-Tone Publication • Animation: dual-tone-slide-in', previewComponent: <GlobalFaq13 /> },
      { id: 'global-faq-14', title: 'Design 14: Modern Bento Compact Grid (ANIMATION: bento-hover-expand)', description: 'Design: Modern Bento Compact Grid • Animation: bento-hover-expand', previewComponent: <GlobalFaq14 /> },
      { id: 'global-faq-15', title: 'Design 15: Horizontal Slide-Over Stream (ANIMATION: slide-over-peek)', description: 'Design: Horizontal Slide-Over Stream • Animation: slide-over-peek', previewComponent: <GlobalFaq15 /> },
      { id: 'global-faq-16', title: 'Design 16: Compact List & Spotlight (ANIMATION: compact-fade-in)', description: 'Design: Compact List & Spotlight • Animation: compact-fade-in', previewComponent: <GlobalFaq16 /> },
      { id: 'global-faq-17', title: 'Design 17: Tabbed Industry Insights (ANIMATION: tab-fade-switch)', description: 'Design: Tabbed Industry Insights • Animation: tab-fade-switch', previewComponent: <GlobalFaq17 /> },
      { id: 'global-faq-18', title: 'Design 18: Dynamic Parallax Cover Lift (ANIMATION: parallax-scroll-lift)', description: 'Design: Dynamic Parallax Cover Lift • Animation: parallax-scroll-lift', previewComponent: <GlobalFaq18 /> },
      { id: 'global-faq-19', title: 'Design 19: Card Overlay High-Contrast (ANIMATION: overlay-zoom-fade)', description: 'Design: Card Overlay High-Contrast • Animation: overlay-zoom-fade', previewComponent: <GlobalFaq19 /> },
      { id: 'global-faq-20', title: 'Design 20: 3D Perspective Staggered Grid (ANIMATION: 3d-perspective-lift)', description: 'Design: 3D Perspective Staggered Grid • Animation: 3d-perspective-lift', previewComponent: <GlobalFaq20 /> },
` + target;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', content, 'utf8');
console.log('Successfully injected global-faq into SectionLibraryGrid!');
