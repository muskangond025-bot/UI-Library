import React from 'react';
import { motion } from 'framer-motion';
import { Tag, CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers7({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'CATEGORY EXPLORER'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Structured Q&A Matrix'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 mb-3">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white mb-3">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-neutral-800">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Verified Buyer
                </span>
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
