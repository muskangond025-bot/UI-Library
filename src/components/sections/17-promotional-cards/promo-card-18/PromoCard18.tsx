import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard18Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard18({ data }: PromoCard18Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#F9FAFB]" style={{ color: data.style.textColor }}>
      <div className="relative w-full max-w-2xl mt-12 md:mt-24">
        
        {/* Layer 3 */}
        <motion.div 
          initial={{ y: 0, scale: 0.9, opacity: 0 }}
          whileInView={{ y: -40, scale: 0.9, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-0 left-0 right-0 h-full bg-gray-300 rounded-3xl"
        />
        
        {/* Layer 2 */}
        <motion.div 
          initial={{ y: 0, scale: 0.95, opacity: 0 }}
          whileInView={{ y: -20, scale: 0.95, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-0 left-0 right-0 h-full bg-gray-200 rounded-3xl"
        />

        {/* Top Layer */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 bg-white border border-gray-100 rounded-3xl p-10 md:p-16 shadow-2xl text-center flex flex-col items-center"
        >
          <span className="px-4 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full mb-8">
            {data.content.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black">
            {data.content.title}
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 hover:shadow-lg transition-all w-full md:w-auto">
            {data.content.cta.text}
          </a>
        </motion.div>
        
      </div>
    </div>
  );
}
