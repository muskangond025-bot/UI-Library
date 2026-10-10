import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowUpRight } from 'lucide-react';

export const GlobalHeader3: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full bg-[#fbf9f6] text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Architect Coordinates & Logo */}
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-slate-900 animate-ping" />
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block">LAT 48.8566° N • PARIS</span>
            <a href="#" className="font-extrabold text-xl tracking-tighter text-slate-900">
              ATELIER<span className="font-light text-slate-500">.ARCH</span>
            </a>
          </div>
        </div>

        {/* Minimalist Center Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] font-semibold text-slate-600">
          <a href="#structure" className="hover:text-slate-900 transition-colors">Structures</a>
          <a href="#objects" className="hover:text-slate-900 transition-colors">Objects</a>
          <a href="#materials" className="hover:text-slate-900 transition-colors">Materials</a>
          <a href="#monograph" className="text-slate-900 font-bold flex items-center gap-1">
            <span>Monograph</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
        </nav>

        {/* Minimalist Right Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm">
            <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
            <input type="text" placeholder="Search archive..." className="bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none w-32" />
          </div>

          <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-rose-600 transition-colors shadow-md flex items-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag [02]</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default GlobalHeader3;
