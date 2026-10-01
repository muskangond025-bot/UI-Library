import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress11({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  const tiers = [
    { name: "Tier 1: Standard Ground", amount: 1000 },
    { name: "Tier 2: Express Discount", amount: 2000 },
    { name: "Tier 3: FREE SHIPPING", amount: 3000 }
  ];

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase">11 / BENEFIT LADDER</span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {tiers.map((t, idx) => {
            const active = current >= t.amount;
            return (
              <div key={idx} className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                active ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-slate-50 border-slate-200 text-slate-400'
              }`}>
                <span className="font-bold text-sm">{t.name}</span>
                <span className="font-mono text-xs font-bold">{settings.currency}{t.amount}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}