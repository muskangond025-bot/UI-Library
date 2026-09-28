import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductDescription5({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <h2 className="text-5xl font-bold">{data.title}</h2>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ArrowRight size={20} className="animate-pulse" />
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-8 px-4 sm:px-6 lg:px-8 w-max">
          {data.chapters.map((chap: any, idx: number) => (
            <div key={idx} className="w-[80vw] sm:w-[400px] flex flex-col group">
              <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden mb-6 relative">
                <img src={chap.img} alt={chap.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold font-mono text-sm">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">{chap.title}</h3>
              <p className="text-gray-500 leading-relaxed">{chap.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}