import React, { useState } from 'react';

export default function ProductPurchaseSection4({ data }: { data: any }) {
  const [size, setSize] = useState("M");

  return (
    <div className="w-full bg-[#faf9f6] py-20 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Image */}
          <div className="w-full md:w-1/2 max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={data.image} alt="Trench" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>
          
          {/* Details */}
          <div className="w-full md:w-1/2 max-w-md flex flex-col justify-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4 font-sans">{data.designer}</p>
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 italic">{data.name}</h1>
            <p className="text-3xl text-gray-900 mb-12">{data.price}</p>
            
            <div className="mb-12 font-sans border-t border-b border-gray-200 py-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium uppercase tracking-widest text-gray-900">Select Size</span>
                <button className="text-xs text-gray-500 underline uppercase tracking-widest hover:text-black">Size Guide</button>
              </div>
              <div className="flex gap-2">
                {data.sizes.map((s: string) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 py-3 text-sm font-medium transition-colors ${size === s ? 'bg-black text-white' : 'bg-transparent text-gray-600 hover:bg-gray-100'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full py-5 bg-black text-white font-sans uppercase tracking-[0.2em] text-sm hover:bg-gray-800 transition-colors relative overflow-hidden group">
              <span className="relative z-10">Add to Bag</span>
              <div className="absolute inset-0 h-full w-0 bg-gray-700 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}