import React from 'react';
import { motion } from 'framer-motion';
import { Award, Gift, Sparkles, ChevronRight, Zap } from 'lucide-react';

export function AccountLoyaltyRewards1() {
  const availableRewards = [
    { title: '$10 Off Storewide', pts: '1,000 Pts', code: 'REWARD10', desc: 'Valid on orders over $50' },
    { title: 'Free Express Delivery', pts: '1,500 Pts', code: 'EXPRESSVIP', desc: 'No minimum order required' },
    { title: 'Exclusive VIP Tote Bag', pts: '2,500 Pts', code: 'VIPIOTE', desc: 'Limited edition canvas bag' },
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" /> VIP Loyalty Club
            </div>
            <h2 className="text-3xl font-black text-white">Rewards Dashboard</h2>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
            <Award className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-xs text-slate-400">Current Tier</p>
              <p className="text-sm font-bold text-amber-400">Silver Member</p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Points Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Balance</span>
                <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
              <div>
                <p className="text-5xl font-black text-white tracking-tight">2,450</p>
                <p className="text-sm text-amber-200/80 font-medium mt-1">Available Points</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/20 space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Next Goal: Gold</span>
                <span className="text-amber-400">550 pts needed</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '81%' }} />
              </div>
            </div>
          </motion.div>

          {/* Available Rewards list */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4"
          >
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Gift className="w-5 h-5 text-indigo-400" /> Ready to Redeem
              </h3>
              <span className="text-xs text-slate-400 font-medium">3 Rewards Unlocked</span>
            </div>

            <div className="space-y-3">
              {availableRewards.map((reward, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-950 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm">{reward.title}</h4>
                      <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold rounded-md">{reward.pts}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{reward.desc}</p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1">
                    Redeem <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards1;
