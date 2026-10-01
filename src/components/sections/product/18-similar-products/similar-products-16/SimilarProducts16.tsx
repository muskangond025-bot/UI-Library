import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowUpRight } from 'lucide-react';

export default function SimilarProducts16({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Prism Glass VR Headset Pro",
      price: "$899",
      diff: "Pancake Lenses / 4K per eye",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Spatial Vision Glass Deck",
      price: "$1,100",
      diff: "Micro-OLED / Hand Tracking",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Haptic Glass Motion Goggles",
      price: "$750",
      diff: "Lightweight 290g / Wi-Fi 6E",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden">
      {/* Background Glowing Mesh Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 z-10">
        <div>
          <span className="px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            16 / Layered Glassmorphism
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Frosted Glass Layer Cards</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs font-sans">
          Acrylic glass paneling with specular border highlights and multi-layer depth elevation.
        </p>
      </div>

      {/* 3 Frosted Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 z-10 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-slate-900/50 backdrop-blur-2xl border border-white/15 hover:border-indigo-400/60 rounded-3xl p-6 flex flex-col justify-between relative shadow-2xl group transition-all"
          >
            {/* Specular Top Border Highlight */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70" />

            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-slate-950 mb-5 border border-white/10">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-indigo-300 border border-indigo-500/30">
                  {item.diff}
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-white group-hover:text-indigo-300 transition-colors">
                {item.name}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-2xl font-black text-indigo-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="px-5 py-2.5 rounded-full bg-indigo-600/80 hover:bg-indigo-500 text-white backdrop-blur-md border border-indigo-400/40 font-bold text-xs flex items-center gap-2 transition-all shadow-lg active:scale-95"
              >
                {selectedId === item.id ? (
                  <span className="flex items-center gap-1 text-emerald-300">
                    <Check size={14} /> Selected
                  </span>
                ) : (
                  <>
                    <span>Select Glass</span>
                    <ArrowUpRight size={14} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono z-10 border-t border-white/10 pt-4 text-center">
        Acrylic depth layering with specular border lighting physics
      </div>
    </section>
  );
}
