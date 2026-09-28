import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq18Props {
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

export default function Faq18({ data }: Faq18Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-400 text-lg mb-8">{data.content.description}</p>
          <button className="bg-slate-800/80 text-blue-400 border border-blue-500/30 font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full backdrop-blur-md hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            {data.content.supportText}
          </button>
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
                className="bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 p-1 md:p-2 rounded-[2.5rem] shadow-2xl group hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Neon Hover Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[3rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

                <div className="bg-slate-900 rounded-[2rem] border border-slate-800 relative z-10 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 md:p-8 flex justify-between items-center text-left"
                  >
                    <div className="flex items-center gap-6">
                       <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold shrink-0">
                         {idx + 1}
                       </span>
                       <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                         {faq.question}
                       </h3>
                    </div>
                    <div className={`shrink-0 flex items-center justify-center font-mono text-xl transition-transform duration-300 ${isOpen ? 'text-blue-400 rotate-45' : 'text-slate-500 group-hover:text-blue-400'}`}>
                      +
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-slate-800/30"
                      >
                        <div className="p-6 md:p-8 border-t border-slate-800">
                           <p className="text-slate-300 text-lg leading-relaxed font-light">
                             {faq.answer}
                           </p>
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
