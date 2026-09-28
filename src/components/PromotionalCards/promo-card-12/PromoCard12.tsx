import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard12Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard12({ data }: PromoCard12Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#3B82F6]" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl group"
      >
        <div className="bg-white text-blue-600 rounded-3xl p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] hover:-translate-y-2 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                {data.content.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-black">
                {data.content.title}
              </h2>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-45">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-700 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-8 mt-8 border-t border-blue-100">
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  {data.content.description}
                </p>
                <a href={data.content.cta.url} className="inline-block px-10 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                  {data.content.cta.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
