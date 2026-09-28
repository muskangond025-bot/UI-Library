import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Faq9Props {
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

export default function Faq9({ data }: Faq9Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-gray-500 mb-8">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Tab Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {data.content.faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 relative border-2 ${activeIndex === idx ? 'border-black bg-black text-white shadow-xl' : 'border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-xs uppercase tracking-widest ${activeIndex === idx ? 'text-gray-400' : 'text-gray-400'}`}>0{idx + 1}</span>
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-200 relative"
                >
                   <div className="absolute top-12 left-0 w-2 h-16 bg-blue-600 rounded-r-full" />
                   <h3 className="text-4xl font-bold text-black mb-8 leading-tight max-w-xl">{data.content.faqs[activeIndex].question}</h3>
                   <p className="text-xl text-gray-600 leading-relaxed font-medium">
                     {data.content.faqs[activeIndex].answer}
                   </p>

                   <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between gap-6 flex-wrap">
                      <span className="text-gray-500 font-bold text-sm">Did this help?</span>
                      <div className="flex gap-4">
                         <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-bold hover:border-black hover:bg-black hover:text-white transition-colors">Yes</button>
                         <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-bold hover:border-black hover:bg-black hover:text-white transition-colors">No</button>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
