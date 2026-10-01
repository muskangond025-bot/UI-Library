import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomerReviewGallery15({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">{data?.eyebrow || 'CAROUSEL STACK'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Depth Scaled Reviews'}</h2>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + customers.length) % customers.length)}
            className="p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden p-6 shadow-2xl">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={customers[index]?.media} alt={customers[index]?.name} className="w-full h-72 object-cover rounded-2xl mb-6" />
              <p className="text-sm text-neutral-200 italic mb-4">"{customers[index]?.reviewText}"</p>
              <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <span className="text-xs font-bold text-white">{customers[index]?.name}</span>
                <span className="text-xs font-bold text-orange-400">★ {customers[index]?.rating}.0</span>
              </div>
            </motion.div>
          </div>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % customers.length)}
            className="p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
