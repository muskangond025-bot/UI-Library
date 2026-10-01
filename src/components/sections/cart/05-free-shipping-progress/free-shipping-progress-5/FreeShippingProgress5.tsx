import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress5({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full py-16 px-4 bg-slate-100 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-md">
            05 / THRESHOLD SPLIT COMPARISON
          </span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          <div className="md:col-span-5 p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase block mb-2">YOUR CURRENT CART</span>
            <span className="text-4xl font-black text-slate-900">{settings.currency}{current}</span>
          </div>

          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-xs shadow-md">
              VS
            </div>
          </div>

          <div className="md:col-span-5 p-8 rounded-2xl bg-teal-500 text-white text-center shadow-lg shadow-teal-500/20">
            <span className="text-xs font-bold text-teal-100 uppercase block mb-2">FREE SHIPPING TARGET</span>
            <span className="text-4xl font-black">{settings.currency}{settings.threshold}</span>
          </div>
        </div>
      </div>
    </div>
  );
}