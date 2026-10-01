const fs = require('fs');
const path = require('path');

const baseDir = 'c:/UI Library/src/components/sections/product/18-similar-products';

const metadata = [
  {
    n: 1,
    title: "Minimal Editorial Grid",
    description: "Ultra-clean high-whitespace 4-column grid featuring minimal metadata typography, subtle line borders, and hover-underline text CTAs."
  },
  {
    n: 2,
    title: "Horizontal Product Rail",
    description: "Drag-scrollable product rail with custom left/right navigation controls and compact pill CTAs."
  },
  {
    n: 3,
    title: "Large Image / Minimal Metadata",
    description: "Tall portrait imagery with minimal bottom typography and a circular floating add button revealed on hover."
  },
  {
    n: 4,
    title: "Editorial Magazine Layout",
    description: "Magazine column layout with serif headers, issue tags, vertical column dividers, and block CTAs."
  },
  {
    n: 5,
    title: "Asymmetric Product Grid",
    description: "Staggered bento grid with an offset hero product card and side-mounted action badges."
  },
  {
    n: 6,
    title: "Floating Product Cards",
    description: "Levitating product cards floating over ambient background glow orbs with pulsing glass CTA pills."
  },
  {
    n: 7,
    title: "Image-First Cards with Overlay Controls",
    description: "Full-frame image preview taking 90% card area with top-corner glassmorphic control overlays."
  },
  {
    n: 8,
    title: "Full-Bleed Product Tiles",
    description: "Borderless edge-to-edge dark gradient tiles with full-width bottom reveal slider action bars."
  },
  {
    n: 9,
    title: "Stacked Product Information Cards",
    description: "Cards featuring an interactive spec drawer and feature tab toggle directly inside each product container."
  },
  {
    n: 10,
    title: "Product Cards with Side Metadata",
    description: "Split horizontal product rows with image on the left, specifications on the right, and vertical CTA edge bar."
  },
  {
    n: 11,
    title: "Interactive Hover Reveal Cards",
    description: "Products with hidden comparison specs and feature diffs that expand via smooth radial overlay mask on hover."
  },
  {
    n: 12,
    title: "Split Image / Information Cards",
    description: "Two-tone split containers with dark top image canvas and high-contrast light bottom metadata block."
  },
  {
    n: 13,
    title: "Product Showcase with Large Featured Item",
    description: "50% hero featured alternative showcase item paired with a stacked 3-card side selector list."
  },
  {
    n: 14,
    title: "Masonry Product Layout",
    description: "Responsive 3-column masonry grid with dynamic aspect ratios, offset spacing, and corner add controls."
  },
  {
    n: 15,
    title: "Product Cards with Vertical Information Flow",
    description: "Cards structured as a 3-step vertical comparison flow with animated step connectors and step-confirmation CTA."
  },
  {
    n: 16,
    title: "Glass / Layered Product Cards",
    description: "Multi-layered translucent acrylic glass cards with 3D parallax depth layers and glowing glass CTA buttons."
  },
  {
    n: 17,
    title: "Product Cards with Magnetic CTA Interaction",
    description: "High-tech alternative cards featuring a magnetic CTA button that physically tracks mouse pointer coordinates."
  },
  {
    n: 18,
    title: "Compact Luxury Product List",
    description: "High-density luxury horizontal product list with refined spec tags, price deltas, and minimal text CTAs."
  },
  {
    n: 19,
    title: "Experimental Art-Directed Product Grid",
    description: "Art-directed layout featuring morphing SVG blob backgrounds, organic geometric framing, and elastic hover physics."
  },
  {
    n: 20,
    title: "Premium Editorial Carousel / Rail",
    description: "High-converting alternative comparison suite with side-by-side metric indicators and dual action CTAs."
  }
];

metadata.forEach(item => {
  const dir = path.join(baseDir, `similar-products-${item.n}`);
  const jsonPath = path.join(dir, `similar-products-${item.n}.json`);
  const content = JSON.stringify({
    title: item.title,
    description: item.description
  }, null, 2);
  fs.writeFileSync(jsonPath, content, 'utf8');
  console.log(`Updated JSON for ${item.n}: ${item.title}`);
});
