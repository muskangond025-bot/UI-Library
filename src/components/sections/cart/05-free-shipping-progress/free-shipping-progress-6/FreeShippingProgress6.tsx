import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress6({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  const totalBlocks = 5;
  const activeBlocks = Math.round((pct / 100) * totalBlocks);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase">06 / SEGMENTED BLOCK TRACK</span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
          {isUnlocked ? "Free Delivery Segment 5/5 Reached!" : `Segment Progress (${activeBlocks}/${totalBlocks} Active)`}
        </h3>

        {/* Discrete Blocks */}
        <div className="grid grid-cols-5 gap-3 my-6">
          {Array.from({ length: totalBlocks }).map((_, idx) => {
            const isActive = idx < activeBlocks;
            return (
              <motion.div 
                key={idx}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`h-12 rounded-xl transition-all duration-500 border flex items-center justify-center font-bold text-xs ${
                  isActive ? 'bg-emerald-500 border-emerald-600 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-100 border-slate-200 text-slate-400'
                }`}
              >
                Block {idx + 1}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}