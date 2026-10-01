import React from 'react';
import { Play } from 'lucide-react';

export default function BrandInformation19({ data }: { data: any }) {
  const chapters = data?.chapters || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">{data?.eyebrow || 'SHORT FILM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Thread of Time: A Documentary'}</h2>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl mb-8 group cursor-pointer">
          <img src={data?.videoPoster} alt="Documentary Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="p-5 rounded-full bg-red-600 text-white shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md flex justify-between items-center text-xs">
            <span className="font-bold text-white">{data?.docTitle}</span>
            <span className="text-neutral-400 font-mono">Duration: {data?.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
