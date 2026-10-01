import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

export default function CartFrequentlyBoughtTogether12({ data }: { data?: any }) {
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(true);

  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800">
      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-4">12 / SELECTABLE BUNDLE CHECKLIST</span>
      <div className="space-y-3 mb-6">
        <div onClick={() => setC1(!c1)} className="p-3 bg-slate-800 rounded-xl flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            {c1 ? <CheckSquare className="text-emerald-400" /> : <Square className="text-slate-500" />}
            <span className="text-xs font-bold">Silk Pocket Square</span>
          </div>
          <span className="text-xs font-mono">₹499</span>
        </div>
        <div onClick={() => setC2(!c2)} className="p-3 bg-slate-800 rounded-xl flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            {c2 ? <CheckSquare className="text-emerald-400" /> : <Square className="text-slate-500" />}
            <span className="text-xs font-bold">Silver Tie Bar</span>
          </div>
          <span className="text-xs font-mono">₹349</span>
        </div>
      </div>
      <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs">
        Add Selected Items (₹{ (c1 ? 499 : 0) + (c2 ? 349 : 0) })
      </button>
    </div>
  );
}