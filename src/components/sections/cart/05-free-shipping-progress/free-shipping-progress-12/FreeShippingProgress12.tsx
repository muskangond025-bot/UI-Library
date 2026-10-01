import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress12({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-16 px-6 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-10 shadow-xl relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-left border-r border-slate-100 pr-6">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-2">12 / ASYMMETRIC EDITORIAL</span>
            <h2 className="text-6xl font-black text-slate-900">{isUnlocked ? "FREE" : `${settings.currency}${remaining}`}</h2>
            <span className="text-xs font-bold text-slate-500 uppercase mt-1 block">REMAINING GAP</span>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {isUnlocked ? "Zero Shipping Fee Applied!" : "You are 80% of the way to free shipping."}
            </h3>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden my-4 border">
              <motion.div className="h-full bg-slate-900" animate={{ width: `${(current / settings.threshold) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}