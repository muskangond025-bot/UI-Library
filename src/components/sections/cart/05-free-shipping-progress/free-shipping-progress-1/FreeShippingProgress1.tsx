import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FreeShippingProgress1({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-20 px-6 bg-white text-slate-900 font-sans flex flex-col items-center text-center">
      <button 
        onClick={() => setIsUnlocked(!isUnlocked)}
        className="mb-8 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
      >
        Toggle State ({isUnlocked ? "100%" : "80%"})
      </button>

      <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-4">
        01 / EDITORIAL TYPOGRAPHY
      </span>

      <h1 className="text-7xl md:text-9xl font-black tracking-tight text-slate-900 leading-none mb-4">
        {isUnlocked ? "FREE" : `${settings.currency}${remaining}`}
      </h1>

      <p className="text-xl md:text-2xl font-bold tracking-wide text-slate-500 uppercase mb-12">
        {isUnlocked ? "SHIPPING UNLOCKED ON YOUR CART" : "AWAY FROM UNLOCKING FREE SHIPPING"}
      </p>

      {/* Minimal Underline Progress Line */}
      <div className="w-full max-w-xl h-1.5 bg-slate-100 rounded-full overflow-hidden mb-8">
        <motion.div 
          className="h-full bg-slate-900 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="flex items-center gap-8 text-sm font-mono text-slate-500">
        <span>CART: {settings.currency}{current}</span>
        <span>TARGET: {settings.currency}{settings.threshold}</span>
      </div>
    </div>
  );
}