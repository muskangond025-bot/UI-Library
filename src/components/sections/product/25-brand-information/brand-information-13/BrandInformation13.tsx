import React from 'react';

export default function BrandInformation13({ data }: { data: any }) {
  return (
    <section className="py-24 px-4 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">{data?.eyebrow || 'MONOCLE EDITION • PROFILE'}</span>
        <h2 className="text-4xl sm:text-6xl font-serif text-stone-900">{data?.heading || 'The Quiet Luxury Revolution'}</h2>
        
        <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic max-w-3xl mx-auto">
          {data?.dropCapParagraph}
        </p>

        <div className="py-6 border-y border-stone-300 font-serif text-xl sm:text-2xl font-bold text-amber-900 italic">
          "{data?.quoteBlock}"
        </div>

        <p className="text-xs font-serif text-stone-500">{data?.editorNote}</p>
      </div>
    </section>
  );
}
