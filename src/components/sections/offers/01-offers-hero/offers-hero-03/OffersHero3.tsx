import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export function OffersHero3({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 md:py-24 px-6 bg-emerald-950 text-white rounded-3xl overflow-hidden border border-emerald-800/80 shadow-2xl">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <div className="lg:col-span-7 flex justify-center lg:justify-start select-none">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.95, 1.02, 0.95], opacity: 1 }}
            transition={{ 
              scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.6 }
            }}
            className="relative font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-emerald-200 via-teal-300 to-emerald-600 text-[11rem] sm:text-[16rem] lg:text-[18rem]"
          >
            50<span className="text-7xl sm:text-9xl text-emerald-400 font-bold">%</span>
            <span className="block text-2xl sm:text-4xl tracking-widest text-emerald-300 uppercase -mt-8 font-extrabold">OFF EVERYTHING</span>
          </motion.div>
        </div>

        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>MEGA SAVINGS SEASON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Elevate Your Style For Half The Price.
          </h2>

          <p className="text-emerald-200/80 text-sm leading-relaxed">
            Take advantage of site-wide price drops on all essential collections. Discount applied instantly at checkout.
          </p>

          <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 inline-block text-left w-full">
            <div className="text-xs text-emerald-400 uppercase font-medium">Coupon Voucher</div>
            <div className="text-lg font-mono font-bold text-white tracking-widest mt-0.5">CODE: GIANT50</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/20">
              <span>CLAIM OFFER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero3;
