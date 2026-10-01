import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function ProductFaq19({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'EXPLORER SPOTLIGHT'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Durability Testing FAQ'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Laboratory abrasion tests, tensile strength, and color fastness ratings.'}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
            return (
              <motion.div
                key={item.id || idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{ opacity: isDimmed ? 0.35 : 1, scale: hoveredIdx === idx ? 1.02 : 1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
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
