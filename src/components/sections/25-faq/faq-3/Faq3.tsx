import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq3Props {
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

export default function Faq3({ data }: Faq3Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Sticky Sidebar */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-24 flex flex-col">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Support Center</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              {data.content.description}
            </p>
            <button className="bg-slate-900 text-white font-bold w-full py-4 rounded-xl hover:bg-blue-600 transition-colors text-center shadow-lg hover:shadow-blue-600/30">
              {data.content.supportText}
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="lg:col-span-8 flex flex-col">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl mb-6 shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-8 flex justify-between items-center gap-8 group"
                >
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 transition-transform duration-500 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-400 group-hover:bg-slate-100'}`}>
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
                         <div className="w-12 h-1 bg-blue-600 mb-6" />
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
