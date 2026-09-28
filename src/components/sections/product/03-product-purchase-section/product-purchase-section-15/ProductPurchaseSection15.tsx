import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProductPurchaseSection15({ data }: { data: any }) {
  return (
    <div className="w-full bg-white h-auto md:h-screen flex flex-col md:flex-row">
      {[data.left, data.right].map((prod: any, idx: number) => (
        <div key={idx} className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-gray-100 group hover:bg-gray-50 transition-colors duration-500 cursor-pointer">
          <div className="w-full max-w-sm aspect-square mb-12 transform group-hover:scale-105 transition-transform duration-700 ease-out relative">
            <img src={prod.img} alt={prod.name} className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{prod.name}</h2>
            <p className="text-gray-500 mb-4">{prod.specs}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-8">{prod.price}</p>
            
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-500">
              Buy {prod.name} <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}