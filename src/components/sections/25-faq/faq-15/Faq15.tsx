import React from 'react';
import { motion } from 'framer-motion';

interface Faq15Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      supportText: string;
      faqs: { question: string; answer: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Faq15({ data }: Faq15Props) {
  return (
    <div className="w-full py-24 pl-6 md:pl-12 font-sans bg-[#fafaf9]" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full pr-6 md:pr-12 mb-16 flex flex-col md:flex-row justify-between items-baseline gap-8 border-b border-stone-200 pb-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-stone-900 tracking-tight mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-stone-500 font-medium">{data.content.description}</p>
        </div>
        <button className="bg-stone-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-stone-700 transition-colors shrink-0">
          {data.content.supportText}
        </button>
      </div>

      <div 
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pr-6 md:pr-12 custom-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {data.content.faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="min-w-[85vw] md:min-w-[600px] snap-center bg-white p-10 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm flex flex-col"
          >
             <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-2xl mb-8">
               Q.
             </div>
             <h3 className="text-3xl md:text-4xl font-black text-stone-900 mb-8 leading-tight">
               {faq.question}
             </h3>
             <p className="text-xl text-stone-600 font-medium leading-relaxed bg-stone-50 p-8 rounded-3xl border border-stone-100 mt-auto">
               {faq.answer}
             </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
