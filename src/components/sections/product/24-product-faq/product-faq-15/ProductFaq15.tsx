import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq15({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{data?.eyebrow || 'COMPACT DENSITY'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Quick Specification Rail'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Fast reference for weights, origins, and certifications.'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ x: 4 }}
              className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-sm font-bold text-white mt-1 mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
