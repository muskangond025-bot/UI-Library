import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress10({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-16 px-4 bg-slate-900 text-white flex flex-col items-center font-sans rounded-3xl">
      <div className="w-full max-w-xl text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-0 right-0 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-6">
          10 / COUNTDOWN DISTANCE COUNTER
        </span>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="bg-slate-800 border border-slate-700 px-6 py-4 rounded-2xl text-5xl font-mono font-black text-emerald-400">
            {isUnlocked ? "00" : remaining}
          </div>
        </div>

        <h3 className="text-xl font-bold uppercase tracking-wider text-slate-300">
          {isUnlocked ? "FREE SHIPPING UNLOCKED" : `${settings.currency} REMAINING FOR FREE DELIVERY` }
        </h3>
      </div>
    </div>
  );
}