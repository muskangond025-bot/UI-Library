import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';

export default function ProductCard2({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState(0);

  const variants = [
    {
      name: "Obsidian Edition",
      price: 189,
      rating: 4.8,
      specs: "MagSafe 15W • Ceramic Glass",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "Titanium Sport",
      price: 219,
      rating: 4.9,
      specs: "Dual-GPS • 100m Water Resistant",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "Starlight Rose",
      price: 199,
      rating: 4.7,
      specs: "ECG Sensor • Always-On Retina",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        {/* Header Tabs */}
        <div className="flex items-center justify-between mb-4 bg-slate-950/80 p-1.5 rounded-2xl border border-white/5">
          {variants.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-1.5 text-[11px] font-bold rounded-xl transition-all ${
                activeTab === i 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Variant {i + 1}
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 mb-4 group">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeTab}
              src={variants[activeTab].image} 
              alt={variants[activeTab].name} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-extrabold text-lg text-white">{variants[activeTab].name}</h3>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
              <Star size={13} className="fill-amber-400" /> {variants[activeTab].rating}
            </div>
          </div>
          <p className="text-xs text-slate-400">{variants[activeTab].specs}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Special Bundle</span>
            <span className="text-xl font-extrabold text-white">${variants[activeTab].price}</span>
          </div>

          <button className="px-4 py-2.5 bg-white text-slate-950 hover:bg-slate-200 font-extrabold text-xs rounded-xl flex items-center gap-1.5 transition-all transform active:scale-95">
            <ShoppingBag size={15} /> Buy Now
          </button>
        </div>

      </div>

    </div>
  );
}
