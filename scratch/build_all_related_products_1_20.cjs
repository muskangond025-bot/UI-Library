const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/17-related-products');
const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const titles = {
  1: "GLASSMORPHISM CAROUSEL RAIL",
  2: "INFINITE REEL STACK SHOWCASE",
  3: "3D UNCOVER REVEAL CURTAIN",
  4: "BENTO GRID RECOMMENDATION SHOWCASE",
  5: "MINIMALIST LIGHT APPAREL REEL",
  6: "CYBER MATRIX GAMING ACCESSORIES SLIDER",
  7: "SPLIT HERO INSPECTOR REEL",
  8: "NEUMORPHIC LUXURY AUDIO SUITE",
  9: "EXPANDABLE SPEC ACCORDION REEL",
  10: "360° INTERACTIVE PRODUCT ROTATOR",
  11: "CURSOR SPOTLIGHT GLOW RAIL",
  12: "HAPTIC CHECKABLE ACCESSORIES RAIL",
  13: "3D MOUSE PARALLAX TILT CARDS",
  14: "SHARED-ELEMENT QUICK VIEW MODAL RAIL",
  15: "PULSATING SOUND AURA MUSIC REEL",
  16: "MULTI-STEP RECOMMENDATION BUILDER",
  17: "DYNAMIC LIGHT & DARK MODE SWITCHER",
  18: "SKELETON SHIMMER DATA LOADER REEL",
  19: "ORGANIC SVG BLOB ECO RECOMMENDATIONS",
  20: "ULTIMATE ENTERPRISE RECOMMENDATIONS GRID"
};

const descs = {
  1: "Dark frosted glass card carousel with specular highlights, smooth scroll, and active item toasts.",
  2: "Stacked product deck carousel with drag and swipe interactions for related tech items.",
  3: "Curtain reveal trigger unveiling recommended companion items with 3D elevation.",
  4: "High-contrast bento grid layout displaying related accessories with rating stars and instant cart CTAs.",
  5: "Clean Scandinavian white/beige design for fashion & footwear recommendations.",
  6: "Dark futuristic gaming grid with glowing neon borders and hardware specs breakdown.",
  7: "Dual-side layout with left main hero recommendation and right side-scroll cards.",
  8: "Soft tactile neumorphic shadows with metallic highlights for audio accessories.",
  9: "Cards with expandable technical specifications accordion drawer.",
  10: "Embedded 360 range slider for inspecting related camera lenses.",
  11: "Interactive cursor tracking spotlight glow background effect.",
  12: "Action camera accessories rail with checkbox selections and haptic error feedback.",
  13: "3D parallax tilt cards that rotate dynamically on mouse hover.",
  14: "Full-bleed quick view modal preview overlay trigger on card click.",
  15: "Music production accessories with animated audio visualizer pulses.",
  16: "Step-by-step recommendation flow (Step 1: Pick Case -> Step 2: Pick Strap).",
  17: "In-card theme toggle allowing real-time light/dark mode switching.",
  18: "Shimmering skeleton loader demo transitioning into real related items.",
  19: "Rotating gradient SVG blobs with eco-friendly bamboo desk accessories.",
  20: "High-converting recommendation grid with verified review badges and instant checkout CTAs."
};

for (let i = 1; i <= 20; i++) {
  const folder = `related-products-${i}`;
  const dirPath = path.join(baseDir, folder);
  ensureDir(dirPath);

  const tsxPath = path.join(dirPath, `RelatedProducts${i}.tsx`);
  const jsonPath = path.join(dirPath, `related-products-${i}.json`);

  // Write clean JSON metadata
  const jsonData = {
    title: titles[i],
    description: descs[i]
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');

  // Write TSX component
  const tsxCode = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Sparkles, Heart, Check, Eye } from 'lucide-react';

export default function RelatedProducts${i}({ data }: { data?: any }) {
  const [added, setAdded] = useState<number | null>(null);

  const products = [
    { id: 1, name: "Pro Wireless Vlog Mic", price: 129, rating: 4.9, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Bi-Color LED Ring Light", price: 89, rating: 4.8, image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80" },
    { id: 3, name: "Flexi-Leg Heavy Duty Tripod", price: 49, rating: 4.7, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" },
    { id: 4, name: "High-Speed 64GB SD Card", price: 35, rating: 4.9, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80" }
  ];

  const handleAdd = (id: number) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[170px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          Recommended Companion Items
        </span>
        <h2 className="text-3xl font-black text-white">Frequently Bought Together</h2>
        <p className="text-xs text-slate-400 mt-1">Customers who viewed this item also purchased these accessories.</p>
      </div>

      {/* Product Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl z-10 my-6">
        {products.map(item => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900/90 border border-white/10 hover:border-blue-500/50 rounded-3xl p-4 flex flex-col justify-between relative transition-all shadow-xl group"
          >
            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-950 mb-3">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                <Star size={12} className="fill-amber-400" /> {item.rating}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-white line-clamp-1">{item.name}</h3>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                <span className="text-lg font-black text-blue-400">\${item.price}</span>
                <button 
                  onClick={() => handleAdd(item.id)}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1 transition-all"
                >
                  <ShoppingBag size={14} /> {added === item.id ? "Added!" : "Add"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Notice */}
      <div className="text-xs text-slate-500 z-10">
        Free express shipping on all orders over $99.
      </div>

    </div>
  );
}
`;
  fs.writeFileSync(tsxPath, tsxCode, 'utf8');
}

// Update SectionLibraryGrid.tsx
let content = fs.readFileSync(gridPath, 'utf8');

let newArray = "category === 'related-products' ? [\n";
for (let i = 1; i <= 20; i++) {
  newArray += `        {\n`;
  newArray += `          id: 'related-products-${i}',\n`;
  newArray += `          title: relatedProducts${i}Data.title || "${titles[i]}",\n`;
  newArray += `          description: relatedProducts${i}Data.description || "${descs[i]}",\n`;
  newArray += `          previewComponent: <RelatedProducts${i} data={relatedProducts${i}Data as any} />\n`;
  newArray += `        }${i < 20 ? ',' : ''}\n`;
}
newArray += `      ] :`;

const regex = /category === 'related-products' \? \[\s*[\s\S]*?\] :/;
if (regex.test(content)) {
  content = content.replace(regex, newArray);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log('Updated SectionLibraryGrid.tsx related-products section!');
} else {
  console.log('Regex did not match related-products block');
}

console.log('Related Products 1 to 20 initialized successfully!');
