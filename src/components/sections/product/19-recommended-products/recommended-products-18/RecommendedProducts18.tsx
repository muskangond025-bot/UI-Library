import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Check } from 'lucide-react';

export default function RecommendedProducts18({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl font-sans my-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors"
      >
        <span className="font-mono text-emerald-600 uppercase">⚡ QUICK CART ADD-ONS (3 AVAILABLE)</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="p-4 border-t flex items-center justify-between bg-white">
          <div>
            <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square</h5>
            <span className="text-xs font-mono text-slate-500">₹499</span>
          </div>
          <button 
            onClick={() => setAdded(!added)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${added ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}
          >
            {added ? "Added" : "+ Add"}
          </button>
        </div>
      )}
    </div>
  );
}