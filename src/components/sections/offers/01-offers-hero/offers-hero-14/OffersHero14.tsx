import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

export function OffersHero14({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-8 bg-zinc-950 text-white rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl">
      <motion.div
        animate={{ y: ['0%', '100%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] opacity-75 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest">
          <Cpu className="w-3.5 h-3.5" />
          <span>SYSTEM SCANNER ACTIVE</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none font-mono">
          SCAN RESULT: <span className="text-teal-400">50% DISCOUNT</span>
        </h1>

        <p className="text-zinc-400 text-sm max-w-lg mx-auto font-mono">
          [VERIFIED] Promotional algorithm active. Flat 50% discount automatically indexed for all qualifying cart items.
        </p>

        <div className="pt-2 flex justify-center items-center gap-4">
          <button className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-teal-400/20 flex items-center gap-2">
            <span>EXECUTE CHECKOUT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero14;
