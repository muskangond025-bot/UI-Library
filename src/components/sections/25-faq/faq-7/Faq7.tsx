import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq7Props {
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

export default function Faq7({ data }: Faq7Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#fafaf9] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Floating Glass Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-300 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Sticky Header */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky top-32 flex flex-col items-start bg-white/40 backdrop-blur-2xl p-10 rounded-[3rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <span className="bg-white border border-stone-200 text-stone-900 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-8 shadow-sm">
              Help Center
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-black text-stone-900 mb-6 tracking-tight leading-tight"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-10">
              {data.content.description}
            </p>
            <button className="bg-stone-900 text-white font-bold px-8 py-4 rounded-2xl hover:bg-stone-800 transition-colors shadow-xl w-full text-center hover:-translate-y-1">
              {data.content.supportText}
            </button>
          </div>
        </div>

        {/* Glass Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 border border-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-8 flex justify-between items-center text-left group"
                >
                  <h3 className={`text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-blue-600' : 'text-stone-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white border-blue-600 rotate-180 shadow-lg shadow-blue-600/30' : 'bg-white text-stone-400 border-stone-200 group-hover:border-blue-300'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2">
                         <div className="bg-white/60 p-6 rounded-2xl border border-white shadow-inner">
                           <p className="text-stone-600 font-medium leading-relaxed">
                             {faq.answer}
                           </p>
                         </div>
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
