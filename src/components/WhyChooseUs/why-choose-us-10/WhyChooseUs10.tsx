import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs10Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs10({ data }: WhyChooseUs10Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-serif overflow-hidden bg-[#020617]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-7xl font-light italic mb-8 text-[#f8fafc]"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-xl text-slate-400 font-sans font-light leading-relaxed mb-12"
          >
            {data.content.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1 }}
            className="h-px bg-slate-800"
          />
        </div>

        <div className="space-y-12 font-sans">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group"
            >
              <h3 className="text-2xl font-light text-slate-200 mb-2 flex items-center gap-4">
                <span className="text-slate-600 text-sm font-mono opacity-50">0{idx + 1}</span>
                {feature.title}
              </h3>
              <p className="text-slate-500 font-light pl-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
