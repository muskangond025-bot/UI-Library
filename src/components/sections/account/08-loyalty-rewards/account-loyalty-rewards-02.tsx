import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';

export function AccountLoyaltyRewards2() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-3">
          <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
            Loyalty Tracker
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight">Points Milestone Centerpiece</h2>
        </div>

        {/* Hero Visual Points Display */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Your Balance</p>
              <h1 className="text-6xl sm:text-7xl font-black text-emerald-400 tracking-tight">2,450</h1>
              <p className="text-sm text-slate-400 font-medium">TOTAL EARNED POINTS</p>
            </div>

            {/* SVG Curvilinear Progress Path */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="relative h-6 bg-slate-900 rounded-full p-1 border border-slate-800">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '81.6%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-emerald-500/50" />
                </motion.div>
              </div>

              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>0 PTS</span>
                <span className="text-emerald-400">2,450 CURRENT</span>
                <span>3,000 NEXT REWARD</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">$25 Gift Voucher Unlock</h4>
                  <p className="text-xs text-slate-400">Only 550 points away from next reward</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2">
                Earn More Points <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards2;
