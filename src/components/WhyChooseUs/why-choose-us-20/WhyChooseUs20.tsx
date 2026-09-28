import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs20Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs20({ data }: WhyChooseUs20Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Massive Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-indigo-500 rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-br from-white to-white/40 text-transparent bg-clip-text"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-3xl mx-auto font-light"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
                Feature 0{idx + 1}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
