import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function ProductFaq16({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'MACRO DETAILS'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Visual Hardware & Care FAQ'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Inspect physical garment details alongside technical specifications.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-amber-300 bg-amber-950 border border-amber-800 uppercase">
                    {item.category}
                  </span>
                  <Eye className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
