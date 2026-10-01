import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function FreeShippingProgress3({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  const milestones = [
    { value: 0, label: "Start" },
    { value: 1000, label: "Standard" },
    { value: 2000, label: "Priority" },
    { value: 3000, label: "FREE SHIPPING" }
  ];

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-md">
              03 / MILESTONE ROADMAP
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-2">
              {isUnlocked ? "🎉 Destination Reached: Free Shipping!" : "Cart Progress Milestone Track"}
            </h3>
          </div>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1.5 rounded-lg border text-slate-700">
            Toggle State
          </button>
        </div>

        <div className="relative my-12 px-6">
          <div className="absolute top-1/2 left-6 right-6 h-3 bg-slate-100 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-6 h-3 bg-gradient-to-r from-indigo-500 to-emerald-500 -translate-y-1/2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(current / settings.threshold) * 92}%` }}
            transition={{ duration: 1.2 }}
          />

          <div className="relative flex justify-between items-center z-10">
            {milestones.map((m, idx) => {
              const reached = current >= m.value;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm shadow-md transition-colors ${
                    reached ? 'bg-emerald-500 border-white text-white' : 'bg-white border-slate-300 text-slate-400'
                  }`}>
                    {reached ? <Check className="w-6 h-6 stroke-[3]" /> : idx + 1}
                  </div>
                  <span className={`text-xs font-bold mt-3 ${reached ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {m.label}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{settings.currency}{m.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}