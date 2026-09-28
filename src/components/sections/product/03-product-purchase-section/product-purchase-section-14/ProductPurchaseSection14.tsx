import React from 'react';

export default function ProductPurchaseSection14({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0a0a0c] py-32 flex items-center justify-center overflow-hidden font-mono">
      <div className="relative group perspective-1000">
        
        {/* Animated RGB Background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        
        {/* The Card */}
        <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full flex flex-col items-center text-center transform transition-all duration-500 preserve-3d group-hover:rotate-y-6 group-hover:rotate-x-6 shadow-2xl">
          <div className="w-full aspect-square rounded-2xl overflow-hidden mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
            <img src={data.image} alt={data.name} className="w-full h-full object-cover filter contrast-125" />
          </div>
          
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">{data.name}</h1>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{data.description}</p>
          <div className="text-4xl font-bold text-white mb-8 tracking-tighter shadow-cyan-500/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {data.price}
          </div>
          
          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] rounded hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
            Secure Order
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient-xy {
          0%, 100% { background-size: 400% 400%; background-position: 0% 0%; }
          50% { background-size: 200% 200%; background-position: 100% 100%; }
        }
        .animate-gradient-xy { animation: gradient-xy 15s ease infinite; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}