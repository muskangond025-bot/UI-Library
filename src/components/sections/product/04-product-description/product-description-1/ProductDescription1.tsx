import React from 'react';

export default function ProductDescription1({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 md:py-32 font-serif text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6 text-center">{data.subhead}</h2>
        <h1 className="text-5xl md:text-7xl font-medium text-center mb-16 leading-tight">{data.headline}</h1>
        
        <div className="w-full aspect-[21/9] overflow-hidden mb-16">
          <img src={data.image} alt="Detail" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-lg leading-relaxed text-gray-700">
          <div className="w-full md:w-1/2">
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left">
              {data.content1}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p>{data.content2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}