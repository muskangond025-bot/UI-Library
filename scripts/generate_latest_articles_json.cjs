const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/03-blog-latest-articles');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glass Bento Feed Grid', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Vertical List', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Cyber Matrix Feed', morphism: 'Holographic Cyber' },
  { id: 4, name: 'Depth Multi-Card Stack', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic Pill Grid', morphism: 'Soft Claymorphism' },
  { id: 6, name: 'Frosted Horizontal Scroll', morphism: 'Frosted Glass' },
  { id: 7, name: 'Chrome Metallic List Feed', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Mesh Card Triple', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Hero + Article Rail', morphism: 'Split Morphism' },
  { id: 10, name: 'Dark Velvet Timeline Stream', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Journal Newspaper Grid', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Feed Matrix', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Asymmetric Masonry', morphism: 'Glass Tile Layering' },
  { id: 14, name: 'Liquid Glass Capsule Feed', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Grid', morphism: 'Neon Edge Glow' },
  { id: 16, name: 'Architectural Line Feed', morphism: 'Wireframe Minimalist' },
  { id: 17, name: 'Magazine Compact List', morphism: 'Magazine Cover Overlay' },
  { id: 18, name: 'Prismatic Refraction Cards', morphism: 'Prismatic Glass' },
  { id: 19, name: 'Retro Embossed Cards', morphism: 'Embossed Neumorphic' },
  { id: 20, name: 'Ultra Stream Full-Bleed', morphism: 'Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `latest-articles-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-latest-articles-${item.id}`,
    name: item.name,
    category: 'blog-latest-articles',
    morphismType: item.morphism,
    settings: {
      sectionBadge: `LATEST ARTICLES #${numStr}`,
      sectionTitle: `LATEST INSIGHTS & DISCOVERIES VOL. ${item.id}`,
      sectionSubtitle: `Explore our newest publications featuring ${item.morphism} visual architectures and responsive UX patterns.`,
      articles: [
        {
          id: 101,
          title: `Designing for Next-Gen ${item.morphism} Ecosystems`,
          excerpt: 'An in-depth analysis of modern web visual hierarchies and interactive front-end performance strategies.',
          category: 'UI/UX Design',
          author: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
          date: 'OCT 07, 2026',
          readTime: '5 MIN READ',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 102,
          title: 'Optimizing Zero-Carbon Web Infrastructure',
          excerpt: 'How eco-friendly cloud deployment models are changing developer workflows in 2026.',
          category: 'Engineering',
          author: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
          date: 'OCT 05, 2026',
          readTime: '4 MIN READ',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 103,
          title: 'The Evolution of Micro-Animations in E-Commerce',
          excerpt: 'Enhancing user retention and conversion through subtle tactile feedback animations.',
          category: 'Product Strategy',
          author: { name: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
          date: 'OCT 03, 2026',
          readTime: '7 MIN READ',
          image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
        }
      ]
    }
  };

  fs.writeFileSync(
    path.join(folderPath, `${dirName}.json`),
    JSON.stringify(jsonContent, null, 2)
  );
});

console.log('Successfully created Phase 1 JSON metadata files for all 20 Latest Articles variants!');
