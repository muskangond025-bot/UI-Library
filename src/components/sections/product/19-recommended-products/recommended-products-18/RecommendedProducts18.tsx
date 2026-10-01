import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function RecommendedProducts18({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Zenith Minimalist Ceramic Vase",
      price: "$95",
      badge: "STYLE MATCH 98%",
      image: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Nordic Sculptural Stoneware",
      price: "$110",
      badge: "CURATED FOR YOU",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Terracotta Organic Vessel",
      price: "$85",
      badge: "RECOMMENDED PAIR",
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Archival Glass Form",
      price: "$130",
      badge: "POPULAR PICK",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-neutral-950 text-white p-6 md:p-10 rounded-3xl border border-neutral-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-md text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> BASED ON YOUR STYLE
          </span>
          <h2 className="text-2xl md:text-4xl font-light font-serif text-white">Image-First Editorial Grid</h2>
        </div>
        <p className="text-xs text-neutral-400 max-w-xs font-sans">
          Image-dominant 4-card grid featuring progressive scroll reveals and top-corner controls.
        </p>
      </div>

      {/* 4 Image-First Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 font-sans">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all shadow-2xl flex flex-col justify-between"
          >
            <div className="relative w-full h-[320px] overflow-hidden bg-neutral-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-amber-300 border border-neutral-800">
                {item.badge}
              </span>

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="w-10 h-10 rounded-full bg-neutral-950/80 hover:bg-amber-400 text-white hover:text-neutral-950 backdrop-blur-md border border-white/10 hover:border-amber-400 flex items-center justify-center transition-all active:scale-95"
                >
                  {selectedId === item.id ? <Check size={18} className="stroke-[3]" /> : <ShoppingBag size={18} />}
                </button>
              </div>
            </div>

            <div className="p-4 bg-neutral-950 flex items-center justify-between border-t border-neutral-800">
              <div>
                <h3 className="font-serif text-sm font-normal text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-neutral-500">{item.price}</span>
              </div>
              <span className="text-xs font-mono text-amber-400">View →</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-xs text-neutral-500 font-mono border-t border-neutral-800 pt-4">
        Progressive scroll reveal entrance with top-corner glass controls
      </div>
    </section>
  );
}
