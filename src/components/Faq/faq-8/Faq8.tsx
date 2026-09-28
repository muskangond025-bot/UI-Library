import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq8Props {
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

export default function Faq8({ data }: Faq8Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#1e1b4b] to-[#1e1b4b] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            FAQ Module
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-400 mb-6 tracking-tight drop-shadow-lg"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-indigo-200/80 text-xl font-light max-w-2xl mb-8">{data.content.description}</p>
        </div>

        {/* Glowing Accordion */}
        <div className="flex flex-col gap-6">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-indigo-950/40 backdrop-blur-md rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-indigo-400/50 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'border-indigo-500/20 hover:border-indigo-500/40'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-8 flex justify-between items-center text-left group"
                >
                  <div className="flex items-center gap-6">
                     <span className={`font-mono text-sm transition-colors ${isOpen ? 'text-indigo-300' : 'text-indigo-500/50 group-hover:text-indigo-400'}`}>0{idx + 1}</span>
                     <h3 className={`text-2xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-indigo-200 group-hover:text-indigo-100'}`}>
                       {faq.question}
                     </h3>
                  </div>
                  <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ${isOpen ? 'border-indigo-400 text-indigo-300 bg-indigo-900/50 rotate-45 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'border-indigo-500/30 text-indigo-500/50 group-hover:border-indigo-400'}`}>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
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
                      <div className="px-8 pb-8 pt-2 pl-20">
                         <div className="bg-indigo-900/20 p-6 rounded-2xl border-l-2 border-indigo-500">
                           <p className="text-indigo-200 font-light text-lg leading-relaxed">
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
