import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs4Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs4({ data }: WhyChooseUs4Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-mono overflow-hidden relative" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      {/* Tech grid bg */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #00FF41 1px, transparent 1px), linear-gradient(to bottom, #00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="border-l-4 border-[#00FF41] pl-8 mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold uppercase mb-6 text-[#00FF41]"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            &gt; {data.content.description}_
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: '#00FF41' }}
              className="bg-[#111] border border-[#333] p-8 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="text-[#00FF41] font-bold text-2xl mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
