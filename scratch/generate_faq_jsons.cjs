const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/24-product-faq');

const variantsInfo = [
  {
    id: 1,
    title: "Minimal Luxury FAQ",
    desc: "An ultra-clean monochrome product FAQ featuring generous whitespace, fine hairline dividers, and delicate height expansion animation.",
    eyebrow: "SPECIFICATIONS & GUIDANCE",
    heading: "Essential Product FAQ",
    subtitle: "Clear, standardized guidance on materials, sizing, and garment care.",
    questions: [
      {
        id: "faq-1-1",
        question: "What certified thread count is woven into the outer cotton shell?",
        answer: "Our outerwear shell utilizes a high-density 400TC long-staple organic Egyptian cotton, delivering a windproof weave while maintaining breathability.",
        category: "Materials"
      },
      {
        id: "faq-1-2",
        question: "Are the closures and hardware rust-resistant?",
        answer: "All zippers and snap buttons are custom-forged from solid brass with a matte PVD electroplated finish, guaranteed against oxidation and tarnishing.",
        category: "Hardware"
      },
      {
        id: "faq-1-3",
        question: "What temperature environment is this outerwear rated for?",
        answer: "Comfort-rated for temperatures between -5°C to 15°C (23°F to 59°F) when layered with lightweight knits.",
        category: "Performance"
      }
    ]
  },
  {
    id: 2,
    title: "Editorial Product FAQ",
    desc: "High-fashion editorial layout featuring serif typography, drop-cap styling, and directional slide answers.",
    eyebrow: "EDITORIAL DIRECTORY",
    heading: "Garment FAQ & Care Guide",
    subtitle: "Comprehensive answers on tailored fit, textile origin, and seasonal storage.",
    questions: [
      {
        id: "faq-2-1",
        question: "How should the garment be stored during off-season summer months?",
        answer: "Store in a breathable cotton garment bag in a cool, dry place. Avoid plastic covers and use the included wide-shoulder wooden hanger to maintain shape.",
        category: "Storage & Care"
      },
      {
        id: "faq-2-2",
        question: "Is the lining hypoallergenic and safe for sensitive skin?",
        answer: "Yes, the interior lining is crafted from 100% hypoallergenic Bemberg cupro silk, engineered to glide smoothly without causing skin irritation.",
        category: "Comfort"
      },
      {
        id: "faq-2-3",
        question: "Can the storm collar attachment be detached for formal wear?",
        answer: "The storm collar features hidden interior horn buttons, allowing seamless detachment for a clean formal silhouette.",
        category: "Versatility"
      }
    ]
  },
  {
    id: 3,
    title: "Numbered FAQ List",
    desc: "Sequential numbered design with oversized gold numerals (01, 02, 03) anchoring expandable technical product guidance.",
    eyebrow: "SPECIFICATION DIRECTORY",
    heading: "Numbered Product FAQ",
    subtitle: "Numbered index of key technical specifications and care parameters.",
    questions: [
      {
        id: "faq-3-1",
        question: "What weight capacity does the reinforced laptop pocket support?",
        answer: "The padded compartment is drop-tested to support devices up to 16 inches and weights up to 5kg with impact-absorbing EVA foam.",
        category: "Capacity"
      },
      {
        id: "faq-3-2",
        question: "What protective coating is applied to the canvas exterior?",
        answer: "Finished with a non-toxic fluorocarbon-free DWR coating that repels water, mud, and oil stains.",
        category: "Protection"
      },
      {
        id: "faq-3-3",
        question: "How does the anti-theft magnetic clasp function?",
        answer: "Fitted with a German-engineered Fidlock magnetic buckle that self-locks securely and releases only when pulled laterally.",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    title: "Two-Column Product FAQ",
    desc: "Dual-column grid separating technical garment guidance into Sizing/Care on the left and Shipping/Warranty on the right.",
    eyebrow: "TWO-COLUMN MATRIX",
    heading: "Product Information Matrix",
    subtitle: "Clear two-column distribution of product queries and terms.",
    questions: [
      {
        id: "faq-4-1",
        question: "What exact sleeve and chest measurement allowance is built in?",
        answer: "Garments include a standard 2.5cm tailoring tolerance to allow for ease of movement and layering.",
        category: "Fit & Sizing"
      },
      {
        id: "faq-4-2",
        question: "Is dry cleaning required, or can it be hand-washed?",
        answer: "Dry cleaning is recommended once per season. Spot cleaning with a damp microfiber cloth is sufficient for light marks.",
        category: "Maintenance"
      },
      {
        id: "faq-4-3",
        question: "What lifetime warranty coverage is provided on hardware?",
        answer: "We offer a lifetime warranty covering free replacement or repair for zippers, snaps, and seam stitching failures.",
        category: "Guarantee"
      },
      {
        id: "faq-4-4",
        question: "What express delivery options are available for urgent orders?",
        answer: "Overnight express courier delivery is available across North America and Western Europe for orders placed before 2 PM.",
        category: "Shipping"
      }
    ]
  },
  {
    id: 5,
    title: "Split FAQ + Product Image",
    desc: "Split-screen container pairing a high-resolution product photography canvas on the left with expandable FAQ panels on the right.",
    eyebrow: "IMAGE & GUIDANCE",
    heading: "Product FAQ & Details",
    subtitle: "Visual inspection paired with detailed product specifications.",
    questions: [
      {
        id: "faq-5-1",
        question: "What are the exact packed dimensions when folded for travel?",
        answer: "Folds down flat to 35cm x 25cm x 4cm, fitting comfortably inside standard carry-on luggage sleeves.",
        category: "Portability",
        productImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
      },
      {
        id: "faq-5-2",
        question: "Does the fabric stretch under active movement?",
        answer: "Incorporates 2% elastane woven into the virgin wool warp for 4-way micro-stretch mobility without sagging.",
        category: "Ergonomics",
        productImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
      },
      {
        id: "faq-5-3",
        question: "How many interior utility pockets are integrated?",
        answer: "Includes 2 RFID-shielded zip pockets, a dedicated pen sleeve, and a passport-sized interior security pouch.",
        category: "Organization",
        productImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
      }
    ]
  },
  {
    id: 6,
    title: "Category-Based FAQ",
    desc: "Tabbed category navigator filtering product FAQs into Sizing, Materials, Care, and Global Shipping panels.",
    eyebrow: "TOPIC NAVIGATION",
    heading: "Category-Filtered FAQ",
    subtitle: "Filter product information by specific topic.",
    questions: [
      {
        id: "faq-6-1",
        question: "Is the wool ethically certified by global standards?",
        answer: "100% certified under the Responsible Wool Standard (RWS), ensuring animal welfare and sustainable land management.",
        category: "Materials"
      },
      {
        id: "faq-6-2",
        question: "What express delivery timeframes apply internationally?",
        answer: "DHL Express international transit takes 2-4 business days with end-to-end carbon-neutral shipping.",
        category: "Shipping"
      },
      {
        id: "faq-6-3",
        question: "How do I choose between regular and tall fit lengths?",
        answer: "Tall fits feature an additional 5cm in body length and 3cm in sleeve length, recommended for individuals 6'2\" (188cm) and above.",
        category: "Sizing"
      }
    ]
  },
  {
    id: 7,
    title: "FAQ with Sticky Category Navigation",
    desc: "Sticky sidebar index featuring smooth scroll jump links to detailed product guidance blocks.",
    eyebrow: "INDEXED GUIDANCE",
    heading: "Product FAQ Directory",
    subtitle: "Jump directly to specific technical sections.",
    questions: [
      {
        id: "faq-7-1",
        question: "How do I measure my chest accurately before selecting a size?",
        answer: "Wrap a flexible tape measure around the fullest part of your chest, keeping the tape parallel to the floor.",
        category: "Sizing"
      },
      {
        id: "faq-7-2",
        question: "What is the return window for international orders?",
        answer: "30 days from delivery date with pre-printed customs return documentation included.",
        category: "Returns"
      },
      {
        id: "faq-7-3",
        question: "What ironing temperature is safe for the outer fabric?",
        answer: "Use low heat steam setting (max 110°C). Always place a damp press cloth between the iron and garment.",
        category: "Garment Care"
      }
    ]
  },
  {
    id: 8,
    title: "Large Typography FAQ",
    desc: "High-contrast design with massive 3XL typography for key product questions and direct concise answers.",
    eyebrow: "BOLD SPECIFICATIONS",
    heading: "High-Impact Product FAQ",
    subtitle: "Oversized typography engineered for rapid readability.",
    questions: [
      {
        id: "faq-8-1",
        question: "What hydrostatic head water-resistance rating does the fabric achieve?",
        answer: "Tested to 10,000mm hydrostatic head pressure, offering complete protection against continuous heavy downpours.",
        category: "Technical"
      },
      {
        id: "faq-8-2",
        question: "Does the garment require re-proofing treatment over time?",
        answer: "We recommend applying a spray-on DWR re-proofer after every 15 to 20 washes to maintain maximum water repellency.",
        category: "Maintenance"
      },
      {
        id: "faq-8-3",
        question: "What seam tape width is applied to stress points?",
        answer: "22mm thermo-sealed polyurethane tape is applied across all primary seam junctions.",
        category: "Durability"
      }
    ]
  },
  {
    id: 9,
    title: "Accordion Cards",
    desc: "Elevated card accordions with subtle hover borders, category pills, and smooth height disclosure.",
    eyebrow: "CARD STRUCTURE",
    heading: "Product FAQ Cards",
    subtitle: "Interactive elevated cards detailing garment parameters.",
    questions: [
      {
        id: "faq-9-1",
        question: "What seam construction method is used to prevent water leakage?",
        answer: "Fully taped seams with thermo-welded polyurethane tape over double-needle stitched joins.",
        category: "Construction"
      },
      {
        id: "faq-9-2",
        question: "Are replacement horn buttons included with the order?",
        answer: "Yes, two spare horn buttons are enclosed in a cotton pouch sewn into the interior jacket pocket.",
        category: "Included Parts"
      },
      {
        id: "faq-9-3",
        question: "Is the jacket compatible with zip-in thermal liners?",
        answer: "Equipped with an internal perimeter zipper compatible with all standard thermal mid-layer vests in our collection.",
        category: "Compatibility"
      }
    ]
  },
  {
    id: 10,
    title: "FAQ Grid",
    desc: "A 4-column structured grid highlighting key product care symbols, washing temperatures, and ironing guidelines.",
    eyebrow: "GRID MATRIX",
    heading: "Product Care & Spec Grid",
    subtitle: "At-a-glance technical grid for washing, drying, and ironing specifications.",
    questions: [
      {
        id: "faq-10-1",
        question: "Washing Temp: Max 30°C",
        answer: "Wash on gentle delicate wool cycle. Do not exceed 30°C (86°F).",
        category: "Washing"
      },
      {
        id: "faq-10-2",
        question: "Drying: Flat Air Dry",
        answer: "Do not tumble dry. Reshape while damp and lay flat on a clean towel.",
        category: "Drying"
      },
      {
        id: "faq-10-3",
        question: "Ironing: Low Heat Steam",
        answer: "Steam on low heat setting (max 110°C). Use a press cloth over dark fabrics.",
        category: "Ironing"
      },
      {
        id: "faq-10-4",
        question: "Bleaching: Do Not Bleach",
        answer: "Avoid chlorine or oxygen-based bleaching agents to prevent fiber degradation.",
        category: "Chemicals"
      }
    ]
  },
  {
    id: 11,
    title: "Featured Question + FAQ List",
    desc: "Hero spotlight layout highlighting the #1 most critical sizing question at the top with a supporting list.",
    eyebrow: "FEATURED SPOTLIGHT",
    heading: "Spotlight Product FAQ",
    subtitle: "Primary sizing query highlighted with supporting technical specifications.",
    questions: [
      {
        id: "faq-11-1",
        question: "How should I choose between Sizing Option A and Sizing Option B?",
        answer: "If your measurements fall between sizes, select the smaller size for a trim tailored fit or the larger size for relaxed layering.",
        category: "Featured Sizing"
      },
      {
        id: "faq-11-2",
        question: "Is the coat heavy on the shoulders during extended wear?",
        answer: "Engineered with internal weight-distribution shoulder pads that disperse garment weight evenly across the collarbone.",
        category: "Ergonomics"
      },
      {
        id: "faq-11-3",
        question: "How does the storm flap protect against high wind chill?",
        answer: "Features a double-layer storm flap secured by heavy-duty magnetic snaps over the primary zip channel.",
        category: "Wind Protection"
      }
    ]
  },
  {
    id: 12,
    title: "Vertical FAQ Timeline",
    desc: "A vertical timeline tracking product ownership milestones from unboxing care to 5-year maintenance.",
    eyebrow: "LIFECYCLE GUIDANCE",
    heading: "Product Ownership Timeline",
    subtitle: "Recommended care steps across the life of your product.",
    questions: [
      {
        id: "faq-12-1",
        question: "Unboxing & Initial Steaming",
        answer: "Unpack immediately and hang on a sturdy wooden hanger. Allow 24 hours for shipping creases to relax, or use a gentle garment steamer.",
        category: "Day 1"
      },
      {
        id: "faq-12-2",
        question: "First Seasonal Service",
        answer: "After your first winter of wear, dry clean once and apply a cedar garment bag for seasonal storage.",
        category: "Year 1"
      },
      {
        id: "faq-12-3",
        question: "DWR Coating Refresh",
        answer: "Re-apply a spray-on waterproof DWR treatment to outer shell fabric after 15 to 20 wear cycles.",
        category: "Year 3"
      }
    ]
  },
  {
    id: 13,
    title: "Product Image + Floating FAQ Panel",
    desc: "Glassmorphic floating FAQ panels elevated over a high-resolution product photography canvas.",
    eyebrow: "FLOATING GLASSMORPHISM",
    heading: "Visual Product Guidance",
    subtitle: "Translucent FAQ cards floating over close-up hardware details.",
    questions: [
      {
        id: "faq-13-1",
        question: "What grade of full-grain leather is used for the zip pulls?",
        answer: "Vegetable-tanned full-grain Tuscan calf leather that develops a rich natural patina over time.",
        category: "Leather Specs"
      },
      {
        id: "faq-13-2",
        question: "Are the pocket linings brushed for thermal hand warmth?",
        answer: "Yes, side handwarmer pockets are lined with ultra-soft 180gsm brushed micro-fleece.",
        category: "Pocket Detail"
      },
      {
        id: "faq-13-3",
        question: "What metal alloy is used for the belt buckle?",
        answer: "Cast from solid aircraft-grade anodized aluminum for ultra-lightweight durability.",
        category: "Buckle Hardware"
      }
    ]
  },
  {
    id: 14,
    title: "Horizontal FAQ Navigator",
    desc: "A continuous drag-scrollable horizontal track of product information cards with quick answer previews.",
    eyebrow: "SWIPE TRACK",
    heading: "Horizontal Product Rail",
    subtitle: "Swipe through key product parameters horizontally.",
    questions: [
      {
        id: "faq-14-1",
        question: "What certified packaging is used for transit?",
        answer: "Shipped inside a 100% recycled FSC-certified rigid gift box with organic cotton dust protection.",
        category: "Packaging"
      },
      {
        id: "faq-14-2",
        question: "What is the return window for international orders?",
        answer: "30 days from delivery date with pre-printed customs return documentation included.",
        category: "International Returns"
      },
      {
        id: "faq-14-3",
        question: "Does the garment include a custom garment bag?",
        answer: "Every coat includes a heavy-duty organic canvas suit carrier with dual carry handles.",
        category: "Accessories"
      },
      {
        id: "faq-14-4",
        question: "How are leather trims protected during air transit?",
        answer: "Leather accents are wrapped in custom acid-free tissue paper and protective foam covers.",
        category: "Transit Care"
      }
    ]
  },
  {
    id: 15,
    title: "Compact FAQ Rail",
    desc: "A streamlined compact rail displaying technical product specifications in high visual density.",
    eyebrow: "COMPACT DENSITY",
    heading: "Quick Specification Rail",
    subtitle: "Fast reference for weights, origins, and certifications.",
    questions: [
      {
        id: "faq-15-1",
        question: "Garment Total Weight: 850g",
        answer: "Medium size weighs exactly 850 grams, offering substantial cold-weather warmth without excess bulk.",
        category: "Weight"
      },
      {
        id: "faq-15-2",
        question: "Sleeve Lining: 100% Bemberg Cupro",
        answer: "High-grade cupro sleeve lining guarantees smooth friction-free arm movement over wool knits.",
        category: "Lining"
      },
      {
        id: "faq-15-3",
        question: "Country of Origin: Porto, Portugal",
        answer: "Ethically cut, stitched, and finished by master tailors in our Porto atelier.",
        category: "Origin"
      },
      {
        id: "faq-15-4",
        question: "Care Method: Professional Eco Dry Clean",
        answer: "Preserves natural lanolin in wool fibers and maintains garment structural drape.",
        category: "Care"
      }
    ]
  },
  {
    id: 16,
    title: "FAQ with Visual Product Details",
    desc: "Pairs technical answers directly with close-up macro imagery of stitching, zippers, and fabric weaves.",
    eyebrow: "MACRO DETAILS",
    heading: "Visual Hardware & Care FAQ",
    subtitle: "Inspect physical garment details alongside technical specifications.",
    questions: [
      {
        id: "faq-16-1",
        question: "What machine stitch count per inch (SPI) is enforced?",
        answer: "Sewn with 12 stitches per inch using heavy-duty bonded nylon thread to prevent seam bursting.",
        category: "Craftsmanship"
      },
      {
        id: "faq-16-2",
        question: "What zipper mechanism is specified?",
        answer: "Custom YKK Excella two-way polished brass zipper with anti-snag interior guard tape.",
        category: "Zippers"
      },
      {
        id: "faq-16-3",
        question: "How is the hem reinforced against fraying?",
        answer: "Finished with a 4cm double-turn blind stitch hem reinforced with interior cotton stay tape.",
        category: "Hem Construction"
      },
      {
        id: "faq-16-4",
        question: "What button material is used?",
        answer: "Hand-carved genuine buffalo horn buttons dyed naturally with laser-engraved brand mark.",
        category: "Buttons"
      }
    ]
  },
  {
    id: 17,
    title: "Asymmetric Editorial FAQ",
    desc: "Bento-style asymmetric editorial layout highlighting supply chain sustainability certifications.",
    eyebrow: "SUSTAINABILITY MATRIX",
    heading: "Traceability & Eco FAQ",
    subtitle: "Transparent supply chain information and carbon footprint specs.",
    questions: [
      {
        id: "faq-17-1",
        question: "Is the garment 100% carbon-offset from raw material to delivery?",
        answer: "Yes, we offset 100% of carbon emissions through certified Gold Standard reforestation projects in South America.",
        category: "Climate Neutral"
      },
      {
        id: "faq-17-2",
        question: "What water recycling standards are enforced at the dye mill?",
        answer: "Our Italian dye mill utilizes a Zero Liquid Discharge (ZLD) system, recycling 98% of process water.",
        category: "Water Recycling"
      },
      {
        id: "faq-17-3",
        question: "Are non-toxic OEKO-TEX dyes utilized?",
        answer: "Certified OEKO-TEX Standard 100 Class 1, free from heavy metals, formaldehyde, and AZO colorants.",
        category: "Non-Toxic Dyes"
      },
      {
        id: "faq-17-4",
        question: "How are fabric off-cuts repurposed?",
        answer: "100% of cutting table fabric scraps are shredded and spun into interior thermal insulation batting.",
        category: "Zero Waste"
      }
    ]
  },
  {
    id: 18,
    title: "Layered FAQ Panels",
    desc: "Physical-feeling overlapping layered panels detailing repair services, replacement parts, and recycling options.",
    eyebrow: "REPAIR & RECYCLE",
    heading: "Circular Guarantee FAQ",
    subtitle: "Free repairs and end-of-life garment recycling programs.",
    questions: [
      {
        id: "faq-18-1",
        question: "How does the complimentary lifetime repair program work?",
        answer: "Send your garment to our repair atelier anytime for complimentary stitching repairs, button replacement, or zip slider fixes.",
        category: "Repair Service"
      },
      {
        id: "faq-18-2",
        question: "What replacement hardware parts are available?",
        answer: "Spare horn buttons, zipper sliders, belt buckles, and matching thread spools are shipped free upon request.",
        category: "Spare Parts"
      },
      {
        id: "faq-18-3",
        question: "What is the trade-in program for worn garments?",
        answer: "Return any worn garment after 2+ years for 20% store credit toward your next purchase; returned items are refurbished or recycled.",
        category: "Trade-In Credit"
      },
      {
        id: "faq-18-4",
        question: "How long does a typical repair turnaround take?",
        answer: "Standard atelier repair turnaround is 7 to 10 business days from receipt, including return express shipping.",
        category: "Turnaround Time"
      }
    ]
  },
  {
    id: 19,
    title: "Interactive FAQ Explorer",
    desc: "Focus-mode explorer where selecting an FAQ dims surrounding queries to spotlight active garment specs.",
    eyebrow: "EXPLORER SPOTLIGHT",
    heading: "Durability Testing FAQ",
    subtitle: "Laboratory abrasion tests, tensile strength, and color fastness ratings.",
    questions: [
      {
        id: "faq-19-1",
        question: "What Martindale rub count durability score was achieved?",
        answer: "Exceeds 50,000 Martindale rubs, classifying it for severe commercial-grade abrasion resistance.",
        category: "Durability"
      },
      {
        id: "faq-19-2",
        question: "What color fastness rating to light and washing was certified?",
        answer: "Certified Grade 4-5 on ISO gray scale, guaranteeing zero color fading under direct sunlight or washing.",
        category: "Color Fastness"
      },
      {
        id: "faq-19-3",
        question: "How does the fabric perform under tear strength testing?",
        answer: "Tensile strength certified to 450N warp and 400N weft resistance against tearing.",
        category: "Tensile Strength"
      },
      {
        id: "faq-19-4",
        question: "Is pilling resistance verified under ISO standards?",
        answer: "Achieves Grade 4 ISO 12945-2 anti-pilling rating, resisting surface fuzzing during daily wear.",
        category: "Anti-Pilling"
      }
    ]
  },
  {
    id: 20,
    title: "Premium Product Knowledge Showcase",
    desc: "Comprehensive Product Knowledge Hub featuring live search filter, care sheet downloads, and category tags.",
    eyebrow: "KNOWLEDGE HUB",
    heading: "Master Product Knowledge Base",
    subtitle: "Search and inspect technical parameters, sizing guides, and care sheets.",
    questions: [
      {
        id: "faq-20-1",
        question: "What UV protection factor (UPF) does the fabric weave offer?",
        answer: "Provides UPF 50+ maximum sun protection, blocking over 98% of harmful UVA and UVB rays naturally.",
        category: "Protection"
      },
      {
        id: "faq-20-2",
        question: "Is the fabric static-resistant during low humidity winters?",
        answer: "Woven with anti-static carbon filament conductive threading to eliminate static cling.",
        category: "Anti-Static"
      },
      {
        id: "faq-20-3",
        question: "What crease recovery angle (CRA) does the fabric achieve?",
        answer: "Achieves a 140° wrinkle recovery angle, ensuring garment recovers crisp drape without ironing.",
        category: "Crease Resistance"
      },
      {
        id: "faq-20-4",
        question: "How should the garment be disinfected or refreshed between wears?",
        answer: "Hang outdoors in shaded fresh air for 2 hours or use vertical steam to sanitize and eliminate odor naturally.",
        category: "Refreshing"
      }
    ]
  }
];

console.log("Writing expanded Product FAQ JSON files for ALL 20 variants...");
variantsInfo.forEach((v) => {
  const folderPath = path.join(baseDir, `product-faq-${v.id}`);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsonContent = {
    title: v.title,
    description: v.desc,
    eyebrow: v.eyebrow,
    heading: v.heading,
    subtitle: v.subtitle,
    questions: v.questions
  };

  fs.writeFileSync(
    path.join(folderPath, `product-faq-${v.id}.json`),
    JSON.stringify(jsonContent, null, 2),
    'utf8'
  );
});

console.log("Product FAQ JSON files 1-20 expanded successfully.");
