import React from 'react';

export default function ProductDescription2({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#fbfbfd] relative font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Sticky Image */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative group">
            <img src={data.image} alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[10s] ease-out" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
        </div>
        
        {/* Scrolling Text */}
        <div className="w-full md:w-1/2 py-24 md:py-[30vh] px-8 lg:px-16 space-y-[30vh]">
          {data.blocks.map((block: any, idx: number) => (
            <div key={idx} className="max-w-md opacity-80 hover:opacity-100 transform hover:-translate-y-2 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{block.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">{block.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}