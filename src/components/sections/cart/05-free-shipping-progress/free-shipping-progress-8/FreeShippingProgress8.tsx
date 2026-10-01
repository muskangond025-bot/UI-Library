import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export default function FreeShippingProgress8({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-amber-50/30 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-amber-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-amber-700 uppercase mb-4">08 / PACKAGE BOX FILL</span>

        <div className="w-32 h-32 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center relative overflow-hidden my-4">
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-amber-500"
            initial={{ height: '0%' }}
            animate={{ height: `${pct}%` }}
            transition={{ duration: 1.2 }}
          />
          <Package className="w-16 h-16 text-amber-900 relative z-10" />
        </div>

        <h3 className="text-xl font-black text-slate-900 mt-2">
          {isUnlocked ? "Package Fully Loaded!" : `Box Level: ${pct}%`}
        </h3>
      </div>
    </div>
  );
}