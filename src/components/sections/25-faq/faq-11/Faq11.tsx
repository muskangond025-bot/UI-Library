import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq11Props {
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

export default function Faq11({ data }: Faq11Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f8fafc]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-6 border border-blue-600/30 bg-blue-50 px-4 py-2 rounded-full self-start">
            Need Help?
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-slate-500 mb-12">{data.content.description}</p>
          <button className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors self-start shadow-xl shadow-slate-200">
            {data.content.supportText}
          </button>
        </div>

        {/* Right: Accordion */}
        <div className="flex flex-col gap-4">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue-200 shadow-lg shadow-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left"
                >
                  <h3 className={`text-xl font-bold transition-colors pr-6 ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? 'border-blue-600 text-blue-600 rotate-45 bg-blue-50' : 'border-slate-200 text-slate-400'}`}>
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
                         <p className="text-slate-600 text-lg leading-relaxed">
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
