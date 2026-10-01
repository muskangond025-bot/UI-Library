const fs = require('fs');
const path = require('path');

const baseDir = 'c:/UI Library/src/components/sections/product/19-recommended-products';

const metadata = [
  {
    n: 1,
    title: "Editorial Recommendation Rail",
    description: "Curated products move through an editorial horizontal rail with continuous drift motion and minimal metadata."
  },
  {
    n: 2,
    title: "Large Featured Recommendation + Smaller Products",
    description: "Prominent featured recommendation card expanding on hover alongside smaller supporting product items."
  },
  {
    n: 3,
    title: "Asymmetric Recommendation Grid",
    description: "Staggered bento grid with directional card entrance animations and offset layout positioning."
  },
  {
    n: 4,
    title: "Horizontal Scrolling Product Shelf",
    description: "Horizontal shelf slider featuring image mask reveals and drag-to-scroll recommendation navigation."
  },
  {
    n: 5,
    title: "Minimal Luxury Product List",
    description: "High-density minimalist luxury product rows with snap carousel motion and elegant typography."
  },
  {
    n: 6,
    title: "Full-Bleed Image Recommendations",
    description: "Full-screen edge-to-edge recommendation tiles with staggered editorial entrance transitions."
  },
  {
    n: 7,
    title: "Floating Product Cards",
    description: "Levitating translucent cards floating over blurred ambient glow layers with parallax movement."
  },
  {
    n: 8,
    title: "Magazine-Style Recommendation Layout",
    description: "Editorial magazine grid with serif headlines, issue badges, and hover image scale transformations."
  },
  {
    n: 9,
    title: "Stacked Recommendation Cards",
    description: "Interactive card deck stacking transition where top cards flip to reveal personalized picks."
  },
  {
    n: 10,
    title: "Split Image + Product Information",
    description: "Two-tone split cards pairing imagery with side specification lists and layered depth movement."
  },
  {
    n: 11,
    title: "Hover-Reveal Recommendation Grid",
    description: "Card grid hiding feature diffs under a dark backdrop mask that expands on cursor elevation."
  },
  {
    n: 12,
    title: "Masonry Recommendation Layout",
    description: "Responsive 4-column masonry flow with cursor-responsive movement and dynamic aspect ratios."
  },
  {
    n: 13,
    title: "Circular / Radial Product Showcase",
    description: "Products arranged in a radial focal layout with image zoom transition effects."
  },
  {
    n: 14,
    title: "Vertical Product Story Flow",
    description: "Sequential vertical story layout with step-by-step horizontal clip reveal animations."
  },
  {
    n: 15,
    title: "Layered Depth Recommendation Cards",
    description: "Multi-layered glass cards with card stacking transitions and glowing specular borders."
  },
  {
    n: 16,
    title: "Interactive Product Carousel",
    description: "Elastic carousel movement with custom navigation controls and responsive card snapping."
  },
  {
    n: 17,
    title: "Compact Recommendation Rail with Floating CTA",
    description: "High-density product rail featuring product image swaps and floating glass CTA pills."
  },
  {
    n: 18,
    title: "Image-First Editorial Grid",
    description: "Image-dominant 4-card grid featuring progressive scroll reveals and top-corner controls."
  },
  {
    n: 19,
    title: "Experimental Art-Directed Recommendations",
    description: "Morphing SVG blob backgrounds with 3D tilt interaction physics and organic framing."
  },
  {
    n: 20,
    title: "Premium Personalized Showcase",
    description: "Personalized recommendation suite with smooth showcase transitions and dual action triggers."
  }
];

metadata.forEach(item => {
  const dir = path.join(baseDir, `recommended-products-${item.n}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const jsonPath = path.join(dir, `recommended-products-${item.n}.json`);
  const content = JSON.stringify({
    title: item.title,
    description: item.description
  }, null, 2);
  fs.writeFileSync(jsonPath, content, 'utf8');
  console.log(`Updated JSON for Recommended Products ${item.n}: ${item.title}`);
});
