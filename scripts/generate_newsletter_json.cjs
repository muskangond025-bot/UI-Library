const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/08-blog-newsletter');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const designs = [
  { id: 1, name: 'Glassmorphic Subscriber Hero', morphism: 'Glassmorphism' },
  { id: 2, name: 'Neumorphic Dual-Shadow Box', morphism: 'Soft Neumorphism' },
  { id: 3, name: 'Holographic Cyber Terminal Sub', morphism: 'Holographic Cyber' },
  { id: 4, name: 'Multi-Layer Depth Card Box', morphism: 'Depth Morphism' },
  { id: 5, name: 'Claymorphic 3D Bubble Form', morphism: 'Soft Claymorphism' },
  { id: 6, name: 'Frosted Glass Floating Capsule', morphism: 'Frosted Glass' },
  { id: 7, name: 'Chrome Metallic Sheen Banner', morphism: 'Chrome Liquid Metal' },
  { id: 8, name: 'Aurora Mesh Newsletter Box', morphism: 'Liquid Mesh Glass' },
  { id: 9, name: 'Split Hero Content + Form', morphism: 'Split Morphism' },
  { id: 10, name: 'Dark Velvet Glow Radar Box', morphism: 'Dark Velvet Glass' },
  { id: 11, name: 'Journal Skeuomorphic Stamp Box', morphism: 'Paper Skeuomorphism' },
  { id: 12, name: 'Sci-Fi HUD Telemetry Sub Box', morphism: 'Sci-Fi HUD Glass' },
  { id: 13, name: 'Bento Layered Glass Subscriber', morphism: 'Glass Tile Layering' },
  { id: 14, name: 'Liquid Glass Capsule Sub Bar', morphism: 'Liquid Glass Pill' },
  { id: 15, name: 'Neon Edge Glow Newsletter Card', morphism: 'Neon Edge Glow' },
  { id: 16, name: 'Architectural Hairline Line Form', morphism: 'Wireframe Minimalist' },
  { id: 17, name: 'Magazine Cover Overlay Sub Box', morphism: 'Magazine Overlay' },
  { id: 18, name: 'Prismatic Refraction Glass Box', morphism: 'Prismatic Glass' },
  { id: 19, name: 'Embossed Vintage Retro Box', morphism: 'Embossed Neumorphic' },
  { id: 20, name: 'Ultra Stream Full-Bleed Sub', morphism: 'Full-Bleed Overlay' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `newsletter-${numStr}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    id: `blog-newsletter-${item.id}`,
    name: item.name,
    category: 'blog-newsletter',
    morphismType: item.morphism,
    settings: {
      sectionBadge: `SUBSCRIBE #${numStr}`,
      sectionTitle: `JOIN THE FUTURE OF DIGITAL ARCHITECTURE VOL. ${item.id}`,
      sectionSubtitle: `Get weekly curated insights, ${item.morphism} UI templates, and technical deep-dives delivered straight to your inbox.`,
      inputPlaceholder: 'Enter your work email address...',
      buttonText: 'Subscribe Now',
      disclaimer: 'No spam ever. Unsubscribe anytime with 1-click.',
      subscriberCount: '48,500+ Tech Leaders Already Subscribed'
    }
  };

  fs.writeFileSync(
    path.join(folderPath, `${dirName}.json`),
    JSON.stringify(jsonContent, null, 2)
  );
});

console.log('Successfully created Phase 1 JSON metadata files for all 20 Blog Newsletter variants!');
