import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProductDescription13({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-black py-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Large Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <img src={data.image} alt="Detail" className="relative z-10 w-full h-auto rounded-xl object-cover" />
        </div>
        
        {/* Accordion */}
        <div className="w-full md:w-1/2 space-y-2">
          <h2 className="text-3xl text-gray-500 font-light mb-12">Anatomy of a masterpiece.</h2>
          {data.details.map((det: any, idx: number) => (
            <div 
              key={idx} 
              className={`border-b border-gray-800 pb-6 transition-all duration-500 ${active === idx ? 'pt-6' : 'pt-4 cursor-pointer hover:bg-white/5 px-4 rounded-t-lg'}`}
              onClick={() => setActive(idx)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-2xl font-bold transition-colors ${active === idx ? 'text-white' : 'text-gray-500'}`}>{det.title}</h3>
                <ChevronRight className={`transition-transform duration-500 ${active === idx ? 'rotate-90 text-white' : 'text-gray-600'}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg text-gray-400 leading-relaxed">{det.text}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}