import React from 'react';
import { motion } from 'framer-motion';

interface Faq19Props {
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

export default function Faq19({ data }: Faq19Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-xl text-gray-600">{data.content.description}</p>
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shrink-0">
            {data.content.supportText}
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {data.content.faqs.map((faq, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-400 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                ?
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {faq.question}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {faq.answer}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
