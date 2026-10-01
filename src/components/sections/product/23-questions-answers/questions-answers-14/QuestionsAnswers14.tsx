import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers14({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{data?.eyebrow || 'HORIZONTAL RAIL'}</span>
        <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Swipeable Q&A Rail'}</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 pb-6 snap-x snap-mandatory">
        {questions.map((item: any, idx: number) => (
          <motion.div
            key={item.id || idx}
            whileHover={{ scale: 1.02 }}
            className="flex-none w-80 snap-start bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-pink-400 uppercase">{item.category}</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-3">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed line-clamp-4">{item.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
