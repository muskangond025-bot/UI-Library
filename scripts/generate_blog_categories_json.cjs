const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/04-blog-categories');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glassmorphic Icon Bento Grid', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Tactile Filter Cards', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Holographic Cyber Matrix Hub', morphism: 'Holographic Cyber' },
  { id: 4, name: 'Multi-Layer Depth Cards', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic 3D Bubble Grid', morphism: 'Soft Claymorphism' },
  { id: 6, name: 'Frosted Horizontal Filter Slider', morphism: 'Frosted Glass' },
  { id: 7, name: 'Chrome Metallic Sheen Tiles', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Mesh Floating Pills', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Category Feature + Grid', morphism: 'Split Morphism' },
  { id: 10, name: 'Dark Velvet Glow Radar', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Journal Skeuomorphic Stamp Grid', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Topic Telemetry', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Layered Glass Masonry', morphism: 'Glass Tile Layering' },
  { id: 14, name: 'Liquid Glass Capsule Filter Bar', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Category Cards', morphism: 'Neon Edge Glow' },
  { id: 16, name: 'Architectural Hairline Grid', morphism: 'Wireframe Minimalist' },
  { id: 17, name: 'Magazine Minimalist Topic List', morphism: 'Magazine Overlay' },
  { id: 18, name: 'Prismatic Refraction Glass Cards', morphism: 'Prismatic Glass' },
  { id: 19, name: 'Embossed Vintage Retro Tiles', morphism: 'Embossed Neumorphic' },
  { id: 20, name: 'Ultra Stream Full-Bleed Grid', morphism: 'Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `blog-categories-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-categories-${item.id}`,
    name: item.name,
    category: 'blog-categories',
    morphismType: item.morphism,
    settings: {
      sectionBadge: `EXPLORE TOPICS #${numStr}`,
      sectionTitle: `FEATURED BLOG CATEGORIES VOL. ${item.id}`,
      sectionSubtitle: `Browse through curated topics and article collections built with ${item.morphism} aesthetics.`,
      categories: [
        {
          id: 1,
          name: 'Artificial Intelligence',
          slug: 'ai-tech',
          articleCount: 42,
          icon: 'Brain',
          description: 'Machine learning algorithms, neural models, and autonomous system insights.',
          featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
          accentColor: 'cyan'
        },
        {
          id: 2,
          name: 'UI/UX Architecture',
          slug: 'ui-ux-design',
          articleCount: 38,
          icon: 'Layout',
          description: 'Design systems, glassmorphic UI patterns, and accessibility guidelines.',
          featuredImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
          accentColor: 'amber'
        },
        {
          id: 3,
          name: 'Sustainable Tech',
          slug: 'green-tech',
          articleCount: 29,
          icon: 'Leaf',
          description: 'Zero-carbon cloud infrastructure and ethical green computing practices.',
          featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          accentColor: 'emerald'
        },
        {
          id: 4,
          name: 'Product Strategy',
          slug: 'product-strategy',
          articleCount: 54,
          icon: 'Rocket',
          description: 'Scaling digital platforms, user retention, and growth frameworks.',
          featuredImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
          accentColor: 'purple'
        }
      ]
    }
  };

  fs.writeFileSync(
    path.join(folderPath, `${dirName}.json`),
    JSON.stringify(jsonContent, null, 2)
  );
});

console.log('Successfully created Phase 1 JSON metadata files for all 20 Blog Categories variants!');
