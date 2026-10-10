import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Zap } from 'lucide-react';

export function AboutPartnersBrands4() {
  const brands = [
    { title: 'Chroma Horizon Labs', tag: 'Quantum AI', code: 'CHROMA-01' },
    { title: 'Spectra Cyber Defense', tag: 'Zero Trust', code: 'CHROMA-02' },
    { title: 'Prismatic Cloud Tech', tag: 'Scalable Infra', code: 'CHROMA-03' },
    { title: 'Nebula Vision Inc.', tag: 'Spatial Computing', code: 'CHROMA-04' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> HOLO CHROMA FOIL #04 • ANIMATION: CHROMATIC RAINBOW SHIMMER ROTATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300">
            Holographic Chromatic Brand Foil
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Iridescent rainbow gradient shimmer borders with dynamic light refraction angles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-950/40 to-slate-900/90 backdrop-blur-xl border border-pink-500/30 hover:border-cyan-400 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/10 text-pink-300 border border-white/20">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-mono font-bold uppercase">
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">{b.title}</h3>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{b.code}</span>
                <span className="text-pink-400 flex items-center gap-1 font-bold">Verify Foil <ExternalLink className="w-3 h-3" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
