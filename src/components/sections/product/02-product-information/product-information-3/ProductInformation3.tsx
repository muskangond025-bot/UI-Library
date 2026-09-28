import React from 'react';

export default function ProductInformation3({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f9f9f7] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl lg:text-7xl font-serif font-medium text-gray-900 leading-tight mb-8">
                {data.headline}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                {data.paragraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-gray-300">
              {data.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <p className="text-4xl font-light text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <img src={data.image} alt="Product" className="w-full h-auto object-cover rounded-sm shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}