import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, RotateCw, ChevronRight } from 'lucide-react';

export default function CustomerReviewGallery9({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [deck, setDeck] = useState(customers);

  const handleNext = () => {
    setDeck((prev) => {
      const next = [...prev];
      const top = next.shift();
      if (top) next.push(top);
      return next;
    });
  };

  return (
    <section className="py-24 px-4 bg-neutral-950 text-white overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'STACKED CARDS'}</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Customer Story Deck'}</h2>
      </div>

      <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
        {deck.slice(0, 3).map((item: any, idx: number) => {
          const isTop = idx === 0;
          return (
            <motion.div
              key={item.id}
              style={{ zIndex: 10 - idx }}
              animate={{
                scale: 1 - idx * 0.06,
                y: idx * 16,
                rotate: idx === 0 ? 0 : idx === 1 ? -4 : 4,
                opacity: 1 - idx * 0.2
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={isTop ? handleNext : undefined}
              className={`absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between cursor-pointer border-neutral-700/80`}
            >
              <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-400">
                  ★ {item.rating}.0
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-300 italic line-clamp-2 mb-3">"{item.reviewText}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs font-semibold text-white">{item.name}</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-medium">Click to Flip →</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-xl"
      >
        <RotateCw className="w-4 h-4" /> Cycle Next Deck Card
      </button>
    </section>
  );
}
