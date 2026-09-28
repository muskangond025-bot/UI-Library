import React from 'react';

export default function ProductDescription12({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f4f4f5] py-40 relative overflow-hidden font-sans">
      
      {/* Background massive text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h1 className="text-[15vw] font-black text-gray-200 tracking-tighter opacity-50 select-none">
          {data.backgroundText}
        </h1>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl p-12 md:p-24 rounded-3xl shadow-2xl border border-white">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">{data.headline}</h2>
          <p className="text-2xl text-gray-700 leading-loose font-light mb-16 max-w-3xl">
            {data.content}
          </p>
          
          <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-inner group">
            <img src={data.image} alt="Showcase" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}