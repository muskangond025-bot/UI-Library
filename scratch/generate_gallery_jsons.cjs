const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/22-customer-review-gallery');

const sampleCustomers = [
  {
    id: "c1",
    name: "Sophia Chen",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
    reviewText: "The craftsmanship is unmatched. From the tailored silhouette to the buttery soft texture, it has quickly become my go-to piece for autumn.",
    rating: 5,
    verified: true,
    date: "2 days ago",
    location: "New York, NY",
    productName: "Silk Wool Cashmere Coat",
    productImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
    productPrice: "$420.00",
    productLink: "#",
    tags: ["Autumn Outfit", "Style Guide", "Verified Purchase"]
  },
  {
    id: "c2",
    name: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    mediaType: "video",
    media: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-pink-coat-40911-large.mp4",
    duration: "0:24",
    reviewText: "Exceeded all expectations. The structure holds effortlessly throughout the day and the fabric feels incredibly premium.",
    rating: 5,
    verified: true,
    date: "1 week ago",
    location: "London, UK",
    productName: "Structured Travel Blazer",
    productImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    productPrice: "$310.00",
    productLink: "#",
    tags: ["Workwear", "Essential"]
  },
  {
    id: "c3",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    reviewText: "Draped beautifully! Wore it to an evening gala and received endless compliments. Absolutely timeless elegance.",
    rating: 5,
    verified: true,
    date: "3 weeks ago",
    location: "Paris, France",
    productName: "Architectural Pleated Gown",
    productImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80",
    productPrice: "$580.00",
    productLink: "#",
    tags: ["Evening Gala", "Luxury Edit"]
  },
  {
    id: "c4",
    name: "Liam O'Connor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80",
    reviewText: "Minimalist perfection. Clean stitching, comfortable movement, and durable materials that last season after season.",
    rating: 5,
    verified: true,
    date: "1 month ago",
    location: "Dublin, Ireland",
    productName: "Monochrome Canvas Boot",
    productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    productPrice: "$250.00",
    productLink: "#",
    tags: ["Footwear", "Streetwear"]
  },
  {
    id: "c5",
    name: "Aria Takahashi",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80",
    mediaType: "video",
    media: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-wearing-a-yellow-coat-walking-down-the-street-40912-large.mp4",
    duration: "0:18",
    reviewText: "The color in person is even richer than online. Lightweight yet warm. I've recommended it to all my colleagues!",
    rating: 5,
    verified: true,
    date: "1 month ago",
    location: "Tokyo, Japan",
    productName: "Merino Wool Knit Sweater",
    productImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    productPrice: "$190.00",
    productLink: "#",
    tags: ["Knitwear", "Winter Edit"]
  },
  {
    id: "c6",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&q=80",
    mediaType: "image",
    media: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
    reviewText: "Functional luxury at its best. Great pocket placement and sleek profile that pairs with casual or formal outfits.",
    rating: 5,
    verified: true,
    date: "2 months ago",
    location: "Seoul, South Korea",
    productName: "Minimalist Leather Backpack",
    productImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    productPrice: "$340.00",
    productLink: "#",
    tags: ["Leather Goods", "Everyday Carry"]
  }
];

