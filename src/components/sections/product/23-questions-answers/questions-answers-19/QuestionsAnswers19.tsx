import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers19({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'FOCUS MODE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Question Spotlight Hub'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
            return (
              <motion.div
                key={item.id || idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{ opacity: isDimmed ? 0.3 : 1, scale: hoveredIdx === idx ? 1.02 : 1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl transition-all"
              >
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
