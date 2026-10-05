import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Award, ArrowRight } from 'lucide-react';

export function AccountLoyaltyRewards20() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Award Hero Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Crown className="w-4 h-4" /> ULTIMATE VIP MASTER DASHBOARD
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">Award-Style Loyalty</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Experience luxury membership privileges with real-time points tracking, exclusive reward tiers, and instant claim vouchers.
          </p>
        </div>

        {/* Master Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">STATUS</span>
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Current Level</p>
              <h3 className="text-3xl font-black text-white mt-1">Silver VIP</h3>
            </div>
            <div className="pt-4 border-t border-slate-900 text-xs text-slate-400">
              Top 15% Member Rank
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">BALANCE</span>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Active Points</p>
              <h3 className="text-5xl font-black text-amber-400 mt-1">2,450</h3>
            </div>
            <div className="pt-4 border-t border-slate-900 text-xs text-slate-400">
              550 PTS to Gold Tier
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">PERKS</span>
              <Crown className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Unlocked Rewards</p>
              <h3 className="text-3xl font-black text-white mt-1">3 Unclaimed</h3>
            </div>
            <button className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5">
              Claim Now <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards20;
