import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function ProductPurchaseSection8({ data }: { data: any }) {
  return (
    <div className="w-full relative h-[800px] overflow-hidden bg-gray-100 flex items-center justify-center">
      <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Fake UI Header */}
      <div className="absolute top-0 w-full p-6 bg-gradient-to-b from-black/50 to-transparent flex justify-between text-white">
        <span className="font-medium tracking-wide">Brand</span>
        <span className="font-bold">{data.price}</span>
      </div>
      
      {/* Bottom Drawer (Always visible partially on desktop) */}
      <div className="absolute bottom-0 w-full max-w-md bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-8 transform transition-transform duration-500 hover:-translate-y-4 cursor-pointer group">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 group-hover:bg-gray-300 transition-colors"></div>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
            <div className="flex gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded">25L</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Waterproof</span>
            </div>
          </div>
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <ChevronUp size={24} className="group-hover:animate-bounce" />
          </button>
        </div>
        <button className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg hover:shadow-lg transition-all active:scale-95">
          Buy Now
        </button>
      </div>
    </div>
  );
}