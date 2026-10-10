import React from 'react';
import { ShoppingBag, Search, Heart, User } from 'lucide-react';

export const GlobalHeader14: React.FC = () => {
  return (
    <header className="w-full py-5 px-8 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg">
            H14
          </div>
          <span className="font-black text-xl tracking-tight">HEADER<span className="text-indigo-400">.AWWARDS_14</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#catalog" className="hover:opacity-75 transition-opacity">Catalog #14</a>
          <a href="#explore" className="hover:opacity-75 transition-opacity">Explore</a>
          <a href="#vip" className="hover:opacity-75 transition-opacity">VIP Access</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-full bg-slate-900 border border-slate-800 shadow-sm">
            <Search className="w-4 h-4" />
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default GlobalHeader14;
