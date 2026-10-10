import React from 'react';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const GlobalHeroBanner11: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-10 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-600 uppercase mb-4 inline-block">Bento Hero #11</span>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Multi-Dimensional Hero Architecture</h1>
            <p className="text-slate-600 mb-8 max-w-md">Asymmetric bento tiles presenting top deals, reviews, and featured products in a single glance.</p>
          </div>
          <button className="w-fit px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-rose-600 transition-colors flex items-center gap-2">
            <span>Explore Bento Suite</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex flex-col justify-between shadow-xl">
          <div>
            <Sparkles className="w-10 h-10 mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-2">Summer Drop</h3>
            <p className="text-rose-100 text-sm">Up to 40% off featured items.</p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full w-fit mt-6">Shop Drop</span>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner11;
