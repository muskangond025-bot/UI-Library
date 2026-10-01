import React, { useState } from 'react';
import { Star, Plus, Check } from 'lucide-react';

export default function RecommendedProducts8({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-6 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 font-bold block mb-3">08 / FEATURED RECOMMENDATION</span>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 bg-white p-4 rounded-2xl border flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300" className="w-20 h-20 rounded-xl object-cover" />
          <div>
            <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">TOP PICK</span>
            <h4 className="text-sm font-bold text-slate-900 mt-1">Silk Pocket Square</h4>
            <span className="text-xs font-mono font-bold text-slate-700">₹499</span>
          </div>
          <button onClick={() => setAdded(!added)} className="ml-auto bg-slate-900 text-white px-3 py-2 rounded-xl text-xs font-bold">
            {added ? "Added" : "+ Add"}
          </button>
        </div>

        <div className="md:col-span-5 flex gap-2">
          {["Tie Bar ₹349", "Cream ₹299", "Socks ₹399"].map((txt, idx) => (
            <div key={idx} className="flex-1 p-2 bg-white border rounded-xl text-center text-[11px] font-bold text-slate-700">
              {txt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}