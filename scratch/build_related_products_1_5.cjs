const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/17-related-products');

function writeComponent(num, code) {
  const folder = `related-products-${num}`;
  const filePath = path.join(baseDir, folder, `RelatedProducts${num}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// ----------------------------------------------------
// 1. RelatedProducts1: Glassmorphism Acrylic Carousel
// ----------------------------------------------------
const code1 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Star, Heart, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RelatedProducts1({ data }: { data?: any }) {
  const [added, setAdded] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Pro Studio ANC Headphones", price: 299, rating: 4.9, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Wireless Charging Stand", price: 69, rating: 4.8, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80" },
    { id: 3, name: "Hard-Shell Leather Case", price: 49, rating: 4.7, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80" },
    { id: 4, name: "Braided Audio Cable Kit", price: 29, rating: 4.9, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[170px] rounded-full pointer-events-none" />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          <Sparkles size={12} className="inline mr-1" /> Related Products
        </span>
        <h2 className="text-3xl font-black text-white">Complete Your Audio Setup</h2>
        <p className="text-xs text-slate-400 mt-1">Recommended gear crafted to match your active purchase.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl z-10 my-6">
        {items.map(item => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900/80 border border-white/15 rounded-3xl p-4 flex flex-col justify-between backdrop-blur-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-950 mb-3 border border-white/5">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                <Star size={12} className="fill-amber-400" /> {item.rating}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-white line-clamp-1">{item.name}</h3>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                <span className="text-xl font-black text-blue-400">\${item.price}</span>
                <button 
                  onClick={() => { setAdded(item.id); setTimeout(() => setAdded(null), 2000); }}
                  className="px-3.5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-extrabold rounded-xl text-xs flex items-center gap-1 shadow-md"
                >
                  <ShoppingBag size={14} /> {added === item.id ? "Added!" : "Quick Add"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 z-10">Handpicked related recommendations with instant 1-click add.</div>

    </div>
  );
}
`;
writeComponent(1, code1);

// ----------------------------------------------------
// 2. RelatedProducts2: Infinite Reel Deck Stack
// ----------------------------------------------------
const code2 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Star, ArrowRight } from 'lucide-react';

export default function RelatedProducts2({ data }: { data?: any }) {
  const [active, setActive] = useState(0);

  const items = [
    { name: "Titanium Smartwatch V2", price: 219, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80" },
    { name: "Obsidian Wireless Earbuds", price: 189, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80" },
    { name: "Leather Strap Edition", price: 69, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          Related Products Stack
        </span>
        <h2 className="text-3xl font-black text-white">Recommended Ecosystem Devices</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] z-10">
        <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4">
          <img src={items[active].image} alt={items[active].name} className="w-full h-full object-cover" />
        </div>

        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-extrabold text-white">{items[active].name}</h3>
          <span className="text-2xl font-black text-cyan-400">\${items[active].price}</span>
        </div>

        <div className="flex gap-2 mb-4">
          {items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={\`flex-1 h-1.5 rounded-full transition-all \${active === i ? 'bg-cyan-400' : 'bg-slate-800'}\`} />
          ))}
        </div>

        <button className="w-full py-3.5 bg-cyan-500 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2">
          <ShoppingBag size={16} /> Add Related Device
        </button>
      </div>

      <div className="text-xs text-slate-500 z-10">Tap progress bars to cycle through related device ecosystem.</div>
    </div>
  );
}
`;
writeComponent(2, code2);

// ----------------------------------------------------
// 3. RelatedProducts3: 3D Uncover Reveal Curtain
// ----------------------------------------------------
const code3 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag, Check } from 'lucide-react';

export default function RelatedProducts3({ data }: { data?: any }) {
  const [uncovered, setUncovered] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          3D Curtain Reveal
        </span>
        <h2 className="text-3xl font-black text-white">Related Studio Gear</h2>
      </div>

      <div className="w-full max-w-md z-10 my-4">
        {!uncovered ? (
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 text-center shadow-2xl">
            <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" alt="Monitors" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h3 className="text-xl font-extrabold text-white">Pro Audio Studio Monitors</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">Click below to reveal related studio accessories.</p>
            <button onClick={() => setUncovered(true)} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 mx-auto">
              <Eye size={16} /> Uncover Related Products
            </button>
          </div>
        ) : (
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            <span className="px-3 py-1 bg-emerald-950 text-emerald-400 text-[10px] font-extrabold uppercase rounded-full inline-block mb-3">
              Uncovered Related Gear
            </span>
            <h3 className="text-2xl font-black text-white">Studio Isolation Pads + XLR Cable</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">Recommended addition to your active studio monitor order.</p>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-3xl font-black text-emerald-400">$89</span>
              <button onClick={() => setUncovered(false)} className="px-5 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
                <ShoppingBag size={16} /> Add Related Gear
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-slate-500 z-10">Interactive reveal curtain transition.</div>
    </div>
  );
}
`;
writeComponent(3, code3);

// ----------------------------------------------------
// 4. RelatedProducts4: Bento Grid Recommendation Showcase
// ----------------------------------------------------
const code4 = `import React, { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function RelatedProducts4({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          Bento Recommendation Grid
        </span>
        <h2 className="text-3xl font-black text-white">Related Smart Accessories</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl z-10 my-4">
        <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" alt="Hub" className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Security Hub 4K</h3>
          <span className="text-sm font-black text-emerald-400">$299</span>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80" alt="Cam" className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Wireless Doorbell Cam</h3>
          <span className="text-sm font-black text-emerald-400">$119</span>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80" alt="Light" className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Outdoor Floodlight Cam</h3>
          <span className="text-sm font-black text-emerald-400">$159</span>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Complete Related System</span>
          <span className="text-2xl font-black text-emerald-400">$577</span>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add All Related Items
        </button>
      </div>
    </div>
  );
}
`;
writeComponent(4, code4);

// ----------------------------------------------------
// 5. RelatedProducts5: Minimalist Light Theme Apparel Recommendations
// ----------------------------------------------------
const code5 = `import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function RelatedProducts5({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-stone-900 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          Style Recommendations
        </span>
        <h2 className="text-3xl font-extrabold text-stone-100">Complete The Look</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl z-10 my-4">
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-5">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" alt="Sneakers" className="w-full h-48 object-cover rounded-2xl mb-3" />
          <h3 className="font-extrabold text-base">Red Runner Pro</h3>
          <span className="text-lg font-black text-amber-400">$210</span>
        </div>
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-5">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" alt="Hoodie" className="w-full h-48 object-cover rounded-2xl mb-3" />
          <h3 className="font-extrabold text-base">Fleece Hoodie</h3>
          <span className="text-lg font-black text-amber-400">$95</span>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-stone-950 border border-stone-800 p-5 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-stone-400 block">Recommended Outfit</span>
          <span className="text-2xl font-black text-amber-400">$305</span>
        </div>
        <button className="px-6 py-3.5 bg-amber-500 text-stone-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Full Outfit
        </button>
      </div>
    </div>
  );
}
`;
writeComponent(5, code5);

console.log('RelatedProducts 1 to 5 written cleanly!');
