import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowUpRight } from 'lucide-react';

export function OffersFeatured9() {
  const goldItems = [
    { num: 'LOT 01', title: 'Champagne Gold Chronograph', price: '$1,250', orig: '$2,500', tag: '50% REDUCTION' },
    { num: 'LOT 02', title: 'Midnight Velvet Spatial Core', price: '$890', orig: '$1,780', tag: '50% REDUCTION' }
  ];

  return (
    <div className="w-full bg-black text-amber-100 p-8 sm:p-14 font-serif rounded-3xl border border-amber-500/40 relative overflow-hidden shadow-2xl">
      {/* Gold metallic ambient radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase">
            <Crown className="w-4 h-4 text-amber-400" /> LUXURY GOLD METALLIC ARCHIVE
          </div>
          <h2 className="text-4xl sm:text-6xl font-light italic tracking-tight text-white">
            The Golden Velvet Showcase
          </h2>
          <p className="text-amber-200/60 font-sans text-sm max-w-md mx-auto">Private champagne gold metallic artifacts and precision luxury drops</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {goldItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-zinc-950 p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between h-80 group transition-all"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-amber-400/60 tracking-widest mb-4">
                  <span>{item.num}</span>
                  <span className="text-amber-400 font-bold">{item.tag}</span>
                </div>
                <h3 className="font-serif font-light text-2xl text-white mb-2">{item.title}</h3>
              </div>

              <div className="flex justify-between items-end pt-6 border-t border-amber-500/20 font-sans">
                <div>
                  <div className="text-3xl font-light text-amber-300">{item.price}</div>
                  <div className="text-xs text-slate-500 line-through">{item.orig}</div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-extrabold text-xs uppercase rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-1">
                  ACQUIRE <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured9;
