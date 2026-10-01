import React from 'react';

export default function BrandInformation17({ data }: { data: any }) {
  const gallery = data?.processGallery || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'BEHIND THE SCENES'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Creative Process'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((g: any, idx: number) => (
            <div key={idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <img src={g.image} alt={g.title} className="w-full h-44 object-cover rounded-2xl mb-4" />
                <span className="text-xs font-bold text-rose-400 uppercase">{g.phase}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{g.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
