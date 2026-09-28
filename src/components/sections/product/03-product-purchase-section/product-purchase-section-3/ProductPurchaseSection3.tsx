import React, { useState } from 'react';

export default function ProductPurchaseSection3({ data }: { data: any }) {
  const [sw, setSw] = useState(0);

  return (
    <div className="w-full bg-[#050505] py-24 font-mono text-white relative overflow-hidden">
      {/* Cyber grid bg */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-lg border border-gray-800 p-2">
              <img src={data.image} alt="Keyboard" className="w-full h-auto rounded object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <div className="text-pink-500 text-sm font-bold tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span> IN STOCK
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{data.name}</h1>
          </div>
          
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {data.price}
          </div>
          
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Switch Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.switches.map((type: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSw(idx)}
                  className={`py-3 px-4 border rounded transition-all duration-300 uppercase text-xs font-bold tracking-wider ${sw === idx ? 'border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] bg-cyan-950/30' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <button className="w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-black uppercase tracking-[0.1em] overflow-hidden rounded bg-cyan-400 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] mt-4">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
            <span className="relative">Initialize Purchase</span>
          </button>
        </div>
      </div>
    </div>
  );
}