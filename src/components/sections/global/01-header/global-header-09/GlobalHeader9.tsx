import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

export const GlobalHeader9: React.FC = () => {
  return (
    <header className="w-full bg-[#faf8f5] text-stone-900 font-serif border-b border-stone-300 py-6 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-xs font-sans uppercase tracking-[0.25em] text-stone-500 mb-4 pb-2 border-b border-stone-200">
          <span>VOL. 42 • EDITORIAL ISSUE</span>
          <span>PARIS / MILAN / NEW YORK</span>
          <span>OCTOBER 2026</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl md:text-5xl font-light italic tracking-tight">The Gazette</span>
          <nav className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-stone-700">
            <a href="#edition" className="hover:text-amber-800">Edition</a>
            <a href="#runway" className="hover:text-amber-800">Runway</a>
            <a href="#archive" className="hover:text-amber-800">Archive</a>
          </nav>
          <button className="px-6 py-2.5 border border-stone-900 font-sans text-xs uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};
export default GlobalHeader9;
