import React, { useState } from 'react';

export default function FreeShippingProgress17({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-12 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="inline-flex items-center gap-4 bg-white border border-slate-200 px-6 py-3 rounded-full shadow-md">
        <span className="text-xs font-black uppercase text-emerald-600">FREE SHIPPING</span>
        <span className="text-xs font-bold text-slate-700">{isUnlocked ? "UNLOCKED 🎉" : `${settings.currency}600 TO GO` }</span>
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100">Toggle</button>
      </div>
    </div>
  );
}