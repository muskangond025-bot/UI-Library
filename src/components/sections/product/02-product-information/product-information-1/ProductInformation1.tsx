import React from 'react';

export default function ProductInformation1({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-3">{data.subtitle}</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{data.title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {data.specs.map((spec: any, idx: number) => (
                <div key={idx} className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white">
                  <p className="text-sm text-gray-500 mb-1 font-medium">{spec.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}