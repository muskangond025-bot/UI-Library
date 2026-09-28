import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq6Props {
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

export default function Faq6({ data }: Faq6Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#ecfccb] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Soft Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d9f99d] rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#bef264] rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Soft Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-black text-[#3f6212] mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-[#4d7c0f] font-medium text-xl max-w-2xl mx-auto mb-8">{data.content.description}</p>
          <button className="bg-[#84cc16] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#84cc16]/30 hover:bg-[#65a30d] hover:scale-105 transition-all">
            {data.content.supportText}
          </button>
        </div>

        {/* Bubbly Accordion */}
        <div className="flex flex-col gap-6">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_rgba(101,163,13,0.1)] border border-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left group"
                >
                  <h3 className={`text-2xl font-black pr-8 transition-colors ${isOpen ? 'text-[#65a30d]' : 'text-[#14532d] group-hover:text-[#4d7c0f]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#bef264] text-[#14532d] rotate-180' : 'bg-[#d9f99d]/50 text-[#3f6212] group-hover:bg-[#d9f99d]'}`}>
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                         <p className="text-[#3f6212] font-medium text-lg leading-relaxed bg-white/50 p-6 rounded-3xl border border-white">
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
