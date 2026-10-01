import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Star } from 'lucide-react';

export default function RelatedProducts2({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { name: "Popular Companions", item: { name: "Obsidian Wireless Earbuds", price: 189, rating: 4.9, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80" } },
    { name: "Tech Upgrades", item: { name: "Titanium Smartwatch V2", price: 219, rating: 4.8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80" } },
    { name: "Care Kits", item: { name: "Leather Strap & Cleaner", price: 69, rating: 4.7, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80" } }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          Interactive Category Reel
        </span>
        <h2 className="text-3xl font-black text-white">Explore Related Categories</h2>
      </div>

      <div className="flex gap-2 bg-slate-900 p-1.5 rounded-2xl border border-white/10 z-10 my-4">
        {categories.map((c, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === i ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4">
              <img src={categories[activeTab].item.image} alt="Item" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-extrabold text-white">{categories[activeTab].item.name}</h3>
                <span className="text-xs text-amber-400 font-bold flex items-center gap-1 mt-1">
                  <Star size={13} className="fill-amber-400" /> {categories[activeTab].item.rating} Rating
                </span>
              </div>
              <span className="text-2xl font-black text-cyan-400">${categories[activeTab].item.price}</span>
            </div>
            <button className="w-full py-3.5 bg-cyan-500 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2">
              <ShoppingBag size={16} /> Add Related Item
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-xs text-slate-500 z-10">Select top tabs to filter related recommendations.</div>
    </div>
  );
}
