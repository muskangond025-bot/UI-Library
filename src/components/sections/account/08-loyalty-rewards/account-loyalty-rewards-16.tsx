import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift } from 'lucide-react';

export function AccountLoyaltyRewards16() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Spatial Depth</span>
          <h2 className="text-3xl font-extrabold">Floating Reward Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 space-y-4"
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h3 className="text-4xl font-black text-white">2,450</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Total Points Floating</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 space-y-4"
          >
            <Gift className="w-8 h-8 text-indigo-400" />
            <h3 className="text-2xl font-bold text-white">3 Available</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Unclaimed Vouchers</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-xl shadow-purple-500/10 space-y-4"
          >
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full">SILVER STATUS</span>
            <h3 className="text-2xl font-bold text-white">Tier Perks</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Active Benefits</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards16;
