import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Compass, Layers, Globe, ChevronDown } from 'lucide-react';

export const GlobalHeader4: React.FC = () => {
  return (
    <div className="w-full py-6 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 blur-[100px] pointer-events-none rounded-full" />
      
      <header className="max-w-6xl mx-auto rounded-full bg-slate-900/50 backdrop-blur-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/60 py-3.5 px-8 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-purple-900/50">
            S
          </div>
          <span className="font-black text-xl tracking-tight bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            SPATIAL<span className="text-pink-400">.STUDIO</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <div className="flex items-center gap-1 hover:text-pink-300 cursor-pointer">
            <span>3D Spatial Catalog</span>
            <ChevronDown className="w-3 h-3 text-purple-400" />
          </div>
          <a href="#vr-showroom" className="hover:text-pink-300 transition-colors">VR Showroom</a>
          <a href="#spatial-audio" className="hover:text-pink-300 transition-colors">Spatial Audio</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-900/50 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Spatial Vault (04)</span>
          </button>
        </div>
      </header>
    </div>
  );
};
export default GlobalHeader4;
