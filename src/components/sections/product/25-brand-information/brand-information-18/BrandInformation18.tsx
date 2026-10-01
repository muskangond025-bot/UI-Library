import React from 'react';

export default function BrandInformation18({ data }: { data: any }) {
  const heritage = data?.heritage || {};
  const modernity = data?.modernity || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'PAST & FUTURE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Heritage Meets Modernity'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl">
            <span className="text-3xl font-black text-amber-400 font-mono mb-2 block">{heritage.year}</span>
            <h3 className="text-xl font-bold text-white mb-3">{heritage.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">{heritage.description}</p>
            <img src={heritage.archiveImage} alt={heritage.title} className="w-full h-56 object-cover rounded-2xl filter grayscale" />
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl">
            <span className="text-3xl font-black text-emerald-400 font-mono mb-2 block">{modernity.year}</span>
            <h3 className="text-xl font-bold text-white mb-3">{modernity.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">{modernity.description}</p>
            <img src={modernity.modernImage} alt={modernity.title} className="w-full h-56 object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