const variantsInfo = [
  {
    id: 1,
    title: "Editorial Customer Gallery",
    desc: "Customer photography is arranged in an asymmetric editorial grid, while selected images expand through a directional media mask reveal to disclose the associated review.",
    eyebrow: "EDITORIAL PERSPECTIVE",
    heading: "The Community Gallery",
    subtitle: "Real stories and visual expressions from our valued clientele around the globe."
  },
  {
    id: 2,
    title: "Masonry Review Gallery",
    desc: "A Pinterest-style multi-column masonry grid showcasing customer photos with verified buyer badges, hover scale effects, and quick preview drawer modals.",
    eyebrow: "COMMUNITY STORIES",
    heading: "Visual Customer Reviews",
    subtitle: "Explore authentic photos uploaded by verified buyers experiencing our collection in real life."
  },
  {
    id: 3,
    title: "Full-Bleed Customer Stories",
    desc: "A full-bleed dark luxury cinematic showcase with smooth background image crossfades, floating customer metadata, and automated slide progress indicators.",
    eyebrow: "CINEMATIC SHOWCASE",
    heading: "Full-Bleed Stories",
    subtitle: "Immerse yourself in customer narratives rendered with edge-to-edge photography."
  },
  {
    id: 4,
    title: "Horizontal UGC Rail",
    desc: "An Instagram-style continuous horizontal review rail with interactive drag scrolling, video play badges, and quick shop popover triggers.",
    eyebrow: "INSTAGRAM INSPIRED",
    heading: "Customer Style Rail",
    subtitle: "Swipe through customer fits, videos, and real-time product reviews."
  },
  {
    id: 5,
    title: "Large Featured Review + Supporting Gallery",
    desc: "A hero spotlight layout pairing one prominent lead customer review with a thumbnail sidebar, switching active media with layout animation morphs.",
    eyebrow: "SPOTLIGHT REVIEWS",
    heading: "Featured Customer Story",
    subtitle: "Deep-dive into highlighted reviews from verified community members."
  },
  {
    id: 6,
    title: "Asymmetric Customer Gallery",
    desc: "A dynamic bento layout featuring uneven tile spans, dark glassmorphism cards, clip-path diagonal reveals, and subtle tilt hover interactions.",
    eyebrow: "BENTO GRID",
    heading: "Asymmetric Review Matrix",
    subtitle: "A modern grid displaying customer media with architectural tile proportions."
  },
  {
    id: 7,
    title: "Magazine-Style Review Layout",
    desc: "An elegant print magazine design featuring drop-caps, warm cream palette, serif typography callouts, and directional slide story transitions.",
    eyebrow: "MAGAZINE EDITION",
    heading: "Editorial Press & Reviews",
    subtitle: "Selected customer testimonials presented in timeless editorial print aesthetic."
  },
  {
    id: 8,
    title: "Minimal Luxury Review Grid",
    desc: "An ultra-clean monochrome review grid with generous whitespace, subtle bronze star accents, and delicate hover fade details.",
    eyebrow: "MINIMALIST DESIGN",
    heading: "Refined Review Grid",
    subtitle: "Understated elegance featuring authentic customer imagery and verified feedback."
  },
  {
    id: 9,
    title: "Layered Customer Story Cards",
    desc: "An interactive 3D stacked deck of review cards where dragging or clicking displaces the top card with spring rotation physics to reveal the next story.",
    eyebrow: "STACKED CARDS",
    heading: "Customer Story Deck",
    subtitle: "Flip through a physical-feeling deck of customer media and verified reviews."
  },
  {
    id: 10,
    title: "Vertical Customer Story Feed",
    desc: "A social media style vertical timeline feed displaying customer review stories with avatar headers, location tags, interactive galleries, and product pills.",
    eyebrow: "SOCIAL STREAM",
    heading: "Live Community Feed",
    subtitle: "Follow customer posts, unboxings, and styled outfits updated in real time."
  },
  {
    id: 11,
    title: "Split Media + Review Layout",
    desc: "A 50/50 split container pairing a sticky high-resolution customer media canvas on the left with an interactive review quote accordion selector on the right.",
    eyebrow: "DUAL VIEWPORT",
    heading: "Interactive Review Canvas",
    subtitle: "Select customer quotes to update the synchronized high-definition imagery."
  },
  {
    id: 12,
    title: "Fullscreen Media Showcase",
    desc: "A responsive grid of customer media that expands into an immersive full-screen glassmorphic lightbox with metadata panels and keyboard navigation.",
    eyebrow: "LIGHTBOX EXPERIENCE",
    heading: "Media Showcase Gallery",
    subtitle: "Click any customer photo or video to launch full-screen high-resolution detail views."
  },
  {
    id: 13,
    title: "Polaroid-Inspired Customer Gallery",
    desc: "Casual scattered polaroid photo cards with handwritten typography, tape accents, tilt angles, and interactive drag-and-lift hover movements.",
    eyebrow: "RETRO POLAROID",
    heading: "Snapshots of Joy",
    subtitle: "Authentic unboxing and styled moments captured on polaroid-style frames."
  },
  {
    id: 14,
    title: "Circular / Radial Customer Showcase",
    desc: "A radial orbit layout placing customer avatar nodes around a central featured review canvas with orbiting pulse animations and smooth node switching.",
    eyebrow: "RADIAL ORBIT",
    heading: "Community Orbit Showcase",
    subtitle: "Navigate around customer stories in a circular interactive display."
  },
  {
    id: 15,
    title: "Stacked Review Media Cards",
    desc: "A horizontal card sequence with depth scaling cards that slide laterally with spring physics during navigation.",
    eyebrow: "CAROUSEL STACK",
    heading: "Depth Scaled Reviews",
    subtitle: "Browse through stacked customer review cards with smooth spatial animation."
  },
  {
    id: 16,
    title: "Horizontal Story Timeline",
    desc: "A chronological customer journey gallery tracking product performance across time milestones with horizontal progress line animations.",
    eyebrow: "CHRONOLOGICAL JOURNEY",
    heading: "Long-Term Experience Timeline",
    subtitle: "See how our products hold up over 30 days, 6 months, and years of regular use."
  },
  {
    id: 17,
    title: "Immersive Video + Photo Gallery",
    desc: "A video-first UGC showcase highlighting video reviews with custom play overlays, duration tags, and interactive video playback modals.",
    eyebrow: "VIDEO FIRST",
    heading: "Video Review Gallery",
    subtitle: "Watch real customer unboxings, try-ons, and detailed product walkthroughs."
  },
  {
    id: 18,
    title: "Floating Customer Media Gallery",
    desc: "A bento gallery of translucent glassmorphic review cards hovering over an animated mesh gradient background with cursor spotlight glow micro-interactions.",
    eyebrow: "GLASSMORPHISM",
    heading: "Floating UGC Experience",
    subtitle: "Interactive review cards elevated over vibrant dynamic ambient lighting."
  },
  {
    id: 19,
    title: "Art-Directed Editorial UGC Layout",
    desc: "A high-contrast fashion editorial layout with bold headline typography cutouts, image clip-path curtain reveals, and product tag callouts.",
    eyebrow: "HIGH FASHION",
    heading: "Art-Directed Customer Edits",
    subtitle: "Stunning visual content curated directly from our community's creative uploads."
  },
  {
    id: 20,
    title: "Premium Interactive Customer Showcase",
    desc: "A comprehensive UGC section featuring media filters (All, Photo, Video, 5-Star), search bar, layout view toggles (Grid / Rail), and lightbox drawer.",
    eyebrow: "ALL-IN-ONE HUB",
    heading: "Customer Review Hub",
    subtitle: "Filter, search, and inspect customer reviews and uploaded media in fine detail."
  }
];

console.log("Writing JSON files...");
variantsInfo.forEach((v) => {
  const folderPath = path.join(baseDir, `customer-review-gallery-${v.id}`);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    title: v.title,
    description: v.desc,
    eyebrow: v.eyebrow,
    heading: v.heading,
    subtitle: v.subtitle,
    customers: sampleCustomers
  };

  fs.writeFileSync(
    path.join(folderPath, `customer-review-gallery-${v.id}.json`),
    JSON.stringify(jsonContent, null, 2),
    'utf8'
  );
});

console.log("JSON files created successfully.");
