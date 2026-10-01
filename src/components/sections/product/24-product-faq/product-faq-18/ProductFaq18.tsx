import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ProductFaq18({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [openId, setOpenId] = useState<string | null>(questions[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{data?.eyebrow || 'REPAIR & RECYCLE'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Circular Guarantee FAQ'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Free repairs and end-of-life garment recycling programs.'}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-base font-bold text-white mt-1">{item.question}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-neutral-900 text-neutral-400 flex-none"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-neutral-800 p-6 pt-4 bg-neutral-900/40"
                    >
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
