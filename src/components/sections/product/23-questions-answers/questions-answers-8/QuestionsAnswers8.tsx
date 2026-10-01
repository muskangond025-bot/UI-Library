import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function QuestionsAnswers8({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">{data?.eyebrow || 'STACKED CARDS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Question Card Deck'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-2xl relative"
            >
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">{item.category}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
