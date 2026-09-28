import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq5Props {
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

export default function Faq5({ data }: Faq5Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Brutalist Header */}
        <div className="md:col-span-5 flex flex-col">
          <div className="border-4 border-black bg-yellow-400 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-black uppercase text-black tracking-tighter leading-none mb-6"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-black font-bold text-lg mb-8">{data.content.description}</p>
            <button className="bg-black text-white font-black uppercase text-sm px-6 py-4 hover:bg-white hover:text-black hover:border-black border-4 border-transparent transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              {data.content.supportText}
            </button>
          </div>
        </div>

        {/* Brutalist Accordion */}
        <div className="md:col-span-7 flex flex-col gap-6">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-6 group hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-2xl font-black uppercase text-black leading-tight">
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-12 h-12 border-4 border-black flex items-center justify-center font-black text-2xl transition-transform duration-300 ${isOpen ? 'bg-pink-400 rotate-45' : 'bg-white group-hover:bg-blue-400'}`}>
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
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t-4 border-black bg-gray-50">
                         <p className="text-gray-900 font-bold text-lg leading-relaxed mt-6">
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
