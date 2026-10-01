import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function QuestionsAnswers4({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">{data?.eyebrow || 'CHRONOLOGICAL INQUIRIES'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Community Question Stream'}</h2>
        </div>

        <div className="relative border-l-2 border-indigo-500/40 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-neutral-900" />
              
              <span className="hidden sm:block absolute -left-36 top-1 text-xs text-neutral-400 font-mono">{item.date}</span>

              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900 p-4 rounded-xl mb-4 border border-neutral-800">
                  {item.answer}
                </p>

                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <img src={item.avatar} alt={item.customerName} className="w-5 h-5 rounded-full object-cover" />
                    {item.customerName}
                  </span>
                  <span className="flex items-center gap-1 text-indigo-400">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {item.helpfulCount || 15} helpful
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
