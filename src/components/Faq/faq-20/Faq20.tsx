import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq20Props {
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

export default function Faq20({ data }: Faq20Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#09090b]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-24 flex flex-col items-center text-center max-w-3xl mx-auto border-b border-zinc-800 pb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-zinc-500 font-medium mb-8">{data.content.description}</p>
          <button className="text-zinc-400 font-bold uppercase tracking-widest text-xs shrink-0 bg-zinc-900 border border-zinc-700 hover:border-white hover:text-white transition-colors px-6 py-3 rounded-full">
            {data.content.supportText}
          </button>
        </div>

        <div className="flex flex-col">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`border-b border-zinc-800 group ${isOpen ? 'bg-zinc-900/50 -mx-6 px-6 md:-mx-12 md:px-12 py-8 rounded-[2rem]' : 'py-8'}`}
              >
                
                <div 
                  className="flex flex-col md:flex-row justify-between md:items-center gap-6 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                   <div className="flex items-center gap-6 md:gap-12">
                      <div className="text-5xl md:text-7xl font-black text-zinc-800 shrink-0 group-hover:text-zinc-600 transition-colors">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className={`text-2xl md:text-4xl font-bold transition-colors max-w-2xl ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                        {faq.question}
                      </h3>
                   </div>
                   <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ml-auto md:ml-0 ${isOpen ? 'border-white text-white bg-white/10 rotate-180' : 'border-zinc-700 text-zinc-500 group-hover:border-zinc-500'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                   </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                       <div className="pt-8 pb-4 pl-0 md:pl-[120px]">
                          <p className="text-zinc-400 text-xl leading-relaxed bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
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
