import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ThumbsUp, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function QuestionsAnswers2({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const active = questions[selectedIdx] || {};

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'DUAL VIEWPORT'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Question & Answer Canvas'}</h2>
          <p className="text-neutral-400 text-sm mt-2">{data?.subtitle || 'Select a question to inspect verified responses from our product specialists.'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question List Left */}
          <div className="lg:col-span-5 space-y-3">
            {questions.map((item: any, idx: number) => {
              const isSelected = idx === selectedIdx;
              return (
                <motion.div
                  key={item.id || idx}
                  onClick={() => setSelectedIdx(idx)}
                  whileHover={{ x: 4 }}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-neutral-800 border-emerald-500 shadow-xl ring-1 ring-emerald-500/50'
                      : 'bg-neutral-950/60 border-neutral-800 opacity-70 hover:opacity-100 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-sm font-semibold text-white mt-1 line-clamp-2">{item.question}</h4>
                  </div>
                  <ArrowRight className={`w-4 h-4 flex-none transition-transform ${isSelected ? 'text-emerald-400 translate-x-1' : 'text-neutral-600'}`} />
                </motion.div>
              );
            })}
          </div>

          {/* Answer Canvas Right */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-3xl p-8 border border-neutral-800 min-h-[380px] flex flex-col justify-between relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Brand Answer
                  </span>
                  <span className="text-xs text-neutral-400">{active.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">{active.question}</h3>
                
                <p className="text-base text-neutral-300 leading-relaxed bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800/80">
                  {active.answer}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <img src={active.avatar} alt={active.customerName} className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-400" />
                    <div>
                      <h5 className="text-xs font-bold text-white flex items-center gap-1">
                        {active.customerName}
                        {active.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </h5>
                      <p className="text-[10px] text-neutral-400">Asked about {active.productName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
                    <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{active.helpfulCount || 24} people found this helpful</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
