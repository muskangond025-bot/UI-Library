import React from 'react';

export default function ProductDescription15({ data }: { data: any }) {
  return (
    <div className="w-full bg-white font-sans flex flex-col">
      {data.slices.map((slice: any, idx: number) => (
        <div key={idx} className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden group cursor-crosshair">
          <img src={slice.img} alt="Visual" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-700"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              {slice.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}