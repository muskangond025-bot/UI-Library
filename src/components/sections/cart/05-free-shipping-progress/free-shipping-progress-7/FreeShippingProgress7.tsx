import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function FreeShippingProgress7({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-emerald-50/20 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-emerald-600 uppercase mb-4">07 / SHOPPING BAG FILL</span>

        <div className="relative w-40 h-48 bg-slate-100 border-4 border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-end my-4">
          <motion.div 
            className="w-full bg-emerald-500 rounded-b-2xl"
            initial={{ height: '0%' }}
            animate={{ height: `${pct}%` }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center font-black text-2xl text-slate-900 mix-blend-difference">
            <span>{pct}%</span>
            <span className="text-xs uppercase font-mono">FILLED</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-4">
          {isUnlocked ? "Shopping Bag Full: Free Delivery!" : `Cart Value: ${settings.currency}${current}`}
        </h3>
      </div>
    </div>
  );
}