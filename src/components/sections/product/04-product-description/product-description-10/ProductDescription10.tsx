import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDescription10({ data }: { data: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-white py-24 md:py-40 font-sans">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10">{data.headline}</h2>
        
        <div className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8">
          <p>{data.intro}</p>
        </div>
        
        <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light pb-8">
            {data.extended}
          </p>
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          {expanded ? (
            <>Read Less <ChevronUp size={20} /></>
          ) : (
            <>Read the Full Story <ChevronDown size={20} /></>
          )}
        </button>
      </div>
    </div>
  );
}