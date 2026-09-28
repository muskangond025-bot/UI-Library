import React from 'react';

export default function ProductInformation7({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {data.blocks.map((block: any, idx: number) => (
          <div key={idx} className={`flex flex-col gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-[1.02]">
                <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{block.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{block.text}</p>
              <button className="mt-8 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}