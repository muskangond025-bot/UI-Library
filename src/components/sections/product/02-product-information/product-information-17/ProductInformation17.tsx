import React from 'react';

export default function ProductInformation17({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <style>{`
          .outline-text {
            color: transparent;
            -webkit-text-stroke: 2px #d1d5db;
            transition: all 0.5s ease;
          }
          .outline-text:hover {
            color: #111827;
            -webkit-text-stroke: 0px transparent;
            text-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
        `}</style>

        {data.words.map((word: string, idx: number) => (
          <h1 key={idx} className="text-7xl md:text-9xl font-black uppercase outline-text cursor-default mb-8 tracking-tighter">
            {word}
          </h1>
        ))}
      </div>
    </div>
  );
}