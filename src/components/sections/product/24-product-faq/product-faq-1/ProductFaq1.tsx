import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function ProductFaq1({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [openId, setOpenId] = useState<string | null>(questions[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'SPECIFICATIONS & GUIDANCE'}</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-100 mt-2">{data?.heading || 'Essential Product FAQ'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Clear, standardized guidance on materials, sizing, and garment care.'}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id || idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all hover:border-neutral-700">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-base sm:text-lg font-medium text-white mt-1">{item.question}</h3>
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
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-neutral-800/80 bg-neutral-950/40 p-6 pt-4"
                    >
                      <p className="text-sm text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                        <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Official Factory Specification
                        </span>
                        <a href="#" className="hover:text-white flex items-center gap-1">
                          View Care Guide <ArrowUpRight className="w-3 h-3" />
                        </a>
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
