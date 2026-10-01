import React from 'react';

export default function BrandInformation15({ data }: { data: any }) {
  return (
    <section className="relative min-h-[600px] w-full bg-neutral-950 text-white overflow-hidden flex items-center justify-center py-20 px-4">
      <img src={data?.fullBleedImage} alt="Brand Narrative" className="absolute inset-0 w-full h-full object-cover filter brightness-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-white border border-white/20 backdrop-blur-md">
          {data?.eyebrow || 'CINEMATIC EXPERIENCE'}
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">{data?.narrativeTitle}</h2>
        <p className="text-lg sm:text-2xl font-serif italic text-amber-200">"{data?.quote}"</p>
      </div>
    </section>
  );
}
