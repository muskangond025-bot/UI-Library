import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ThumbsUp, CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers20({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [query, setQuery] = useState('');

  const filtered = questions.filter((q: any) =>
    q.question.toLowerCase().includes(query.toLowerCase()) ||
    q.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'KNOWLEDGE HUB'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1">{data?.heading || 'Product Knowledge Showcase'}</h2>
          
          {/* Live Search Input */}
          <div className="relative mt-6">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product questions..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Verified Answer
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {item.helpfulCount || 30}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
