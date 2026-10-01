import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers18({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-neutral-950 via-slate-950 to-indigo-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">{data?.eyebrow || 'GLASSMORPHISM'}</span>
          <h2 className="text-4xl font-bold mt-1">{data?.heading || 'Floating Q&A Experience'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
            >
              <h3 className="text-base font-bold text-white mb-3">{item.question}</h3>
              <p className="text-xs text-neutral-200 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
