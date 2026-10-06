import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight } from 'lucide-react';

export function OffersHero17({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <motion.svg
          viewBox="0 0 200 200"
          className="w-96 h-96 fill-purple-600 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M44.7,-53.4C56.9,-42.2,65.1,-26.8,66.8,-10.6C68.5,5.6,63.7,22.6,54.1,36.5C44.5,50.4,30.1,61.2,13.7,64.7C-2.7,68.2,-21.1,64.4,-36.8,55.1C-52.5,45.8,-65.5,31,-68.8,13.9C-72.1,-3.2,-65.7,-22.6,-54.6,-35.8C-43.5,-49,-27.7,-56.1,-11.7,-58.3C4.3,-60.5,20.3,-57.8,32.5,-53.4Z" transform="translate(100 100)" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest">
          <Droplets className="w-3.5 h-3.5" />
          <span>FLUID PROMOTION</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-tight">
          LIQUID DEALS <br/><span className="text-purple-400">UP TO 70% OFF</span>
        </h1>

        <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
          Dynamic promotional shape deformation backdrop. Redeem instant fluid discount code during checkout.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button className="px-8 py-4 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2">
            <span>SHOP FLUID DEALS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero17;
