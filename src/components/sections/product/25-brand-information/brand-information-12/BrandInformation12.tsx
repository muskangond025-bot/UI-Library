import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation12({ data }: { data: any }) {
  const chapters = data?.chapters || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'STORY CHAPTERS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Three Chapters of Aurelia'}</h2>
        </div>

        <div className="space-y-6">
          {chapters.map((ch: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ x: 6 }}
              className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8">
                <span className="text-xs font-mono text-amber-400 font-bold block mb-1">CHAPTER {ch.chapterNumber}</span>
                <h3 className="text-lg font-bold text-white mb-2">{ch.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{ch.fullStory}</p>
              </div>
              <div className="md:col-span-4 h-40 rounded-2xl overflow-hidden bg-neutral-900">
                <img src={ch.image} alt={ch.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
