import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress15({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <div className="md:col-span-4 flex justify-center">
          <div className="w-32 h-32 rounded-full border-8 border-emerald-500 flex items-center justify-center font-black text-2xl text-slate-900">
            80%
          </div>
        </div>

        <div className="md:col-span-8 text-left">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-2">15 / RING + CONTENT SPLIT</span>
          <h3 className="text-2xl font-black text-slate-900">
            {isUnlocked ? "Free Shipping Unlocked!" : `Cart Total: ${settings.currency}${current}`}
          </h3>
        </div>
      </div>
    </div>
  );
}