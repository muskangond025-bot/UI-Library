import React, { useState } from 'react';
import { Sparkles, Plus, Check } from 'lucide-react';

export default function RecommendedProducts20({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl font-sans my-4 shadow-2xl border border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1">
          <Sparkles size={14} /> 20 / EXPERIMENTAL GLASS ADD-ON
        </span>
        <span className="text-xs font-bold text-emerald-400">10% Cart Bonus</span>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center justify-between relative z-10">
        <div>
          <h4 className="text-sm font-bold text-white">Silk Pocket Square</h4>
          <span className="text-xs font-mono text-indigo-300 font-bold">₹499</span>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-transform hover:scale-105 ${
            added ? 'bg-emerald-500 text-white' : 'bg-white text-slate-950 font-black'
          }`}
        >
          {added ? "Added!" : "+ Add"}
        </button>
      </div>
    </div>
  );
}