import React from 'react';
import * as Icons from 'lucide-react';

export default function ProductInformation9({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card: any, idx: number) => {
            const Icon = (Icons as any)[card.icon] || Icons.Info;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start group">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}