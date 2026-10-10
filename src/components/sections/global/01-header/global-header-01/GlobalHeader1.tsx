import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, User, Menu, X, Sparkles, Compass } from 'lucide-react';

export const GlobalHeader1: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-gradient-to-r from-rose-100 via-purple-100 to-pink-100 relative">
      <header className="max-w-6xl mx-auto rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl shadow-rose-200/50 py-3 px-8 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-black text-lg shadow-md">
            L
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            LUMINA<span className="text-rose-500">.ISLAND</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#new" className="hover:text-rose-600 transition-colors">New Arrivals</a>
          <a href="#collections" className="hover:text-rose-600 transition-colors">Collections</a>
          <a href="#about" className="hover:text-rose-600 transition-colors">About Us</a>
          <a href="#offers" className="text-rose-600 font-bold hover:text-rose-700 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Limited Offer</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search items..." className="pl-9 pr-4 py-2 rounded-full text-xs bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400 w-40" />
          </div>
          <button className="p-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-rose-600 transition-colors shadow-md flex items-center gap-2 px-4 text-xs font-bold">
            <ShoppingBag className="w-4 h-4" />
            <span>Cart (3)</span>
          </button>
        </div>
      </header>
    </div>
  );
};
export default GlobalHeader1;
