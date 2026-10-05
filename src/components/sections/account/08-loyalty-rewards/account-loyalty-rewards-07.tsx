import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function AccountLoyaltyRewards7() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-800">
        {/* Radial SVG Ring */}
        <div className="relative w-56 h-56 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
            <motion.circle 
              cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" className="text-amber-400" fill="transparent"
              strokeDasharray="263.89"
              initial={{ strokeDashoffset: 263.89 }}
              animate={{ strokeDashoffset: 47.5 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center space-y-1">
            <span className="text-3xl font-black text-white">82%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">TO GOLD TIER</span>
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-400/20">
              Tier Progress Ring
            </span>
            <h2 className="text-3xl font-extrabold text-white">2,450 / 3,000 Points</h2>
            <p className="text-slate-400 text-sm max-w-md">
              You are just 550 points away from unlocking Gold Status with exclusive benefits and early drop access.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
              Claim Available Rewards
            </button>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
              How To Earn <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards7;
