import React from 'react';
import { Plus } from 'lucide-react';

export default function RecommendedProducts9({ data }: { data?: any }) {
  const items = [
    { name: "Silk Pocket Square", price: "₹499" },
    { name: "Silver Tie Bar", price: "₹349" },
    { name: "Leather Cream", price: "₹299" },
    { name: "Cotton Socks", price: "₹399" }
  ];

  return (
    <div className="w-full py-6 px-4 bg-white border border-slate-200 rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-3">09 / MOBILE SWIPE RAIL (SWIPE HORIZONTALLY)</h4>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
        {items.map((it, idx) => (
          <div key={idx} className="snap-start flex-shrink-0 w-44 p-3 bg-slate-50 border rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-900">{it.name}</span>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs font-mono font-bold text-emerald-600">{it.price}</span>
              <button className="p-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold">+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}