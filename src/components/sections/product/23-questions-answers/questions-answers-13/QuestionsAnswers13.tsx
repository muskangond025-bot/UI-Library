import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers13({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'LAYERED FOLDERS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Interactive Folder Q&A'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ x: 6 }}
              className="bg-neutral-900 border-l-4 border-l-amber-400 border border-neutral-800 p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
