import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Ticket, Copy } from 'lucide-react';

export function AccountCouponsOffers20() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> ULTIMATE PROMOTIONAL SUITE
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">Award-Style Offers</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Premier voucher presentation engineered with custom ticket cutouts, micro-copy interactions, and real-time offer eligibility tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <Ticket className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-full">
                BEST SAVINGS
              </span>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">FLAT ₹1,000 OFF</h3>
              <p className="text-xs text-slate-400 mt-1">Valid on orders over ₹4,999</p>
            </div>

            <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
              <code className="text-sm font-mono font-bold text-amber-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                VIP1000
              </code>
              <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
                <Copy className="w-4 h-4" /> Copy Code
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <Ticket className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 font-bold text-[10px] uppercase tracking-widest rounded-full">
                SITEWIDE
              </span>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">20% OFF</h3>
              <p className="text-xs text-slate-400 mt-1">Valid on cart value over ₹2,999</p>
            </div>

            <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
              <code className="text-sm font-mono font-bold text-amber-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                SUPER20
              </code>
              <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
                <Copy className="w-4 h-4" /> Copy Code
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers20;
