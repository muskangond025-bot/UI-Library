import React, { useState } from 'react';

export default function CartFrequentlyBoughtTogether17({ data }: { data?: any }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-4 bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-900">
        <span>⚡ FREQUENTLY BOUGHT TOGETHER (3 ITEMS)</span>
        <span>{open ? "▲ Hide" : "▼ Show"}</span>
      </button>
      {open && (
        <div className="p-4 bg-white border-t text-xs font-bold flex justify-between items-center">
          <span>Silk Pocket Square (₹499)</span>
          <button className="bg-slate-900 text-white px-3 py-1.5 rounded-xl">+ Add</button>
        </div>
      )}
    </div>
  );
}