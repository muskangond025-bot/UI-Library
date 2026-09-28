import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq4Props {
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

export default function Faq4({ data }: Faq4Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black" style={{ color: data.style.textColor }}>
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Terminal Header */}
        <div className="mb-16 border border-[#00ff41]/30 p-8 bg-zinc-950 relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00ff41]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00ff41]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00ff41]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00ff41]" />
          
          <div className="text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-4">
            &gt; INIT_FAQ.EXE
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-400 text-sm mb-6">{'//'} {data.content.description}</p>
          <button className="bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41] py-2 px-6 uppercase text-xs font-bold hover:bg-[#00ff41] hover:text-black transition-colors">
            {'>'} {data.content.supportText}
          </button>
        </div>

        {/* Terminal Accordion */}
        <div className="flex flex-col gap-4">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`border transition-colors ${isOpen ? 'border-[#00ff41]' : 'border-zinc-800 hover:border-zinc-600'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 flex justify-between items-center text-left bg-zinc-950"
                >
                  <div className="flex items-start gap-4">
                     <span className="text-zinc-600 text-xs mt-1">[{idx + 1}]</span>
                     <span className={`text-sm md:text-base font-bold uppercase transition-colors ${isOpen ? 'text-[#00ff41]' : 'text-white'}`}>
                       {faq.question}_
                     </span>
                  </div>
                  <span className={`text-[#00ff41] font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
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
                      className="overflow-hidden bg-black"
                    >
                      <div className="p-6 border-t border-[#00ff41]/30">
                         <div className="flex gap-4">
                            <span className="text-zinc-600 text-xs mt-1 shrink-0">{'>>'}</span>
                            <p className="text-zinc-400 text-sm leading-relaxed lowercase font-light">
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
