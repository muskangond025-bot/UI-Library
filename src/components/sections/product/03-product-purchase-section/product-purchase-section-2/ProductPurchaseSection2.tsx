import React, { useState } from 'react';

export default function ProductPurchaseSection2({ data }: { data: any }) {
  const [size, setSize] = useState(0);

  return (
    <div className="w-full relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={data.image} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl opacity-70 animate-pulse"></div>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">{data.name}</h1>
          <p className="text-gray-300 leading-relaxed text-sm">{data.description}</p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 p-1 rounded-full flex gap-1 backdrop-blur-md border border-white/10">
            {data.options.map((opt: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSize(idx)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${size === idx ? 'bg-white text-black shadow-lg' : 'text-white hover:bg-white/10'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-end justify-center gap-2 mb-10">
          <span className="text-5xl font-black text-white drop-shadow-lg">{data.price}</span>
        </div>
        
        <button className="w-full py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95">
          Pre-Order Now
        </button>
      </div>
    </div>
  );
}