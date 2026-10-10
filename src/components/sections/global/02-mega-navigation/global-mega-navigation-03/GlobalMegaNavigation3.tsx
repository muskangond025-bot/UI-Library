import React from 'react';
import { ShoppingBag, Heart, ArrowRight } from 'lucide-react';

export const GlobalMegaNavigation3: React.FC = () => {
  return (
    <div className="w-full py-8 px-6 bg-[#f0e6e4] text-slate-800">
      <div className="max-w-6xl mx-auto p-8 rounded-3xl bg-[#f0e6e4] shadow-[12px_12px_24px_#ccbebc,-12px_-12px_24px_#ffffff] border border-white/40">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-rose-200/40">
          <span className="font-extrabold text-2xl text-slate-900 tracking-tight">SOFT<span className="text-rose-500">.MEGA</span></span>
          <button className="px-6 py-2.5 rounded-xl bg-[#f0e6e4] shadow-[5px_5px_10px_#ccbebc,-5px_-5px_10px_#ffffff] text-rose-600 font-bold text-xs hover:bg-rose-500 hover:text-white transition-all flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Bag (02)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#f0e6e4] shadow-[inset_4px_4px_8px_#ccbebc,inset_-4px_-4px_8px_#ffffff]">
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Velvet Accessories</h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><a href="#scarves" className="hover:text-rose-600">Silk Scarves</a></li>
              <li><a href="#gloves" className="hover:text-rose-600">Leather Gloves</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-[#f0e6e4] shadow-[inset_4px_4px_8px_#ccbebc,inset_-4px_-4px_8px_#ffffff]">
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Artisanal Footwear</h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><a href="#boots" className="hover:text-rose-600">Hand-stitched Boots</a></li>
              <li><a href="#loafers" className="hover:text-rose-600">Suede Loafers</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-[#f0e6e4] shadow-[6px_6px_12px_#ccbebc,-6px_-6px_12px_#ffffff] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase">Spring Suite</span>
              <h3 className="font-extrabold text-lg text-slate-900 mt-1">Soft Touch Edition</h3>
            </div>
            <button className="mt-4 px-4 py-2 rounded-xl bg-rose-500 text-white font-bold text-xs hover:bg-rose-600 flex items-center gap-2 w-fit">
              <span>View Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalMegaNavigation3;
