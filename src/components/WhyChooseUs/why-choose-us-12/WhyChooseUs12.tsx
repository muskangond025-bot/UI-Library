import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs12Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs12({ data }: WhyChooseUs12Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-[#fef3c7]" style={{ color: data.style.textColor }}>
      <div className="max-w-4xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 text-[#92400e]"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#b45309] font-medium max-w-2xl mx-auto"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="relative border-l-4 border-[#f59e0b] ml-6 md:ml-0 md:border-none">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-[#f59e0b] -translate-x-1/2" />

          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute top-0 left-[-22px] md:static md:left-auto w-10 h-10 rounded-full border-4 border-[#fef3c7] bg-[#f59e0b] shadow-[0_0_0_4px_rgba(245,158,11,0.2)] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />
              
              <div className={`w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border border-[#fef3c7] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-[#f59e0b] font-black text-4xl opacity-20 block mb-2">0{idx + 1}</span>
                <h3 className="text-2xl font-bold mb-4 text-[#92400e]">{feature.title}</h3>
                <p className="text-[#b45309] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
