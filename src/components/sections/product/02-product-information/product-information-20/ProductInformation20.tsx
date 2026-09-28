import React from 'react';

export default function ProductInformation20({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {data.items.map((item: any, idx: number) => (
            <div key={idx} className={`relative rounded-3xl overflow-hidden ${item.span} shadow-lg opacity-80 hover:opacity-100 transform transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl`}>
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6">
                <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-full">
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}