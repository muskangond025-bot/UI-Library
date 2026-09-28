import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq16Props {
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

export default function Faq16({ data }: Faq16Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <div className="mb-20 text-center">
          <div className="inline-block bg-white text-black font-bold uppercase text-[10px] tracking-widest px-4 py-2 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            SYS_QUERY // FAQ_MODULE
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-500 font-medium mb-8">{data.content.description}</p>
        </div>

        <div className="flex flex-col gap-6">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-white/10 hover:border-white/50 transition-colors bg-zinc-950 p-1"
              >
                <div className="border border-white/10 bg-black relative">
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <div className="flex items-center gap-6">
                       <span className="text-zinc-600 text-xs mt-1 shrink-0">[{String(idx + 1).padStart(2, '0')}]</span>
                       <span className={`text-sm md:text-base font-bold uppercase transition-colors ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                         {faq.question}_
                       </span>
                    </div>
                    <span className={`text-white font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-zinc-900"
                      >
                        <div className="p-6 border-t border-white/10">
                           <div className="flex gap-4">
                              <span className="text-zinc-500 text-xs mt-1 shrink-0">{'>>'}</span>
                              <p className="text-zinc-300 text-sm leading-relaxed lowercase font-light">
                                {faq.answer}
                              </p>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
