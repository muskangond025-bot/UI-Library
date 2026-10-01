const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/23-questions-answers');

const sampleQuestions = [
  {
    id: "q1",
    question: "How does the sizing run compared to standard US sizing?",
    answer: "Our pieces are designed for a relaxed yet tailored fit. If you prefer a more slim silhouette, we recommend sizing down one size. Check our detailed garment measurement chart on the product page for exact sleeve and chest dimensions.",
    category: "Sizing & Fit",
    customerName: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    date: "3 days ago",
    verified: true,
    helpfulCount: 42,
    productName: "Silk Cashmere Knit",
    tags: ["Sizing", "Fit Guide"]
  },
  {
    id: "q2",
    question: "What are the recommended care instructions for long-term durability?",
    answer: "We advise dry cleaning or delicate hand wash in cold water using a wool-safe detergent. Lay flat to dry away from direct sunlight. Do not tumble dry to preserve fabric softness and structural integrity.",
    category: "Care & Fabric",
    customerName: "Claire Dupont",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    date: "1 week ago",
    verified: true,
    helpfulCount: 38,
    productName: "Merino Wool Coat",
    tags: ["Maintenance", "Fabric Care"]
  },
  {
    id: "q3",
    question: "Is this item water-resistant for heavy autumn rain?",
    answer: "Yes, the shell features a hydrophobic DWR coating that repels light to moderate rain showers, keeping you warm and dry without compromising breathability.",
    category: "Materials",
    customerName: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    date: "2 weeks ago",
    verified: true,
    helpfulCount: 29,
    productName: "Technical Weather Parka",
    tags: ["Weather Resistance", "Performance"]
  },
  {
    id: "q4",
    question: "What is your return policy if the fit isn't right?",
    answer: "We offer complimentary 30-day returns and exchanges for all unworn items with original tags attached. Pre-printed prepaid return shipping labels are included in every shipment.",
    category: "Shipping & Returns",
    customerName: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80",
    date: "3 weeks ago",
    verified: true,
    helpfulCount: 56,
    productName: "Structured Blazer",
    tags: ["Returns", "Customer Care"]
  },
  {
    id: "q5",
    question: "Where are the raw materials sourced from?",
    answer: "All our cashmere and organic virgin wool are ethically harvested from certified sustainable pastures in Inner Mongolia and spun in Biella, Italy.",
    category: "Sustainability",
    customerName: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    date: "1 month ago",
    verified: true,
    helpfulCount: 64,
    productName: "Organic Wool Sweater",
    tags: ["Ethics", "Sustainability"]
  },
  {
    id: "q6",
    question: "Does the coat come with extra replacement buttons?",
    answer: "Yes, every garment comes with a small fabric pouch inside the interior pocket containing matching horn replacement buttons and extra thread.",
    category: "Product Details",
    customerName: "Sophia Chen",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80",
    date: "1 month ago",
    verified: true,
    helpfulCount: 19,
    productName: "Double-Breasted Trench",
    tags: ["Hardware", "Accessories"]
  }
];

