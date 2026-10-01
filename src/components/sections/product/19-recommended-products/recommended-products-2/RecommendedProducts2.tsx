import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Sparkles, Zap } from 'lucide-react';

export default function RecommendedProducts2({ data }: { data?: any }) {
  const [activeId, setActiveId] = useState<number>(1);

  const items = [
    {
      id: 1,
      name: "Acoustic Pro Studio Headphones",
      price: "$349",
      rating: "4.9",
      badge: "Top Recommendation",
      desc: "Audiophile studio headphones engineered with 50mm beryllium drivers and active noise suppression.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Wireless DAC Headphone Amplifier",
      price: "$199",
      rating: "4.8",
      badge: "Perfect Match",
      desc: "Portable 32-bit/384kHz high-res audio DAC with balanced 4.4mm output.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Hard Shell Leather Travel Case",
      price: "$79",
      rating: "4.7",
      badge: "Accessory Pick",
      desc: "Custom molded protective case crafted with waterproof ballistic nylon.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const featured = items.find((i) => i.id === activeId) || items[0];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> CURATED FOR YOU
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Featured Recommendation Suite</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          Select any supporting recommendation to expand its full featured showcase on the left.
        </p>
      </div>

      {/* Grid: Left Hero Featured (7 cols), Right List (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
        <motion.div
          key={featured.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl"
        >
          <div className="relative w-full h-72 rounded-xl overflow-hidden bg-slate-950 mb-6">
            <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-mono font-bold px-3 py-1 rounded">
              {featured.badge}
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-2xl text-white">{featured.name}</h3>
              <span className="text-2xl font-black text-indigo-400">{featured.price}</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">{featured.desc}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Star size={14} className="fill-amber-400" /> {featured.rating} Match Rating
            </div>
            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2">
              <Zap size={15} /> Add Featured Pick
            </button>
          </div>
        </motion.div>

        {/* Supporting List */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
            SUPPORTING SUGGESTIONS
          </span>
          {items.map((item) => {
            const isSelected = item.id === activeId;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                whileHover={{ x: 4 }}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-lg'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-indigo-400 block mb-0.5">{item.badge}</span>
                  <h4 className="font-bold text-sm text-white line-clamp-1">{item.name}</h4>
                  <span className="text-base font-bold text-indigo-400 mt-1 block">{item.price}</span>
                </div>
                {isSelected && <Check size={20} className="text-indigo-400 shrink-0" />}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Featured recommendation expansion layout with dynamic product sync
      </div>
    </section>
  );
}
