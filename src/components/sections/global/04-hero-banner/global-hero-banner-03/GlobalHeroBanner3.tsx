import React from 'react';
import { ShoppingBag, Sparkles, ArrowUpRight } from 'lucide-react';

export const GlobalHeroBanner3: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#f0e6e4] text-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100 px-4 py-1.5 rounded-full inline-block mb-6 shadow-sm">
            Neumorphic Soft Velvet Hero
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Tactile Luxury for Everyday Comfort
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Crafted from organic Belgian linen and ultra-soft cashmere blends. Experience the tactile warmth of handcrafted luxury.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-rose-500 text-white font-bold text-base shadow-[8px_8px_16px_#ccbebc,-8px_-8px_16px_#ffffff] hover:bg-rose-600 transition-all flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Discover Soft Suite</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-8 rounded-[40px] bg-[#f0e6e4] shadow-[20px_20px_60px_#ccbebc,-20px_-20px_60px_#ffffff] border border-white/40 text-center">
          <div className="w-44 h-44 mx-auto mb-6 rounded-full bg-[#f0e6e4] shadow-[inset_10px_10px_20px_#ccbebc,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center">
            <Sparkles className="w-20 h-20 text-rose-500 animate-pulse" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Velvet Cushion Edition</h3>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner3;
