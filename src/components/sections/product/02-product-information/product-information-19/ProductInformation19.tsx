import React from 'react';

export default function ProductInformation19({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-24 relative" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-20 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.specs.map((spec: any, idx: number) => (
            <div key={idx} className="group relative bg-gray-900 rounded-xl p-12 border border-gray-800 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              {/* Glowing top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
              
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">{spec.val}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">{spec.lbl}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}