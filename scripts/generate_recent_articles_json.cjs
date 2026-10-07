const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/07-blog-recent-articles');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glass Recent Timeline Feed', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Compact Feed List', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Holographic Cyber Live Feed', morphism: 'Holographic Cyber' },
  { id: 4, name: 'Multi-Layer Depth Chrono Stack', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic Recent Bubble Grid', morphism: 'Soft Claymorphism' },
  { id: 6, name: 'Frosted Recent Horizontal Slider', morphism: 'Frosted Glass' },
  { id: 7, name: 'Chrome Metallic Sheen Feed', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Mesh Recent Triple', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Hero Latest + Timeline', morphism: 'Split Morphism' },
  { id: 10, name: 'Dark Velvet Glow Feed Stream', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Journal Skeuomorphic Newspaper Feed', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Recent Telemetry', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Layered Glass Masonry', morphism: 'Glass Tile Layering' },
  { id: 14, name: 'Liquid Glass Capsule Feed', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Recent Cards', morphism: 'Neon Edge Glow' },
  { id: 16, name: 'Architectural Hairline Feed', morphism: 'Wireframe Minimalist' },
  { id: 17, name: 'Magazine Cover Recent Grid', morphism: 'Magazine Overlay' },
  { id: 18, name: 'Prismatic Refraction Glass Feed', morphism: 'Prismatic Glass' },
  { id: 19, name: 'Embossed Vintage Retro Cards', morphism: 'Embossed Neumorphic' },
  { id: 20, name: 'Ultra Stream Full-Bleed Feed', morphism: 'Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `recent-articles-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-recent-articles-${item.id}`,
    name: item.name,
    category: 'blog-recent-articles',
    morphismType: item.morphism,
    settings: {
      sectionBadge: `JUST IN #${numStr}`,
      sectionTitle: `RECENTLY PUBLISHED STORIES VOL. ${item.id}`,
      sectionSubtitle: `Stay updated with our latest releases designed with ${item.morphism} visual paradigms and responsive UX patterns.`,
      articles: [
        {
          id: 301,
          title: `Exploring Next-Gen ${item.morphism} UI Design`,
          excerpt: 'Fresh insights into user retention, spatial design tokens, and front-end performance.',
          publishedTime: '10 Mins Ago',
          category: 'UI/UX Architecture',
          author: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
          date: 'OCT 07, 2026',
          readTime: '4 MIN READ',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 302,
          title: 'Zero-Carbon Cloud Deployment Protocols',
          excerpt: 'How sustainable server infrastructure models are transforming developer workflows.',
          publishedTime: '2 Hours Ago',
          category: 'Engineering',
          author: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
          date: 'OCT 07, 2026',
          readTime: '5 MIN READ',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 303,
          title: 'Tactile Micro-Animations in Modern Web Apps',
          excerpt: 'Enhancing interactive touch response and motion feedback in digital products.',
          publishedTime: '5 Hours Ago',
          category: 'Product Strategy',
          author: { name: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
          date: 'OCT 07, 2026',
          readTime: '6 MIN READ',
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

console.log('Successfully created Phase 1 JSON metadata files for all 20 Blog Recent Articles variants!');
