import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs13Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs13({ data }: WhyChooseUs13Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-[#0f172a] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24 relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white relative z-10"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-10 rounded-[2rem] hover:bg-slate-800 transition-colors shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
