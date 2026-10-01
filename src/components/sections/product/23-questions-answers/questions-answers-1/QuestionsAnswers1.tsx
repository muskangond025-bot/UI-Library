import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, ThumbsUp, MessageSquare, Tag } from 'lucide-react';

export default function QuestionsAnswers1({ data }: { data: any }) {
  const [openId, setOpenId] = useState<string | null>(data?.questions?.[0]?.id || null);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const questions = data?.questions || [];

  const toggleHelpful = (id: string, initialCount: number) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [id]: (prev[id] ?? initialCount) + 1
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'CUSTOMER INQUIRIES'}</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">{data?.heading || 'Product Questions & Answers'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Everything you need to know about fit, craftsmanship, and care.'}</p>
        </div>

        {/* Editorial Accordion */}
        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isOpen = openId === item.id;
            const currentHelpful = helpfulCounts[item.id] ?? item.helpfulCount ?? 0;

            return (
              <div
                key={item.id || idx}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-none p-2 rounded-xl bg-neutral-800 text-amber-400 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-800 text-amber-300 mb-2 border border-amber-400/20">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium text-white leading-snug">{item.question}</h3>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-neutral-800 text-neutral-400 flex-none"
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
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-neutral-800/60 bg-neutral-950/40"
                    >
                      <div className="p-6 pt-4 text-sm text-neutral-300 leading-relaxed space-y-4">
                        <p>{item.answer}</p>
                        
                        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 gap-4">
                          <div className="flex items-center gap-2">
                            <img src={item.avatar} alt={item.customerName} className="w-6 h-6 rounded-full object-cover" />
                            <span>Asked by <strong className="text-neutral-200">{item.customerName}</strong></span>
                            {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                          </div>

                          <button
                            onClick={() => toggleHelpful(item.id, item.helpfulCount || 0)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors text-xs"
                          >
                            <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
                            <span>Helpful ({currentHelpful})</span>
                          </button>
                        </div>
                      </div>
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
