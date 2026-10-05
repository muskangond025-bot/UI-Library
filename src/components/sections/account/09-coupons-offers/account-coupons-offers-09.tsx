import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy } from 'lucide-react';

export function AccountCouponsOffers9() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Featured Highlight</span>
          <h2 className="text-3xl font-extrabold text-white">Hero Promotional Offer</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 p-8 sm:p-12 rounded-3xl border border-amber-500/30 space-y-6 shadow-2xl"
        >
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> HIGHLIGHT OF THE MONTH
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">FLAT ₹2,000 OFF</h1>
          <p className="text-sm text-slate-300 max-w-md">Valid on orders over ₹8,000 across all premier collections.</p>

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <code className="text-base font-mono font-bold text-amber-400">HERO2000</code>
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
              <Copy className="w-4 h-4" /> Copy Featured Code
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers9;
