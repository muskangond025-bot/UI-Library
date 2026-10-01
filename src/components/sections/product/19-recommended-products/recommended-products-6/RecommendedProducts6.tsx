import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

export default function RecommendedProducts6({ data }: { data?: any }) {
  const [switched, setSwitched] = useState<number | null>(null);

  const tiles = [
    {
      id: 1,
      title: "Apex Carbon Fiber Racing Helmet",
      price: "$680",
      badge: "YOU MAY ALSO LIKE",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Titanium Composite Track Helmet",
      price: "$720",
      badge: "HIGH MATCH",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Veloce Aero Gloss Matte Black",
      price: "$640",
      badge: "STYLE PAIR",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-black text-white p-6 md:p-12 rounded-3xl border border-neutral-800 relative select-none flex flex-col justify-between overflow-hidden font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-800 pb-6 z-10">
        <div>
          <span className="px-3 py-1 bg-red-600/20 border border-red-500/40 text-red-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> YOU MAY ALSO LIKE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Full-Bleed Recommendation Tiles
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-400">
          STAGGERED EDITORIAL ENTRANCE
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 z-10">
        {tiles.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="group relative h-[400px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-red-500/60 transition-all shadow-2xl flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="bg-red-600/90 text-white text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded border border-red-400">
                {item.badge}
              </span>
            </div>

            <div className="relative z-10 p-5 flex flex-col justify-end">
              <h3 className="font-extrabold text-xl text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>
              <span className="text-2xl font-black text-red-500 mt-1">{item.price}</span>

              <div className="mt-4 pt-3 border-t border-white/20">
                <button
                  onClick={() => {
                    setSwitched(item.id);
                    setTimeout(() => setSwitched(null), 1800);
                  }}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
                >
                  {switched === item.id ? (
                    <span className="flex items-center gap-1 text-white">
                      <Check size={16} /> ADDED!
                    </span>
                  ) : (
                    <>
                      <span>ADD RECOMMENDATION</span>
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-neutral-500 font-mono border-t border-neutral-800 pt-4 text-center z-10">
        Staggered entrance animation with full-bleed tile composition
      </div>
    </section>
  );
}
