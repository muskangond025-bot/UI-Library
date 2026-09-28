import React from 'react';

export default function ProductInformation18({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#111] py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {data.cards.map((card: any, idx: number) => (
            <div key={idx} className="group relative h-32 md:h-48 rounded-2xl overflow-hidden cursor-pointer hover:h-64 md:hover:h-96 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-3xl md:text-5xl font-bold text-white tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}