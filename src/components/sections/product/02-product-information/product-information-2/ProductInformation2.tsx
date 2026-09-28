import React from 'react';

export default function ProductInformation2({ data }: { data: any }) {
  return (
    <div className="w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{data.title}</h2>
          <p className="text-xl text-gray-400">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.map((feat: any, idx: number) => (
            <div key={idx} className={`relative overflow-hidden rounded-3xl group ${feat.span} aspect-[4/3] md:aspect-auto`}>
              <img src={feat.img} alt={feat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-300">{feat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}