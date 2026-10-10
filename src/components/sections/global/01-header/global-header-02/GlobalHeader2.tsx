import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, User, Sparkles, ChevronDown, Globe, ShieldCheck } from 'lucide-react';

export const GlobalHeader2: React.FC = () => {
  const [currency, setCurrency] = useState('USD');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-slate-950 text-white font-sans relative border-b border-slate-800">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-900/40 via-amber-700/30 to-amber-900/40 border-b border-amber-500/20 py-2 px-6 text-xs flex justify-between items-center text-amber-200">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:6s]" />
          <span>Complimentary Express Shipping on Orders Over $250</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            <Globe className="w-3.5 h-3.5" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-amber-200 focus:outline-none cursor-pointer"
            >
              <option value="USD" className="bg-slate-900 text-white">USD ($)</option>
              <option value="EUR" className="bg-slate-900 text-white">EUR (€)</option>
              <option value="GBP" className="bg-slate-900 text-white">GBP (£)</option>
            </select>
          </div>
          <span className="text-slate-600">|</span>
          <a href="#support" className="hover:underline">Concierge Support</a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-300">
          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-amber-400 transition-colors">
            <span>New Arrivals</span>
            <ChevronDown className="w-3 h-3 text-slate-500 group-hover:rotate-180 transition-transform" />
          </div>
          <a href="#haute-couture" className="hover:text-amber-400 transition-colors">Haute Couture</a>
          <a href="#jewelry" className="hover:text-amber-400 transition-colors">Fine Jewelry</a>
          <a href="#editorial" className="text-amber-400 font-bold hover:text-amber-300">Editorial Vol. 4</a>
        </nav>

        {/* Center Brand Logo */}
        <div className="text-center">
          <a href="#" className="font-serif text-2xl md:text-3xl font-light tracking-widest text-amber-100 uppercase">
            Maison<span className="font-sans text-xs tracking-[0.3em] font-bold block text-amber-500/90">DE LUMIÈRE</span>
          </a>
        </div>

        {/* Right Action Trigger Buttons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-12 w-72 bg-slate-900 border border-amber-500/30 p-3 rounded-2xl shadow-2xl z-50">
                <input
                  type="text"
                  placeholder="Search catalog..."
                  className="w-full px-4 py-2 bg-slate-950 text-white rounded-xl text-xs border border-slate-800 focus:outline-none focus:border-amber-500"
                  autoFocus
                />
              </div>
            )}
          </div>

          <button className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors relative">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              4
            </span>
          </button>

          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-900/30 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Bag (03)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default GlobalHeader2;
