import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Crown, Gift, Sparkles, ChevronRight, Zap, Award } from 'lucide-react';

const badgeReveal = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 }
  }
};

export function AccountOverview10() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Membership Banner */}
        <motion.div
          variants={badgeReveal}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-slate-900 border border-amber-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-6 z-10">
            <div className="p-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl text-slate-950 shadow-xl">
              <Crown className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 uppercase">
                  ACTIVE TIER
                </span>
                <span className="text-xs text-amber-300 font-mono">1,250 Points Available</span>
              </div>
              <h1 className="text-3xl font-extrabold text-white mt-1">Gold Member Status</h1>
              <p className="text-xs text-slate-300 mt-0.5">Alex Morgan • You earn 1.5x points on all orders</p>
            </div>
          </div>

          <button className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 z-10 whitespace-nowrap">
            REDEEM 1,250 POINTS
          </button>
        </motion.div>

        {/* Rewards Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '$25 Reward Voucher', cost: '1,000 Pts', status: 'Ready to Claim', icon: Gift },
            { title: 'Free Express Delivery', font: 'UNLOCKED', status: 'Gold Tier Benefit', icon: Zap },
            { title: 'Exclusive Sale Access', font: 'ACTIVE', status: 'Early VIP Access', icon: Sparkles },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-slate-900/80 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400">{card.cost || card.font}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{card.status}</p>
                </div>
                <button className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-xl transition-colors">
                  View Reward Details
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOverview10;
