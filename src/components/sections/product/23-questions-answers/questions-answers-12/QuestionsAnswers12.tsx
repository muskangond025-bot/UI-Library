import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers12({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'BENTO GRID'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Asymmetric Q&A Bento'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {questions.map((item: any, idx: number) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <motion.div
                key={item.id || idx}
                whileHover={{ y: -4 }}
                className={`bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
