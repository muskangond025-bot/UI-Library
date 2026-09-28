import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq17Props {
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

export default function Faq17({ data }: Faq17Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Minimal Header */}
        <div className="mb-32 flex flex-col items-start border-b-2 border-black pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-8"
          >
            {data.content.heading}
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between w-full gap-8">
             <p className="text-gray-600 text-xl max-w-lg">{data.content.description}</p>
             <button className="font-bold uppercase tracking-widest text-sm text-black border-b-2 border-black hover:text-gray-500 hover:border-gray-500 transition-colors pb-1 self-start md:self-end">
               {data.content.supportText}
             </button>
          </div>
        </div>

        {/* Minimal Accordion */}
        <div className="flex flex-col border-t-2 border-black">
          {data.content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-b-2 border-black group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-8 md:py-12 flex justify-between items-center text-left"
                >
                  <h3 className={`text-3xl md:text-5xl font-black tracking-tight pr-8 transition-colors ${isOpen ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 flex items-center justify-center font-black text-4xl transition-transform duration-500 ${isOpen ? 'rotate-45 text-black' : 'text-gray-400 group-hover:text-black'}`}>
                    +
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-2 md:pl-24 max-w-4xl">
                         <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
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
