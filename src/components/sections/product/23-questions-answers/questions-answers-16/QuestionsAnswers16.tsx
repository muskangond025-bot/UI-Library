import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers16({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-6">
          <span className="text-xs font-mono text-amber-400 uppercase">{data?.eyebrow || 'NUMBERED EDITION'}</span>
          <h2 className="text-4xl font-extrabold mt-1">{data?.heading || 'Numbered Q&A Directory'}</h2>
        </div>

        <div className="space-y-10">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 border-b border-neutral-900 pb-8"
            >
              <span className="text-3xl font-black text-amber-400 font-mono">0{idx + 1}</span>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
