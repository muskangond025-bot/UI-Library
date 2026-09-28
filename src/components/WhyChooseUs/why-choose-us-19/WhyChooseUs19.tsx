import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs19Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs19({ data }: WhyChooseUs19Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-mono bg-[#0a0a0a] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="border-l-2 border-red-600 pl-8 relative">
            <div className="absolute top-0 -left-2 w-4 h-4 bg-red-600" />
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6"
            >
              {data.content.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-500 max-w-md"
            >
              {data.content.description}
            </motion.p>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black border border-zinc-800 p-8 flex items-center gap-6 group hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 font-bold text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
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
