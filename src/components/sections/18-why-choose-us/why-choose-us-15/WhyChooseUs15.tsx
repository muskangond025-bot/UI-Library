import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs15Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs15({ data }: WhyChooseUs15Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-mono bg-white overflow-hidden border-b-8 border-black" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="border-4 border-black p-8 md:p-16 bg-[#39ff14] mb-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-black leading-none"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl md:text-2xl text-black font-bold max-w-3xl"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border-4 border-black p-8 bg-white relative group hover:bg-black hover:text-white transition-colors duration-300"
            >
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#39ff14] border-4 border-black flex items-center justify-center font-black text-black text-xl group-hover:scale-125 transition-transform z-10">
                {idx + 1}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 border-b-4 border-black pb-4 group-hover:border-[#39ff14] group-hover:text-[#39ff14] transition-colors">{feature.title}</h3>
              <p className="text-lg font-bold leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
