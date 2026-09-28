import React from 'react';

export default function ProductDescription17({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-900 py-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.items.map((item: any, idx: number) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-black">
              
              {/* Image that fades out */}
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 group-hover:opacity-10" />
              
              {/* Text that is revealed */}
              <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
              
              {/* Initial Title */}
              <div className="absolute bottom-6 left-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold drop-shadow-md">{item.title}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}