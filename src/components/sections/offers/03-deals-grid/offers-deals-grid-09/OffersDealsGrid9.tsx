import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export function OffersDealsGrid9() {
  const [activeTier, setActiveTier] = useState(1);

  const bundleTiers = [
    { tier: 'TIER 1 (BUY 1)', discount: '20% OFF', desc: 'Single item discount unlocked' },
    { tier: 'TIER 2 (BUY 2)', discount: '40% OFF', desc: 'Double item value bundle' },
    { tier: 'TIER 3 (BUY 3)', discount: '60% OFF', desc: 'Maximum savings package' }
  ];

  const items = [
    { title: 'Spatial Audio Pods Pro', price: '$80 (was $160)' },
    { title: 'Titanium Smart Watch', price: '$120 (was $240)' },
    { title: 'Wireless Charging Dock', price: '$40 (was $80)' }
  ];

  return (
    <div className="w-full bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" /> BUNDLE SAVINGS MATRIX
          </span>
          <h2 className="text-3xl font-extrabold">Multi-Tier Savings Selector</h2>
        </div>

        {/* Tier Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bundleTiers.map((b, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTier(idx)}
              className={`p-6 rounded-2xl border text-left transition-all ${
                activeTier === idx
                  ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-lg'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span>{b.tier}</span>
                {activeTier === idx && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
              </div>
              <div className="text-2xl font-black text-white">{b.discount}</div>
              <div className="text-xs text-slate-500 mt-1">{b.desc}</div>
            </button>
          ))}
        </div>

        {/* Dynamic Bundle Package Card */}
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold">ACTIVE BUNDLE INCLUDED ITEMS</span>
            <div className="space-y-1">
              {items.slice(0, activeTier + 1).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{item.title} — {item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase rounded-2xl transition-colors flex items-center gap-2 shrink-0">
            CLAIM BUNDLE ({bundleTiers[activeTier].discount}) <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid9;
