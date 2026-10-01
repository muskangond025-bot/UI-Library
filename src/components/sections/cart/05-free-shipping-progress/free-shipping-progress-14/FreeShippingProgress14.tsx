import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress14({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex items-center gap-8 relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <div className="w-8 h-48 bg-slate-100 rounded-full border border-slate-200 overflow-hidden flex flex-col justify-end">
          <motion.div className="w-full bg-emerald-500 rounded-b-full" animate={{ height: `${pct}%` }} transition={{ duration: 1 }} />
        </div>

        <div>
          <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">14 / VERTICAL METER</span>
          <h3 className="text-3xl font-black text-slate-900">{pct}%</h3>
          <span className="text-xs font-bold text-emerald-600 uppercase block mt-1">HEIGHT REACHED</span>
        </div>
      </div>
    </div>
  );
}