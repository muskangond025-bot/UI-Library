import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq12Props {
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

export default function Faq12({ data }: Faq12Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#020617]" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {data.content.heading}
        </motion.h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">{data.content.description}</p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Decorative Parallax Image / Graphic */}
        <div className="lg:col-span-5 h-[400px] lg:h-auto rounded-3xl overflow-hidden relative border border-slate-800 bg-slate-900 group">
           <img 
             src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
             alt="FAQ Graphic"
             className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
           <div className="absolute bottom-8 left-8">
              <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                {data.content.supportText}
              </button>
           </div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left group"
                >
                  <h3 className={`text-xl font-bold transition-colors pr-6 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 transition-transform duration-300 ${isOpen ? 'text-blue-400 rotate-180' : 'text-slate-500 group-hover:text-slate-300'}`}>
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
                      <div className="px-6 md:px-8 pb-8 pt-0">
                         <p className="text-slate-400 text-lg leading-relaxed">
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
