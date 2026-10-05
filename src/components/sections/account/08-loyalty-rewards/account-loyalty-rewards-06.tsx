import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Gift, ChevronRight } from 'lucide-react';

export function AccountLoyaltyRewards6() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 font-sans relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-300 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Glass Pass
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frosted Glass Rewards</h2>
        </div>

        {/* Frosted Glass Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Points</p>
              <h3 className="text-4xl font-black text-white mt-1">2,450</h3>
              <p className="text-xs text-indigo-300 mt-2 font-medium">Silver Membership Status</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Next Perk</p>
              <h3 className="text-2xl font-bold text-white mt-1">Free Shipping</h3>
              <p className="text-xs text-slate-400 mt-2">Unlock at 3,000 Points</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Claimable</p>
              <h3 className="text-2xl font-bold text-white mt-1">2 Rewards</h3>
              <button className="mt-4 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                View Catalog <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards6;
