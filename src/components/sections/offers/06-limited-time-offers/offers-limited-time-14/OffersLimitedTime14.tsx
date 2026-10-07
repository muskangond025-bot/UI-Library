import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Lock, Unlock, CheckCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const TIERS = [
  { amount: 50, reward: '10% OFF Cart', code: 'SAVE10', icon: Gift },
  { amount: 100, reward: '20% OFF + Free Ship', code: 'SAVE20', icon: Sparkles },
  { amount: 150, reward: '30% OFF + VIP Gift', code: 'VIPGIFT30', icon: Unlock },
];

export function OffersLimitedTime14() {
  const [cartTotal, setCartTotal] = useState(115);

  const getActiveTier = () => {
    if (cartTotal >= 150) return 3;
    if (cartTotal >= 100) return 2;
    if (cartTotal >= 50) return 1;
    return 0;
  };

  const activeTierCount = getActiveTier();
  const progressPercent = Math.min(100, (cartTotal / 150) * 100);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design: Tiered Savings Unlock • Animation: Spend Simulator & Milestone Pulses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Spend More, Save More
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Test your order total below to see your unlocked rewards. Reach higher tiers for stackable VIP perks!
          </p>
        </div>

        {/* Interactive Spend Simulator Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-8 text-left backdrop-blur-md">
          {/* Top Cart Value Display */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simulated Cart Total</span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-0.5">${cartTotal}.00</div>
            </div>
            <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              {cartTotal >= 150 ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> All Tier Rewards Unlocked!
                </span>
              ) : (
                <span>Add <strong className="text-white">${150 - cartTotal}</strong> more to unlock Tier 3 VIP Gift!</span>
              )}
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 flex justify-between">
              <span>Adjust Cart Amount:</span>
              <span className="text-slate-200 font-mono">${cartTotal}</span>
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="5"
              value={cartTotal}
              onChange={(e) => setCartTotal(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400 border border-slate-800"
            />
          </div>

          {/* Milestone Progress Timeline */}
          <div className="relative pt-6">
            {/* Progress Bar Track */}
            <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
              />
            </div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6">
              {TIERS.map((tier, idx) => {
                const isUnlocked = cartTotal >= tier.amount;
                const Icon = tier.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                      isUnlocked
                        ? 'bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                        : 'bg-slate-950 border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400">Spend ${tier.amount}</span>
                      {isUnlocked ? (
                        <Unlock className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Lock className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-white">{tier.reward}</h4>
                    <span className="inline-block mt-2 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 font-semibold">
                      {isUnlocked ? tier.code : 'LOCKED'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checkout CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Perks automatically applied at checkout</span>
            </div>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
              <span>Apply Unlocked Rewards</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime14;
