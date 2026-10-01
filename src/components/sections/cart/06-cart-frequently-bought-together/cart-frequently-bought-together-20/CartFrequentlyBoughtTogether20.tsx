import React, { useState } from 'react';
import { Sparkles, Check, Plus } from 'lucide-react';

export default function CartFrequentlyBoughtTogether20({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-10 px-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="flex justify-between items-center mb-6 relative z-10">
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1">
          <Sparkles size={14} /> 20 / EXPERIMENTAL GLASS BUNDLE
        </span>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between relative z-10">
        <div>
          <h4 className="text-base font-bold">Frequently Bought Bundle</h4>
          <span className="text-xs font-mono text-indigo-300 font-bold">Pocket Square + Tie Bar (₹848)</span>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={`px-6 py-3 rounded-xl text-xs font-bold transition-transform hover:scale-105 ${
            added ? 'bg-emerald-500 text-white' : 'bg-white text-slate-950 font-black'
          }`}
        >
          {added ? "Bundle Added" : "+ Add Bundle"}
        </button>
      </div>
    </div>
  );
}