import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers9({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-white text-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">{data?.eyebrow || 'MINIMALIST DESIGN'}</span>
          <h2 className="text-3xl font-light text-neutral-900 mt-1">{data?.heading || 'Essential Product Q&A'}</h2>
        </div>

        <div className="space-y-12">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-neutral-200 pb-8"
            >
              <h3 className="text-lg font-medium text-neutral-900 mb-3">{item.question}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light max-w-3xl">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