const variantsInfo = [
  {
    id: 1,
    title: "Editorial Q&A Accordion",
    desc: "A clean editorial accordion with razor-thin dividers, category badges, helpful count indicators, and smooth height expansion.",
    eyebrow: "CUSTOMER INQUIRIES",
    heading: "Product Questions & Answers",
    subtitle: "Everything you need to know about fit, craftsmanship, and care."
  },
  {
    id: 2,
    title: "Split Question + Answer Layout",
    desc: "A 2-column split viewport layout with interactive question items on the left and a dedicated high-impact answer reading canvas on the right.",
    eyebrow: "DUAL VIEWPORT",
    heading: "Question & Answer Canvas",
    subtitle: "Select a question to inspect verified responses from our product specialists."
  },
  {
    id: 3,
    title: "Conversational Chat-Style Q&A",
    desc: "A messaging thread UI where customer questions appear as chat bubbles and expert answers enter with directional speech bubble transitions.",
    eyebrow: "CONVERSATIONAL FLOW",
    heading: "Customer Q&A Thread",
    subtitle: "Real conversations between buyers and product specialists."
  },
  {
    id: 4,
    title: "Vertical Question Timeline",
    desc: "A chronological vertical timeline stream connecting customer queries and official responses with path progression animations.",
    eyebrow: "CHRONOLOGICAL INQUIRIES",
    heading: "Community Question Stream",
    subtitle: "Browse customer queries answered in chronological sequence."
  },
  {
    id: 5,
    title: "Large Question / Minimal Answer",
    desc: "A high-contrast typography layout featuring oversized question headers that expand smoothly to reveal concise, direct answers.",
    eyebrow: "TYPOGRAPHIC CLARITY",
    heading: "Direct Q&A Highlights",
    subtitle: "Big bold questions with direct, clear answers."
  },
  {
    id: 6,
    title: "Magazine Q&A Layout",
    desc: "An elegant print magazine aesthetic on warm cream styling with drop-cap quotes, editorial serif fonts, and subtle column rules.",
    eyebrow: "MAGAZINE EDITION",
    heading: "The Inquiry Column",
    subtitle: "Selected customer questions answered by our master tailoring team."
  },
  {
    id: 7,
    title: "Two-Column Q&A Explorer",
    desc: "A dual-column grid organizing product questions into distinct category tiles with smooth layout transitions on hover.",
    eyebrow: "CATEGORY EXPLORER",
    heading: "Structured Q&A Matrix",
    subtitle: "Browse questions organized by fit, materials, and care."
  },
  {
    id: 8,
    title: "Stacked Question Cards",
    desc: "Overlapping stacked question cards with subtle depth shadows that expand upward with spring displacement when selected.",
    eyebrow: "STACKED CARDS",
    heading: "Question Card Deck",
    subtitle: "Interactive layered cards showcasing customer inquiries."
  },
  {
    id: 9,
    title: "Minimal Typography-First Q&A",
    desc: "An ultra-clean monochrome design focusing on generous spacing, fine borders, underline hover indicators, and smooth text reveals.",
    eyebrow: "MINIMALIST DESIGN",
    heading: "Essential Product Q&A",
    subtitle: "Pure typography focused on clarity and effortless reading."
  },
  {
    id: 10,
    title: "Question Index + Answer Panel",
    desc: "A sticky sidebar question index paired with a full-width answer reader panel featuring verified expert badges.",
    eyebrow: "INDEXED KNOWLEDGE",
    heading: "Question & Answer Index",
    subtitle: "Easily jump between indexed questions and detailed answers."
  },
  {
    id: 11,
    title: "Featured Question + Supporting Questions",
    desc: "A hero layout showcasing one prominent featured question at the top with a 2-column supporting question list below.",
    eyebrow: "SPOTLIGHT QUESTION",
    heading: "Featured Q&A Spotlight",
    subtitle: "Our most frequently asked product questions highlighted front and center."
  },
  {
    id: 12,
    title: "Asymmetric Q&A Grid",
    desc: "A bento-box asymmetric grid of question tiles featuring neon category tags, glassmorphic accents, and spring panel movements.",
    eyebrow: "BENTO GRID",
    heading: "Asymmetric Q&A Bento",
    subtitle: "Architectural bento layout for dynamic question browsing."
  },
  {
    id: 13,
    title: "Expandable Layered Q&A Cards",
    desc: "Stacked file-folder style Q&A cards with subtle 3D tilt effects that expand downward smoothly when activated.",
    eyebrow: "LAYERED FOLDERS",
    heading: "Interactive Folder Q&A",
    subtitle: "Physical folder aesthetic for exploring product specifications."
  },
  {
    id: 14,
    title: "Horizontal Question Rail",
    desc: "A drag-scrollable horizontal track of question cards with snap alignment and instant answer reveal overlays.",
    eyebrow: "HORIZONTAL RAIL",
    heading: "Swipeable Q&A Rail",
    subtitle: "Scroll horizontally through customer questions and expert responses."
  },
  {
    id: 15,
    title: "Sticky Question Navigation + Answer Content",
    desc: "A top sticky pill navigation bar that smoothly scrolls and highlights active answer sections below.",
    eyebrow: "STICKY NAVIGATION",
    heading: "Jump-Nav Q&A Section",
    subtitle: "Click category pills to jump instantly to relevant answer blocks."
  },
  {
    id: 16,
    title: "Numbered Editorial Q&A",
    desc: "Oversized bold numerals (01, 02, 03) anchoring editorial question blocks with smooth height expansion drawers.",
    eyebrow: "NUMBERED EDITION",
    heading: "Numbered Q&A Directory",
    subtitle: "Sequential list of customer questions answered in detail."
  },
  {
    id: 17,
    title: "Category-Based Q&A Explorer",
    desc: "Tabbed category navigator filtering questions dynamically between Sizing, Materials, Care, and Shipping.",
    eyebrow: "DYNAMIC FILTERING",
    heading: "Category Q&A Explorer",
    subtitle: "Filter questions by topic to find exact answers quickly."
  },
  {
    id: 18,
    title: "Floating Q&A Panels",
    desc: "Translucent glassmorphic Q&A cards floating over a dynamic ambient gradient backdrop with soft particle motion.",
    eyebrow: "GLASSMORPHISM",
    heading: "Floating Q&A Experience",
    subtitle: "Interactive translucent cards elevated over ambient lighting."
  },
  {
    id: 19,
    title: "Interactive Question Spotlight",
    desc: "Focus-mode section where selecting or hovering a question dims out surrounding items to spotlight the active query.",
    eyebrow: "FOCUS MODE",
    heading: "Question Spotlight Hub",
    subtitle: "Click any question to dim surrounding context and focus on the answer."
  },
  {
    id: 20,
    title: "Premium Knowledge Showcase",
    desc: "A comprehensive Q&A Knowledge Base featuring live search, helpfulness voting, category tags, and expandable detail cards.",
    eyebrow: "KNOWLEDGE HUB",
    heading: "Product Knowledge Showcase",
    subtitle: "Search, filter, and vote on customer questions and verified answers."
  }
];

console.log("Writing JSON files for Questions & Answers...");
variantsInfo.forEach((v) => {
  const folderPath = path.join(baseDir, `questions-answers-${v.id}`);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    title: v.title,
    description: v.desc,
    eyebrow: v.eyebrow,
    heading: v.heading,
    subtitle: v.subtitle,
    questions: sampleQuestions
  };

  fs.writeFileSync(
    path.join(folderPath, `questions-answers-${v.id}.json`),
    JSON.stringify(jsonContent, null, 2),
    'utf8'
  );
});

console.log("Q&A JSON files generated successfully.");
