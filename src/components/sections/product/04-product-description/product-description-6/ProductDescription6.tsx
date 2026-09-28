import React from 'react';

export default function ProductDescription6({ data }: { data: any }) {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-24 font-sans">
      {/* Background */}
      <img src={data.image} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden group">
          {/* Shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight drop-shadow-md">{data.headline}</h2>
          
          <div className="space-y-6">
            {data.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-xl text-white/90 leading-relaxed font-light drop-shadow">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shine {
          100% { left: 200%; }
        }
        .animate-shine { animation: shine 1.5s ease-out; }
      `}</style>
    </div>
  );
}