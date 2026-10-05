import React from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers16() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Spatial Depth</span>
          <h2 className="text-3xl font-extrabold">Floating Offer Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-xl space-y-4"
          >
            <h3 className="text-4xl font-black text-white">₹500 OFF</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">CODE: SAVE500</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">20% OFF</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">CODE: FASHION20</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-xl space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">FREE SHIP</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">CODE: SHIPFREE</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers16;
