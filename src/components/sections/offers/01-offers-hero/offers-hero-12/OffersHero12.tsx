import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersHero12({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-24 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center min-h-[520px]">
      <div className="relative z-10 text-center space-y-4 max-w-md">
        <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 shadow-[0_0_50px_rgba(6,182,212,0.4)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-2">
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">FLAT</span>
            <span className="text-4xl font-black text-white">50%</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">OFF</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">ORBITAL PROMOTION</h2>
        <p className="text-slate-400 text-xs leading-relaxed">
          Comprehensive site-wide discount hub with automated category vouchers.
        </p>
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2">
          <span>CLAIM DEALS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-dashed border-cyan-500/20 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          CODE: RADIAL50
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          FREE SHIPPING
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          ENDS 30 SEPT
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          VIP ACCESS
        </div>
      </motion.div>
    </div>
  );
}

export default OffersHero12;
