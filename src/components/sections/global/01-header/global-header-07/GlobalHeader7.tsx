import React from 'react';
import { Gift, ShoppingBag, Sparkles } from 'lucide-react';

export const GlobalHeader7: React.FC = () => {
  return (
    <div className="w-full py-6 px-6 bg-amber-50/60 text-slate-800">
      <header className="max-w-6xl mx-auto p-4 rounded-3xl bg-white border-4 border-amber-100 shadow-[10px_10px_20px_rgba(251,191,36,0.15)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-400 text-white flex items-center justify-center font-black text-xl shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.15)]">
            C
          </div>
          <span className="font-black text-xl text-slate-900 tracking-tight">CLAY<span className="text-amber-500">PASTEL</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          <a href="#toys" className="hover:text-amber-500">Gift Box</a>
          <a href="#clay" className="hover:text-amber-500">Clay Crafts</a>
          <a href="#special" className="text-amber-600 font-extrabold">Special Bundles</a>
        </nav>
        <button className="px-6 py-3 rounded-2xl bg-amber-500 text-white font-black text-xs hover:bg-amber-600 shadow-md flex items-center gap-2">
          <Gift className="w-4 h-4" />
          <span>Wish Box (2)</span>
        </button>
      </header>
    </div>
  );
};
export default GlobalHeader7;
