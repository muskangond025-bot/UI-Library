import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq4({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{data?.eyebrow || 'TWO-COLUMN MATRIX'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Product Information Matrix'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase">{item.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
