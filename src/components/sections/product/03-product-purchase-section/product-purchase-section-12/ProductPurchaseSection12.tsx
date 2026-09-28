import React from 'react';
import { Check } from 'lucide-react';

export default function ProductPurchaseSection12({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#fafafa] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.name}</h1>
          <p className="text-lg text-gray-500">Choose the perfect setup for your home.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {/* Main Image */}
          <div className="w-full md:w-1/3 rounded-3xl overflow-hidden bg-white shadow-lg flex items-center justify-center p-8 group">
            <img src={data.image} alt={data.name} className="w-full h-auto object-contain transform group-hover:rotate-3 transition-transform duration-500" />
          </div>
          
          {/* Tiers */}
          {data.tiers.map((tier: any, idx: number) => (
            <div key={idx} className={`w-full md:w-1/3 relative bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'border-2 border-indigo-600 shadow-2xl' : 'border border-gray-100 shadow-lg'}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-4xl font-black text-indigo-600 mb-8">{tier.price}</p>
              
              <ul className="flex-1 space-y-4 mb-8">
                {tier.specs.map((spec: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <Check size={20} className="text-indigo-500" /> {spec}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Select {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}