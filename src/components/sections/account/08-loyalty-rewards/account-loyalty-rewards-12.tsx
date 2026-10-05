import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, CheckCircle2 } from 'lucide-react';

export function AccountLoyaltyRewards12() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-md mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Interactive Unlock</span>
          <h2 className="text-3xl font-extrabold">Reward Unlock Experience</h2>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            {unlocked ? <Unlock className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">$20 Off Store Voucher</h3>
            <p className="text-xs text-slate-400">Cost: 2,000 Points (You have 2,450 PTS)</p>
          </div>

          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.button 
                key="unlockBtn"
                onClick={() => setUnlocked(true)}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Click To Unlock Reward
              </motion.button>
            ) : (
              <motion.div 
                key="claimed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-xs flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> VOUCHER UNLOCKED: #UNLOCK20
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards12;
