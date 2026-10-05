import React from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers13() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Value Breakdown</span>
          <h2 className="text-3xl font-extrabold">Saving Visualization Card</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl"
        >
          <div className="space-y-2 text-xs font-semibold text-slate-400 border-b border-slate-900 pb-4">
            <div className="flex justify-between"><span>Sample Order Value:</span> <span>₹4,999</span></div>
            <div className="flex justify-between text-emerald-400"><span>Applied Code (SAVE500):</span> <span>− ₹500</span></div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">TOTAL SAVINGS</span>
            <p className="text-5xl font-black text-emerald-400 tracking-tight">YOU SAVE ₹500</p>
          </div>

          <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
            Apply Voucher Code
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers13;
