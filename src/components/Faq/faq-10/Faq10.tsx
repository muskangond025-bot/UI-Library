import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq10Props {
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

export default function Faq10({ data }: Faq10Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-[#09090b] relative flex flex-col justify-center" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Cinematic Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between md:items-end border-b border-zinc-800 pb-8 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-xl text-zinc-500 font-medium">{data.content.description}</p>
          </div>
          <button className="text-white hover:text-blue-400 font-bold uppercase tracking-widest text-xs transition-colors shrink-0">
            {data.content.supportText} →
          </button>
        </div>

        {/* Minimal Accordion */}
        <div className="flex flex-col">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-zinc-800 group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-8 md:py-12 flex justify-between items-center text-left"
                >
                  <h3 className={`text-3xl md:text-5xl font-bold transition-colors max-w-4xl pr-8 ${isOpen ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-300'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 text-white' : 'text-zinc-600 group-hover:text-white'}`}>
                    <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 md:pb-16 pt-4 max-w-3xl">
                         <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
                           {faq.answer}
                         </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
