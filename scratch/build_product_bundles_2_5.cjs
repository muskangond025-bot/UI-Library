const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/16-product-bundles');

function writeComponent(num, code) {
  const folder = `product-bundles-${num}`;
  const filePath = path.join(baseDir, folder, `ProductBundles${num}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// ----------------------------------------------------
// 2. ProductBundles2: Infinite Reel Tier Slider
// ----------------------------------------------------
const code2 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Check, Star } from 'lucide-react';

export default function ProductBundles2({ data }: { data?: any }) {
  const [activeTier, setActiveTier] = useState(1);

  const tiers = [
    {
      id: 0,
      name: "Starter Pod Kit",
      price: 249,
      originalPrice: 299,
      rating: 4.8,
      items: ["USB Condenser Mic", "Desktop Arm Stand"],
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 1,
      name: "Pro Streamer Suite",
      price: 499,
      originalPrice: 629,
      rating: 4.9,
      items: ["XLR Studio Mic", "Audio Interface", "Dual LED Panel Light"],
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ultimate Broadcast System",
      price: 899,
      originalPrice: 1149,
      rating: 5.0,
      items: ["4K Cinema Cam", "XLR Studio Mic", "Stream Deck", "Pro Ring Light"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Infinite Tier Reel
        </span>
        <h2 className="text-3xl font-extrabold">Choose Your Broadcast Tier</h2>
      </div>

      <div className="flex items-center gap-3 bg-slate-900 p-1.5 rounded-2xl border border-white/10 z-10 my-4">
        {tiers.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveTier(i)}
            className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${
              activeTier === i ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }\`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Main Active Card */}
      <div className="w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative z-10">
        <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4">
          <img src={tiers[activeTier].image} alt={tiers[activeTier].name} className="w-full h-full object-cover" />
        </div>

        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-extrabold text-white">{tiers[activeTier].name}</h3>
            <span className="text-xs text-amber-400 font-bold flex items-center gap-1 mt-0.5">
              <Star size={13} className="fill-amber-400" /> {tiers[activeTier].rating} Rated
            </span>
          </div>

          <div className="text-right">
            <span className="text-2xl font-black text-cyan-400">\${tiers[activeTier].price}</span>
            <span className="text-xs text-slate-500 line-through block">\${tiers[activeTier].originalPrice}</span>
          </div>
        </div>

        <div className="space-y-1.5 my-4 bg-slate-950 p-3 rounded-2xl border border-white/5">
          {tiers[activeTier].items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <Check size={14} className="text-cyan-400" /> {item}
            </div>
          ))}
        </div>

        <button className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg">
          <ShoppingBag size={16} /> Get {tiers[activeTier].name}
        </button>
      </div>

    </div>
  );
}
`;
writeComponent(2, code2);

// ----------------------------------------------------
// 3. ProductBundles3: 3D Floating Ecosystem Layer
// ----------------------------------------------------
const code3 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Eye, Check } from 'lucide-react';

export default function ProductBundles3({ data }: { data?: any }) {
  const [uncovered, setUncovered] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl mb-4">
        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          3D Uncover Reveal
        </span>
        <h2 className="text-3xl font-extrabold">Studio Monitor Ecosystem</h2>
      </div>

      <div className="relative w-full max-w-lg h-[360px] flex items-center justify-center z-10">
        
        <AnimatePresence mode="wait">
          {!uncovered ? (
            <motion.div 
              key="cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -40 }}
              className="w-full max-w-md bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 text-center shadow-2xl relative"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4">
                <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" alt="Speakers" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Pro Audio Studio Kit</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Tap to uncover full 4-piece studio setup & discount.</p>
              <button 
                onClick={() => setUncovered(true)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 mx-auto shadow-lg"
              >
                <Eye size={16} /> Uncover Full Bundle
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="uncovered"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-[0_0_50px_rgba(16,185,129,0.2)] relative"
            >
              <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase rounded-full inline-block mb-3">
                Full Kit Uncovered • Save $180
              </span>
              <h3 className="text-2xl font-black text-white">Complete Studio Bundle</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Includes Monitors + Audio Interface + XLR Cable + Isolation Pads</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-3xl font-black text-emerald-400">$649</span>
                <button 
                  onClick={() => setUncovered(false)}
                  className="px-5 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-lg"
                >
                  <ShoppingBag size={16} /> Buy Complete Bundle
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
`;
writeComponent(3, code3);

// ----------------------------------------------------
// 4. ProductBundles4: Modular Smart Home Security Bundle
// ----------------------------------------------------
const code4 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductBundles4({ data }: { data?: any }) {
  const [sel, setSel] = useState<number[]>([1, 2]);

  const main = { name: "Smart Security Hub 4K", price: 299, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" };
  const items = [
    { id: 1, name: "Wireless Doorbell Cam", price: 119, image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Outdoor Floodlight Cam", price: 159, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = main.price + items.filter(i => sel.includes(i.id)).reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Modular Smart Security
        </span>
        <h2 className="text-3xl font-extrabold">Build Security Protection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl z-10 my-4">
        <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-3xl p-4 text-center">
          <img src={main.image} alt={main.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">{main.name}</h3>
          <span className="text-sm font-black text-emerald-400">\${main.price}</span>
        </div>

        {items.map(item => {
          const isSel = sel.includes(item.id);
          return (
            <div 
              key={item.id}
              onClick={() => setSel(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
              className={\`bg-slate-900 border rounded-3xl p-4 text-center cursor-pointer transition-all \${isSel ? 'border-emerald-500 shadow-lg' : 'border-white/10 opacity-75'}\`}
            >
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
              <h3 className="font-bold text-xs">{item.name}</h3>
              <span className="text-sm font-black text-emerald-400">+\${item.price}</span>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Total Protection Kit</span>
          <span className="text-2xl font-black text-emerald-400">\${total}</span>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Bundle
        </button>
      </div>
    </div>
  );
}
`;
writeComponent(4, code4);

// ----------------------------------------------------
// 5. ProductBundles5: Minimalist Light Theme Sneaker Kit
// ----------------------------------------------------
const code5 = `import React, { useState } from 'react';
import { ShoppingBag, Star, Check } from 'lucide-react';

export default function ProductBundles5({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-stone-900 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Sneakerhead Fit Bundle
        </span>
        <h2 className="text-3xl font-extrabold text-stone-100">Urban Runner & Hoodie Set</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl z-10 my-4">
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-5">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" alt="Sneakers" className="w-full h-48 object-cover rounded-2xl mb-3" />
          <h3 className="font-extrabold text-base">Red Runner Pro</h3>
          <span className="text-lg font-black text-amber-400">$210</span>
        </div>

        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-5">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" alt="Hoodie" className="w-full h-48 object-cover rounded-2xl mb-3" />
          <h3 className="font-extrabold text-base">Heavyweight Fleece Hoodie</h3>
          <span className="text-lg font-black text-amber-400">+$95</span>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-stone-950 border border-stone-800 p-5 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-stone-400 block">Complete Set Savings ($40 OFF)</span>
          <span className="text-2xl font-black text-amber-400">$265</span>
        </div>
        <button className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Full Fit to Cart
        </button>
      </div>
    </div>
  );
}
`;
writeComponent(5, code5);

console.log('ProductBundles 2 to 5 created successfully!');
