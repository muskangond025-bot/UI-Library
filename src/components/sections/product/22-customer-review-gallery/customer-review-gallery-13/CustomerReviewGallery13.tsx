import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function CustomerReviewGallery13({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-24 px-4 bg-stone-100 text-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-lg mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">{data?.eyebrow || 'RETRO POLAROID'}</span>
          <h2 className="text-4xl font-serif text-stone-900 mt-1">{data?.heading || 'Snapshots of Joy'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {customers.map((item: any, idx: number) => {
            const rotations = ['rotate-2', '-rotate-3', 'rotate-3', '-rotate-2', 'rotate-1', '-rotate-4'];
            const rot = rotations[idx % rotations.length];

            return (
              <motion.div
                key={item.id || idx}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                transition={{ duration: 0.3 }}
                className={`bg-white p-4 pb-6 shadow-xl border border-stone-200 transform ${rot} cursor-pointer`}
              >
                <div className="aspect-[4/3] bg-stone-200 overflow-hidden mb-4">
                  <img src={item.media} alt={item.name} className="w-full h-full object-cover filter contrast-105" />
                </div>
                <div className="text-center">
                  <p className="font-serif italic text-xs text-stone-700 line-clamp-2 mb-2">"{item.reviewText}"</p>
                  <p className="font-serif text-xs font-bold text-stone-900">— {item.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
