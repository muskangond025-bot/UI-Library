import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts15({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState("Matching");
  const [added, setAdded] = useState(false);

  const tabs = ["Matching", "Accessories", "Care", "Under ₹500"];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b">
        <h4 className="text-xs font-mono font-bold uppercase text-slate-900">15 / CATEGORY FILTER TABS</h4>
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                activeTab === tab ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-2xl border flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase">{activeTab} Pick</span>
          <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square</h5>
          <span className="text-xs font-mono font-bold text-slate-600">₹499</span>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold ${added ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
        >
          {added ? "Added" : "+ Add"}
        </button>
      </div>
    </div>
  );
}