import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function AccountLoyaltyRewards5() {
  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Large Typography Clip Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-10 space-y-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-amber-500 font-bold block">
            EST. 2026 PRIVILEGE CLUB
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight uppercase leading-none">
            YOUR <br /><span className="italic font-normal text-amber-400">REWARDS & PRIVILEGES</span>
          </h1>
        </motion.div>

        {/* Editorial Split Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">CURRENT BALANCE</span>
            <p className="text-6xl font-light text-white font-serif">2,450 <span className="text-lg font-sans text-stone-400 uppercase tracking-widest">PTS</span></p>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              As a Silver Tier patron, enjoy complimentary global shipping, priority customer concierge, and curated invitations to seasonal sample sales.
            </p>
          </div>

          <div className="space-y-6 divide-y divide-stone-800">
            <div className="pb-4 space-y-2">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">SILVER ADVANTAGE</span>
              <h4 className="text-lg font-serif font-normal text-stone-200">1.5x Points Multiplier on New Arrivals</h4>
            </div>
            <div className="pt-4 space-y-2">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">NEXT HORIZON</span>
              <h4 className="text-lg font-serif font-normal text-stone-200">Gold Tier Access at 3,000 PTS</h4>
            </div>
            <button className="pt-4 text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 hover:gap-3 transition-all">
              DISCOVER ALL TIER PRIVILEGES <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards5;
