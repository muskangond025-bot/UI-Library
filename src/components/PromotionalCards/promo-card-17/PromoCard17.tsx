import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard17Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard17({ data }: PromoCard17Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#111827] overflow-hidden relative" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12 md:p-24 flex flex-col md:flex-row items-center gap-12 shadow-2xl"
      >
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            {data.content.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            {data.content.title}
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-md">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="px-8 py-3 bg-blue-500 text-white font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-colors">
            {data.content.cta.text}
          </a>
        </div>
        
        {/* Rotating Badge */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
