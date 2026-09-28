import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs1Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs1({ data }: WhyChooseUs1Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-sans overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {data.content.heading}
          </h2>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed">
            {data.content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-12 rounded-3xl border border-black/10 bg-black/5 hover:bg-black/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-8">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="opacity-70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
