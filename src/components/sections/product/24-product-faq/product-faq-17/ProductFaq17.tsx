import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq17({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'SUSTAINABILITY MATRIX'}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Traceability & Eco FAQ'}</h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md">{data?.subtitle || 'Transparent supply chain information and carbon footprint specs.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
