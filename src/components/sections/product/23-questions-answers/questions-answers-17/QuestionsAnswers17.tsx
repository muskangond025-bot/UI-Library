import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuestionsAnswers17({ data }: { data: any }) {
  const questions = data?.questions || [];
  const categories = Array.from(new Set(questions.map((q: any) => q.category)));
  const [selectedCat, setSelectedCat] = useState(categories[0] || 'All');

  const filtered = questions.filter((q: any) => q.category === selectedCat);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'DYNAMIC FILTERING'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Category Q&A Explorer'}</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat: any) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCat === cat ? 'bg-purple-500 text-white shadow-lg' : 'bg-neutral-950 text-neutral-400 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-4">
          <AnimatePresence>
            {filtered.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
