import React from 'react';
import { motion } from 'framer-motion';

interface Faq2Props {
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

export default function Faq2({ data }: Faq2Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-20 border-b border-slate-800 pb-12">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-xl text-slate-400">{data.content.description}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shrink-0">
            {data.content.supportText}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.content.faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-[2rem] hover:border-slate-600 transition-colors flex flex-col group"
            >
              <div className="flex items-start gap-6 mb-6">
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold shrink-0 group-hover:bg-blue-900 transition-colors">
                   ?
                 </div>
                 <h3 className="text-2xl font-bold text-white leading-tight">
                   {faq.question}
                 </h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg pl-16">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
