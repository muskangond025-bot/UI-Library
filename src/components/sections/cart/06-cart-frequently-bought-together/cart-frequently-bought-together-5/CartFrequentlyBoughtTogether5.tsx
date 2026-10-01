import React, { useState } from 'react';
import { Shirt, Plus, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether5({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase">05 / COMPLETE THE OUTFIT SET</span>
          <h3 className="text-xl font-black text-slate-900 mt-1">Full Coordinated Look</h3>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold ${added ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white'}`}
        >
          {added ? "Set Added" : "Complete Entire Set (-15% OFF)"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Cart: Navy Blazer", "Silk Pocket Square ₹499", "Tie Bar ₹349", "Leather Shoes ₹4,999"].map((txt, idx) => (
          <div key={idx} className="p-3 bg-slate-50 border rounded-2xl text-center text-xs font-bold text-slate-800">
            {txt}
          </div>
        ))}
      </div>
    </div>
  );
}