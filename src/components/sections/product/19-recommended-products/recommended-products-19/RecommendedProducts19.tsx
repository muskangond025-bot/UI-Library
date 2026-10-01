import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function RecommendedProducts19({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { id: 1, title: "Organic Bamboo Lounge Chair", price: "$490", badge: "99% STYLE MATCH", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Curved Velvet Sofa", price: "$1,250", badge: "ART-DIRECTED PICK", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Minimalist Side Table", price: "$320", badge: "ECO COMPLEMENT", image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden font-sans">
      {/* Background Animated Morphing Blob */}
      <motion.svg
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none text-emerald-500 fill-current"
        viewBox="0 0 200 200"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,41.6C64.8,54.1,53.8,64.5,40.8,71.8C27.8,79.1,13.9,83.3,-0.6,84.4C-15.1,85.4,-30.3,83.3,-43.6,76.2C-56.9,69.1,-68.4,57,-75.7,43.2C-83,29.4,-86.1,14.7,-85.4,0.4C-84.7,-13.9,-80.1,-27.8,-72.4,-39.8C-64.7,-51.8,-53.8,-61.9,-41.2,-69.7C-28.6,-77.5,-14.3,-83,0.9,-84.5C16.1,-86,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </motion.svg>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 z-10">
        <div>
          <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> ART-DIRECTED PICKS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Art-Directed Recommendations</h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Sparkles size={16} />
          <span>3D Tilt Interaction</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 z-10">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-5 flex flex-col justify-between shadow-2xl group transition-all"
          >
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-5">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
              <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                {item.badge}
              </span>
            </div>

            <div>
              <h3 className="font-extrabold text-lg text-white group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-2xl font-black text-emerald-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg active:scale-95"
              >
                {selectedId === item.id ? (
                  <span className="flex items-center gap-1">
                    <Check size={14} /> ADDED!
                  </span>
                ) : (
                  <>
                    <span>SELECT PICK</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center z-10">
        3D tilt interaction physics with morphing SVG background paths
      </div>
    </section>
  );
}
