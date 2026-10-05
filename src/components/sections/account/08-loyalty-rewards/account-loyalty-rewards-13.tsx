import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';

export function AccountLoyaltyRewards13() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 p-8 sm:p-12 rounded-3xl border border-amber-500/30 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">Target Horizon</span>
              <h2 className="text-3xl font-extrabold text-white">350 Points to Gold Status</h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <Crown className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Silver (2,450 PTS)</span>
              <span className="text-amber-400">Gold Target (2,800 PTS)</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '87.5%' }}
                transition={{ duration: 1 }}
                className="h-full bg-amber-400 rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <Sparkles className="w-4 h-4 text-amber-400 mb-2" />
              <h4 className="font-bold text-white text-sm">2x Points Multiplier</h4>
              <p className="text-xs text-slate-400 mt-1">Earn double points on all future purchases.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <Sparkles className="w-4 h-4 text-amber-400 mb-2" />
              <h4 className="font-bold text-white text-sm">Priority Concierge</h4>
              <p className="text-xs text-slate-400 mt-1">Instant priority customer support access.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards13;
