import React from 'react';

export default function ProductPurchaseSection16({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#e0f2fe] py-24 overflow-hidden relative font-sans">
      {/* Morphing background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] bg-white/40 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/60 p-8 flex items-center justify-center overflow-hidden group">
            <img src={data.image} alt={data.name} className="relative z-10 w-full h-auto object-cover rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-700" />
            
            {/* Liquid drop effect on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500/10 blur-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-out"></div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-black text-sky-900 mb-4">{data.name}</h1>
          <p className="text-xl text-sky-700 mb-8 max-w-md leading-relaxed">{data.description}</p>
          <p className="text-4xl font-bold text-sky-600 mb-10">{data.price}</p>
          
          <button className="px-10 py-5 bg-sky-600 text-white font-bold rounded-[30px] hover:rounded-[10px] transition-all duration-500 shadow-xl shadow-sky-600/30 hover:bg-sky-700 text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}