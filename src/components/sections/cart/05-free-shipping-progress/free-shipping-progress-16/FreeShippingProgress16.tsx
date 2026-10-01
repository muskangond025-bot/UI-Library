import React, { useState } from 'react';

export default function FreeShippingProgress16({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>
        <span className="text-xs font-mono font-bold text-indigo-600 uppercase block mb-4">16 / INTERACTIVE REVEAL</span>
        <h3 className="text-xl font-bold text-slate-900">
          {isUnlocked ? "All Perks Unlocked!" : "Unlock 3 Shopping Perks"}
        </h3>
      </div>
    </div>
  );
}