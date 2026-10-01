import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle } from 'lucide-react';

export default function FreeShippingProgress4({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">04 / VERTICAL JOURNEY</span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <div className="flex flex-col gap-6 relative">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 uppercase font-bold block">STAGE 01</span>
              <h4 className="text-lg font-bold text-slate-900">Current Cart Value</h4>
            </div>
            <span className="text-xl font-black text-slate-900">{settings.currency}{current}</span>
          </div>

          <div className="flex justify-center text-emerald-500">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-600 uppercase font-bold block">STAGE 02</span>
              <h4 className="text-lg font-bold text-emerald-900">
                {isUnlocked ? "Gap Cleared!" : `Remaining: ${settings.currency}${remaining}`}
              </h4>
            </div>
            <span className="text-sm font-bold text-emerald-700">{isUnlocked ? "100%" : "80% Progress"}</span>
          </div>

          <div className="flex justify-center text-emerald-500">
            <ArrowDown className="w-6 h-6" />
          </div>

          <div className={`p-6 rounded-2xl border flex items-center justify-between transition-colors ${
            isUnlocked ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20' : 'bg-slate-900 text-white border-slate-800'
          }`}>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-300 block">DESTINATION</span>
              <h4 className="text-xl font-black">FREE SHIPPING UNLOCKED</h4>
            </div>
            <CheckCircle className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}