import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export function AccountLoyaltyRewards11() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Digital Pass</span>
          <h2 className="text-3xl font-extrabold">3D VIP Membership Pass</h2>
        </div>

        {/* 3D Perspective Card */}
        <motion.div 
          whileHover={{ rotateY: 12, rotateX: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-full max-w-md mx-auto aspect-[1.58/1] bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 shadow-2xl text-slate-950 flex flex-col justify-between text-left relative overflow-hidden transform-gpu"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-30 pointer-events-none" />

          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900/70">SILVER TIER</p>
              <h3 className="text-2xl font-black tracking-tight text-slate-950 mt-0.5">VIP LOYALTY</h3>
            </div>
            <Crown className="w-8 h-8 text-slate-950" />
          </div>

          <div className="relative z-10 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900/80">Available Balance</p>
            <p className="text-4xl font-black text-slate-950">2,450 PTS</p>
          </div>

          <div className="flex justify-between items-end relative z-10 text-xs font-mono font-bold text-slate-900">
            <span>ID: #8920-VIP</span>
            <span>EXP: 12/28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards11;
