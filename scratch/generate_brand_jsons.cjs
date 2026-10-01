const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/25-brand-information');

const variantsInfo = [
  {
    id: 1,
    title: "Editorial Brand Story",
    desc: "Long-form visual brand narrative featuring elegant serif quotes, multi-paragraph story flow, and directional image mask reveals.",
    eyebrow: "OUR NARRATIVE",
    heading: "The Pursuit of Timeless Excellence",
    subtitle: "Founded on the principles of quiet luxury, uncompromising materials, and slow fashion.",
    brandName: "AURELIA & CO.",
    foundedYear: "2014",
    origin: "Florence, Italy",
    storyParagraphs: [
      "Born in the heart of Florence, our maison was founded with a singular conviction: to create garments that transcend seasonal trends through architectural silhouettes and pure natural textiles.",
      "Every piece is handcrafted in limited batches by master artisans whose families have preserved textile weaving traditions for over three generations."
    ],
    quote: "We do not design for the moment; we craft for a lifetime.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Brand Heritage Timeline",
    desc: "Interactive chronological timeline mapping historical brand milestones from 1928 founding to present day global expansion.",
    eyebrow: "HERITAGE & LEGACY",
    heading: "A Century of Craftsmanship",
    subtitle: "Trace our journey across ten decades of textile innovation and atelier mastery.",
    milestones: [
      {
        year: "1928",
        title: "The Florentine Guild",
        description: "First weaving loom established in San Frediano, producing bespoke virgin wool for local tailoring houses.",
        location: "Florence, Italy"
      },
      {
        year: "1964",
        title: "Introduction of Cashmere",
        description: "Pioneered ethically sourced Mongolian cashmere spinning in Northern Italy.",
        location: "Biella, Italy"
      },
      {
        year: "1998",
        title: "Global Flagships",
        description: "Expanded to Paris, Tokyo, and New York while maintaining artisanal small-batch production.",
        location: "Paris, France"
      },
      {
        year: "2024",
        title: "Zero-Carbon Atelier",
        description: "Achieved 100% Gold Standard climate neutrality across all workshops and logistics.",
        location: "Global"
      }
    ]
  },
  {
    id: 3,
    title: "Brand Philosophy Statement",
    desc: "High-contrast manifesto layout featuring oversized brand motto text, founder signature, and core philosophy pillars.",
    eyebrow: "OUR PHILOSOPHY",
    heading: "Form, Function & Integrity",
    subtitle: "Our guiding principles in design, material selection, and human relationships.",
    manifesto: "Purity of material. Restraint in design. Permanence in value.",
    philosophyPoints: [
      {
        title: "Radical Material Purity",
        description: "Only 100% natural, biodegradable fibers are selected. No synthetic blends, no microplastics."
      },
      {
        title: "Slow Small-Batch Production",
        description: "We produce only to demand, eliminating overstock waste and protecting artisan dignity."
      },
      {
        title: "Lifetime Repair Pledge",
        description: "Every item is backed by our lifetime repair service to extend garment life indefinitely."
      }
    ]
  },
  {
    id: 4,
    title: "Founder Story Showcase",
    desc: "Personal founder profile highlighting design vision, portrait photography, personal quote, and handwritten signature.",
    eyebrow: "THE FOUNDER",
    heading: "Designed by Matteo Vane",
    subtitle: "A personal conversation on architectural tailoring and slow fashion.",
    founderName: "Matteo Vane",
    founderRole: "Founder & Creative Director",
    founderPortrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    quote: "True luxury is felt in the weight of the fabric and the silence of clean stitching.",
    storyParagraphs: [
      "After fifteen years leading traditional luxury houses, Matteo founded our maison to break free from the relentless pace of seasonal fashion calendars.",
      "His vision was simple: build a wardrobe of twenty perfect essentials that endure for decades."
    ]
  },
  {
    id: 5,
    title: "Brand Values Grid",
    desc: "Structured 4-column grid displaying the core values of the brand with metrics and visual status badges.",
    eyebrow: "CORE VALUES",
    heading: "The Pillars of Our Maison",
    subtitle: "Uncompromising standards that guide every fabric choice, seam, and stitch.",
    values: [
      {
        number: "01",
        title: "Ethical Sourcing",
        description: "100% certified organic wool and cashmere harvested under animal welfare standards.",
        metric: "100% Certified"
      },
      {
        number: "02",
        title: "Artisanal Dignity",
        description: "Fair living wages and safe studio environments guaranteed across all supplier ateliers.",
        metric: "3x Living Wage"
      },
      {
        number: "03",
        title: "Zero Waste",
        description: "Cutting scraps are shredded and spun into interior insulation batting.",
        metric: "0% Waste"
      },
      {
        number: "04",
        title: "Circular Repair",
        description: "Free lifetime repair guarantee on zippers, seams, and horn buttons.",
        metric: "Lifetime Care"
      }
    ]
  },
  {
    id: 6,
    title: "Origin Story Map",
    desc: "Geographical origin layout with studio coordinates (45.4642° N, 9.1900° E), regional history, and workshop imagery.",
    eyebrow: "GEOGRAPHIC ORIGIN",
    heading: "Rooted in Milanese Architecture",
    subtitle: "Crafted in historical ateliers in Lombardy, Italy.",
    coordinates: "45.4642° N, 9.1900° E",
    locationName: "Milan & Biella, Italy",
    regionHistory: "Lombardy's textile history spans over five centuries of wool weaving along the foothills of the Italian Alps.",
    originImage: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80"
  },
  {
    id: 7,
    title: "Craftsmanship Showcase",
    desc: "Step-by-step visual narrative detailing fiber selection, hand-pattern cutting, double-needle stitching, and inspection.",
    eyebrow: "ATELIER CRAFT",
    heading: "The Art of Master Tailoring",
    subtitle: "Inside the four essential steps of our small-batch production process.",
    processSteps: [
      {
        stepNumber: "01",
        title: "Fiber Selection & Sorting",
        description: "Raw cashmere fibers are hand-sorted under magnification to select only 15.5 micron strands.",
        duration: "Day 1-2"
      },
      {
        stepNumber: "02",
        title: "Hand-Pattern Drafting",
        description: "Patterns are cut individually on heavy cardboard stock to ensure geometric precision.",
        duration: "Day 3"
      },
      {
        stepNumber: "03",
        title: "Double-Needle Hand Seaming",
        description: "Seams are joined using 12 stitches per inch with bonded nylon thread for burst strength.",
        duration: "Day 4-5"
      },
      {
        stepNumber: "04",
        title: "Final Steam & Inspection",
        description: "Garments are hand-steamed over wooden bucks and thoroughly inspected under 500-lux light.",
        duration: "Day 6"
      }
    ]
  },
  {
    id: 8,
    title: "Brand Manifesto",
    desc: "Bold dark cinematic text-dominant layout declaring the brand's core beliefs in massive 5XL typography.",
    eyebrow: "BRAND MANIFESTO",
    heading: "What We Believe",
    subtitle: "Our declaration against fast fashion and fleeting trends.",
    manifestoLines: [
      "We believe in fewer, better things.",
      "We believe in the quiet power of immaculate tailoring.",
      "We believe a coat should last longer than a decade.",
      "We believe true luxury honors the hands that made it."
    ]
  },
  {
    id: 9,
    title: "Brand Journey Timeline",
    desc: "Drag-scrollable horizontal timeline track mapping brand expansion phases with archived imagery.",
    eyebrow: "OUR JOURNEY",
    heading: "Evolution of the Maison",
    subtitle: "From a single Florentine studio to an international community.",
    journeyPhases: [
      {
        year: "2015",
        phaseTitle: "The First Prototype",
        description: "Crafted 50 coats in a small basement workshop in San Frediano.",
        archivedImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
      },
      {
        year: "2018",
        phaseTitle: "Paris Fashion Presentation",
        description: "Exhibited our permanent collection at the Palais Royal.",
        archivedImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
      },
      {
        year: "2021",
        phaseTitle: "100% Traceability",
        description: "Integrated blockchain QR tags on all garment labels for wool origin verification.",
        archivedImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
      },
      {
        year: "2024",
        phaseTitle: "Global Atelier Network",
        description: "Partnered with 12 master workshops across Italy, Portugal, and Japan.",
        archivedImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
      }
    ]
  },
  {
    id: 10,
    title: "Mission + Vision Split",
    desc: "Balanced 50/50 dual-panel layout separating the immediate Brand Mission from the 10-Year Future Vision.",
    eyebrow: "PURPOSE & HORIZON",
    heading: "Mission & Vision",
    subtitle: "Where we stand today and where we are heading tomorrow.",
    mission: {
      title: "Our Mission",
      statement: "To engineer timeless outerwear using 100% organic textiles, restoring respect to small-batch tailoring.",
      pillars: ["100% Organic", "Small Batch", "Fair Wages"]
    },
    vision: {
      title: "Our 2030 Vision",
      statement: "To establish a fully circular luxury ecosystem where every garment sold can be repaired or recycled indefinitely.",
      targetYear: "2030",
      goals: ["Zero Landfill", "100% Circular", "Solar Ateliers"]
    }
  },
  {
    id: 11,
    title: "Interactive Brand Milestones",
    desc: "Year selector tabs (2016, 2019, 2022, 2025) that update the main hero milestone showcase canvas.",
    eyebrow: "KEY MILESTONES",
    heading: "Interactive History Showcase",
    subtitle: "Select a milestone year to explore archived developments.",
    milestones: [
      {
        year: "2016",
        title: "First Organic Cashmere Line",
        description: "Introduced un-dyed natural cashmere sweaters sourced from un-sheared Mongolian goats.",
        heroImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        impactMetric: "5,000kg Organic Wool"
      },
      {
        year: "2019",
        title: "Zero Plastic Packaging",
        description: "Replaced all synthetic shipping bags with 100% compostable cornstarch sleeves.",
        heroImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
        impactMetric: "0 Plastic Used"
      },
      {
        year: "2022",
        title: "Atelier Repair Guild",
        description: "Launched our free lifetime repair service across Europe and North America.",
        heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        impactMetric: "1,200 Repairs Completed"
      }
    ]
  },
  {
    id: 12,
    title: "Layered Brand Story",
    desc: "Overlapping 3D card layout organizing the brand story into Chapter 01 (Origin), Chapter 02 (Craft), and Chapter 03 (Future).",
    eyebrow: "STORY CHAPTERS",
    heading: "The Three Chapters of Aurelia",
    subtitle: "Explore the narrative layers of our maison.",
    chapters: [
      {
        chapterNumber: "01",
        title: "The Florentine Origin",
        excerpt: "It started in a small workshop overlooking the Arno River...",
        fullStory: "Founded in Florence, our early days were defined by rigorous experimentation with natural vegetable dyes and traditional hand loom weaving.",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80"
      },
      {
        chapterNumber: "02",
        title: "The Master Craft",
        excerpt: "Every garment passes through 48 pairs of skilled hands...",
        fullStory: "We partner exclusively with family-owned ateliers where master tailors dedicate up to 14 hours of precision handwork to a single trench coat.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
      },
      {
        chapterNumber: "03",
        title: "The Circular Horizon",
        excerpt: "Designing for infinite life cycles and zero waste...",
        fullStory: "Our future is focused on closed-loop recycling, natural regenerative agriculture, and building clothing that enriches the earth upon disposal.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
      }
    ]
  },
  {
    id: 13,
    title: "Magazine-Style Brand Profile",
    desc: "Print magazine aesthetic on warm cream styling with drop-cap quotes, serif headers, and editor notes.",
    eyebrow: "MONOCLE EDITION • PROFILE",
    heading: "The Quiet Luxury Revolution",
    subtitle: "How one Florentine maison is redefining sustainable high fashion.",
    dropCapParagraph: "Aurelia & Co. operates far from the frenetic pace of fast fashion. Nestled in a converted 19th-century olive mill outside Florence, the brand's master tailors cut fabric by hand with razor shears.",
    quoteBlock: "Fast fashion sells temporary novelty. We offer permanent elegance.",
    editorNote: "Published in Volume X • Heritage Edition",
    portraitImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
  },
  {
    id: 14,
    title: "Brand Principles Cards",
    desc: "Bento-box principles cards displaying brand commitments (Traceable Fiber, Fair Wages, Plastic Neutral) with metric badges.",
    eyebrow: "OUR COMMITMENTS",
    heading: "Bento Principles Matrix",
    subtitle: "Quantifiable ethical standards enforced across all operations.",
    principles: [
      {
        title: "100% Traceable Wool",
        badge: "Blockchain Certified",
        description: "Scan the interior label QR code to trace your wool back to the exact farm pasture.",
        statNumber: "100%",
        statLabel: "Traceability"
      },
      {
        title: "Living Wage Guarantee",
        badge: "Fair Trade",
        description: "All studio tailors receive wages 300% above national minimum wage standards.",
        statNumber: "3.0x",
        statLabel: "Living Wage"
      },
      {
        title: "Zero Plastic Packaging",
        badge: "Compostable",
        description: "Packaged in 100% home-compostable cornstarch sleeves and recycled gift boxes.",
        statNumber: "0g",
        statLabel: "Plastic Used"
      }
    ]
  },
  {
    id: 15,
    title: "Full-Bleed Brand Narrative",
    desc: "Full-width dark cinematic background image with floating white typography and slow ambient zoom effect.",
    eyebrow: "CINEMATIC EXPERIENCE",
    heading: "Full-Bleed Brand Narrative",
    subtitle: "Immerse yourself in our visual landscape.",
    narrativeTitle: "Crafted in Silence. Worn for Generations.",
    quote: "When design is stripped of ornamentation, only quality remains.",
    fullBleedImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80"
  },
  {
    id: 16,
    title: "Brand Identity Explorer",
    desc: "Interactive identity system showcasing Monogram, Color Tokens (Florentine Cream, Umber Brown, Tuscan Slate), and Fabric Standards.",
    eyebrow: "BRAND SYSTEM",
    heading: "The Visual & Tactile Identity",
    subtitle: "Explore the color swatches, monograms, and material signatures of our house.",
    identityElements: [
      {
        category: "Color Palette",
        title: "Tuscan Slate & Cream",
        description: "Inspired by Florentine limestone and un-bleached virgin cashmere fibers.",
        specDetail: "#1E1E1E • #F5F2EB • #8C7A6B"
      },
      {
        category: "Typography",
        title: "Custom Serif & Mono",
        description: "High-contrast editorial serif paired with precision technical monospaced coordinates.",
        specDetail: "Playfair Display & JetBrains Mono"
      },
      {
        category: "Material Standard",
        title: "Grade-A 15.5 Micron Cashmere",
        description: "Selected exclusively from inner neck undercoat fibers for cloud-like lightness.",
        specDetail: "RWS & GOTS Certified"
      }
    ]
  },
  {
    id: 17,
    title: "Creative Process Showcase",
    desc: "Behind-the-scenes gallery showing raw sketching, moodboards, fabric weaving, and final tailoring.",
    eyebrow: "BEHIND THE SCENES",
    heading: "The Creative Process",
    subtitle: "From raw sketchbook concept to finished garment.",
    processGallery: [
      {
        phase: "Phase 01",
        title: "Architectural Sketching",
        description: "Drafting silhouettes based on classical Italian brutalist architecture.",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80"
      },
      {
        phase: "Phase 02",
        title: "Textile Weaving",
        description: "Custom jacquard weaving on traditional shuttle looms in Biella.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
      },
      {
        phase: "Phase 03",
        title: "Atelier Tailoring",
        description: "Fourteen hours of hand-stitching by master Florentine tailors.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
      }
    ]
  },
  {
    id: 18,
    title: "Heritage + Modernity Split",
    desc: "50/50 comparison layout pairing Historical Archives (1928) with Modern Sustainable Craft (2026).",
    eyebrow: "PAST & FUTURE",
    heading: "Heritage Meets Modernity",
    subtitle: "Respecting 95 years of history while pioneering circular fashion.",
    heritage: {
      year: "1928",
      title: "Historical Guild Archive",
      description: "Original hand-woven wool blankets created for Alpine travelers.",
      archiveImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
    },
    modernity: {
      year: "2026",
      title: "Circular Eco Atelier",
      description: "Closed-loop zero-waste tailoring using 100% solar energy.",
      modernImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    }
  },
  {
    id: 19,
    title: "Immersive Brand Documentary",
    desc: "Documentary film poster style layout with director quote, film duration (12 mins), and chapter timestamps.",
    eyebrow: "SHORT FILM",
    heading: "The Thread of Time: A Documentary",
    subtitle: "Watch our 12-minute documentary exploring Florentine textile masters.",
    docTitle: "The Thread of Time",
    directorQuote: "A hauntingly beautiful homage to the fading art of Italian hand tailoring.",
    duration: "12:45",
    videoPoster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    chapters: [
      { time: "01:20", title: "The Mist of Biella" },
      { time: "05:40", title: "Hands of the Master" },
      { time: "10:15", title: "The Final Stitch" }
    ]
  },
  {
    id: 20,
    title: "Premium Brand Knowledge Showcase",
    desc: "Comprehensive Brand Knowledge Base featuring search filter across history, sustainability reports, and press kits.",
    eyebrow: "KNOWLEDGE BASE",
    heading: "Master Brand Knowledge Hub",
    subtitle: "Search and inspect sustainability reports, material disclosures, and press archives.",
    brandName: "AURELIA & CO.",
    knowledgeSections: [
      {
        category: "Sustainability",
        title: "2025 Carbon Audit Report",
        description: "Complete greenhouse gas emission disclosure verified by independent auditors.",
        downloadLink: "#"
      },
      {
        category: "Ethics",
        title: "Atelier Labor Standard Code",
        description: "Our binding labor rights charter covering living wages and studio safety.",
        downloadLink: "#"
      },
      {
        category: "Heritage",
        title: "Florentine Guild Archive Book",
        description: "100-page digital monograph documenting our historical weaving looms.",
        downloadLink: "#"
      }
    ]
  }
];

console.log("Writing Brand Information JSON files for 20 variants...");
variantsInfo.forEach((v) => {
  const folderPath = path.join(baseDir, `brand-information-${v.id}`);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  fs.writeFileSync(
    path.join(folderPath, `brand-information-${v.id}.json`),
    JSON.stringify(v, null, 2),
    'utf8'
  );
});

console.log("Brand Information JSON files 1-20 generated successfully.");
