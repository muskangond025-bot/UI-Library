import React, { useState } from 'react';

export default function CartFrequentlyBoughtTogether7({ data }: { data?: any }) {
  return (
    <div className="w-full py-6 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">07 / VERTICAL STACK MODULES</h4>
      <div className="border rounded-2xl divide-y bg-white overflow-hidden">
        {["Silk Pocket Square — ₹499", "Silver Tie Bar — ₹349", "Leather Care Cream — ₹299"].map((txt, idx) => (
          <div key={idx} className="p-4 flex justify-between items-center text-xs font-bold text-slate-900">
            <span>{txt}</span>
            <button className="px-3 py-1 bg-slate-900 text-white rounded-lg">+ Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}