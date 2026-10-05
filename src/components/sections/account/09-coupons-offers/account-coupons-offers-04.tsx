import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert } from 'lucide-react';

export function AccountCouponsOffers4() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Urgent Offers</span>
            <h2 className="text-3xl font-extrabold text-white">Ending Soon Offers</h2>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-950 border border-amber-500/30 p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-500/30">
                EXPIRES IN 24 HOURS
              </span>
              <h3 className="text-4xl font-black text-white mt-3">FLASH ₹750 OFF</h3>
              <p className="text-xs text-slate-400 mt-1">Valid on cart value over ₹3,500</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              <Clock className="w-4 h-4" /> CODE: FLASH750
            </div>
          </div>

          <div className="pt-4 border-t border-slate-900 flex justify-end">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
              Claim Flash Code Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers4;
