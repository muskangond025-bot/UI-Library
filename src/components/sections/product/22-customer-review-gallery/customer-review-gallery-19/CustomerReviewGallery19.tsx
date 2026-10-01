import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CustomerReviewGallery19({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-24 px-4 bg-stone-950 text-stone-100 uppercase font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-stone-800 pb-8 mb-16 flex justify-between items-end">
          <div>
            <span className="text-xs font-mono text-amber-500">{data?.eyebrow || 'HIGH FASHION'}</span>
            <h2 className="text-4xl sm:text-6xl font-black mt-2 tracking-tight">{data?.heading || 'Art-Directed Customer Edits'}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customers.slice(0, 3).map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ scale: 1.02 }}
              className="bg-stone-900 border border-stone-800 p-6 rounded-none flex flex-col justify-between"
            >
              <div className="h-80 overflow-hidden mb-6 bg-black">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-xs font-serif italic text-stone-300 normal-case mb-4">"{item.reviewText}"</p>
              <div className="flex justify-between items-center text-xs font-mono text-stone-400">
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-amber-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
