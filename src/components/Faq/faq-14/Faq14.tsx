import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq14Props {
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

export default function Faq14({ data }: Faq14Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] self-start"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Support DB
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-400 mb-6 tracking-tight drop-shadow-lg"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-indigo-200/80 text-xl font-light mb-12">{data.content.description}</p>
          <button className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-500 transition-colors self-start shadow-[0_0_20px_rgba(79,70,229,0.5)]">
            {data.content.supportText}
          </button>
        </div>

        {/* Right Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-indigo-950/40 backdrop-blur-md rounded-[2rem] border transition-all duration-500 group ${isOpen ? 'border-indigo-400/50 shadow-[0_0_30px_rgba(79,70,229,0.2)]' : 'border-indigo-500/20 hover:border-indigo-500/40'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left"
                >
                  <h3 className={`text-xl font-bold pr-6 transition-colors ${isOpen ? 'text-indigo-200' : 'text-white group-hover:text-indigo-100'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center font-mono text-xl transition-transform duration-300 ${isOpen ? 'text-emerald-400 rotate-45' : 'text-indigo-500 group-hover:text-indigo-400'}`}>
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
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                         <div className="bg-indigo-900/20 p-6 rounded-2xl border-l-2 border-emerald-500/50">
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
