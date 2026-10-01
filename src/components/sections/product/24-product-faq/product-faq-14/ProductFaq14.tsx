import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';

export default function ProductFaq14({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{data?.eyebrow || 'SWIPE TRACK'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Horizontal Product Rail'}</h2>
        </div>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md">{data?.subtitle || 'Swipe through key product parameters horizontally.'}</p>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory">
        {questions.map((item: any, idx: number) => (
          <motion.div
            key={item.id || idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex-none w-80 sm:w-96 snap-start bg-neutral-950 border border-neutral-800 p-7 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold text-pink-400 bg-pink-950/60 border border-pink-800 uppercase">
                  {item.category}
                </span>
                <Package className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-pink-400 font-semibold">
              <span>View Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
