import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Crown, Star, Sparkles } from 'lucide-react';

export function AccountLoyaltyRewards3() {
  const tiers = [
    { name: 'Bronze', pts: '0 - 999 Pts', icon: Shield, current: false, status: 'Completed' },
    { name: 'Silver', pts: '1,000 - 2,999 Pts', icon: Star, current: true, status: 'Current Tier' },
    { name: 'Gold', pts: '3,000 - 5,999 Pts', icon: Crown, current: false, status: 'Locked' },
    { name: 'Platinum', pts: '6,000+ Pts', icon: Sparkles, current: false, status: 'Locked' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Membership Progression</span>
          <h2 className="text-3xl font-extrabold">Your VIP Tier Journey</h2>
        </div>

        {/* Tier Roadmap Progress */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={'p-6 rounded-2xl border flex flex-col justify-between space-y-6 relative transition-all ' + (tier.current ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10' : 'bg-slate-900/40 border-slate-800 opacity-80')}
              >
                {tier.current && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-full">
                    ACTIVE TIER
                  </span>
                )}

                <div className="space-y-4">
                  <div className={'w-12 h-12 rounded-xl flex items-center justify-center ' + (tier.current ? 'bg-amber-400/20 text-amber-400' : 'bg-slate-800 text-slate-400')}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{tier.pts}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className={'w-4 h-4 ' + (tier.current || tier.status === 'Completed' ? 'text-amber-400' : 'text-slate-600')} />
                  <span className="text-xs font-bold text-slate-300">{tier.status}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards3;
