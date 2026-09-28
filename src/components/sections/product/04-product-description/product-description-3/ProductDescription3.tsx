import React from 'react';

export default function ProductDescription3({ data }: { data: any }) {
  return (
    <div className="w-full relative min-h-[80vh] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image with fixed attachment for parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed scale-110" 
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white py-32">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">{data.headline}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
          {data.content}
        </p>
      </div>
    </div>
  );
}