import React, { useState } from 'react';
import { CheckSquare, Square, ShoppingBag } from 'lucide-react';

export default function RecommendedProducts6({ data }: { data?: any }) {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="w-full py-6 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">FREQUENTLY ADDED TOGETHER</h4>
        <span className="text-xs font-mono text-emerald-600 font-bold">Save ₹150 on Combo</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div onClick={() => setChecked1(!checked1)} className="p-3 bg-white border rounded-2xl flex items-center gap-3 cursor-pointer">
          {checked1 ? <CheckSquare className="text-emerald-600 w-5 h-5" /> : <Square className="text-slate-300 w-5 h-5" />}
          <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=200" className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <h5 className="text-xs font-bold text-slate-900">Leather Care Cream</h5>
            <span className="text-xs font-mono text-slate-500">₹299</span>
          </div>
        </div>

        <div onClick={() => setChecked2(!checked2)} className="p-3 bg-white border rounded-2xl flex items-center gap-3 cursor-pointer">
          {checked2 ? <CheckSquare className="text-emerald-600 w-5 h-5" /> : <Square className="text-slate-300 w-5 h-5" />}
          <img src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200" className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <h5 className="text-xs font-bold text-slate-900">Premium Socks Pair</h5>
            <span className="text-xs font-mono text-slate-500">₹399</span>
          </div>
        </div>
      </div>

      <button className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-800">
        <ShoppingBag size={14} />
        <span>Add Selected Items (+₹{ (checked1 ? 299 : 0) + (checked2 ? 399 : 0) })</span>
      </button>
    </div>
  );
}