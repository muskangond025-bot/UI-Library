import React from 'react';

export default function ProductDescription16({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#fffdfa] py-24 md:py-40 font-serif text-[#222]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-16 text-center">{data.headline}</h1>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-16 font-light">
          {data.p1}
        </p>
        
        {/* Full bleed breakout image */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-16 px-4 md:px-0 md:max-w-5xl">
          <img src={data.img} alt="Design" className="w-full h-auto rounded-sm shadow-xl" />
        </div>
        
        <blockquote className="text-3xl md:text-4xl font-italic text-center text-indigo-900 border-y border-gray-200 py-12 mb-16">
          "{data.quote}"
        </blockquote>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
          {data.p2}
        </p>
        
      </div>
    </div>
  );
}