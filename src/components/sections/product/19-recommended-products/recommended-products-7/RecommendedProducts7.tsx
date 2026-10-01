import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function RecommendedProducts7({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Aetheric Luminary Desk Lamp",
      badge: "99% MATCH",
      price: "$180",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Orbit Floating LED Arm",
      badge: "PICKED FOR YOU",
      price: "$215",
      image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Minimalist Arc Studio Light",
      badge: "STYLE PAIR",
      price: "$195",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-slate-950 text-white p-8 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden">
      {/* Background Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-1/4 w-80 h-80 bg-violet-600/30 blur-[130px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 right-1/4 w-80 h-80 bg-fuchsia-600/20 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Header */}
      <div className="text-center z-10 max-w-xl mx-auto">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5 w-fit mx-auto">
          <Sparkles size={14} /> PICKED FOR YOU
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Levitating Recommendation Cards
        </h2>
        <p className="text-xs text-slate-400 mt-2 font-sans">
          Translucent glassmorphic cards floating over ambient background glow layers with continuous levitation.
        </p>
      </div>

      {/* 3 Floating Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 z-10 font-sans">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }}
            whileHover={{ scale: 1.03, y: -14 }}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-500/50 rounded-3xl p-5 flex flex-col justify-between relative shadow-2xl group transition-all"
          >
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-5 border border-white/5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-violet-300 border border-violet-500/30">
                {item.badge}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition-colors">
                {item.name}
              </h3>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <span className="text-2xl font-black text-violet-400">{item.price}</span>
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 group/btn"
                >
                  {selectedId === item.id ? (
                    <span className="flex items-center gap-1 text-emerald-300">
                      <Check size={14} /> Added
                    </span>
                  ) : (
                    <>
                      <span>Select Pick</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-xs text-slate-500 font-mono z-10 border-t border-white/10 pt-4">
        Continuous levitation float motion enabled
      </div>
    </section>
  );
}
