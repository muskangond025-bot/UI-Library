const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/02-blog-featured-article');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glass Editorial Spotlight', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Magazine Feature', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Holographic Cyber Hub', morphism: 'Holographic Morphism' },
  { id: 4, name: 'Depth Card Split Spotlight', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic 3D Story Card', morphism: 'Claymorphism' },
  { id: 6, name: 'Frosted Bento Feature Grid', morphism: 'Frosted Glass Sub-grid' },
  { id: 7, name: 'Chrome Metallic Tech Focus', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Dynamic Mesh Focus', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Carousel Featured Focus', morphism: 'Split Glass Morphism' },
  { id: 10, name: 'Velvet Dark Mode Glass', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Skeuomorphic Journal Note', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Featured Frame', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Stacked Glass Feature', morphism: 'Glass Layer Stacking' },
  { id: 14, name: 'Liquid Glass Floating Capsule', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Feature', morphism: 'Neon Glow Edge' },
  { id: 16, name: 'Architectural Wireframe Glass', morphism: 'Wireframe Glass' },
  { id: 17, name: 'Full Poster Cover Spotlight', morphism: 'Magazine Cover Morphism' },
  { id: 18, name: 'Prismatic Refraction Glass', morphism: 'Prismatic Refraction' },
  { id: 19, name: 'Embossed Vintage Retro Card', morphism: 'Embossed Neumorphic Retro' },
  { id: 20, name: 'Ultra Hero Full-Bleed Overlay', morphism: 'Ultra Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `featured-article-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-featured-article-${item.id}`,
    name: item.name,
    category: 'blog-featured-article',
    morphismType: item.morphism,
    settings: {
      badge: `EDITORIAL SPOTLIGHT #${numStr}`,
      title: `THE FUTURE OF INNOVATION & DIGITAL ARCHITECTURE VOL. ${item.id}`,
      excerpt: `An in-depth exploration into modern ${item.morphism} visual paradigms, user interaction models, and responsive design systems.`,
      author: {
        name: 'Elena Rostova',
        role: 'Senior Editorial Director',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
      },
      date: 'OCT 07, 2026',
      readTime: `${4 + (item.id % 5)} MIN READ`,
      featuredImage: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80`,
      tags: ['Design Systems', item.morphism, 'UI Architecture'],
      actionText: 'Read Full Article',
      bookmarkable: true
    }
  };

  fs.writeFileSync(
    path.join(folderPath, `${dirName}.json`),
    JSON.stringify(jsonContent, null, 2)
  );
});

console.log('Successfully created Phase 1 JSON metadata files for all 20 featured article sections!');
