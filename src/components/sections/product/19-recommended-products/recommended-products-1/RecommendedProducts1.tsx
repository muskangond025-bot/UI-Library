import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export default function RecommendedProducts1({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Minimalist Leather Cardholder",
      price: "$65",
      badge: "98% Style Match",
      specs: "Full Grain Italian Leather",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Artisan Brass Key Carabiner",
      price: "$45",
      badge: "Top Picked",
      specs: "Solid Forged Brass",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Executive Anodized Pen",
      price: "$85",
      badge: "Complements Order",
      specs: "Aircraft Aluminum / Schmidt Refill",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Slim Bifold Money Clip",
      price: "$75",
      badge: "Popular Pick",
      specs: "Mag-Lock Closure",
      image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-stone-950 text-stone-100 p-8 md:p-14 rounded-3xl font-serif border border-stone-800 relative overflow-hidden select-none flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-8 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 mb-2 flex items-center gap-1.5">
            <Sparkles size={14} /> PICKED FOR YOU
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 tracking-tight">
            Editorial Recommendation Rail
          </h2>
        </div>
        <p className="text-stone-400 text-sm max-w-md font-sans">
          Curated EDC recommendations personalized based on your recent style and browsing activity.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10 font-sans">
        {products.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col justify-between border-r last:border-r-0 border-stone-800 pr-0 sm:pr-6"
          >
            <div>
              <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden mb-5 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <span className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-amber-400 border border-stone-800">
                  {item.badge}
                </span>
              </div>

              <span className="text-xs text-stone-500 font-mono block mb-1">{item.specs}</span>
              <h3 className="font-serif text-lg font-normal text-stone-100 group-hover:text-amber-400 transition-colors">
                {item.name}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between">
              <span className="text-xl font-light font-serif text-amber-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="group/btn relative text-xs font-mono tracking-wider uppercase text-stone-300 hover:text-white flex items-center gap-1.5 py-1"
              >
                {selectedId === item.id ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check size={14} /> Added
                  </span>
                ) : (
                  <>
                    <span>Explore Pick</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover/btn:w-full transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-stone-800 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-500 gap-2">
        <span>Continuous horizontal drift motion • Personalized for active session</span>
        <span>4 curated items</span>
      </div>
    </section>
  );
}
