import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress13({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full bg-slate-900 text-white py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">STATUS STRIP</span>
        <span className="text-sm font-bold">{isUnlocked ? "FREE SHIPPING UNLOCKED" : `CART: ${settings.currency}${current} / ${settings.currency}${settings.threshold}`}</span>
      </div>
      <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-lg">
        Toggle State
      </button>
    </div>
  );
}