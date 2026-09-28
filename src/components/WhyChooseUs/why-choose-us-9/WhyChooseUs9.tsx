import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs9Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs9({ data }: WhyChooseUs9Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-sans overflow-hidden bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-20"
        >
          {data.content.description}
        </motion.p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-4 relative">
          
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] bg-gray-50 border border-gray-100 p-8 rounded-[2rem] flex flex-col items-center hover:bg-black hover:text-white transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-black">
                <span className="font-black text-xl">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}
