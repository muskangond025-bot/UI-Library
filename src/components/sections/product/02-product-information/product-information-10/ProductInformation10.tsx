import React from 'react';

export default function ProductInformation10({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-8">{data.title}</h2>
        <p className="text-xl md:text-3xl font-light text-gray-500 leading-relaxed mb-20 max-w-4xl mx-auto">
          {data.content}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {data.images.map((img: string, idx: number) => (
            <div key={idx} className={`rounded-2xl overflow-hidden shadow-2xl ${idx === 1 ? 'md:mt-16' : ''}`}>
              <img src={img} alt="Detail" className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}