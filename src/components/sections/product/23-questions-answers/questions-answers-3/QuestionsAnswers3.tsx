import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

export default function QuestionsAnswers3({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">{data?.eyebrow || 'CONVERSATIONAL FLOW'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Customer Q&A Thread'}</h2>
          <p className="text-neutral-400 text-sm mt-2">{data?.subtitle || 'Real conversations between buyers and product specialists.'}</p>
        </div>

        {/* Chat Thread */}
        <div className="space-y-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-3"
            >
              {/* Customer Bubble Left */}
              <div className="flex items-start gap-3 max-w-xl">
                <img src={item.avatar} alt={item.customerName} className="w-8 h-8 rounded-full object-cover flex-none mt-1" />
                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl rounded-tl-none">
                  <div className="flex items-center gap-2 mb-1 text-[11px] text-neutral-400">
                    <span className="font-bold text-white">{item.customerName}</span>
                    <span>• {item.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200">{item.question}</p>
                </div>
              </div>

              {/* Verified Brand Answer Bubble Right */}
              <div className="flex items-start justify-end gap-3 max-w-xl ml-auto">
                <div className="bg-cyan-950/60 border border-cyan-800/80 p-4 rounded-2xl rounded-tr-none text-right">
                  <div className="flex items-center justify-end gap-1.5 mb-1 text-[11px] text-cyan-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="font-bold">Official Specialist Answer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-100">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
