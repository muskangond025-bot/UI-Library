import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export const GlobalMegaNavigation5: React.FC = () => {
  return (
    <div className="w-full py-8 px-6 bg-yellow-300 text-black font-sans">
      <div className="max-w-6xl mx-auto bg-white border-4 border-black p-8 shadow-[12px_12px_0px_#000]">
        <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-black">
          <span className="font-black text-3xl uppercase tracking-tighter">BRUTAL<span className="text-rose-600">.MEGA</span></span>
          <button className="px-6 py-2.5 bg-black text-yellow-300 font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
            CART [05]
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-4 border-black p-6 bg-yellow-100 shadow-[4px_4px_0px_#000]">
            <h4 className="font-black text-base uppercase mb-3">01. HEAVY APPAREL</h4>
            <ul className="space-y-2 font-bold text-xs">
              <li><a href="#hoodies" className="hover:underline">Oversized Hoodies</a></li>
              <li><a href="#cargo" className="hover:underline">Tactical Cargo Pants</a></li>
            </ul>
          </div>
          <div className="border-4 border-black p-6 bg-pink-100 shadow-[4px_4px_0px_#000]">
            <h4 className="font-black text-base uppercase mb-3">02. FOOTWEAR DROPS</h4>
            <ul className="space-y-2 font-bold text-xs">
              <li><a href="#chunky" className="hover:underline">Chunky Boots</a></li>
              <li><a href="#platform" className="hover:underline">Platform Sneakers</a></li>
            </ul>
          </div>
          <div className="border-4 border-black p-6 bg-rose-500 text-white shadow-[4px_4px_0px_#000]">
            <span className="font-mono text-xs font-black bg-black text-yellow-300 px-2 py-0.5">LIMITED 50%</span>
            <h3 className="font-black text-2xl uppercase mt-2 mb-4">SUMMER CLEARANCE</h3>
            <button className="px-4 py-2 bg-black text-yellow-300 font-black text-xs uppercase border-2 border-black">
              SHOP CLEARANCE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalMegaNavigation5;
