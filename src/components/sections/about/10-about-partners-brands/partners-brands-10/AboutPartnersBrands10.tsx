import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Waves, ArrowRight } from 'lucide-react';

export function AboutPartnersBrands10() {
  const items = [
    { title: 'Aurora Wave Cloud', node: 'Node 01', speed: 'Fast Flow' },
    { title: 'Emerald Stream AI', node: 'Node 02', speed: 'Realtime' },
    { title: 'Fluid Hydro System', node: 'Node 03', speed: 'Scalable' },
    { title: 'Cyan Morph Alliance', node: 'Node 04', speed: 'Instant' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Waves className="w-3.5 h-3.5 text-teal-400 animate-pulse" /> LIQUID AURORA MORPHISM #10 • ANIMATION: MORPHING SVG AURORA WAVE FLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-200">
            Liquid Aurora Morphism Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Animated SVG wave gradients flowing dynamically behind brand logo cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-teal-500/30 hover:border-teal-400 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-teal-400 font-bold uppercase">{it.node}</span>
                  <Waves className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{it.title}</h3>
              </div>

              <div className="pt-4 border-t border-teal-500/20 flex items-center justify-between text-xs font-mono text-teal-300 font-bold">
                <span>{it.speed}</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
