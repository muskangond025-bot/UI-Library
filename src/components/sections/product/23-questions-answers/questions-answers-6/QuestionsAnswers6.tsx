import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers6({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-24 px-4 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center border-b border-stone-300 pb-8 mb-16">
          <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">COLUMN VI • INQUIRIES</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mt-2">{data?.heading || 'The Inquiry Column'}</h2>
          <p className="text-stone-600 font-serif italic text-sm mt-2">{data?.subtitle || 'Selected customer questions answered by our master tailoring team.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-stone-300 pb-8"
            >
              <span className="font-serif text-xs text-amber-800 font-bold uppercase tracking-wider block mb-2">Q: {item.category}</span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">"{item.question}"</h3>
              <p className="font-serif text-sm text-stone-700 leading-relaxed italic mb-4">
                {item.answer}
              </p>
              <p className="font-serif text-xs text-stone-500">— Answered for {item.customerName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
