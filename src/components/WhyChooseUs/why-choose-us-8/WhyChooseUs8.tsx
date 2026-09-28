import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs8Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs8({ data }: WhyChooseUs8Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-sans overflow-hidden bg-[#111827]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
        
        <div className="w-full lg:w-1/3 flex flex-col justify-center sticky top-24 h-max">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-16 h-2 bg-blue-500 mb-8"
          />
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="text-7xl md:text-9xl font-black text-gray-800/30 absolute -top-10 -left-6 -z-10 group-hover:text-blue-500/20 transition-colors duration-500 select-none">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
