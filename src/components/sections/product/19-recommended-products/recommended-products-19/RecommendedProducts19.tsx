import React, { useState } from 'react';
import { Plus, Check, Truck } from 'lucide-react';

export default function RecommendedProducts19({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-emerald-50/80 border border-emerald-200 rounded-3xl font-sans my-4">
      <div className="flex items-center gap-2 mb-3">
        <Truck className="w-4 h-4 text-emerald-600" />
        <span className="text-xs font-bold text-emerald-900">You're ₹499 away from Free Express Delivery</span>
      </div>

      <div className="bg-white p-3 rounded-2xl border border-emerald-200/60 flex items-center justify-between">
        <div>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">QUALIFIES FOR FREE SHIPPING</span>
          <h5 className="text-xs font-bold text-slate-900 mt-1">Silk Pocket Square (₹499)</h5>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold ${added ? 'bg-emerald-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
        >
          {added ? "Qualifies!" : "+ Add To Reach Threshold"}
        </button>
      </div>
    </div>
  );
}