import React from 'react';

export default function ProductDescription9({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f6f7f2] py-32 font-serif text-[#3d4538]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[4rem] overflow-hidden shadow-xl mb-24 group">
          <img src={data.image} alt="Nature" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[15s] ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a5544]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 italic text-[#2c3328]">{data.title}</h2>
          <div className="w-12 h-px bg-[#8a9681] mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl leading-loose font-light text-[#576150]">
            {data.desc}
          </p>
        </div>
        
      </div>
    </div>
  );
}