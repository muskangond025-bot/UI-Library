import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq2({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-24 px-4 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center border-b border-stone-300 pb-8 mb-16">
          <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">VOLUME IV • FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mt-2">{data?.heading || 'Garment FAQ & Care Guide'}</h2>
          <p className="text-stone-600 font-serif italic text-sm mt-2">{data?.subtitle || 'Comprehensive answers on tailored fit, textile origin, and seasonal storage.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-stone-300 pb-6"
            >
              <span className="font-serif text-[10px] text-amber-800 font-bold uppercase tracking-wider block mb-2">{item.category}</span>
              <h3 className="font-serif text-base font-bold text-stone-900 mb-3">{item.question}</h3>
              <p className="font-serif text-xs text-stone-700 leading-relaxed italic">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
