const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/06-blog-popular-articles');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glass Rank Trending Feed', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Top Rated List', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Holographic Cyber Trending Matrix', morphism: 'Holographic Cyber' },
  { id: 4, name: 'Multi-Layer Depth Stack', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic Popular Bubble Cards', morphism: 'Soft Claymorphism' },
  { id: 6, name: 'Frosted Popular Slider', morphism: 'Frosted Glass' },
  { id: 7, name: 'Chrome Metallic Sheen Feed', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Mesh Popular Triple', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Hero Rank 1 + Rail', morphism: 'Split Morphism' },
  { id: 10, name: 'Dark Velvet Flame Stream', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Journal Skeuomorphic Newspaper', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Popular Telemetry', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Layered Glass Masonry', morphism: 'Glass Tile Layering' },
  { id: 14, name: 'Liquid Glass Capsule Feed', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Popular Cards', morphism: 'Neon Edge Glow' },
  { id: 16, name: 'Architectural Hairline Rank Feed', morphism: 'Wireframe Minimalist' },
  { id: 17, name: 'Magazine Cover Popular Grid', morphism: 'Magazine Overlay' },
  { id: 18, name: 'Prismatic Refraction Glass Feed', morphism: 'Prismatic Glass' },
  { id: 19, name: 'Embossed Vintage Retro Cards', morphism: 'Embossed Neumorphic' },
  { id: 20, name: 'Ultra Stream Full-Bleed Feed', morphism: 'Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `popular-articles-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-popular-articles-${item.id}`,
    name: item.name,
    category: 'blog-popular-articles',
    morphismType: item.morphism,
    settings: {
      sectionBadge: `TRENDING NOW #${numStr}`,
      sectionTitle: `MOST READ & POPULAR ARTICLES VOL. ${item.id}`,
      sectionSubtitle: `Discover top trending publications curated with ${item.morphism} visual paradigms and responsive UX patterns.`,
      articles: [
        {
          rank: 1,
          id: 201,
          title: `Mastering Next-Gen ${item.morphism} UI Design`,
          excerpt: 'An in-depth study on user engagement, spatial visual hierarchies, and front-end performance.',
          views: '124.5K Reads',
          category: 'UI/UX Architecture',
          author: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
          date: 'OCT 07, 2026',
          readTime: '6 MIN READ',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
        },
        {
          rank: 2,
          id: 202,
          title: 'Zero-Carbon Cloud Computing Strategies for 2026',
          excerpt: 'How eco-friendly infrastructure models are reshaping global enterprise software engineering.',
          views: '98.2K Reads',
          category: 'Engineering',
          author: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
          date: 'OCT 05, 2026',
          readTime: '5 MIN READ',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
        },
        {
          rank: 3,
          id: 203,
          title: 'Tactile Micro-Animations in E-Commerce',
          excerpt: 'Maximizing user retention and conversion rates using subtle tactile motion feedback.',
          views: '86.7K Reads',
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

console.log('Successfully created Phase 1 JSON metadata files for all 20 Blog Popular Articles variants!');
