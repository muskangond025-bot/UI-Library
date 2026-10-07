const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/05-blog-grid');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glass Bento Grid Feed', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Soft Card Grid', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Holographic Cyber Matrix Grid', morphism: 'Holographic Cyber' },
  { id: 4, name: 'Multi-Layer Depth Grid', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic 3D Card Grid', morphism: 'Soft Claymorphism' },
  { id: 6, name: 'Frosted Glass Masonry Grid', morphism: 'Frosted Glass' },
  { id: 7, name: 'Chrome Metallic Sheen Grid', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Mesh Card Triple Grid', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Hero + Article Grid', morphism: 'Split Morphism' },
  { id: 10, name: 'Dark Velvet Glow Grid', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Journal Skeuomorphic Paper Grid', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Feed Grid', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Layered Glass Masonry', morphism: 'Glass Tile Layering' },
  { id: 14, name: 'Liquid Glass Capsule Feed Grid', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Grid', morphism: 'Neon Edge Glow' },
  { id: 16, name: 'Architectural Hairline Grid', morphism: 'Wireframe Minimalist' },
  { id: 17, name: 'Magazine Cover Grid', morphism: 'Magazine Overlay' },
  { id: 18, name: 'Prismatic Refraction Grid', morphism: 'Prismatic Glass' },
  { id: 19, name: 'Embossed Vintage Retro Grid', morphism: 'Embossed Neumorphic' },
  { id: 20, name: 'Ultra Stream Full-Bleed Grid', morphism: 'Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `blog-grid-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-grid-${item.id}`,
    name: item.name,
    category: 'blog-grid',
    morphismType: item.morphism,
    settings: {
      sectionBadge: `BLOG GRID #${numStr}`,
      sectionTitle: `CURATED ARTICLES & STORIES VOL. ${item.id}`,
      sectionSubtitle: `Explore our editorial grid designed with ${item.morphism} visual paradigms and responsive UX patterns.`,
      articles: [
        {
          id: 1,
          title: `Next-Gen ${item.morphism} Design Paradigms`,
          excerpt: 'Analyzing front-end performance, spatial visual hierarchies, and modern user engagement.',
          category: 'UI/UX Architecture',
          author: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
          date: 'OCT 07, 2026',
          readTime: '5 MIN READ',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 2,
          title: 'Ethical AI & Zero-Carbon Cloud Computing',
          excerpt: 'How eco-friendly cloud deployment models are redefining developer infrastructure in 2026.',
          category: 'Engineering',
          author: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
          date: 'OCT 05, 2026',
          readTime: '4 MIN READ',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 3,
          title: 'Tactile Micro-Animations in E-Commerce',
          excerpt: 'Enhancing user retention and conversion through subtle tactile feedback animations.',
          category: 'Product Strategy',
          author: { name: 'Sophia Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
          date: 'OCT 03, 2026',
          readTime: '7 MIN READ',
          image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 4,
          title: 'Decentralized Data Protocols & Privacy',
          excerpt: 'Evaluating end-to-end security architectures for future enterprise platforms.',
          category: 'Security',
          author: { name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
          date: 'OCT 01, 2026',
          readTime: '6 MIN READ',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 5,
          title: 'Spatial UI & 3D Web Canvas Integration',
          excerpt: 'Bringing interactive 3D WebGL scenes seamlessly into modern responsive web products.',
          category: 'Creative Tech',
          author: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
          date: 'SEP 28, 2026',
          readTime: '8 MIN READ',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
        },
        {
          id: 6,
          title: 'Sustainable Design Systems for Enterprise Scale',
          excerpt: 'Creating maintainable component tokens, color palettes, and accessible component libraries.',
          category: 'Design Systems',
          author: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
          date: 'SEP 25, 2026',
          readTime: '5 MIN READ',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
        }
      ]
    }
  };

  fs.writeFileSync(
    path.join(folderPath, `${dirName}.json`),
    JSON.stringify(jsonContent, null, 2)
  );
});

console.log('Successfully created Phase 1 JSON metadata files for all 20 Blog Grid variants!');
