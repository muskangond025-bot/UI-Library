import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CustomerReviewGallery11({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const active = customers[activeIndex] || {};

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sticky Canvas Left */}
          <div className="lg:col-span-6 relative h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={active.media}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">{active.productName}</h4>
                <p className="text-[10px] text-neutral-400">{active.location}</p>
              </div>
              <span className="text-xs font-bold text-amber-400">★ {active.rating}.0</span>
            </div>
          </div>

          {/* Interactive Selector Right */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'DUAL VIEWPORT'}</span>
              <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Interactive Review Canvas'}</h2>
            </div>

            {customers.map((item: any, idx: number) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={item.id || idx}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ x: 6 }}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-neutral-900 border-purple-500 shadow-lg'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-bold text-white">{item.name}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-300 italic line-clamp-2">"{item.reviewText}"</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
