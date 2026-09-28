import React from 'react';
import { Target, Zap } from 'lucide-react';

export default function ProductPurchaseSection17({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0a0a0a] py-24 font-mono text-white relative border-y border-red-600">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform origin-top-right border-l border-red-600/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="w-full md:w-1/2">
          <div 
            className="w-full aspect-square bg-[#111] p-8 relative group cursor-crosshair overflow-hidden"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
          >
            {/* Hover Glitch overlay */}
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 mix-blend-color-dodge transition-opacity duration-75"></div>
            <img src={data.image} alt={data.name} className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all duration-300" />
            <div className="absolute top-4 left-4 border-l-4 border-red-600 pl-2">
              <p className="text-red-500 font-bold tracking-widest uppercase text-sm animate-pulse">Target Acquired</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">{data.name}</h1>
          <p className="text-3xl font-bold text-red-600 mb-8">{data.price}</p>
          
          <div className="flex gap-6 mb-12">
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-l-2 border-red-600">
              <Target className="text-red-500" size={20} />
              <span className="font-bold">{data.dpi}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-l-2 border-red-600">
              <Zap className="text-red-500" size={20} />
              <span className="font-bold">{data.weight}</span>
            </div>
          </div>
          
          <button 
            className="w-full relative px-8 py-5 bg-red-600 text-white font-black text-xl italic tracking-wider uppercase group hover:bg-red-700 transition-colors"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 group-hover:animate-pulse">Equip Now</span>
            <div className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 group-hover:animate-ping"></div>
          </button>
        </div>
      </div>
    </div>
  );
}