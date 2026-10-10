import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

export function AboutPartnersBrands9() {
  const brands = [
    { title: 'Velvet Soft Creative', category: 'Brand Identity', rating: '5.0 Star' },
    { title: 'Rose Satin Studio', category: 'Spatial Experience', rating: '4.9 Star' },
    { title: 'Coral Sunset Design', category: 'Product System', rating: '5.0 Star' },
    { title: 'Silk Matte Agency', category: 'Luxury Media', rating: '4.8 Star' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-rose-950 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> VELVET MATTE GLASS #09 • ANIMATION: SATIN DIFFUSE AURA FADE-IN
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200">
            Velvet Matte Strategic Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Satin sheen finish with ultra-soft diffuse background blur and rose gold aura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-rose-950/20 backdrop-blur-3xl border border-rose-500/20 hover:border-rose-400/50 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-300 border border-rose-500/20 w-fit">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-rose-400 font-bold uppercase">{b.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{b.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-500/20 flex items-center justify-between text-xs font-mono text-rose-300">
                <span className="flex items-center gap-1 font-bold"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {b.rating}</span>
                <span>PARTNER</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
