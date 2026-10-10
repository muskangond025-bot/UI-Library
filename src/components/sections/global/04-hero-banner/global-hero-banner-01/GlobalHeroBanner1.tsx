import React from 'react';
import { Sparkles, ArrowRight, ShoppingBag, Star, Play } from 'lucide-react';

export const GlobalHeroBanner1: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-rose-100/60 via-purple-50 to-pink-100/50 text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/80 border border-white text-rose-600 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin [animation-duration:8s]" />
            <span>Next-Gen Global Hero Suite #1</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-6">
            Redefining High-Fashion <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600">Digital Commerce</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Experience our flagship collection of precision-engineered garments. Designed in Paris, delivered worldwide in 48 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-rose-600 transition-all shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Explore New Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-4 rounded-2xl bg-white/80 border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm">
              <Play className="w-4 h-4 text-rose-600 fill-rose-600" />
              <span>Watch Brand Film</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-[450px] rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/90 shadow-2xl p-4 relative overflow-hidden flex items-center justify-center">
            <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 flex flex-col justify-between p-8 text-white relative shadow-inner">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase">Summer Edit '26</span>
                <span className="text-2xl font-black">LUMINA</span>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-2">Silk Cachemire Blazer</h3>
                <p className="text-rose-100 text-sm mb-4">Limited run of 100 hand-numbered pieces.</p>
                <span className="text-2xl font-extrabold">$480.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner1;
