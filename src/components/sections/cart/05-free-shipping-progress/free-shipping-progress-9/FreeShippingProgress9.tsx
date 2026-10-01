import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function FreeShippingProgress9({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full py-16 px-4 bg-indigo-50/20 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-indigo-600 uppercase mb-4">09 / TARGET DESTINATION</span>

        <div className="relative w-40 h-40 flex items-center justify-center my-4">
          <div className="w-full h-full rounded-full border-4 border-dashed border-indigo-200 animate-spin" />
          <div className="absolute w-28 h-28 rounded-full border-4 border-indigo-400 bg-indigo-50 flex items-center justify-center">
            <Target className="w-12 h-12 text-indigo-600" />
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mt-2">
          {isUnlocked ? "Bulls-Eye: Free Shipping!" : `Target: ${settings.currency}${settings.threshold}`}
        </h3>
      </div>
    </div>
  );
}