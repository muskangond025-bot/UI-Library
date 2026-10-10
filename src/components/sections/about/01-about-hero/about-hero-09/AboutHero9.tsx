import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, ArrowRight, Eye, Star, Sparkles } from 'lucide-react';

export function AboutHero9({ data, section }: { data?: any; section?: any }) {
  const [hoveredCard, setHoveredCard] = useState(0);
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#181107] text-amber-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="px-5 py-2 rounded-full bg-amber-900/60 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-lg">
            <Sun className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '10s' }} /> PRISM GLASS FACET #09
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Refractive Crystal Facet Light Split
          </h1>
          <p className="text-amber-200/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            High-contrast crystal glass facets engineered to split ambient light and create dynamic prism spectrum refractions for luxury visual brands.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(245,158,11,0.3)] flex items-center gap-2">
              <span>View Crystal Showcase</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Overlapping Card Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Prism Clarity', desc: 'Ultra-clear crystal facets with 99.8% light transmittance.' },
            { title: 'Light Refraction', desc: 'Dynamic spectrum color split shifting with cursor movement.' },
            { title: 'Facet Precision', desc: 'Laser-cut architectural glass borders with warm amber glow.' }
          ].map((card, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 rounded-3xl border backdrop-blur-2xl transition-all cursor-pointer space-y-4 shadow-xl ${
                hoveredCard === i
                  ? 'bg-amber-900/50 border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.25)]'
                  : 'bg-amber-950/30 border-amber-500/20'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold font-mono text-lg">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-xs text-amber-200/80 leading-relaxed font-mono">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}