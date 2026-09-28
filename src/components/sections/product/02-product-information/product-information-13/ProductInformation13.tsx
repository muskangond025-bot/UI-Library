import React from 'react';

export default function ProductInformation13({ data }: { data: any }) {
  return (
    <div className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        {/* Sticky Image Side */}
        <div className="w-full md:w-1/2 md:h-screen sticky top-0 flex items-center justify-center p-8">
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img src={data.image} alt="Showcase" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Scrolling Content Side */}
        <div className="w-full md:w-1/2 py-12 md:py-32 space-y-32 px-8">
          {data.sections.map((sec: any, idx: number) => (
            <div key={idx} className="min-h-[50vh] flex flex-col justify-center transform transition-all duration-700 hover:-translate-y-2">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{sec.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}