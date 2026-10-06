import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, Flame } from 'lucide-react';

export function OffersHero4({ data, section }: { data?: any; section?: any }) {
  const marqueeItems = ['50% OFF SITEWIDE', 'CODE: MARQUEE60', 'FREE SHIPPING ON ₹999+', 'LIMITED TIME DEALS', 'FLASH SALE LIVE NOW'];

  return (
    <div className="relative w-full py-16 bg-zinc-950 text-white rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-zinc-800 py-3 bg-zinc-900/60 mb-8 select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="inline-flex items-center gap-8"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-300 uppercase">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{item}</span>
              <span className="text-zinc-600">//</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase rounded-full">
          EXCLUSIVE PROMOTION
        </span>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
          EXPLORE UNBEATABLE <span className="text-orange-500">SAVINGS TODAY</span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
          Shop top-rated categories with instant savings up to 60% off during our seasonal promotional highlight.
        </p>

        <div className="pt-2 flex justify-center items-center gap-4">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
            <span>SHOP THE MARQUEE SALE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden whitespace-nowrap border-y border-zinc-800 py-3 bg-zinc-900/60 mt-8 select-none">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="inline-flex items-center gap-8"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-400 uppercase">
              <Tag className="w-3.5 h-3.5 text-zinc-500" />
              <span>{item}</span>
              <span className="text-zinc-700 font-normal">●</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OffersHero4;
