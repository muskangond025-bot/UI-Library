import React, { useState } from 'react';
import { Trophy, CheckCircle, Lock } from 'lucide-react';

export function OffersFeatured18() {
  const [currentSpend] = useState(75);

  const tiers = [
    { spend: 50, reward: 'FREE EXPRESS SHIPPING UNLOCKED', status: 'UNLOCKED' },
    { spend: 100, reward: '40% OFF EXTRA FEATURED DISCOUNT', status: 'IN PROGRESS' },
    { spend: 200, reward: '$50 GIFT CARD + VIP DROP ACCESS', status: 'LOCKED' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-4 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" /> GAMIFIED MILESTONE FEATURED
          </span>
          <h2 className="text-3xl font-extrabold text-white">Unlock Tiered Featured Rewards</h2>
        </div>

        {/* Global Progress Bar */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center text-sm font-bold">
            <span>YOUR CART FEATURED MILESTONE</span>
            <span className="text-amber-400 font-mono">${currentSpend} / $200 REACHED</span>
          </div>
          <div className="w-full bg-slate-800 h-4 rounded-full p-1 border border-slate-700">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500" style={{ width: `${(currentSpend / 200) * 100}%` }} />
          </div>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => {
            const isUnlocked = currentSpend >= tier.spend;

            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border transition-all ${
                  isUnlocked
                    ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono font-bold">MILESTONE 0{idx + 1}</span>
                  {isUnlocked ? <CheckCircle className="w-5 h-5 text-amber-400" /> : <Lock className="w-5 h-5 text-slate-600" />}
                </div>

                <div className="text-2xl font-black text-white mb-2">${tier.spend} GOAL</div>
                <p className="text-sm font-bold text-amber-300 mb-6">{tier.reward}</p>

                <button
                  disabled={!isUnlocked}
                  className={`w-full py-3 rounded-2xl font-bold text-xs uppercase transition-colors ${
                    isUnlocked
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                      : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  {isUnlocked ? 'CLAIM REWARD' : 'LOCKED'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured18;
