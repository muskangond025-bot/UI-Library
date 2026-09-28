import React from 'react';

export default function ProductDescription11({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {data.blocks.map((block: any, idx: number) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 group">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={block.img} alt={block.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{block.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}