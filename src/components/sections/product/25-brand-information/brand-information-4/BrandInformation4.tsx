import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function BrandInformation4({ data }: { data: any }) {
  const paragraphs = data?.storyParagraphs || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[480px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <img src={data?.founderPortrait || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"} alt={data?.founderName} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800">
              <h4 className="text-sm font-bold text-white">{data?.founderName || 'Matteo Vane'}</h4>
              <p className="text-xs text-amber-400">{data?.founderRole || 'Founder & Creative Director'}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'THE FOUNDER'}</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mt-1">{data?.heading || 'Designed by Matteo Vane'}</h2>
            </div>

            <Quote className="w-8 h-8 text-amber-400/40" />
            <p className="text-xl font-serif italic text-amber-300 leading-relaxed">
              "{data?.quote || 'True luxury is felt in the weight of the fabric and the silence of clean stitching.'}"
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {paragraphs.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
