import React from 'react';

export default function ProductInformation15({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f4f4f5] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-20 text-center">{data.title}</h2>
        
        <div className="relative border-l border-gray-300 ml-6 md:ml-12 space-y-24">
          {data.steps.map((step: any, idx: number) => (
            <div key={idx} className="relative pl-12 md:pl-20 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full group-hover:bg-black transition-colors duration-500">
                <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start transform transition-transform duration-500 group-hover:translate-x-4">
                <div className="text-6xl font-black text-gray-300 group-hover:text-black transition-colors duration-500">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}