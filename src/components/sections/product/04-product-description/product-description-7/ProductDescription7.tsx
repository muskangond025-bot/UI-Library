import React from 'react';

export default function ProductDescription7({ data }: { data: any }) {
  return (
    <div className="w-full bg-white text-black font-mono border-t-8 border-b-8 border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="lg:col-span-4 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 bg-yellow-400 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
            <h2 className="text-4xl font-black break-words">{data.title}</h2>
            <p className="text-sm font-bold mt-12">{data.meta}</p>
          </div>
          
          <div className="lg:col-span-8 grid grid-rows-2">
            <div className="row-span-1 p-8 md:p-12 border-b-4 border-black flex items-center bg-gray-100 hover:bg-white transition-colors">
              <p className="text-xl md:text-2xl font-bold uppercase leading-tight tracking-tight">
                {data.text}
              </p>
            </div>
            <div className="row-span-1 border-black relative overflow-hidden group">
              <img src={data.img} alt="Industrial" className="w-full h-full object-cover filter grayscale contrast-150 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rV7928GJiYmAwwQYAAEMwLw43d/7AAAAABJRU5ErkJggg==')] opacity-30"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}