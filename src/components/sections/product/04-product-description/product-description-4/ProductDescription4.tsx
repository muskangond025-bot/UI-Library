import React from 'react';

export default function ProductDescription4({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f5f5f0] py-24 font-serif text-[#333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#e0dfd5] translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img src={data.img1} alt="Product" className="relative z-10 w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-italic font-bold leading-snug mb-10 text-black border-l-4 border-black pl-8">
              "{data.quote}"
            </h2>
            <div className="space-y-6 text-lg font-sans text-gray-600 pl-8 md:pl-12">
              <p>{data.para1}</p>
              <p>{data.para2}</p>
            </div>
            
            <div className="mt-16 w-full max-w-md ml-auto relative group">
              <img src={data.img2} alt="Detail" className="w-full h-auto rounded shadow-xl group-hover:shadow-2xl transition-shadow duration-500" />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}