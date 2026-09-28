import React from 'react';

export default function ProductDescription14({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#050505] py-32 overflow-hidden font-mono flex items-center justify-center relative">
      {/* Background laser lines */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="relative group max-w-4xl w-full mx-4 z-10">
        
        {/* Animated Gradient Border Layer */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
        
        {/* Content Box */}
        <div className="relative bg-black rounded-xl p-12 md:p-20 text-center border border-white/10">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-10 uppercase tracking-widest">{data.headline}</h2>
          <p className="text-xl text-gray-400 leading-loose mb-16">
            {data.text}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {data.features.map((feat: string, idx: number) => (
              <div key={idx} className="px-6 py-3 bg-gray-900 border border-cyan-900/50 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                {feat}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
      `}</style>
    </div>
  );
}