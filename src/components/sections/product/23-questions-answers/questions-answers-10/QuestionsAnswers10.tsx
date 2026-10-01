import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function QuestionsAnswers10({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeIdx, setActiveIdx] = useState(0);

  const active = questions[activeIdx] || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'INDEXED KNOWLEDGE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Question & Answer Index'}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-2">
            {questions.map((item: any, idx: number) => (
              <button
                key={item.id || idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-4 rounded-xl text-xs font-semibold transition-all ${
                  idx === activeIdx ? 'bg-rose-500 text-white shadow-lg' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 rounded-3xl min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">{active.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-4">{active.question}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950 p-5 rounded-2xl border border-neutral-800 mb-6">
                  {active.answer}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  <span>Verified response for {active.productName}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
