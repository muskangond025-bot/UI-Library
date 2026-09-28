import React from 'react';
import { Play } from 'lucide-react';

export default function ProductPurchaseSection11({ data }: { data: any }) {
  return (
    <div className="w-full relative h-[90vh] overflow-hidden bg-black text-white flex items-end md:items-center">
      {/* Background Image */}
      <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transform hover:scale-105 transition-transform duration-[20s] ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent md:bg-gradient-to-r md:from-black md:to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-0">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex gap-2">
            {data.features.map((feat: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20">
                {feat}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-2xl">{data.name}</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 drop-shadow-md">{data.description}</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <span className="text-4xl font-semibold">{data.price}</span>
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Pre-order
            </button>
            <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md">
              <Play size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}