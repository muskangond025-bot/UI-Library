import React from 'react';

export default function ProductPurchaseSection10({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f8f6f0] py-32 font-serif text-[#3a352a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-4 border border-[#e5dfd3] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-1000 ease-out"></div>
            <div className="overflow-hidden">
              <img src={data.image} alt={data.name} className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="text-sm tracking-[0.3em] uppercase text-[#8c8577] mb-6 font-sans">Fine Jewelry</p>
            <h1 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">{data.name}</h1>
            <p className="text-2xl tracking-widest mb-10 text-[#595244]">{data.price}</p>
            <p className="text-[#8c8577] font-sans font-light leading-loose mb-12 max-w-sm mx-auto md:mx-0">
              {data.description}
            </p>
            <button className="w-full md:w-auto px-12 py-4 border border-[#3a352a] text-[#3a352a] hover:bg-[#3a352a] hover:text-white transition-colors duration-500 font-sans tracking-[0.2em] uppercase text-xs">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}