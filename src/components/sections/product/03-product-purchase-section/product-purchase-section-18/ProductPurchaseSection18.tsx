import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

export default function ProductPurchaseSection18({ data }: { data: any }) {
  const [color, setColor] = useState(0);

  return (
    <div className="w-full bg-[#f4ebd9] py-24 font-serif text-[#4a4238]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/5] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl relative">
              <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-[10s] ease-in-out" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#7c9a6f] mb-6">
              <Leaf size={20} />
              <span className="font-sans uppercase tracking-widest text-xs font-bold">100% Organic</span>
            </div>
            
            <h1 className="text-5xl font-medium mb-4 leading-tight">{data.name}</h1>
            <p className="font-sans text-lg text-[#7c7568] mb-8">{data.description}</p>
            <p className="text-3xl mb-12">{data.price}</p>
            
            <div className="mb-10">
              <h3 className="font-sans uppercase tracking-widest text-xs font-bold mb-4">Select Shade</h3>
              <div className="flex gap-4">
                {data.colors.map((hex: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setColor(idx)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${color === idx ? 'scale-110 shadow-lg' : 'hover:scale-105 opacity-80'}`}
                    style={{ backgroundColor: hex }}
                  >
                    {color === idx && <div className="w-10 h-10 rounded-full border border-white/50"></div>}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full py-5 bg-[#4a4238] text-[#f4ebd9] font-sans uppercase tracking-widest text-sm rounded-full hover:bg-[#342f27] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}