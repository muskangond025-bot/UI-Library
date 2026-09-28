import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs18Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs18({ data }: WhyChooseUs18Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-[#1e293b] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Animated abstract lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M0 200 C 400 400, 800 0, 1200 200 C 1600 400, 2000 0, 2400 200"
          stroke="white" 
          strokeWidth="1" 
          fill="none" 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M0 400 C 400 200, 800 600, 1200 400 C 1600 200, 2000 600, 2400 400"
          stroke="white" 
          strokeWidth="1" 
          fill="none" 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-light max-w-2xl mx-auto"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white mb-6">
                <span className="text-sm font-mono opacity-50">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
