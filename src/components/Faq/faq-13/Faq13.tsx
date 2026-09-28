import React from 'react';
import { motion } from 'framer-motion';

interface Faq13Props {
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

export default function Faq13({ data }: Faq13Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white font-serif" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full border-2 border-black p-4 md:p-8">
        
        {/* Newspaper Header */}
        <div className="border-b-4 border-black pb-8 mb-12 text-center">
          <div className="w-full flex justify-between items-center border-b border-black pb-4 mb-8 text-xs font-sans uppercase font-bold tracking-widest">
            <span>Help Section</span>
            <span>{new Date().getFullYear()}</span>
            <span>Customer Guide</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-6 font-serif"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-2xl text-gray-700 italic max-w-3xl mx-auto mb-8">
            {data.content.description}
          </p>
          <button className="bg-black text-white font-sans font-black uppercase text-xs tracking-widest px-8 py-3 hover:bg-gray-800 transition-colors">
            {data.content.supportText}
          </button>
        </div>

        {/* Broadsheet Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12">
          {data.content.faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid mb-12"
            >
              <h3 className="text-2xl font-black text-black uppercase mb-4 leading-snug border-b-2 border-black pb-4">
                {faq.question}
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed font-serif first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
