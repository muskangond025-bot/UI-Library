import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers5({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeId, setActiveId] = useState<string | null>(questions[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-8">
          <span className="text-xs font-mono text-purple-400 uppercase">{data?.eyebrow || 'TYPOGRAPHIC CLARITY'}</span>
          <h2 className="text-4xl sm:text-6xl font-black mt-2 tracking-tight">{data?.heading || 'Direct Q&A Highlights'}</h2>
        </div>

        <div className="divide-y divide-neutral-800">
          {questions.map((item: any, idx: number) => {
            const isOpen = activeId === item.id;
            return (
              <div key={item.id || idx} className="py-8">
                <button
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <h3 className={`text-xl sm:text-3xl font-bold tracking-tight transition-colors ${isOpen ? 'text-purple-400' : 'text-neutral-200 group-hover:text-white'}`}>
                    {item.question}
                  </h3>
                  <span className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white transition-colors flex-none">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light max-w-3xl">
                        {item.answer}
                      </p>
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
