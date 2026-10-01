import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress2({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  return (
    <div className="w-full py-16 px-4 bg-emerald-50/30 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-10 shadow-2xl flex flex-col items-center text-center relative">
        <button 
          onClick={() => setIsUnlocked(!isUnlocked)}
          className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600"
        >
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase mb-6">
          02 / RADIAL DONUT GAUGE
        </span>

        <div className="relative w-56 h-56 flex items-center justify-center my-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r={radius} className="stroke-slate-100" strokeWidth="16" fill="transparent" />
            <motion.circle 
              cx="100" cy="100" r={radius} 
              className="stroke-emerald-500" strokeWidth="16" fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-5xl font-black text-slate-900">{pct}%</span>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">COMPLETED</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">
          {isUnlocked ? "Free Delivery Unlocked!" : `${settings.currency}${remaining} Remaining`}
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          {isUnlocked ? "Your order cart qualifies for zero shipping charge." : `Add ${settings.currency}${remaining} more items to reach the ${settings.currency}${settings.threshold} free shipping threshold.`}
        </p>
      </div>
    </div>
  );
}