import React from 'react';

export default function ProductInformation6({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[600px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
          <img src={data.image} alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="absolute inset-0 p-6 lg:p-12 hidden md:block">
            {data.cards.map((card: any, idx: number) => (
              <div key={idx} className={`absolute ${card.position} bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-sm border border-white/50 transition-transform duration-500 hover:scale-105`}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile view for cards */}
          <div className="md:hidden absolute bottom-0 left-0 w-full p-4 space-y-4">
            {data.cards.map((card: any, idx: number) => (
              <div key={idx} className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                <h3 className="text-md font-bold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-gray-600 text-xs">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}