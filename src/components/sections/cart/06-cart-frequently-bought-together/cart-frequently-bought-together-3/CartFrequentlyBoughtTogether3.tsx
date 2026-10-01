import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether3({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-xs font-mono font-bold text-indigo-600 uppercase block mb-4">03 / FEATURED RECOMMENDATION + ALTERNATIVES</span>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 bg-white p-6 rounded-2xl border flex items-center gap-4 shadow-sm">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" className="w-24 h-24 rounded-xl object-cover" />
          <div className="flex-1">
            <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded">MOST POPULAR ADD-ON</span>
            <h4 className="text-base font-bold text-slate-900 mt-1">Silk Pocket Square — Navy Twill</h4>
            <span className="text-sm font-mono font-bold text-emerald-600 block mt-1">₹499</span>
          </div>
          <button 
            onClick={() => setAdded(!added)}
            className={`px-4 py-2 rounded-xl text-xs font-bold ${added ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
          >
            {added ? "Added" : "+ Add"}
          </button>
        </div>

        <div className="md:col-span-5 flex flex-col gap-2">
          {["Silver Tie Bar — ₹349", "Leather Care Cream — ₹299"].map((txt, idx) => (
            <div key={idx} className="bg-white p-3 rounded-xl border flex items-center justify-between text-xs font-bold text-slate-800">
              <span>{txt}</span>
              <button className="text-emerald-600 hover:underline text-xs">+ Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}