import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, ChevronDown, ArrowRight, Tag, Star } from 'lucide-react';

export const GlobalMegaNavigation1: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'apparel' | 'shoes' | 'accessories'>('apparel');

  return (
    <div className="w-full py-8 px-6 bg-gradient-to-r from-rose-100 via-purple-100 to-pink-100 relative">
      {/* Top Navbar Header */}
      <header className="max-w-6xl mx-auto rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-2xl py-3.5 px-8 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-black text-lg shadow-md">
            M
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            MEGA<span className="text-rose-500">.ISLAND</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <button onClick={() => setActiveTab('apparel')} className={`flex items-center gap-1 transition-colors ${activeTab === 'apparel' ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}>
            <span>Apparel</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setActiveTab('shoes')} className={`flex items-center gap-1 transition-colors ${activeTab === 'shoes' ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}>
            <span>Footwear</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setActiveTab('accessories')} className={`flex items-center gap-1 transition-colors ${activeTab === 'accessories' ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}>
            <span>Accessories</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-rose-600 transition-colors shadow-md flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Bag (04)</span>
          </button>
        </div>
      </header>

      {/* Expanded Mega Menu Panel */}
      <div className="max-w-6xl mx-auto mt-4 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/90 shadow-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 animate-fade-in">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-4">Popular Categories</h4>
          <ul className="space-y-2.5 text-sm font-medium text-slate-700">
            <li><a href="#dresses" className="hover:text-rose-600 transition-colors">Evening Dresses</a></li>
            <li><a href="#jackets" className="hover:text-rose-600 transition-colors">Leather Jackets</a></li>
            <li><a href="#knitwear" className="hover:text-rose-600 transition-colors">Cashmere Knitwear</a></li>
            <li><a href="#denim" className="hover:text-rose-600 transition-colors">Designer Denim</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4">Trending Collections</h4>
          <ul className="space-y-2.5 text-sm font-medium text-slate-700">
            <li><a href="#spring" className="hover:text-purple-600 transition-colors flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-500" /> Spring 2026 Lookbook</a></li>
            <li><a href="#minimal" className="hover:text-purple-600 transition-colors">Minimalist Capsule</a></li>
            <li><a href="#sustainable" className="hover:text-purple-600 transition-colors">Organic Eco Line</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 p-6 text-white flex flex-col justify-between shadow-xl">
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/20 text-white mb-3 inline-block">Featured Drop</span>
            <h3 className="text-2xl font-black mb-2">Summer Silk Edition</h3>
            <p className="text-rose-100 text-xs max-w-xs mb-4">Handcrafted 100% mulberry silk collection with exclusive 30% preview discount.</p>
          </div>
          <button className="w-fit px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-rose-100 transition-colors flex items-center gap-2">
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlobalMegaNavigation1;
