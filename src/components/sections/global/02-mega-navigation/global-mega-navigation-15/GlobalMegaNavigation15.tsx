import React from 'react';
import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

export const GlobalMegaNavigation15: React.FC = () => {
  return (
    <div className="w-full py-8 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-slate-200 border-b">
          <span className="font-black text-2xl tracking-tight">MEGA<span className="text-indigo-600">.SUITE_15</span></span>
          <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-indigo-600 mb-4">Collection #15.1</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li><a href="#link1" className="hover:underline">Curated Item A</a></li>
              <li><a href="#link2" className="hover:underline">Curated Item B</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-indigo-600 mb-4">Collection #15.2</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li><a href="#link3" className="hover:underline">Limited Release X</a></li>
              <li><a href="#link4" className="hover:underline">Limited Release Y</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
            <span className="text-xs font-bold uppercase text-amber-500">★ Editor's Pick</span>
            <h3 className="text-xl font-bold mt-1 mb-2">Exclusive Lookbook</h3>
            <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-2">
              <span>View Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalMegaNavigation15;
